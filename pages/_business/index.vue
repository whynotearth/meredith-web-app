<template>
  <stories
    :brand="business.name"
    :home="business.id"
    :logo="business.logo"
    :story="story"/>
</template>
<script>
import Stories from '@/components/Stories';
export default {
  components: { Stories },
  async asyncData({ app, params }) {
    const { stories, business } = await import(`@/cms/${params.business}`);
    return { story: { title: business.title, stories }, business };
  },
}
</script>

