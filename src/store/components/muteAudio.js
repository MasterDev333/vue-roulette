export const MUTE_AUDIO = (state) => {
  state.audio_disabled = true;
  state.audio_enabled = false;
  state.audio_bg.pause();
}

export const muteAudio = (context) => {
  context.commit('MUTE_AUDIO')
}