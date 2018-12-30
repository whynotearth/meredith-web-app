<template>
  <base-card :attributes="checkoutCard">
    <stripe-form />
  </base-card>
</template>

<script>
import StripeForm from '@/components/StripeForm'
import BaseCard from '@/components/BaseCard'
export default {
  components: {
    StripeForm,
    BaseCard
  },
  data () {
    return {
      checkoutCard: {
        name: 'Checkout',
        title: 'Stripe checkout form',
        style: {
          backgroundColor: "#17304A",
          color: "#FBFBFB"
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
