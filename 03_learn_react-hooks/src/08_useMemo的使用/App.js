import React, {PureComponent} from "react";
import MemoHookDemo from "./MemoHookDemo2";

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <MemoHookDemo/>
      </div>
    );
  }
};