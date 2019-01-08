<template>
  <base-card :attributes="checkoutCard">
    <header>
      {{ checkoutCard.title }}
    </header>
    <div
      v-if="transactionStatus === 'submitting'"
      class="loading-container"
    >
      <loading />
    </div>
    <checkmark
      v-else-if="transactionStatus === 'success'"
      color="#fbfbfb"
      message="Success!"
    />
    <stripe-form v-else/>
  </base-card>
</template>

<script>
import StripeForm from "@/components/StripeForm";
import BaseCard from "@/components/BaseCard";
import Loading from "@/components/Loading";
import Checkmark from "@/components/Checkmark";
import { mapState, mapActions } from "vuex";

export default {
  name: "Checkout",
  components: {
    StripeForm,
    BaseCard,
    Loading,
    Checkmark
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
.loading-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh
}
</style>
