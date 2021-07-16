import React, {Component} from "react";

export default class NavBar extends Component {
  render() {
    const {leftSlot, midSlot, rightSlot} = this.props
    return (
      <div className="nav-bar">
        <div className="item left">{leftSlot}</div>
        <div className="item middle">{midSlot}</div>
        <div className="item right">{rightSlot}</div>
      </div>
    );
  }
}