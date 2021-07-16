import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer.js";
import thunk from "redux-thunk";

// 通过applyMiddleware来结合多个Middleware, 返回一个enhancer
// 将enhancer作为第二个参数传入到createStore中
const enhancer = applyMiddleware(thunk)
const store = createStore(reducer, enhancer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;