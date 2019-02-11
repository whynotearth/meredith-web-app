<template>
  <div>
    <story
      :brand="businessData.name"
      :logo="businessData.logo"
      :home="businessData.id"
      :story="story"/>
  </div>
</template>
<script>
import Story from '@/components/Story';
import { meredithApi } from '@/services'

export default {
  components: { Story },
  async fetch({ store, params }) {
    const storyName = params.story
    const businessName = params.business

    await store.dispatch('business/getBusiness', businessName)
    await store.dispatch('business/getBusiness', businessName)
  },
  async asyncData({ app, params }) {
    const storyName = params.story
    const businessName = params.business

    const businessRes = await meredithApi.getBusiness(businessName)
    const businessData = businessRes.business

    const story = await meredithApi.getStory({ storyName, businessName })

    return {
    story: story.default || story,
    businessData };
  },
}
</script>
