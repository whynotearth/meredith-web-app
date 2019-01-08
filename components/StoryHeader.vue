<template>
  <header key="header">
    <slider
      v-if="length"
      :length="length"
      :story-id="storyId"/>
    <section class="content__wrapper">
      <nuxt-link :to="`/${home}`">
        <img
          :src="`/${logo}`"
          :alt="title"
          class="logo">
      </nuxt-link>
      <h1 v-if="title">
        {{ title }}
      </h1>
    </section>
  </header>
</template>
<script>
import Slider from '@/components/Slider';

export default {
  components: {
    Slider,
  },
  props: {
    'length': {
      type: Number,
      default: 0,
    },
    'story-id': {
      type: Number,
      default: 0,
    },
    'home': {
      type: String,
      default: '',
    },
    'title': {
      type: String,
      default: '',
    },
    'logo': {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>

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
}

</style>
