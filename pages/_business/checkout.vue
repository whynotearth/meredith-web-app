<template>
  <page
    :attributes="pageAttributes"
    :business="business"
    title="Checkout">
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
  </page>
</template>

<script>
import StripeForm from "@/components/StripeForm";
import Page from "@/components/Page";
import Loading from "@/components/Loading";
import Checkmark from "@/components/Checkmark";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Checkout",
  components: {
    StripeForm,
    Page,
    Loading,
    Checkmark
  },
  async asyncData({ app, params }) {
    const { business } = await import(`@/cms/${params.business}`);

    return { business };
  },
  data() {
    return {
      pageAttributes: {
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
    ...mapMutations({ updateTransactionStatus: "stripe/updateTransactionStatus" })
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
