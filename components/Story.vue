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
        :logo="logo"
        :home="home"/>

      <card
        v-for="(item, i) in story.stories"
        v-show="i === storyId || i === storyId+1"
        :key="`story_${i}`"
        :story="item"
      />
      <section
        v-if="story.stories[storyId].ctaLink"
        :class="['checkout', {'show-checkout': showCheckout}]">
        <div
          class="cta"
          @click="showCheckout = !showCheckout">
          <fa :icon="['fas', 'chevron-up']" />
          {{ story.stories[storyId].ctaText }}
        </div>
        <div class="checkout__body">
          <stripe-form />
        </div>
      </section>
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
    showCheckout: false,
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
  background-color: rgb(206, 193, 193);
  perspective: 640px;
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
    width: 380px;
    height: 90vh;
    border: 1px solid #666;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.checkout {
  position: absolute;
  height: 100vh;
  transform: translateY(calc(100vh));
  z-index: 100;
  top: 30px;

  transition: transform 0.3s;

  // animation: slideup 0.3s;
  // animation-fill-mode: forwards;

  &.show-checkout {
    transform: translateY(0);
  }
}

.checkout__body {
  background-color: #193149;
  height: 100%;
  padding: 20px;
}

@keyframes slideup {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(calc(100vh - 130px));
  }
}

.cta {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  text-align: center;
  background-color: #333;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-decoration: none;
  z-index: 50;
  background: transparent;
  background-size: 100% auto;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 320px;
  margin: 0 auto -1px;
  cursor: pointer;
  background-image: url('/images/meredith-swipe-up.png');
  svg {
    display: block;
    margin: 10px auto;
  }
}

@media (min-width: 550px){
  .checkout {
    height: 90vh;
    transform: translateY(calc(90vh - 150px));
  }

  @keyframes slideup {
  0% {
    transform: translateY(90vh);
  }
  100% {
    transform: translateY(calc(90vh - 150px));
  }
}

}

</style>
