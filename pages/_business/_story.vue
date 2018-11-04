<template>
  <div>
    <stories
      :brand="item.name"
      :logo="item.logo"
      :stories="item.stories"/>
  </div>
</template>
<script>
import Stories from '@/components/Stories';
export default {
  components: { Stories },
  async asyncData({ app, params }) {
    const itemModule = await import(`@/cms/${params.business}/${params.story}.js`);
    const item = itemModule.default ? itemModule.default : itemModule
    return { item };
  },
}
</script>

