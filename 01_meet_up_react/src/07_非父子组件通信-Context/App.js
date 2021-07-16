import React, {Component} from "react";

const UserContext = React.createContext({nickname: "默认", level: -1})
const ThemeContext = React.createContext({color: "black"})

// class ProfileHeader extends Component {
//   render() {
//     return (
//       <div>
//         <h2>用户昵称：{this.context.nickname}</h2>
//         <h2>用户等级：{this.context.level}</h2>
//       </div>
//     );
//   }
// }

// 当使用context的组件是一个functional组件时，使用Consumer
// function ProfileHeader(props) {
//   return (
//     <div>
//       <UserContext.Consumer>
//         {value => {
//           return (
//             <div>
//               <h2>用户昵称：{value.nickname}</h2>
//               <h2>用户等级：{value.level}</h2>
//             </div>
//           )
//         }}
//       </UserContext.Consumer>
//     </div>
//   );
// }

// Consumer的嵌套
function ProfileHeader(props) {
  return (
    <div>
      <UserContext.Consumer>
        {value => {
          return (
            <ThemeContext.Consumer>
              {theme => {
                return (
                  <div>
                    <h2>用户昵称：{value.nickname}</h2>
                    <h2>用户等级：{value.level}</h2>
                    <h2>主题背景：{theme.color}</h2>
                  </div>
                )
              }}
            </ThemeContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

ProfileHeader.contextType = UserContext

class Profile extends Component {
  render() {
    return (
      <div>
        <ProfileHeader/>
        <ul>
          <li>设置1</li>
          <li>设置2</li>
          <li>设置3</li>
          <li>设置4</li>
          <li>设置5</li>
        </ul>
      </div>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <UserContext.Provider value={{nickname: "xkf", level: 1}}>
          <Profile/>
        </UserContext.Provider>
        <h2>其他内容</h2>
        {/*{ 若Profile没有作为Context.Provider的子组件，则使用context的默认值 }*/}
        {/*<Profile/>*/}
        {/*<UserContext.Provider value={{nickname: "xkf", level: 1}}>*/}

        {/*</UserContext.Provider>*/}
        {/*{ Provider的嵌套 }*/}
        <UserContext.Provider value={{nickname: "xkf", level: 1}}>
          <ThemeContext.Provider value={{color: "blue"}}>
            <Profile/>
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    );
  }
};