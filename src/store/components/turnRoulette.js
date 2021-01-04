import { getRandomInt } from "../helpers";
import { getRouletteResult } from "../helpers";

export const TURN_ROULETTE = (state) => {
  state.is_turning = true;
  state.turning_deg =
    getRandomInt(1, state.num_count) * (360 / state.num_count) +
    getRandomInt(1, state.num_count) * 360;
};

export const turnRoulette = (context) => {
  context.commit("TURN_ROULETTE");
};

export const SET_MODE = (state, mode) => {
  state.mode = mode;
  if (mode === "autoStart-start") {
    state.turning_duration = 2;
    state.delay = 1;
  }
  if (mode === "normalSpin-start") {
    state.turning_duration = 3;
    state.delay = 2;
  }
};
export const STOP_ROULETTE = (state) => {
  state.latest_result = getRouletteResult(
    state.turning_deg,
    state.wheel_numbers
  );
  state.is_turning = false;
  state.turning_deg = 0;
  state.historyArr[state.finished_num] = state.latest_result;
  state.historyArr = [...state.historyArr];
  state.finished_num++;
};
export const stopRoulette = ({ commit, state }) => {
  commit("STOP_ROULETTE");
  if (state.mode === "autoStart-end-ready") {
    commit("SET_MODE", "autoStart-end");
  }
};

export const setMode = (context, { mode, count }) => {
  context.commit("SET_MODE", mode);
  if (mode === "autoStart-start") {
    context.commit("TURN_ROULETTE");
    const intervalId = setInterval(() => {
      context.commit("TURN_ROULETTE");
    }, 3500);
    setTimeout(() => {
      clearInterval(intervalId);
      context.commit("SET_MODE", "autoStart-end-ready");
    }, 3500 * (count - 1) + 500);
  }
  if (mode === "normalSpin-start") {
    context.commit("TURN_ROULETTE");
    setTimeout(() => {
      context.commit("SET_MODE", "normalSpin-end");
    }, 5000);
  }
};
