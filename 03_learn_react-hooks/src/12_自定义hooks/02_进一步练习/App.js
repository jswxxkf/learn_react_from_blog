import {createContext, PureComponent} from "react";
import CustomHookContextDemo from "./02_进一步练习";

const UserContext = createContext();
const TokenContext = createContext();

export {
  UserContext,
  TokenContext
}

export default class App extends PureComponent {
  render() {
    return (
      <UserContext.Provider value={{name: "xkf", age: 25}}>
        <TokenContext.Provider value={"abcde"}>
          <CustomHookContextDemo/>
        </TokenContext.Provider>
      </UserContext.Provider>
    );
  }
};
