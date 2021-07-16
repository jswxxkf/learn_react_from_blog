import ButtonCpn from "./ButtonCpn";
import React, {Component} from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  changeCounter(count) {
    this.setState({
      counter: this.state.counter + count
    })
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <ButtonCpn operator="+1" btnClick={e => this.changeCounter(1)}/>
        <ButtonCpn operator="-1" btnClick={e => this.changeCounter(-1)}/>
      </div>
    );
  }
}