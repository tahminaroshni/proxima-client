import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContextProvider";

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("You need to useProjectContext inside a projectContextProvider");
  }

  return context;
};