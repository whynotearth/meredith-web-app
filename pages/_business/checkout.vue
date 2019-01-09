<template>
  <page
    :attributes="pageAttributes"
    :business="business"
    title="Checkout"
    body="StripeForm"
    component-status="loading"
  />
</template>

<script>
import Page from "@/components/Page";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Checkout",
  components: {
    Page
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
      transactionStatus: state => 'submitting'
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
