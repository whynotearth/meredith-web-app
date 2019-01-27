<template>
  <div
    :class="['story', story.type]">
    <div
      key="image"
      :style="{
        backgroundImage: `url(/${story.image})`,
        filter: `blur(${story.blur})`,
      }"
      class="story__background-image"/>
    <h2
      v-if="story.title"
      key="title"
      class="title">
      {{ story.h2 }}
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
    <nuxt-link
      v-if="story.ctaLink"
      key="cta"
      :to="story.ctaLink"
      append
      class="cta">
      <fa :icon="['fas', 'chevron-up']" />
      {{ story.ctaText }}
    </nuxt-link>
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
  background-color: #333;
  $target: 0;
  $index: 10;
  @while $index > 0 {
    &:nth-child(#{$target}){ z-index: #{$index}; }
    $target: $target + 1;
    $index: $index - 1;
  }
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
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.5);
  }
}

.cta {
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #333;
  background: linear-gradient(rgba(0, 0, 0, 0) 0, #2F2F2F 100%);
  font-weight: 400;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-decoration: none;
  z-index: 20;

  svg {
    display: block;
    margin: 10px auto;
  }
}

.title {
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 1.8em;
  line-height: 1em;
  font-weight:300;
  // margin: 7px;
  min-height: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // transform: translateY(-50%);
}
.content {
  background-color: rgba(17, 17, 17, 0.7);
  color: #fff;
  padding: 10px 20px;
  font-size: 1em;
  line-height: 1.2em;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: pre-line;
}

img {
  width: 100%;
}

.story-card {
  .cta {
    background: linear-gradient(360deg, #6081F2 0%, rgba(0, 0, 0, 0) 100%);
  }
}
@media (min-width: 550px){
  .story {
    z-index: 2;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }

}
</style>
