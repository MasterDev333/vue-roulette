export const PLAY_AUDIO = (state) => {
  state.audio_disabled = false;
  state.audio_enabled = true;
  state.audio_bg.play();
}

export const playAudio = (context) => {
  context.commit('PLAY_AUDIO')
}