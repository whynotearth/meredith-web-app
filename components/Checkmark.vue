<template>
  <div class="Checkmark_container">
    <div class="Checkmark_wrapper">
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
.Checkmark_container {
  .Checkmark_wrapper {
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

.circle {
  fill: none;
  stroke: #1e4164;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
}
.circle-dash {
  fill: none;
  stroke: #1e4164;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-miterlimit: 10;
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

.check {
  stroke-dasharray: 60 100;
  animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
  -webkit-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
  -moz-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
  -o-animation: check 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards 0.15s;
  opacity: 0;
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

.check-dash {
  stroke-dasharray: 10 100;
  animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
  -webkit-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
  -moz-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
  -o-animation: check-dash 1.2s cubic-bezier(0.5, 0, 0.6, 1) forwards;
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

.circle {
  stroke-dasharray: 300 300;
  animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
  -webkit-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
  -moz-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
  -o-animation: circle 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.15s;
  opacity: 0;
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

.circle-dash {
  stroke-dasharray: 10 300;
  animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
  -webkit-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
  -moz-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
  -o-animation: circledash 1.5s cubic-bezier(0.5, 0, 0.5, 1) forwards 0.05s;
  opacity: 0;
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

.myButton {
  -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
  -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #ffffff),
    color-stop(1, #f6f6f6)
  );
  background: -moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: -ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
  background-color: #ffffff;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  border-radius: 3px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #1e4164;
  font-family: Arial;
  font-size: 15px;
  font-weight: regular;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 2px 0px #ffffff;
}
.myButton:hover {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0.05, #f6f6f6),
    color-stop(1, #ffffff)
  );
  background: -moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: -ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
  background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
  background-color: #f6f6f6;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
