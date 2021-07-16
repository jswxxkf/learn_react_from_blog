import React, {createContext, PureComponent} from "react";

const UserContext = createContext({
  nickname: "默认",
  level: -1
})

// 相当于把UserContext内容合并(With)到对应组件的props中
function WithUser(WrapperCpn) {
  return props => {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <WrapperCpn {...props} {...value}/>
          }
        }
      </UserContext.Consumer>
    );
  };
}

function Header(props) {
  const {nickname, level} = props;
  return <h2>Header {"昵称:" + nickname + "等级:" + level}</h2>
}

function Footer(props) {
  const {nickname, level} = props;
  return <h2>Footer {"昵称:" + nickname + "等级:" + level}</h2>
}

const UserHeader = WithUser(Header);
const UserFooter = WithUser(Footer);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickname: "xkf", level: 90}}>
          <UserHeader/>
          <UserFooter/>
        </UserContext.Provider>
      </div>
    );
  }
};

