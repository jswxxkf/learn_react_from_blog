import React from "react";

export default function ButtonCpn(props) {
  const {operator, btnClick} = props
  return (
    <button onClick={btnClick}>{operator}</button>
  )
}