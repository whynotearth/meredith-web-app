<template>
  <div
    :style="{ backgroundColor: story.backgroundColor }">
    <transition-group
      name="fade"
      class="story">
      <div
        v-if="story.title"
        key="title"
        class="title">
        {{ story.title }}
      </div>
      <div
        v-if="story.content"
        key="content"
        :style="{
          backgroundColor: story.contentBackgroundColor,
          color: story.contentColor,
        }"
        class="content">
        {{ story.content }}
      </div>
      <img
        v-if="story.image"
        key="img"
        :src="story.image">
      <a
        v-if="story.ctaLink"
        key="cta"
        :href="story.ctaLink"
        :style="{
          backgroundColor: story.ctaColor,
          color: story.ctaTextColor,
        }"
        target="_blank"
        class="cta">
        {{ story.ctaText }}
      </a>
    </transition-group>
  </div>
</template>
<script>
export default {
  props: {
    'story': {
      type: Object,
      default: {
        name: '',
        content: '',
        cta: '',
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.story {
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta {
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #ccc;
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-decoration: none;
}

.title {
  background-color: rgba(#333, 0.8);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 2em;
  position: absolute;
  top: 2px;
}
.content {
  background-color: rgba(#333, 0.8);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 1em;
  position: absolute;
  left: 10px;
  right: 10px;
  // top: 200px;
}

img {
  width: 100%;
}

@media (min-width: 550px){
  .story {
    width: 320px;
    height: 570px;
    z-index: 2;
    position: relative;
    overflow: hidden;
    // border: 1px solid rgb(230, 230, 230);
    // background-color: #fefefe;
    position: relative;
  }

}

.fade-enter-active, .fade-leave-active {
  // transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
}
</style>
