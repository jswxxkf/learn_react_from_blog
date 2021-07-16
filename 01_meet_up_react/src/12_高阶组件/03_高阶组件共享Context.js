import React, {createContext, PureComponent} from "react";

const UserContext = createContext({
  nickname: "默认",
  level: -1
})

function Header(props) {
  return (
    <UserContext.Consumer>
      {
        value => {
          const {nickname, level} = value;
          return <h2>Header {`昵称：${nickname}, 等级：${level}`} {props.height}</h2>;
        }
      }
    </UserContext.Consumer>
  );
}

function Footer(props) {
  return (
    <UserContext.Consumer>
      {
        value => {
          const {nickname, level} = value;
          return <h2>Footer {`昵称：${nickname}, 等级：${level}`}</h2>
        }
      }
    </UserContext.Consumer>
  )
}

// higherOrder Cpn
function enhanceProps(WrapperCpn, otherProps) {
  return props => <WrapperCpn {...props} {...otherProps} />
}

const EnhanceHeader = enhanceProps(Header, {height: 1.88})

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickname: "xkf", level: 90}}>
          <EnhanceHeader/>
          <Footer/>
        </UserContext.Provider>
      </div>
    );
  }
};