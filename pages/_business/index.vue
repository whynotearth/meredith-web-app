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

export default {
  components: { Story },
  async fetch({ store, params }) {
    await store.dispatch('business/getBusiness', params.business)
    // const { stories, business } = await import(`@/cms/${params.business}`);
    // const { business, stories } = store.state.business
    // return { story: { title: business.title, stories }, business };
  },
  computed: {
    ...mapState({
      business: state => state.business.business,
      story: state => ({ title: state.business.business.title, stories: state.business.stories }),
      storeStatus: state => state.business.storeStatus
    })
  }
}
</script>

