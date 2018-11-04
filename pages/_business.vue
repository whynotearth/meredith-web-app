<template>
  <div class="wrapper">
    <div class="content">
      <div class="stories">
        <nuxt-child :key="$route.params.story" />
      </div>
    </div>
  </div>
</template>
<script>


export default {
}
</script>
<style lang="scss" scoped>
@media (min-width: 640px){
  .wrapper {
    display: flex;
  }
  .content {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 70%;
  }
}

@media (min-width: 1024px){
 .content {
    flex-basis: 60%;
  }
}
</style>
