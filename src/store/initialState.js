const state = {
  num_count: 13,                // Roulette number count
  money: 1000,                  // Startup money
  number: 0,          
  winsArr: [],                  // Wins array
  winTot: 0,                    // Win total
  historyArr: new Array(12),    // History
  finished_num: 0,                // Finished number
  audio_disabled: true,         // Mute audio
  audio_enabled: false,         // Enable audio
  audio_bg: new  Audio(require('../assets/sounds/music-bitsnbites-liver.mp3')),
  is_turning: false,            // Turning flag
  turning_duration: 3,          // Turning Duration
  turning_speed: 300,           // Turning Speed
  turning_deg: 0,               // Turning Deg
  wheel_numbers: [9,2,7,6,12,4,0,5,11,3,10,1,8],
  latest_result: -1,            // Latest Result
}

export default state;