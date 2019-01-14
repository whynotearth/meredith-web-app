<template>
  <div
    class="container"
  >
    <section class="story__wrapper">
      <story-header
        key="header"
        :title="title"
        :logo="business.logo"
        :home="business.id"/>
      <base-card :style="attributes.style">
        <header v-if="attributes.title">
          {{ attributes.title }}
        </header>
        <div
          v-if="componentStatus === 'submitting' || componentStatus === 'loading' "
          class="loading-container"
        >
          <loading />
        </div>
        <checkmark
          v-else-if="componentStatus === 'success'"
          color="#fbfbfb"
          message="Success!"
        />
        <component
          v-else
          :is="body" />
      </base-card>
    </section>
  </div>
</template>
<script>
import BaseCard from '@/components/BaseCard';
import StoryHeader from '@/components/StoryHeader';
import Loading from "@/components/Loading";
import Checkmark from "@/components/Checkmark";
import StripeForm from "@/components/StripeForm";

export default {
  components: { BaseCard, Checkmark, Loading, StoryHeader, StripeForm },
  props: {
    'componentStatus': {
      type: String,
      default: ''
    },
    'body': {
      type: String,
      default: () => {}
    },
    'attributes': {
      type: Object,
      default: () => {}
    },
    'business': {
      type: Object,
      default: () => {}
    },
    'home': {
      type: String,
      default: '',
    },
    'logo': {
      type: String,
      default: '',
    },
    'title': {
      type: String,
      default: ''
    }
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
  border-radius: 15px;
  .loading-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh
  }
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
