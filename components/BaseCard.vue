<template>
  <div class="container">
    <div
      class="card__wrapper"
    >
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: "BaseCard"
};
</script>

<style lang="scss" scoped>
.card__wrapper {
  position: relative;
  display: block;
  height: 100vh;
  overflow: hidden;
  padding: 80px 20px;
  header {
    text-align: center;
    font-size: 1.5em;
    padding: 10px
  }
}
@media (min-width: 550px) {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .card__wrapper {
    width: 320px;
    height: 570px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
}
</style>

