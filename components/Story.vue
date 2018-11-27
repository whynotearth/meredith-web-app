<template>
  <div
    class="story">
    <transition-group name="fade">
      
      <div
        key="image"
        :style="{
          backgroundImage: `url(/${story.image})`,
        }"
        class="story__background-image"/>
      <h2
        v-if="story.title"
        key="title"
        class="title">
        {{ story.title }}
      </h2>
      
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
        v-if="story.product"
        key="product"
        :src="`/${story.product}`">
      <nuxt-link
        v-if="story.slug"
        key="cta"
        :to="story.slug"
        append
        class="cta">
        Read More
      </nuxt-link>
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
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.story__background-image {
  position: absolute;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background-position: center;
  background-size: cover;
  animation: zoomin 120s linear;
  animation-fill-mode: forwards;
  z-index: -1;
}

@keyframes zoomin {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
}

.cta {
  height: 70px;
  line-height: 70px;
  text-align: center;
  background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0) 0,rgba(0, 0, 0, 0.8) 100%);
  font-weight: bold;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-decoration: none;
  z-index: 20;
}

.title {
  background-color: rgba(#333, 0.7);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 2em;
  margin: 7px;
  min-height: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // transform: translateY(-50%);
}
.content {
  background-color: rgba(#333, 0.8);
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 1em;
}

img {
  width: 100%;
}

@media (min-width: 550px){
  .story {
    // width: 320px;
    // height: 570px;
    z-index: 2;
    // position: relative;
    overflow: hidden;
    // border: 1px solid rgb(230, 230, 230);
    // background-color: #fefefe;
    // position: relative;
    height: 100%;
    width: 100%;
  }

}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
