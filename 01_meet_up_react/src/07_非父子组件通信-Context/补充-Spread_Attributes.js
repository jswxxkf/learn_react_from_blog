import React, {Component} from "react";

class Greeting extends Component {
  render() {
    return (
      <div>
        <p>{this.props.firstName}</p>
        <p>{this.props.lastName}</p>
      </div>
    );
  }
}

function App1() {
  return <Greeting firstName="Dan" lastName="Li"/>
}

function App2() {
  const props = {firstName: "Kaifeng", lastName: "Xue"}
  return <Greeting {...props}/>
}

export default class App extends Component {
  render() {
    return (
      <div>
        <App1/>
        <App2/>
      </div>
    );
  }
};