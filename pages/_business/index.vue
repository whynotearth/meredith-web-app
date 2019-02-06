<template>
  <story
    v-if="business"
    :brand="business.name"
    :home="business.id"
    :logo="business.logo"
    :story="story"/>
</template>
<script>
import Story from '@/components/Story';

import { mapState } from 'vuex'
// TODO: display loading when storeStatus is loading
export default {
  components: { Story },
  async fetch({ store, params }) {
    await store.dispatch('business/getBusiness', params.business)
  },
  computed: {
    ...mapState({
      business: state => state.business.businessData,
      story: state => ({ title: state.business.businessData.title, stories: state.business.stories }),
      storeStatus: state => state.business.storeStatus
    })
  }
}
</script>

