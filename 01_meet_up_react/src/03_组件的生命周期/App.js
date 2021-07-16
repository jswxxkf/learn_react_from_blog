import React, {Component} from "react";

class XKFTestCpn extends Component {
  render() {
    return (
      <div>
        XKFTestCpn
      </div>
    );
  }

  componentWillUnmount() {
    console.log("XKFTestCpn componentWillUnmount")
  }

}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    console.log("App's constructor invoked")
  }

  render() {
    console.log("render invoked")
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        {this.state.counter < 5 && <XKFTestCpn/>}
        <button onClick={e => this.increment()}>+1</button>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  componentDidMount() {
    console.log("componentDidMount invoked")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate invoked");
  }

  componentWillUnmount() {
    console.log("App's componentWillUnmount invoked")
  }
}