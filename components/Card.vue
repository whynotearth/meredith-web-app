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
    <section class="text-content">
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
    </section>
  </div>
</template>
<script>
import StripeForm from "@/components/StripeForm/index";

export default {
  components: { StripeForm },
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
  animation: zoomin 30s linear;
  animation-fill-mode: forwards;
  z-index: -1;
}

.checkout {
  position: absolute;
  height: 100vh;
  transform: translateY(calc(100vh));
  z-index: 100;
  top: 30px;

  transition: transform 0.3s;

  // animation: slideup 0.3s;
  // animation-fill-mode: forwards;

  &.show-checkout {
    transform: translateY(0);
  }
}

.checkout__body {
  background-color: #193149;
  height: 100%;
  padding: 20px;
}

@keyframes zoomin {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1.5);
  }
}
@keyframes slideup {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(calc(100vh - 130px));
  }
}

.cta {
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 10px;
  text-align: center;
  background-color: #333;
  font-weight: 400;
  color: #fff;
  width: 100%;
  text-decoration: none;
  z-index: 50;
  background: transparent;
  background-size: 100% auto;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 320px;
  margin: 0 auto -1px;
  cursor: pointer;
  background-image: url('/images/meredith-swipe-up.png');
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

.text-content {
  transition: all 0.3s 1s;
  height: 100%;
  margin: 0 15%;
  color: #fff;
  background-color: rgba(#666, 0.8);
  opacity: 0;
  z-index: 50;
  position: relative;
}

.story__wrapper:hover {
  .card.active {
    .text-content {
      // opacity: 1;
    }
  }
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
  .checkout {
    height: 90vh;
    transform: translateY(calc(90vh - 150px));
  }

  @keyframes slideup {
  0% {
    transform: translateY(90vh);
  }
  100% {
    transform: translateY(calc(90vh - 150px));
  }
}

}
</style>
