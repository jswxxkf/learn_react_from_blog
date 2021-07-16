import redux from "redux";
import reducer from "./reducer.js";

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;