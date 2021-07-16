import {CSSTransition} from "react-transition-group";

import {Card, Avatar, Button} from "antd";
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
import styled from "styled-components";



const StyleWrapper = styled.div`
  .card-enter,.card-appear {
    opacity: 0;
    transform: scale(.8);
  }
`
