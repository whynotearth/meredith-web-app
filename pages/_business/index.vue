<template>
  <story
    :brand="business.name"
    :home="business.id"
    :logo="business.logo"
    :story="story"/>
</template>
<script>
import Story from '@/components/Story';

export default {
  components: { Story },
  async asyncData({ store, params }) {
    await store.dispatch('business/getBusiness', params.business)
    const { stories, business } = await import(`@/cms/${params.business}`);
    console.log(store.state.business)
    return { story: { title: business.title, stories }, business };
  },
}
</script>

