import Vue from "vue";
import Vuex from "vuex";

import state from "./initialState";

import { MUTE_AUDIO, muteAudio } from "./components/muteAudio";
import { PLAY_AUDIO, playAudio } from "./components/playAudio";
import {
  TURN_ROULETTE,
  turnRoulette,
  STOP_ROULETTE,
  stopRoulette,
} from "./components/turnRoulette";
import { SET_MODE, setMode } from "./components/turnRoulette";
import { FINISHED_ROUND, finishedRound } from "./components/finishedRound";
import { START_DRAG, startDrag } from "./components/dragDrop";
import { DROP_DRAG, dropDrag } from "./components/dragDrop";
import { PLACE_CHIP, placeChip } from "./components/calcPrice";
import { CANCLE_LAST, cancelLast } from "./components/calcPrice";
import { CLEAR_ALL, clearAll } from "./components/calcPrice";
import { DOUBLE_CHIP, doubleChip } from "./components/calcPrice";
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations: {
    MUTE_AUDIO,
    PLAY_AUDIO,
    TURN_ROULETTE,
    FINISHED_ROUND,
    START_DRAG,
    DROP_DRAG,
    PLACE_CHIP,
    CANCLE_LAST,
    CLEAR_ALL,
    DOUBLE_CHIP,
    SET_MODE,
    STOP_ROULETTE,
  },
  actions: {
    muteAudio,
    playAudio,
    turnRoulette,
    finishedRound,
    startDrag,
    dropDrag,
    placeChip,
    cancelLast,
    clearAll,
    doubleChip,
    setMode,
    stopRoulette,
  },
  getters: {
    stakeTotal: (state) => {
      let total = 0;
      state.placedChips.forEach(({ price }) => (total += price));
      return total ? total.toFixed(2) : 0;
    },
  },
});
