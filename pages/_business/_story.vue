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
import { meredithApi } from '@/services'

export default {
  components: { Story },
  async asyncData({ app, params }) {
    const storyName = params.story
    const businessName = params.business

    const business = await meredithApi.getBusiness(businessName)

    const story = await meredithApi.getStory({ storyName, businessName })

    return { story: story.default ? story.default : story, business };
  },
}
</script>
