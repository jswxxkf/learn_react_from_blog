import React, {Component} from "react";
import NavBar from "./NavBar";

export default class App extends Component {
  render() {
    const navLeft = <div>返回</div>
    const navMid = <div>购物街</div>
    const navRight = <div>更多</div>
    return (
      <div>
        <NavBar leftSlot={navLeft} midSlot={navMid} rightSlot={navRight}/>
      </div>
    );
  }
}