<template>
  <div
    key="slider"
    class="slider">
    <div
      v-for="(item, i) in new Array(length)"
      :key="`slider_${i}`"
      :class="{
        'is-active': i === storyId,
      }"
      class="slider__item"
    />
  </div>
</template>
<script>
export default {
  props: {
    'story-id': {
      type: Number,
      default: 0,
    },
    'length': {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style lang="scss" scoped>
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
  }
}
</style>
