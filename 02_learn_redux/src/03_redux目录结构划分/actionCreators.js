import {
  ADD_NUMBER,
  SUB_NUMBER
} from "./constants.js";

const addAction = (count) => {
  return {
    type: ADD_NUMBER,
    num: count
  }
};

const subAction = (count) => {
  return {
    type: SUB_NUMBER,
    num: count
  }
};

export {
  addAction,
  subAction
}