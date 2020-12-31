export const PLACE_CHIP = (state, { place, price }) => {
  state.placedChips.push({ place, price });
};
export const placeChip = (context, { place, price }) => {
  context.commit("PLACE_CHIP", { place, price });
};

export const CANCLE_LAST = (state) => {
  state.placedChips.pop();
};
export const cancelLast = (context) => {
  context.commit("CANCLE_LAST");
};

export const CLEAR_ALL = (state) => {
  state.placedChips.splice(0, state.placedChips.length);
};
export const clearAll = (context) => {
  context.commit("CLEAR_ALL");
};

export const DOUBLE_CHIP = (state) => {
  state.placedChips.push(...state.placedChips);
};

export const doubleChip = (context) => {
  context.commit("DOUBLE_CHIP");
};
