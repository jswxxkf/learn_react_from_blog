import React, {PureComponent, createRef} from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.titleRef = createRef()
    this.titleEl = null
  }

  render() {
    return (
      <div>
        <h2 ref="title">String Ref</h2>
        <h2 ref={this.titleRef}>Create Ref obj</h2>
        <h2 ref={element => this.titleEl = element}>Callback Ref</h2>

        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    );
  }

  changeText() {
    // 针对字符串ref
    this.refs.title.innerHTML = "你好啊，李银河";
    // 针对createRef对象引用的ref，通过.current取出对应原生DOM元素
    this.titleRef.current.innerHTML = "你好啊，李银河";
    // 针对回调函数保存的元素对象
    this.titleEl.innerHTML = "你好啊，李银河";
  }
};