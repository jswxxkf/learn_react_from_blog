// 标签模板字符串
// function foo(...args) {
//   console.log(args);
// }
//
// foo("hello world");
//
// const name = "kobe"
// foo`Hello ${name}`;

import {PureComponent} from "react";
import styled from "styled-components";

const HomeStyleWrapper = styled.div`
  color: purple;

  h2 {
    font-size: 50px;
  }

  ul > li {
    color: orange;

    &:active {
      color: red;
    }

    &:hover {
      background-color: #aaa;
    }

    &::after {
      content: "abc";
    }
  }
`

export default class Home extends PureComponent {
  render() {
    return (
      <HomeStyleWrapper>
        <h2>我是Home标题</h2>
        <ul>
          <li>我是列表1</li>
          <li>我是列表2</li>
          <li>我是列表3</li>
        </ul>
      </HomeStyleWrapper>
    );
  }
};
