<template>
  <div
    class="container">
    <navigate
      left
      @click="navigateStory(-1)" />
    <background :image="backgroundImage"/>
    <section class="story__wrapper">
      <story-header
        key="header"
        :title="story.title"
        :length="story.stories.length"
        :story-id="storyId"
        :heading="story.heading"
        :logo="logo"
        :home="home"/>

      <card
        v-for="(item, i) in story.stories"
        v-show="i === storyId || i === storyId+1"
        :key="`story_${i}`"
        :story="item"
      />

      <bookend
        key="bookend"
        story/>
    </section>
    <navigate
      right
      @click="navigateStory(1)" />
  </div>
</template>
<script>
import Card from '@/components/Card';
import StoryHeader from '@/components/StoryHeader';
import Background from '@/components/Background';
import Bookend from '@/components/Bookend';
import Navigate from '@/components/Navigate';

export default {
  components: { Card, StoryHeader, Bookend, Navigate, Background },
  props: {
    'story': {
      type: Object,
      default: () => {},
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
      return this.story.stories[this.storyId] && this.story.stories[this.storyId].image || null;
    },
  },
  methods: {
    navigateStory(id) {
      const newId = this.storyId + id;
      this.storyId = this.story.stories[newId] ? newId : (
        newId < 0 ? this.story.stories.length-1 : 0
      );
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
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
@media (min-width: 550px){
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #6f6f6f;
  }
  .story__wrapper {
    width: 436px;
    height: 727px;
    border: 1px solid #666;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    border-radius: 15px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
