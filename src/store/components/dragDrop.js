export const START_DRAG = (state, price) => {
  state.drag = true;
  state.dragPrice = price;
};
export const DROP_DRAG = (state) => {
  state.drag = false;
  state.dragPrice = 0;
};

export const startDrag = (context, { price }) => {
  context.commit("START_DRAG", price);
};

export const dropDrag = (context) => {
  context.commit("DROP_DRAG");
};
