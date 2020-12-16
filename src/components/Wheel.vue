<template>
  <div class="wheel">
    <img src="../assets/images/wheel_frame.png" alt="wheel" class="wheel-frame">
    <img src="../assets/images/wheel_numbers.png" class="wheel-numbers" alt="">
    <div class="wheel-handle">
      <img src="../assets/images/handles.png" class="wheel-handle__handles" alt="">
      <img src="../assets/images/handle_base.png" class="wheel-handle__base" alt="">
      <img src="../assets/images/handle_top.png" class="wheel-handle__top" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wheel',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin wheelComponents() {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.wheel {
  position: relative;
  &-frame {
    max-width: 100%;
  }
  &-numbers {
    width: clamp(200px, 27.3vw, 525px);
    @include wheelComponents;
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
@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
