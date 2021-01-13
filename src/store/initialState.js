const state = {
  num_count: 13, // Roulette number count
  money: 1000, // Startup money
  number: 0,
  winsArr: [], // Wins array
  winTot: 0, // Win total
  historyArr: new Array(12), // History
  placedChips: [], // placed chips data [{place, price}]
  finished_num: 0, // Finished number
  audio_disabled: true, // Mute audio
  audio_enabled: false, // Enable audio
  audio_bg: new Audio(require("../assets/sounds/music-bitsnbites-liver.mp3")),
  kickSound1: new Audio(require("../assets/sounds/CasinoChips PE1097101.mp3")),
  kickSound2: new Audio(
    require("../assets/sounds/CasinoChips SE040304-v1.mp3")
  ),
  kickSound3: new Audio(
    require("../assets/sounds/RouletteWheelSpinn PE147501.mp3")
  ),
  is_turning: false, // Turning flag
  turning_duration: 10, // Turning Duration
  delay: 2, // turning Delay
  mode: "normalSpin", // normalSpin or autoStart
  turning_speed: 300, // Turning Speed
  turning_deg: 0, // Turning Deg
  wheel_numbers: [9, 2, 7, 6, 12, 4, 0, 5, 11, 3, 10, 1, 8],
  wheel_colors: [
    "#D60015",
    "#C9C9C9",
    "#D60015",
    "#C9C9C9",
    "#D60015",
    "#C9C9C9",
    "#19ED14",
    "#D60015",
    "#C9C9C9",
    "#D60015",
    "#C9C9C9",
    "#D60015",
    "#C9C9C9",
  ],
  latest_result: -1, // Latest Result
  drag: false, // Is Dragging
  dragPrice: 0, // Dragging Chip Price
};

state.kickSound1.volume = 0;
state.kickSound2.volume = 0;
state.kickSound3.volume = 0;
export default state;
