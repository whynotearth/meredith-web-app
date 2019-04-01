<template>
  <div>
    <story
      v-if="businessData && story"
      :brand="businessData.name"
      :logo="businessData.logo"
      :home="businessData.id"
      :story="story"/>
  </div>
</template>
<script>
import Story from '@/components/Story';
import { meredithApi } from '@/services' 
import { mapState } from 'vuex'

export default {
  components: { Story },
  async fetch({ store, params }) {
    const storyName = params.story
    const businessName = params.business

    await store.dispatch('business/getBusiness', businessName)
    await store.dispatch('business/getStory', { storyName, businessName })
  },
  computed: {
    ...mapState({
      businessData: state => state.business.businessData,
      story: state => state.business.currentStory
    })
  }
}
</script>
