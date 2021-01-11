<template>
  <div class="controls">
    <div class="controls-buttons">
      <button
        class="btn control-button"
        :class="{
          disabled: this.isAvailablePlace(),
        }"
        @click="cancelLast"
      >
        <img
          class="control-button__img"
          src="../assets/images/btn_pause.png"
          alt=""
        />
        <span class="control-button__text">ANNULLA</span>
      </button>
      <button
        class="btn control-button"
        :class="{
          disabled: this.isAvailablePlace(),
        }"
        @click="clearAll"
      >
        <img
          class="control-button__img"
          src="../assets/images/btn_cancel.png"
          alt=""
        />
        <span class="control-button__text">CANCELLA</span>
      </button>
      <button
        class="btn control-button"
        :class="{
          disabled: this.isAvailablePlace(),
        }"
        @click="doubleChip"
      >
        <img
          class="control-button__img"
          src="../assets/images/btn_double.png"
          alt=""
        />
        <span class="control-button__text">RADDOPPIA</span>
      </button>
      <button
        class="btn control-button btn-turn btn-portrait"
        :class="{
          disabled: this.isAvailablePlace(),
        }"
        @click="turnRoulette"
      >
        <img
          class="control-button__img"
          src="../assets/images/btn_reset.png"
          alt=""
        />
        <span class="control-button__text">GIRA</span>
      </button>
      <button
        class="btn control-button"
        :class="{
          disabled: this.isAvailablePlace(),
        }"
      >
        <img
          class="control-button__img"
          src="../assets/images/btn_ripunta.png"
          alt=""
        />
        <span class="control-button__text">RIPUNTA</span>
      </button>
      <div class="dropdown-btn" @click="openDropdownMenu">
        <button
          class="btn control-button"
          :class="{
            disabled: this.isAvailableTurn(),
          }"
        >
          <img
            class="control-button__img"
            src="../assets/images/btn_auto_start.png"
            alt=""
          />
          <span class="control-button__text">AUTOSTART</span>
        </button>
        <div
          id="myDropdown"
          class="dropdown-content"
          :class="{ show: showDropdown }"
        >
          <a @click="autoStart(5)">5</a>
          <a @click="autoStart(10)">10</a>
          <a @click="autoStart(20)">20</a>
          <a @click="autoStart(50)">50</a>
        </div>
      </div>
      <button
        class="btn control-button btn-turn btn-landscape"
        :class="{
          disabled: this.isAvailableTurn(),
        }"
        @click="turnRoulette"
      >
        <img
          class="control-button__img"
          src="../assets/images/btn_reset.png"
          alt=""
        />
        <span class="control-button__text">GIRA</span>
      </button>
    </div>
    <!-- <div class="controls-slider">
      <img
        src="../assets/images/scroll-bg.png"
        alt=""
        class="controls-slider__bg"
      />
      <p class="controls-slider__amount">
        <span class="controls-slider__amount--number">10</span> GIRI
      </p>
      <div class="slider">
        <span class="slider-label">AVVIA AUTOMATICO</span>
      </div>
      <button class="btn-play">
        <img src="../assets/images/btn_play.png" alt="" />
      </button>
    </div> -->
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "GameControl",
  data() {
    return {
      showDropdown: false,
    };
  },
  computed: {
    ...mapState(["is_turning", "mode"]),
    ...mapGetters(["stakeTotal"]),
  },
  methods: {
    cancelLast() {
      this.$store.dispatch("cancelLast");
    },
    clearAll() {
      this.$store.dispatch("clearAll");
    },
    turnRoulette() {
      this.$store.dispatch("setMode", { mode: "normalSpin-start" });
    },
    doubleChip() {
      this.$store.dispatch("doubleChip");
    },
    autoStart(count) {
      this.$store.dispatch("setMode", { mode: "autoStart-start", count });
      this.showDropdown = false;
    },
    openDropdownMenu() {
      if (!this.isAvailableTurn()) this.showDropdown = !this.showDropdown;
    },

    isAvailableTurn() {
      return (
        this.is_turning ||
        !this.stakeTotal ||
        this.mode === "autoStart-start" ||
        this.mode === " normalSpin-start"
      );
    },
    isAvailablePlace() {
      return (
        this.is_turning ||
        this.mode === "autoStart-start" ||
        this.mode === " normalSpin-start"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.controls {
  text-align: center;
  margin-top: 1vw;
  width: 49vw;
  margin-left: -3vw;
  &-buttons {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    .dropdown-btn {
      position: relative;
      button.btn {
        position: relative;
        max-width: 100%;
        z-index: 12;
      }
      .dropdown-content {
        display: none;
        position: absolute;
        bottom: calc(100% - 25px); /* added this attribute */
        left: calc(50% - 2vw);
        background-color: #114706;
        border: 3px solid #e6d593;
        border-radius: 50px 50px 0px 0px;
        color: white;
        width: 4vw;
        overflow: auto;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }
      .dropdown-content.show {
        display: block;
      }

      .dropdown-content a {
        color: white;
        text-decoration: none;
        display: block;
        width: 2.5vw;
        margin: auto;
        border-bottom: 1px solid #e6d593;
        margin: 20px auto 10px;
        padding-bottom: 5px;
        font-weight: bold;
        z-index: 10;
      }
      .dropdown-content a:last-child {
        border-bottom: none;
        padding-bottom: 25px;
      }
    }
  }
  .control-button {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: -webkit-center;
    max-width: 20%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover img {
      transform: scale(1.1);
    }
    &__img {
      display: block;
      transition: all 0.3s ease-in-out;
      width: 6vw;
    }
    &__text {
      display: block;
      margin-top: 10px;
      color: white;
      font-size: clamp(12px, 1.1vw, 20px);
      width: 6vw;
    }
  }
  .btn-portrait {
    display: none;
  }
  .btn-landscape {
    display: block;
  }

  .control-button.btn-turn img {
    width: 9vw;
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
.btn.disabled {
  filter: grayscale(1);
  cursor: not-allowed;
  pointer-events: none;
}
@media screen and (max-width: 1080px) {
  .controls {
    margin-left: -16vw;
    width: 80vw;
    &-buttons {
      align-items: center;
      justify-content: center;
      gap: 1vw;
    }
    .dropdown-btn {
      .dropdown-content {
        bottom: calc(100% - 25px); /* added this attribute */
        left: calc(50% - clamp(50px, 7vw, 70px) / 2);
        width: clamp(50px, 7vw, 70px);
      }
      .dropdown-content a {
        width: 30px;
        margin: auto;
        border-bottom: 1px solid #e6d593;
        margin: 20px auto 10px;
        padding-bottom: 5px;
      }
      .dropdown-content a:last-child {
        border-bottom: none;
        padding-bottom: 25px;
      }
    }
    .control-button {
      &__img {
        width: 12vw;
      }
      &__text {
        width: auto;
      }
    }
    .control-button.btn-turn img {
      width: 16vw;
      max-width: 16vw;
    }
    .btn-portrait {
      display: block;
    }
    .btn-landscape {
      display: none;
    }
  }
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
