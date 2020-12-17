import { getRandomInt } from '../helpers'

export const TURN_ROULETTE = (state) => {
  state.is_turning = true;
  state.turning_deg =  getRandomInt(5, state.num_count) * (360 / state.num_count) + getRandomInt(0, state.num_count) * 360;
}

export const turnRoulette = (context) => {
  context.commit('TURN_ROULETTE')
}