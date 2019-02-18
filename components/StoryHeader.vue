<template>
  <header key="header">
    <slider
      :length="length"
      :story-id="storyId"/>
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
  },
}
</script>

<style lang="scss" scoped>

header {
  left: 0;
  right: 0;
  z-index: 10;
  position: absolute;
  height: 40px;
  color: #fff;
  background: linear-gradient(#2F2F2F 0%, rgba(0, 0, 0, 0) 100%);
}


</style>
