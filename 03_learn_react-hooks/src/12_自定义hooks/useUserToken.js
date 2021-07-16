import {useContext} from "react";
import {TokenContext, UserContext} from "./02_进一步练习/App";

export default function useUserToken() {
  const user = useContext(UserContext);
  const token = useContext(TokenContext);
  return [user, token];
};