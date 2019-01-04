<template>
  <base-card :attributes="checkoutCard">
    <loading />
    <!-- <loading v-if="transactionStatus === 'submitting'" /> -->
    <!-- <stripe-form v-else/> -->
  </base-card>
</template>

<script>
import StripeForm from "@/components/StripeForm";
import BaseCard from "@/components/BaseCard";
import Loading from "@/components/Loading";
import { mapState, mapActions } from "vuex";

export default {
  name: "Checkout",
  components: {
    StripeForm,
    BaseCard,
    Loading
  },
  data() {
    return {
      checkoutCard: {
        name: "Checkout",
        title: "Stripe checkout form",
        style: {
          backgroundColor: "#17304A",
          color: "#FBFBFB"
        }
      }
    };
  },
  computed: {
    ...mapState({
      transactionStatus: state => state.stripe.transactionStatus
    })
  },
  created() {
    this.updateTransactionStatus(null);
  },
  methods: {
    ...mapActions({ updateTransactionStatus: "stripe/updateTransactionStatus" })
  }
};
</script>

<style lang="scss" scoped>
</style>
