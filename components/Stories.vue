<template>
  <div
    class="container">
    <div
      :style="{
        backgroundImage: backgroundImage ? `url('/${backgroundImage}')` : null,
      }"
      class="background-image"/>
    <div
      class="arrow"
      @click="navigateStory(-1)"> &#8249; </div>
    <div>
      <transition-group
        class="story__wrapper"
        name="slide"
        mode="out-in">
        <header key="header">
          <nuxt-link :to="`/${home}?s=0`">
            <img
              :src="`/${logo}`"
              alt="Descriptive text"
              class="logo">
          </nuxt-link>
          <h1>{{ story.title }}</h1>
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
      <div class="slider">
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
    </div>
    <div
      class="arrow"
      @click="navigateStory(1)"> &#8250; </div>
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
  background-repeat: no-repeat;
  background-size: cover;
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
  opacity: 0.3;
}

.brand {
  font-size: 1.2em;
  padding: 10px 0;
}

.story__wrapper {
  position: relative;
  display: block;
  height: 100vh;
  border: 1px solid #eee;
}
.arrow {
  z-index: 10;
  background-color: transparent;
  width: 45vw;
  height: 100vh;
  position: absolute;
  top: 0;
  color: transparent;

  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }
}

header {
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  // font-size: 0.8em;
  z-index: 10;
  position: absolute;
  height: 70px;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0.7) 0,rgba(255, 0, 0, 0) 100%);
}

h1 {
  font-size: 1em;
  text-transform: uppercase;
  overflow: hidden;
}
.logo {
  width: 50px;
  height: 50px;
  margin: 10px;
  border: 1px solid #eee;
  // border-radius: 3px;
}
@media (min-width: 550px){

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #fafafa;
  }

  .story__wrapper {
    width: 320px;
    height: 570px;
  }
  .arrow {
    background-color: #3f3f3f;
    border: 1px solid rgb(230, 230, 230);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: relative;
    margin: 10px;
    line-height: 50px;
    font-size: 3em;
    text-align: center;
    color: #fefefe;
    cursor: pointer;
  }
}

.slider {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  &__item {
    height: 5px;
    margin: 5px;
    flex: 1;
    background-color: #fff;
    transition: background-color 0.2s;
    &.is-active {
      background-color: #616161;
    }
    &.is-seen {
      background-color: #acacac;
    }
  }
}


.slide-leave-active {
  transition: 0s;
}
.slide-enter-active {
  transition: 0.8s;
}
.slide-enter {
  // transform: translate(10%);
  opacity: 0;
}
.slide-leave-to {
  // transform: translate(-10%);
  opacity: 0;
}
</style>
