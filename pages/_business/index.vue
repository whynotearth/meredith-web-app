<template>
  <stories
    :brand="item.name"
    :logo="item.logo"
    :stories="item.stories"/>
</template>
<script>
import Stories from '@/components/Stories';
export default {
  components: { Stories },
  async asyncData({ app, params }) {
    const itemModule = await import(`@/cms/${params.business}`);
    const item = itemModule.default ? itemModule.default : itemModule
    return { item };
  },
}
</script>

