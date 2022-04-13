export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};