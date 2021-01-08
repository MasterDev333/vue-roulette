<template>
  <div class="wheel-wrapper">
    <div class="wheel">
      <img src="../assets/images/wheel_frame.png" class="wheel-frame" alt="" />
      <img
        src="../assets/images/wheel_numbers.png"
        ref="wheel_numbers"
        class="wheel-numbers"
        :style="[is_turning ? rotateWheelStyle : resetWheelStyle]"
        alt=""
      />
      <div class="wheel-handle">
        <img
          src="../assets/images/handles.png"
          class="wheel-handle__handles"
          :style="[is_turning ? rotateWheelStyle : resetWheelStyle]"
          alt=""
        />
        <img
          src="../assets/images/handle_base.png"
          class="wheel-handle__base"
          alt=""
        />
        <img
          src="../assets/images/handle_top.png"
          class="wheel-handle__top"
          alt=""
        />
      </div>
    </div>
    <img
      src="../assets/images/ball.png"
      style="opacity: 0"
      class="ball"
      ref="ball"
      alt=""
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Wheel",
  computed: {
    ...mapState([
      "is_turning",
      "turning_duration",
      "delay",
      "turning_speed",
      "turning_deg",
      "latest_result",
    ]),
    rotateWheelStyle() {
      return {
        transition: `transform ${this.turning_duration +
          this.delay}s cubic-bezier(0.3, 1, 0.7, 1),
                     ${this.turning_duration +
                       this.delay}s filter cubic-bezier(0.1, 1, 0.8, 1),
                     ${this.turning_duration +
                       this
                         .delay}s -webkit-filter cubic-bezier(0.1, 1, 0.8, 1)`,
        transform: "translate(-50%, -50%) rotate(" + this.turning_deg + "deg)",
      };
    },
    resetWheelStyle() {
      return {
        transform: "translate(-50%, -50%) rotate(0deg)",
      };
    },
    // rotateBallStyle() {
    //   return {
    //     animation: `${this.turning_duration}s linear forwards orbit2`,
    //   };
    // },
  },
  watch: {
    is_turning(newValue) {
      if (newValue) {
        this.$refs.wheel_numbers.style.filter = "blur(1px)";
        this.$refs.ball.style.animation = `${this.turning_duration +
          this.delay}s linear forwards orbit2`;
        // this.$refs.ball.addEventListener('animationend', function() {
        //   console.log(this.getBoundingClientRect());
        // });
        // when roulette stops
        setTimeout(() => {
          this.$refs.wheel_numbers.style.filter = "blur(0px)";
        }, (this.turning_duration + this.delay) * 1000);
        //
        setTimeout(() => {
          this.$store.dispatch("stopRoulette");
          this.$refs.ball.style.animation = "none";
        }, (this.turning_duration + this.delay * 2) * 1000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin wheelComponents() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  will-change: transform;
}
.wheel-wrapper {
  position: relative;
}
.wheel {
  position: relative;
  img {
    pointer-events: none;
  }
  &-frame {
    max-width: 100%;
  }
  &-numbers {
    width: clamp(200px, 27.3vw, 525px);
    @include wheelComponents;
    // @media screen and (max-width: 1440px) {
    //   width: clamp(200px, 31vw, 525px);
    // }
  }
  &-handle {
    img {
      @include wheelComponents;
    }
    &__handles {
      width: clamp(100px, 12.8vw, 247px);
    }
    &__base {
      width: clamp(40px, 4vw, 80px);
    }
    &__top {
      width: clamp(10px, 2vw, 40px);
    }
  }
}
.ball {
  @include wheelComponents();
  width: clamp(15px, 1.77vw, 34px);
  height: clamp(15px, 1.77vw, 34px);
  transform-origin: top left;
}
@media screen and (max-width: 1080px) {
  .wheel {
    &-numbers {
      width: clamp(180px, 27.3vw, 525px);
    }
  }
}
</style>
