const moneyLeft = ({ money, placedChips }) => {
  if (!placedChips) return money;
  const sum = placedChips.map((el) => el.price).reduce((a, b) => a + b, 0);
  return money - sum;
};

export const PLACE_CHIP = (state, { place, price }) => {
  if (moneyLeft(state) < price) return;
  if (
    state.placedChips &&
    state.placedChips.find(({ place: orgP }) => orgP === place)
  ) {
    state.kickSound1.currentTime = 0;
    state.kickSound1.play();
  } else {
    state.kickSound2.currentTime = 0;
    state.kickSound2.play();
  }
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
  const leftMoney = moneyLeft(state);
  if (leftMoney < state.money - leftMoney) return;
  state.placedChips.push(...state.placedChips);
};

export const doubleChip = (context) => {
  context.commit("DOUBLE_CHIP");
};
