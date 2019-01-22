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
}
</style>

