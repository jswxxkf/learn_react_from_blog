import React, {useContext} from "react";
import {UserContext, TokenContext} from "./App";

export default function CustomHookContextDemo() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  console.log(user, token);
  return (
    <div>
      <h2>CustomHookContextDemo</h2>
    </div>
  )
};