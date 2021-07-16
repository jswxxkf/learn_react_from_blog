import React, {PureComponent} from "react";
import styled from "styled-components";

const XKFInput = styled.input`
  color: blue;
  border-color: red;
  &:focus {
    outline-color: orange;
  }
`

const HomeWrapper = styled.div`
  color: ${props => props.color};
`;

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <XKFInput type="password"/>
        <HomeWrapper color="blue">
          <p>哈哈哈</p>
        </HomeWrapper>
      </div>
    );
  }
};