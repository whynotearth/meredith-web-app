<template>
  <section class="container">
    <nuxt-link
      v-for="business in businesses"
      :to="business.key"
      :key="business.key">
      {{ business.name }}
    </nuxt-link>
  </section>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    const { data } = await app.$axios.get('https://storage.googleapis.com/meredith-config/businesses.json');
    return {
      businesses: data.businesses,
    }
  },
}
</script>
