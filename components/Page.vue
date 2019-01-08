<template>
  <div
    class="container">
    <!-- <background :image="backgroundImage"/> -->
    <section class="story__wrapper">
      <story-header
        key="header"
        :title="story.title"
        :length="story.stories.length"
        :story-id="storyId"
        :logo="logo"
        :home="home"/>

        <base-card>
          <slot />
        </base-card>

    </section>
  </div>
</template>
<script>
import BaseCard from '@/components/BaseCard';
import StoryHeader from '@/components/StoryHeader';
import Background from '@/components/Background';

export default {
  components: { BaseCard, StoryHeader, Background },
  props: {
    'home': {
      type: String,
      default: '',
    },
    'logo': {
      type: String,
      default: '',
    },
  },
  computed: {
    backgroundImage() {
      return this.story.stories[this.storyId] && this.story.stories[this.storyId].image || null;
    },
  }
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
    width: 320px;
    height: 570px;
    border: 1px solid #666;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}

</style>
