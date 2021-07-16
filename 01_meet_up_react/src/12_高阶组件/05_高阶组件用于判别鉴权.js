import React, {PureComponent} from "react";

function LoginPage() {
  return <h2>LoginPage</h2>
}

function CartPage() {
  return <h2>CartPage</h2>
}
// 用于鉴权的高阶组件
function LoginAuth(Page) {
  return props => {
    if (props.isLogin) {
      return <CartPage/>;
    } else {
      return <LoginPage/>;
    }
  };
}

const AuthCartPage = LoginAuth(CartPage);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true}/>
      </div>
    )
  }
}