import React, { PureComponent } from "react";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      friends: [
        { name: "lilei", age: 20, height: 1.76 },
        { name: "lucy", age: 18, height: 1.65 },
        { name: "tom", age: 30, height: 1.78 },
      ],
    };
    this.incrementAge = this.incrementAge.bind(this);
  }

  incrementAge(index) {
    // 此做法即便是PureComponent也无法保证不执行render()
    // 因为即便是浅比较，也是两个不同friends的引用了
    const newFriends = [...this.state.friends];
    newFriends[index].age += 1;
    this.setState({
      friends: newFriends,
    });
  }

  render() {
    return (
      <div>
        <h2>朋友列表</h2>
        <ul>
          {this.state.friends.map((item, index) => {
            return (
              <li key={item.name}>
                <span>{`姓名：${item.name}, 年龄：${item.age}`}</span>
                <button onClick={this.incrementAge(index)}>年龄+1</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
