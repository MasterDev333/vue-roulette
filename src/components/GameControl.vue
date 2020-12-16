<template>
  <div class="controls">
    <div class="controls-buttons">
      <button class="btn control-button">
        <img class="control-button__img" src="../assets/images/btn_pause.png" alt="">
        <span class="control-button__text">ANNULLA</span>
      </button>
      <button class="btn control-button">
        <img class="control-button__img" src="../assets/images/btn_cancel.png" alt="">
        <span class="control-button__text">CANCELLA</span>
      </button>
      <button class="btn control-button">
        <img class="control-button__img" src="../assets/images/btn_double.png" alt="">
        <span class="control-button__text">RADDOPPIA</span>
      </button>
      <button class="btn control-button">
        <img class="control-button__img" src="../assets/images/btn_turbo.png" alt="">
        <span class="control-button__text">TURBO</span>
      </button>
      <button class="btn control-button" @click="turnRoulette">
        <img class="control-button__img" src="../assets/images/btn_reset.png" alt="">
        <span class="control-button__text">GIRA</span>
      </button>
    </div>
    <div class="controls-slider">
      <img src="../assets/images/scroll-bg.png" alt="" class="controls-slider__bg">
      <p class="controls-slider__amount">
        <span class="controls-slider__amount--number">10</span> GIRI
      </p>
      <div class="slider">
        <span class="slider-label">AVVIA AUTOMATICO</span>  
      </div>
      <button class="btn-play">
        <img src="../assets/images/btn_play.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GameControl',
  methods: {
    turnRoulette() {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .controls {
    margin-top: 30px;
    text-align: center;
    &-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .control-button {
      max-width: 20%;
      background-color: transparent;
      border: none;
      cursor: pointer;
      &:hover img {
        transform: scale(1.1);
      }
      &__img {
        display: block;
        transition: all .3s ease-in-out;
      }
      &__text {
        display: block;
        margin-top: 10px;
        color: white;
        font-size: clamp(12px, 1.3vw ,20px);
      }
    }
    &-slider {
      position: relative;
      display: inline-block;
      margin: 24px auto 0;
      width: clamp(200px, 21.4vw, 412px);
      &__amount {
        position: absolute;
        margin: 0;
        top: 1vw;
        left: 50%;
        color: white;
        font-size: clamp(10px, 1vw, 20px);
        transform: translateX(-50%);
      }
      .slider {
        position: absolute;
        width: 15vw;
        top: 50%;
        left: 15px;
        color: white;
        text-align: right;
        transform: translateY(-50%);
        &-label {
          font-size: clamp(12px, 0.7vw, 16px);
        }
      }
      .btn-play {
        position: absolute;
        padding: 0;
        top: 50%;
        right: 0.7vw;
        width: clamp(40px, 3.8vw, 73px);
        transform: translateY(-50%);
        &:hover {
          transform: translateY(-50%) scale(1.05);
        }
      }
    }
  }

@media screen and (max-width: 1080px) {
  .controls-slider {
    width: clamp(200px, 38vw, 412px);
    &__amount {
      font-size: clamp(14px, 1.8vw, 20px);
    }
  }
  .slider-label {
    font-size: clamp(12px, 1.4vw, 16px);
  }
  .btn-play {
    right: 15px;
    width: clamp(40px, 6.7vw, 73px);
  }
}
</style>
