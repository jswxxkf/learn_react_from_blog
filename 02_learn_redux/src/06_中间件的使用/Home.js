import React, {PureComponent} from "react";
import {connect} from "react-redux";

import {
  addAction,
  getHomeMultidataAction
} from "./actionCreators";

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultidata();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数：{this.props.counter}</h2>
        <button onClick={e => this.props.addNumber(1)}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber(number) {
      dispatch(addAction(number));
    },
    getHomeMultidata() {
      dispatch(getHomeMultidataAction());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)