export const PLAY_AUDIO = (state) => {
  state.audio_disabled = false;
  state.audio_enabled = true;

  state.audio_bg.volume = 0.5;
  state.audio_bg.play();

  state.kickSound3.volume = 1.0;
  state.kickSound2.volume = 1.0;
  state.kickSound1.volume = 1.0;

  state.audio_bg.addEventListener(
    "ended",
    function() {
      state.audio_bg.currentTime = 0;
      state.audio_bg.play();
    },
    false
  );
};

export const playAudio = (context) => {
  context.commit("PLAY_AUDIO");
};
