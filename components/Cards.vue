<template>
  <div
    class="container">
    <div
      class="arrow"
      @click="navigateStory(-1)"> &#8249; </div>
    <div>
      <header>
        <img
          :src="logo"
          class="logo">
        <h1>{{ brand }}</h1>
      </header>
      <transition
        name="slide"
        mode="out-in">
        <story
          :story="story"
          :key="story.title.replace(' ', '_')" />
      </transition>
      <div class="slider">
        <div
          v-for="(story, i) in stories"
          :key="`${story.title.replace(' ', '_')}_${i}`"
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
    'stories': {
      type: Array,
      default: [],
    },
    'brand': {
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
    story() {
      return this.stories[this.storyId];
    },
    backgroundImage() {
      return this.stories[this.storyId].image || null;
    },
  },
  methods: {
    navigateStory(id) {
      const newId = this.storyId + id;
      this.storyId = this.stories[newId] ? newId : (
        newId < 0 ? this.stories.length-1 : 0
      );
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

.brand {
  font-size: 1.2em;
  padding: 10px 0;
}

.arrow {
  z-index: 10;
  background-color: transparent;
  width: 45vw;
  height: 100vh;
  position: absolute;
  top: 0;

  &:first-of-type {
    left: 0;
  }
  &:last-of-type {
    right: 0;
  }
}
header {
  display: none;
}
@media (min-width: 550px){
  header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #fff;
    z-index: 10;
    position: relative;
    border: 1px solid #eee;
  }

  h1 {
    font-size: 1.2em;
    margin: 0 10px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #fafafa;
  }
  .arrow {
    background-color: #fff;
    border: 1px solid rgb(230, 230, 230);
    width: 60px;
    height: 60px;
    position: relative;
    margin: 10px;
    line-height: 50px;
    font-size: 3em;
    text-align: center;
    color: #666;
    cursor: pointer;
  }

  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

.slider {
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  &__item {
    height: 5px;
    margin: 2px;
    flex: 1;
    background-color: #e3e3e3;
    transition: background-color 0.2s;
    &.is-active {
      background-color: #616161;
    }
    &.is-seen {
      background-color: #acacac;
    }
  }
}


.slide-leave-active,
.slide-enter-active {
  transition: 0.2s;
}
.slide-enter {
  // transform: translate(0, 10%);
  // opacity: 0.8;
}
.slide-leave-to {
  // transform: translate(0, -10%);
  // opacity: 0.8;
}
</style>
