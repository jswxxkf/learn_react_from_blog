import React, {PureComponent} from "react";

import store from "../03_redux目录结构划分/index.js";
import {
  addAction
} from "../03_redux目录结构划分/actionCreators";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: store.getState().counter
    }
  }

  // 组件挂载完成后，监听store中state的变化
  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        counter: store.getState().counter
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e=>this.increment()}>+1</button>
        <button onClick={e=>this.addCounter()}>+5</button>
      </div>
    );
  }

  increment() {
    store.dispatch(addAction(1));
  }

  addCounter() {
    store.dispatch(addAction(5));
  }
};