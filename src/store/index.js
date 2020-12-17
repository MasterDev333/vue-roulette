import Vue from 'vue'
import Vuex from 'vuex'

import state from './initialState'

import { MUTE_AUDIO, muteAudio } from './components/muteAudio'
import { PLAY_AUDIO, playAudio } from './components/playAudio'
import { TURN_ROULETTE, turnRoulette } from  './components/turnRoulette'
import { STOP_ROULETTE, stopRoulette } from './components/stopRoulette'
import { FINISHED_ROUND, finishedRound } from './components/finishedRound'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    MUTE_AUDIO,
    PLAY_AUDIO,
    TURN_ROULETTE,
    STOP_ROULETTE,
    FINISHED_ROUND
  },
  actions: {
    muteAudio,
    playAudio,
    turnRoulette,
    stopRoulette,
    finishedRound
  },
  getters: {
    
  }
});