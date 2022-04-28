import { NEXT_NUMBER, PREVIOUS_NUMBER } from "./actionTypes";

export const changeNext = (nextNumber) => ({
  type: NEXT_NUMBER,
  nextNumber: nextNumber,
});

export const changePrevious = (previousNumber) => ({
  type: PREVIOUS_NUMBER,
  previousNumber: previousNumber,
});
