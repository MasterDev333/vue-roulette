import { getRouletteResult } from '../helpers'

export const STOP_ROULETTE = (state) => {
  state.latest_result = getRouletteResult(state.turning_deg, state.wheel_numbers);
  state.is_turning = false;
  state.turning_deg = 0;
  state.historyArr[state.finished_num] = state.latest_result;
  state.historyArr = [...state.historyArr];
  state.finished_num++;
}

export const stopRoulette = (context) => {
  context.commit('STOP_ROULETTE')
}