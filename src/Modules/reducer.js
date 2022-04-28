import { NEXT_NUMBER, PREVIOUS_NUMBER } from "./actionTypes";

export const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case NEXT_NUMBER:
      const { nextNumber } = action;
      return state + nextNumber;

    case PREVIOUS_NUMBER:
      const { previousNumber } = action;
      return state - previousNumber;

    default:
      return state;
  }
};
