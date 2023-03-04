import { useEffect } from "react";
import Project from "../components/Project";
import { useAuthContext } from "../hooks/useAuthContext";
import { useProjectContext } from "../hooks/useProjectContext";

const Projects = () => {
  const { projects, dispatch } = useProjectContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getProjects = async () => {
      const res = await fetch('http://localhost:5000/api/projects', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: "SET_PROJECTS", payload: data });
      }
    };

    if (user) {
      getProjects();
    }

  }, [dispatch, user])

  return (
    <div className="col-span-3">
      <h2 className="text-2xl text-sky-400">
        {
          !projects.length ? 'No Projects' : 'Your Projects'
        }
      </h2>

      <div className="projects-container grid grid-cols-2 gap-5 mt-5">
        {
          projects &&
          projects.map(project => <Project key={project._id} project={project} />)
        }
      </div>
    </div >
  );
};

export default Projects;