<template>
  <div>
    <story
      :brand="business.name"
      :logo="business.logo"
      :home="business.id"
      :story="story"/>
  </div>
</template>
<script>
import Story from '@/components/Story';
export default {
  components: { Story },
  // key: to => to.fullPath,
  transition(to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  async asyncData({ app, params }) {
    const { business } = await import(`@/cms/${params.business}`);
    const story = await import(`@/cms/${params.business}/${params.story}.js`);

    return { story: story.default ? story.default : story, business };
  },
}
</script>
