import React, {Fragment, PureComponent} from "react";

// Fragment 允许你将子列表分组，而无需向 DOM 添加额外节点；
export default class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <h2>当前计数: 0</h2>
        <button>+1</button>
        <button>-1</button>
      </Fragment>
    )
  }
}

// Fragment的段语法
export class App_ extends PureComponent {
  render() {
    return (
      <>
        <h2>当前计数: 0</h2>
        <button>+1</button>
        <button>-1</button>
      </>
    )
  }
}
