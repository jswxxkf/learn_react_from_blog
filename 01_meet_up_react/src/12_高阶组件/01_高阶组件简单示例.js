import React, {PureComponent} from "react";

// 高阶组件简称HOC
function HigherOrderCpn(WrapperCpn) {
  return class NewCpn extends PureComponent {
    render() {
      return <WrapperCpn/>
    }
  };
}

class App extends PureComponent {
  render() {
    return (
      <div>
        App
      </div>
    );
  }
}

export default HigherOrderCpn(App);