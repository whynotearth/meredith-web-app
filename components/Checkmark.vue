<template>
  <div class="checkmark_container">
    <div class="checkmark_wrapper">
      <svg
        id="Layer_1"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        style="enable-background:new 0 0 100 100;"
        xml:space="preserve"
        preserveAspectRatio="xMidYMid meet"
      >
        <g>
          <circle
            :style="styleObject"
            class="circle"
            cx="50"
            cy="49.9999657"
            r="47.5" />
          <circle
            :style="styleObject"
            class="circle-dash"
            cx="50"
            cy="49.9999657"
            r="47.5" />
          <polyline
            :style="styleObject"
            class="check"
            points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 	"
          />
          <polyline
            :style="styleObject"
            class="check-dash"
            points="28.6469955,52.0561066 42.2152748,65.6243896 71.3530045,36.4866562 	"
          />
        </g>
      </svg>
    </div>
    <p
      v-if="message"
      class="message"
    >
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#fff"
    },
    message: {
      type: String,
      default: null
    }
  },
  computed: {
    styleObject: function () {
      return {
        stroke: this.color
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.checkmark_container {
  .checkmark_wrapper {
    text-align: center;
    margin: auto;
    height: 60%;
    padding: 25px;
    max-width: 200px
  }
  .message {
    text-align: center;
    animation: fadein 3s;
    -moz-animation: fadein 3s; /* Firefox */
    -webkit-animation: fadein 3s; /* Safari and Chrome */
    -o-animation: fadein 3s; /* Opera */
  }
  svg {
    g {
      .circle {
        fill: none;
        stroke: #1e4164;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
      .circle {
        stroke-dasharray: 300 300;
        animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
        -webkit-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
        -moz-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
        -o-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
        opacity: 0;
      }
      .circle-dash {
        fill: none;
        stroke: #1e4164;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-miterlimit: 10;
      }
      .circle-dash {
        stroke-dasharray: 10 300;
        animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
        -webkit-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
        -moz-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
        -o-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
        opacity: 0;
      }
      .check {
        fill: none;
        stroke: #1e4164;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      }
      .check-dash {
        fill: none;
        stroke: #1e4164;
        stroke-width: 3;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-miterlimit: 10;
      }

      .check-dash {
        stroke-dasharray: 10 100;
        animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
        -webkit-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
        -moz-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
        -o-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
      }

      .check {
        stroke-dasharray: 60 100;
        animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
        -webkit-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
        -moz-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
        -o-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
        opacity: 0;
      }
    }
  }
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

@-webkit-keyframes check {
  from {
    stroke-dashoffset: 60;
    opacity: 1;
  }

  to {
    stroke-dashoffset: 00;
    opacity: 1;
  }
}

@-moz-keyframes check {
  from {
    stroke-dashoffset: 60;
    opacity: 1;
  }

  to {
    stroke-dashoffset: 00;
    opacity: 1;
  }
}

@keyframes check {
  from {
    stroke-dashoffset: 60;
    opacity: 1;
  }

  to {
    stroke-dashoffset: 00;
    opacity: 1;
  }
}

@-webkit-keyframes check-dash {
  from {
    stroke-dashoffset: 120;
  }
  to {
    stroke-dashoffset: 45;
  }
}

@-moz-keyframes check-dash {
  from {
    stroke-dashoffset: 120;
  }
  to {
    stroke-dashoffset: 45;
  }
}

@keyframes check-dash {
  from {
    stroke-dashoffset: 120;
  }
  to {
    stroke-dashoffset: 45;
  }
}

@-webkit-keyframes circle {
  from {
    stroke-dashoffset: 300;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@-moz-keyframes circle {
  from {
    stroke-dashoffset: 300;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes circle {
  from {
    stroke-dashoffset: 300;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@-webkit-keyframes circledash {
  from {
    stroke-dashoffset: 320;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 20;
    opacity: 1;
  }
}

@-moz-keyframes circledash {
  from {
    stroke-dashoffset: 320;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 20;
    opacity: 1;
  }
}

@keyframes circledash {
  from {
    stroke-dashoffset: 320;
    opacity: 1;
  }
  to {
    stroke-dashoffset: 20;
    opacity: 1;
  }
}
</style>
