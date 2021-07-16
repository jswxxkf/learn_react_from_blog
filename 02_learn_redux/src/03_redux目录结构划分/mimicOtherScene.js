import store from "./index.js";
import {addAction, subAction} from "./actionCreators.js";

// 注意action是一个对象
store.dispatch(addAction(5));
store.dispatch(subAction(2));