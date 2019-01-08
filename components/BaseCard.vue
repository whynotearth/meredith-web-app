<template>
  <div class="container">
    <div
      :style="attributes.style"
      class="card__wrapper"
    >
      <main>
        <slot />
      </main>
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import StoryHeader from '@/components/StoryHeader';

export default {
  name: "BaseCard",
  components: { StoryHeader },
  props: {
    attributes: {
      type: Object,
      default: () => {}
    }
  }
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
  padding: 50px 10px;
  header {
    text-align: center;
    font-size: 1.8em;
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

