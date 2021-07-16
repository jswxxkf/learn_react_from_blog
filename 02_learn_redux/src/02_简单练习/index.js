const redux = require("redux")

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1}
    case "DECREMENT":
      return {...state, counter: state.counter - 1}
    case "ADD_NUMBER":
      return {...state, counter: state.counter + action.number}
    default:
      return state
  }
};

const store = redux.createStore(reducer);

store.subscribe(() => {
  // 在每次派发action之后，监听store的变化
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT"
})

store.dispatch({
  type: "DECREMENT"
})

store.dispatch({
  type: "ADD_NUMBER",
  // 相当于payload
  number: 5
})