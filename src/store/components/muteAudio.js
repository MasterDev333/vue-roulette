export const MUTE_AUDIO = (state) => {
  state.audio_disabled = true;
  state.audio_enabled = false;
  state.audio_bg.pause();
  // state.kickSound1.pause();
  // state.kickSound2.pause();
  // state.kickSound3.pause();
  state.kickSound3.volume = 0;
  state.kickSound2.volume = 0;
  state.kickSound1.volume = 0;
}

export const muteAudio = (context) => {
  context.commit('MUTE_AUDIO')
}