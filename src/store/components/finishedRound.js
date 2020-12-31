/**
 * Finish Round after 12th turning
 *
 * */
export const FINISHED_ROUND = () => {
  // state.historyArr = new Array(12);
  // state.finished_num = 0;
};

export const finishedRound = (context) => {
  context.commit("FINISHED_ROUND");
};
