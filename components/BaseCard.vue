<template>
  <transition
    enter-class="slider closed"
    enter-active-class="slider transition"
    enter-to-class="slider"
    leave-class="slider"
    leave-active-class="slider transition"
    leave-to-class="slider closed"
  >
    <div
      v-if="show"
      class="BaseCard container "
    >
      <div class="card__wrapper">
        <main>
          <slot/>
        </main>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "BaseCard",
  data: () => ({
    show: false
  }),
  mounted () {
    this.show = true
  },
  beforeDestroy () {
    this.show = false
  }
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
    padding: 10px;
  }
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  background-color: #000;
  color: #fff;
}

.slider.transition {
  transition: all 0.5s;
}

.slider.closed {
  top: 100%;
  height: 0;
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

