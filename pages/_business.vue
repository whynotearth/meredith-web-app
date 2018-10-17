<template>
  <div>
    {{ item.name }}
    <div
      v-for="page in item.pages"
      :key="page.name.replace(' ', '_')">

      <article
        v-for="(card, i) in page.cards"
        :key="`${page.name.replace(' ', '_')}_card_${i}`">
        {{ card.callToAction }}
      </article>
    </div>
  </div>
</template>
<script>

export default {
  async asyncData({ app, params }) {
    const { data } = await app.$axios.get('https://storage.googleapis.com/meredith-config/businesses.json');
    return {
      item: data.businesses.find(business => business.key === params.business),
    }
  },
}
</script>
