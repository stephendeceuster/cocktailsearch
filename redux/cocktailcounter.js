// TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_COUNT = "SET_COUNT";

// INITIAL STATE
const initialState = {
  count: 0,
};

// ACTION CREATORS
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});
export const setCount = (int) => ({
  type: SET_COUNT,
  payload: int,
});

// REDUCER
const cocktailCounterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case SET_COUNT:
      return { ...state, count: payload };
    default:
      return { ...state };
  }
};

export default cocktailCounterReducer;
