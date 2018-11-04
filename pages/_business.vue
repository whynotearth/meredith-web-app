<template>
  <div class="wrapper">
    <div class="content">
      <div class="stories">
        <stories
          :brand="item.name"
          :logo="item.logo"
          :stories="item.stories"/>
      </div>
    </div>
  </div>
</template>
<script>
import Stories from '@/components/Stories';

export default {
  components: { Stories },
  async asyncData({ app, params }) {
    const item = await import(`@/cms/${params.business}`);
    return { item }
  },
}
</script>

<style lang="scss" scoped>
// @media (min-width:480px) and (max-width:639px), (min-width: 1024px){
// }


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
