import { useContext } from "react"
import { AuthContext } from "../context/AuthContextProvider"

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("You must use AuthContext inside AuthContextProvider");
  }

  return context;
}