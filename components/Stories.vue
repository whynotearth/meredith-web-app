<template>
  <div
    class="container">
    <div
      class="arrow"
      @click="navigateStory(-1)">
      <fa :icon="['fas', 'chevron-left']" />
    </div>
    <div
      :style="{
        backgroundImage: backgroundImage ? `url('/${backgroundImage}')` : null,
      }"
      class="background-image"/>
    <div>
      <transition-group
        class="story__wrapper"
        name="slide"
        mode="out-in">
        <header key="header">
          <div
            key="slider"
            class="slider">
            <div
              v-for="(story, i) in story.stories"
              :key="`slider_${i}`"
              :class="{
                'is-active': i === storyId,
                'is-seen': i < storyId,
              }"
              class="slider__item"
            />
          </div>
          <section class="content__wrapper">
            <nuxt-link :to="`/${home}?s=0`">
              <img
                :src="`/${logo}`"
                alt="Descriptive text"
                class="logo">
            </nuxt-link>
            <h1>{{ story.title }}</h1>
          </section>
        </header>
        <story
          v-for="(item, i) in story.stories"
          v-show="i === storyId"
          :key="`story_${i}`"
          :story="item"
          :logo="logo"
          :title="story.title"
        />
      </transition-group>
    </div>
    <div
      class="arrow"
      @click="navigateStory(1)">
      <fa :icon="['fas', 'chevron-right']" />
    </div>
  </div>
</template>
<script>
import Story from '@/components/Story';

export default {
  components: { Story },
  props: {
    'story': {
      type: Object,
      default: () => {},
    },
    'brand': {
      type: String,
      default: '',
    },
    'home': {
      type: String,
      default: '',
    },
    'logo': {
      type: String,
      default: '',
    },
  },
  data: () => ({
    storyId: 0,
  }),
  computed: {
    backgroundImage() {
      return this.story.stories[this.storyId].image || null;
    },
  },
  created() {
    this.storyId = parseInt(this.$route.query.s) || 0;
    this.$router.push({ query: { s: this.storyId } });
  },
  methods: {
    navigateStory(id) {
      const newId = this.storyId + id;
      this.storyId = this.story.stories[newId] ? newId : (
        newId < 0 ? this.story.stories.length-1 : 0
      );
      this.$router.push({ query: { s: this.storyId } });
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}

.background-image {
  z-index: 0;
  position: fixed;
  top: -15px;
  bottom: -15px;
  left: -15px;
  right: -15px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(15px);
  opacity: 0.2;
  // transition: background-image 0.3s;
}

.brand {
  font-size: 1.2em;
  padding: 10px 0;
}

.story__wrapper {
  position: relative;
  display: block;
  height: 100vh;
  overflow: hidden;
  background-color: #333;
  perspective: 640px;
  perspective-origin: 0 50%;
}
.arrow {
  z-index: 10;
  background-color: transparent;
  position: absolute;
  top: 90px;
  bottom: 90px;
  color: transparent;

  &:first-of-type {
    left: 0;
    width: 30%;
  }
  &:last-of-type {
    right: 0;
    width: 70%;
  }
}

header {
  left: 0;
  right: 0;
  // font-size: 0.8em;
  z-index: 10;
  position: absolute;
  height: 100px;
  color: #fff;
  background: linear-gradient(#2F2F2F 0%, rgba(0, 0, 0, 0) 100%);
}

.content__wrapper {
  display: flex;
  align-items: center;
}

h1 {
  font-size: 1em;
  text-transform: uppercase;
  overflow: hidden;
}
.logo {
  width: 50px;
  height: 50px;
  margin: 5px 15px;
  // border: 1px solid #eee;
  // border-radius: 3px;
}
@media (min-width: 550px){

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #6f6f6f;
  }

  .story__wrapper {
    width: 320px;
    height: 570px;
    // border-radius: 7px;
    border: 1px solid #666;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  .arrow {
    background-color: rgba(#fff, 0.2);
    // border: 1px solid rgb(230, 230, 230);
    height: 60px;
    border-radius: 50%;
    position: initial;
    margin: 10px;
    text-align: center;
    line-height: 2em;
    font-size: 2em;
    text-align: center;
    color: #fefefe;
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.23);

    &:first-of-type {
      width: 60px;
    }
    &:last-of-type {
      width: 60px;
    }
  }
}

.slider {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  z-index: 5;
  position: relative;
  &__item {
    border-radius: 5px;
    height: 5px;
    margin: 5px;
    flex: 1;
    background-color: #464646;
    transition: background-color 0.2s;
    &.is-active {
      background-color: #fff;
    }
    &.is-seen {
      background-color: #464646;
    }
  }
}


.slide-leave-active {
  // transition: 0.5s;
}
.slide-enter-active {
  // transition: 0.5s;
}
.slide-leave {
  z-index: 1;
}
.slide-enter {
  // transform: scale(1.1);
  z-index: 2;
  // opacity: 0;
  // filter: blur(3px);
}
.slide-leave-to {
  // transform: scale(1.1);
  z-index: 0;
  // opacity: 0;
  // filter: blur(10px);
}
</style>
