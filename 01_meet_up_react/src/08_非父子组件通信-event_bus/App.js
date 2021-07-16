import React, { Component } from "react";
import { EventEmitter } from "events";

const eventBus = new EventEmitter();

class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    // 显式地绑定this
    this.btnClicked = this.btnClicked.bind(this);
  }

  render() {
    return (
      <div>
        <button onClick={this.btnClicked}>按钮</button>
      </div>
    );
  }

  btnClicked() {
    eventBus.emit("headerClicked", "xkf", 25);
  }
}

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader />
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  componentDidMount() {
    eventBus.addListener("headerClicked", this.headerClicked);
  }

  headerClicked(name, age) {
    console.log(name, age);
  }

  componentWillUnmount() {
    eventBus.removeListener("headerClicked", this.headerClicked);
  }

  render() {
    return (
      <div>
        <Profile />
        <h2>其他内容</h2>
      </div>
    );
  }
}
