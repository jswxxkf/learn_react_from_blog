import React, {Component} from "react";

class ChildCpn1 extends Component {
  render() {
    const {name, age, height} = this.props
    return (
      <div>
        <h2>我是class组件</h2>
        <p>展示父组件传递而来的数据：{`${name}, ${age}, ${height}`}</p>
      </div>
    )
  }
}

function ChildCpn2(props) {
  const {name, age, height} = props;
  return (
    <div>
      <h2>我是functional组件</h2>
      <p>展示父组件传递而来的数据：{`${name}, ${age}, ${height}`}</p>
    </div>
  )
}

ChildCpn1.defaultProps = {
  name: "王小波",
  age: 40,
  height: 1.92
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn1/>
        <ChildCpn2 name="lidan" age="22" height="1.65"/>
      </div>
    );
  }
};