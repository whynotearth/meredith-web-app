<template>
  <page
    :attributes="pageAttributes"
    :business="business"
    title="Checkout"
    body="Chat"
  />
</template>

<script>
import Page from "@/components/Page";

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
        name: "Chat",
        title: "Chat with us!",
        style: {
          backgroundColor: "#17304A",
          color: "#FBFBFB"
        }
      }
    };
  }
};
</script>
