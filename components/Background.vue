<template>
  <div class="background">
    <div
      :style="{
        backgroundImage: image ? `url('/${image}')` : null,
      }"
      class="background-image"/>
  </div>
</template>
<script>
export default {
  props: {
    'image': {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="scss" scoped>
.background {
  background-color: #333;
}
.background-image {
  display: none;
}
@media (min-width: 550px){
  .background-image {
    display: block;
    z-index: 0;
    position: fixed;
    top: -15px;
    bottom: -15px;
    left: -15px;
    right: -15px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(50px);
    opacity: 0.2;
  }
}
</style>
