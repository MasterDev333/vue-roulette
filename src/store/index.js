import Vue from 'vue'
import Vuex from 'vuex'
import state from './initialState'
import { MUTE_AUDIO, muteAudio } from './components/muteAudio'
import { PLAY_AUDIO, playAudio } from './components/playAudio'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    MUTE_AUDIO,
    PLAY_AUDIO,
  },
  actions: {
    muteAudio,
    playAudio,
  },
  getters: {
    
  }
});