import React, {Component} from "react";
import TabControl from "./TabControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.titles = ["流行", "新款", "精选"]
    this.state = {
      currentTitle: "流行"
    }
  }

  itemClicked(index) {
    this.setState({
      currentTitle: this.titles[index]
    })
  }

  render() {
    return (
      <div>
        <TabControl itemClicked={index => this.itemClicked(index)} titles={this.titles}/>
        <h2>{this.state.currentTitle}</h2>
      </div>
    );
  }
}