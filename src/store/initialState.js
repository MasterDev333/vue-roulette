const state = {
  money: 1000,              // Startup money
  number: 0,          
  winsArr: [],              // Wins array
  winTot: 0,                // Win total
  historyArr: [],           // History
  audio_disabled: false,    // Mute audio
  audio_enabled: true,      // Enable audio
  audio_bg: new  Audio(require('../assets/sounds/music-bitsnbites-liver.mp3'))
}

export default state;