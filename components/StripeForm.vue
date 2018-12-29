<template>
  <div ref="card"/>
</template>

<script>
export default {
  mounted: function () {
    const stripe = Stripe(`YOUR_STRIPE_PUBLISHABLE_KEY`);
    const elements = stripe.elements();

    const card = elements.create('card');
    card.mount(this.$refs.card);
  }
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
