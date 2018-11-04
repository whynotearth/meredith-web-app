<template>
  <section class="container">
    <nuxt-link to="rehash-trash">
      Rehash Trash
    </nuxt-link>
    <!-- <nuxt-link
      v-for="business in businesses"
      :to="business.key"
      :key="business.key">
      {{ business.name }}
    </nuxt-link> -->
  </section>
</template>

<script>
export default {
  // async asyncData({ app, params }) {
  //   const { data } = await import('./')
  //   return {
  //     businesses: data.businesses,
  //   }
  // },
}
</script>
