import state from "./initialState";

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getRouletteResult = (deg, array) => {
  let offset = ((deg % 360) / (360 / state.num_count));
  offset = state.num_count - Math.round(offset);
  let arrayHead = array.slice(0, offset);
  let arrayTail = array.slice(offset);
  array = arrayTail.concat(arrayHead);
  return array[9];
}
