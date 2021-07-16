import React, {PureComponent} from "react";

class Header extends PureComponent {
  render() {
    const {name, age} = this.props
    return <h2>Header {name + age}</h2>
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header name="xkf" age={24}/>
      </div>
    );
  }
};

function enhanceProps(WrapperCpn, otherProps) {
  return props => <WrapperCpn {...props} {...otherProps}/>
}

const EnhanceHeader = enhanceProps(Header, {height: 1.88})