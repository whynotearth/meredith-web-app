<template>
  <div
    class="arrow"
    @click="$emit('click')">
    <fa
      v-if="left"
      :icon="['fas', 'chevron-left']" />
    <fa
      v-if="right"
      :icon="['fas', 'chevron-right']" />
  </div>
</template>
<script>
export default {
  props: {
    'left': {
      type: Boolean,
      default: false,
    },
    'right': {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped>

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

@media (min-width: 550px){
  .arrow {
    background-color: rgba(#fff, 0.2);
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
</style>
