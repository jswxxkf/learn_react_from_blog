import React, {createContext} from "react";

import ContextHook from "./ContextHook";

export const UserContext = createContext();
export const ThemeContext = createContext();

export default function App() {
  return (
    <div>
      <UserContext.Provider value={{name: "xkf", age: 25}}>
        <ThemeContext.Provider value={{color: "red", fontSize: "20px"}}>
          <ContextHook/>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
};
