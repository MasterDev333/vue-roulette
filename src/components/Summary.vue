<template>
  <div class="summary">
    <ul class="summary-info">
      <li>
        SALDO MODALITA DEMO <span class="text-white">€</span
        ><span class="total-money">{{ money }}</span>
      </li>
      <li><span>PIAZZA LE TUE PUNTATE</span></li>
      <li>
        PUNTATA TOTALE <span class="text-white">€</span
        ><span class="total-shake">{{ stakeTotal }}</span>
      </li>
    </ul>
    <div class="summary-controls">
      <button
        v-if="this.audio_enabled"
        class="btn btn-summary-control btn-volumn"
        :class="{ active: !audio_enabled }"
        @click="muteAudio"
      >
        <img src="../assets/images/btn_volumn.png" alt="audio" />
      </button>
      <button
        v-if="!this.audio_enabled"
        class="btn btn-summary-control btn-mute"
        :class="{ active: audio_enabled }"
        @click="playAudio"
      >
        <img src="../assets/images/btn_mute.png" alt="mute" />
      </button>
      <button class="btn btn-summary-control btn-setting" @click="settings">
        <img src="../assets/images/btn_setup.png" alt="settings" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "Summary",
  computed: {
    ...mapState([
      "money",
      "winTot",
      "audio_disabled",
      "audio_enabled",
      "audio_bg",
    ]),
    ...mapGetters(["stakeTotal"]),
  },
  mounted() {
    // Play audio when loading
    if (this.audio_enabled) {
      this.audio_bg.play();
    }
  },
  methods: {
    muteAudio() {
      this.$store.dispatch("muteAudio");
    },
    playAudio() {
      this.$store.dispatch("playAudio");
    },
    settings() {},
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.summary {
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  background-color: var(--black-color);
  &-info {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    li {
      color: var(--yellow-color);
      font-size: clamp(16px, 1.45vw, 28px);
      span {
        color: white;
      }
    }
  }
  &-controls {
    display: flex;
    margin-left: 30px;
    align-items: center;
  }
}
.btn-summary-control {
  margin: 5px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease-in-out;
  &:hover,
  &.active {
    background-color: var(--yellow-color);
  }
}
</style>
