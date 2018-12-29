<template>
  <div
    class="container">
    <section class="card__wrapper">
      <stripe-form />
    </section>
  </div>
</template>

<script>
import StripeForm from '@/components/StripeForm'
export default {
  components: { StripeForm }
};
</script>

<style lang="scss" scoped>
.card__wrapper {
  position: relative;
  display: block;
  height: 100vh;
  overflow: hidden;
  perspective: 640px;
  perspective-origin: 0 50%;
}
@media (min-width: 550px){
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .card__wrapper {
    width: 320px;
    height: 570px;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
</style>
