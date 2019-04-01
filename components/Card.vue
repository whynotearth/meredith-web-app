<template>
  <div
    :class="['story', story.type, story.brand]">
    <div
      key="image"
      :style="{
        backgroundImage: `url(/${story.image})`,
        filter: `blur(${story.blur})`,    
      }"
      class="story__background-image"/>
      <div
          v-if="story.h2"
          key="h2"
          class="headline"
         :style="{
                  backgroundColor: story.contentBackgroundColor,
                  color: story.contentColor,
        }">
          <h2>{{ story.h2 }}</h2>
        </div>
    <!-- v-if="story.type == story-card" -->
    <div class="story__hover"
    @mouseover="active = !active" @mouseout="active = !active"
     >
        <div v-if="active" class="story__content-wrap"
        :style="{
                  backgroundColor: story.contentBackgroundColor,
                  color: story.contentColor,
        }">
            
                <div
                v-if="story.subhead"
                key="subhead"
                class="subhead">
                <h2>{{ story.subhead }}</h2>
              </div>
              <div
                v-if="story.content"
                key="content"
                class="content">
                  <p>{{ story.content }}</p>
              </div>
        </div>
    </div>
    <img v-if="story.ctaImage" class="cta-image" :src="story.ctaImage">
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
   data() {
    return {
      active: false,
    };
  },
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
.story__hover,
.story__content-wrap {
  width:100%;
  height:100%;
}
.story__content-wrap {
  background-color: rgba(17, 17, 17, 0.7);
  color: #fff;
  font-family: 'Montserrat', 'Roboto', 'Segoe UI', sans-serif;
  padding: 10px 20px;
  font-size: 1.2em;
  line-height: 1.2em;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  //background-color: #333;
  //background: linear-gradient(rgba(0, 0, 0, 0) 0, #2F2F2F 100%);
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

.headline {
    color: #fff;
    text-align: center;
    font-size: 1.1em;
    line-height: 1.6em;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.subhead {
   font-size: 1.5em;
   line-height: 4em;
}
.content, .subhead {
    max-width: 70%;
    min-width: 70%;
    text-align:left;
}

img {
  width: 100%;
}
img.cta-image {
    z-index: 10;
    position: absolute;
    bottom: 0;
}
.rehash-trash .cta {
    background: linear-gradient(360deg, #6081F2 0%, rgba(0, 0, 0, 0) 100%);
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
