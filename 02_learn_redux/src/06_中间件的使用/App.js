import React, {PureComponent} from "react";
// sub spn
import Home from "./Home";
import Profile from "./Profile";
// state manager
import store from "./index";
import {Provider} from "react-redux";

export default class APP extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Home/>
        <Profile/>
      </Provider>
    );
  }
};