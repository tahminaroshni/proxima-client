import { useProjectContext } from "../hooks/useProjectContext";
import { currencyFormatter } from "../utils/currencyFormatter";
import moment from "moment";
import { useState } from "react";
import Form from "./Form";
import { useAuthContext } from "../hooks/useAuthContext";

const Project = ({ project }) => {
  const { dispatch } = useProjectContext();
  const { user } = useAuthContext();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOverlay = () => {
    setIsOverlayOpen(false);
    setIsModalOpen(false);
  }

  const handleUpdate = () => {
    setIsOverlayOpen(true);
    setIsModalOpen(true);
  }

  const handleDelete = async () => {
    if (!user) {
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/projects/${project._id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error);

    dispatch({ type: "DELETE_PROJECT", payload: json });
  }

  return (
    <div className="bg-slate-800 border border-slate-700 p-5 w-80 flex flex-col gap-3 rounded-lg">
      <div>
        <h3 className="text-2xl tracking-wide truncate">{project.title}</h3>
        <h4 className="text-slate-300 text-sm tracking-wide">Id: {project._id}</h4>
        <span className="text-slate-500 text-xs uppercase font-medium">{project.tech}</span>
      </div>
      <div className="text-slate-300 text-[12px] flex justify-between">
        <div>
          <p>Budget: {currencyFormatter(project.budget)}</p>
          <p>Created: {moment(project.createdAt).format('MMMM DD YYYY, h:mm:ss')}</p>
          <p> Updated: {moment(project.updatedAt).format('MMMM DD YYYY, h:mm:ss')}</p>
        </div>
        <div>
          <p>Duration: {project.duration}{`week${project.duration > 1 ? 's' : ''}`}</p>
          <p>Manager: {project.manager}</p>
          <p>Dev: {project.dev}</p>
        </div>
      </div>
      <div className="flex gap-5 mt-3">
        <button onClick={handleUpdate} className="bg-amber-600 p-1 px-4 rounded text-amber-50">Update</button>
        <button onClick={handleDelete} className="text-rose-500 text-sm">Delete</button>
      </div>

      {/* OVERLAY */}
      <div
        onClick={handleOverlay}
        className={`overlay fixed z-10 w-screen h-screen top-0 left-0 right-0 bottom-0 bg-slate-900/50 backdrop-blur-sm ${isOverlayOpen ? "" : "hidden"}`}>
      </div>

      {/*  MODAL  */}
      <div className={`modal z-20 fixed w-1/2 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-800 border border-slate-700 rounded p-10 ${isModalOpen ? "" : "hidden"}`}>
        <Form project={project} setIsModalOpen={setIsModalOpen} setIsOverlayOpen={setIsOverlayOpen} />
      </div>
    </div>
  );
};

export default Project;