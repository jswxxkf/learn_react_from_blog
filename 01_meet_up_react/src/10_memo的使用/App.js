import React, {Component, memo, PureComponent} from "react";

const MemoHeader = memo(function () {
  console.log("MemoHeader Render invoked");
  return <h2>Header</h2>;
});

class Main extends PureComponent {
  render() {
    console.log("PureMain render invoked");
    return (
      <div>
        <MemoBanner/>
        <MemoProductList/>
      </div>
    );
  }
}

const MemoBanner = memo(function () {
  console.log("MemoBanner render invoked");
  return <div>Banner</div>;
});

const MemoProductList = memo(function () {
  console.log("ProductList render invoked");
  return (
    <ul>
      <li>商品1</li>
      <li>商品2</li>
      <li>商品3</li>
      <li>商品4</li>
      <li>商品5</li>
    </ul>
  );
});

function Footer() {
  console.log("Footer Render invoked");
  return <h2>Footer</h2>
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "hello world"
    }
  }

  render() {
    console.log("App render invoked")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={e => this.increment()}>+1</button>
        <button onClick={e => this.changeText()}>修改文本</button>
        <MemoHeader/>
        <Main/>
        <Footer/>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText() {
    this.setState({
      message: '你好啊,李银河'
    })
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextState.counter !== this.state.counter) {
      return true
    }
    return false
  }
};
