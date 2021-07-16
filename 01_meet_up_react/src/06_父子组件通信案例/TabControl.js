import React, {Component} from "react";

export default class TabControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    }
  }

  itemClicked(index) {
    this.setState({
      currentIndex: index
    })
    this.props.itemClicked(index)
  }

  render() {
    const {titles} = this.props
    const {currentIndex} = this.state
    return (
      <div className="tab-control">
        {
          titles.map((item, index) => {
            return (
              <div className="tab-item" onClick={e => this.itemClicked(index)}>
                <span className={"title " + (index === currentIndex ? "active" : "")}>{item}</span>
              </div>
            )
          })
        }
      </div>
    );
  }
}