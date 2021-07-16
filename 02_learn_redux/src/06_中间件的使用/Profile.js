import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import {
  subAction
} from "./actionCreators";

class Profile extends PureComponent {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <div>
          <h2>当前计数: {this.props.counter}</h2>
          <button onClick={e => this.props.subNumber(1)}>-1</button>
          <button onClick={e => this.props.subNumber(5)}>-5</button>
        </div>
        <h1>Banners</h1>
        <ul>
          {
            this.props.banners.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
        <h1>Recommends</h1>
        <ul>
          {
            this.props.recommends.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter,
    banners: state.banners,
    recommends: state.recommends
  }
}

const mapDispatchToProps = dispatch => {
  return {
    subNumber: function (number) {
      dispatch(subAction(number));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);