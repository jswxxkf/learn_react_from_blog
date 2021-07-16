import React, {PureComponent} from "react";
import styled from "styled-components";

const XKFButton = styled.button`
  padding: 8px 30px;
  border-radius: 5px;
`

const XKFWarnButton = styled(XKFButton)`
  background-color: red;
  color: #fff;
`

const XKFPrimaryButton = styled(XKFButton)`
  background-color: green;
  color: #fff;
`

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <XKFButton>我是普通按钮</XKFButton>
        <XKFWarnButton>我是警告按钮</XKFWarnButton>
        <XKFPrimaryButton>我是主要按钮</XKFPrimaryButton>
      </div>
    );
  }
};