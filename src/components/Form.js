import React, { useState } from 'react';
import { useProjectContext } from '../hooks/useProjectContext';

const Form = ({ project, setIsModalOpen, setIsOverlayOpen }) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [tech, setTech] = useState(project ? project.tech : "");
  const [budget, setBudget] = useState(project ? project.budget : "");
  const [duration, setDuration] = useState(project ? project.duration : "");
  const [manager, setManager] = useState(project ? project.manager : "");
  const [dev, setDev] = useState(project ? project.dev : "");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);
  const { dispatch } = useProjectContext();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const addedProject = { title, tech, budget, duration, manager, dev };
    if (!project) {

      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addedProject)
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }
      console.log(json);
      if (res.ok) {
        setTitle("");
        setTech("");
        setBudget("");
        setDuration("");
        setManager("");
        setDev("");
        setError('');
        setEmptyFields([]);
        dispatch({ type: "CREATE_PROJECT", payload: json });
      }
    }

    if (project) {
      const res = await fetch(`http://localhost:5000/api/projects/${project._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addedProject)
      });
      const json = await res.json();

      if (!res.ok) {
        setError(json.error);
        setEmptyFields(json.emptyFields);
      }

      if (res.ok) {
        dispatch({ type: "UPDATE_PROJECT", payload: json });
        setError('');
        setEmptyFields([]);
        setIsModalOpen(false);
        setIsOverlayOpen(false);
      }
    }

  }

  return (
    <div className="col-span-2">
      <h2 className="text-2xl text-sky-400 mb-3">
        {
          !project ? "Add your projects" : "Update Project"
        }
      </h2>
      <form onSubmit={handleFormSubmit} className='flex flex-col gap-3'>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={` bg-transparent border focus:border-sky-700 outline-none rounded ${emptyFields.includes('title') ? 'border-rose-500' : ' border-slate-500'} ${project ? 'p-1' : 'p-3'}`} type="text" id="title" placeholder='Project title' />
        </div>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="tech">Technologies</label>
          <input
            value={tech}
            onChange={(e) => setTech(e.target.value)} className={` bg-transparent border focus:border-sky-700 outline-none rounded ${emptyFields.includes('tech') ? 'border-rose-500' : ' border-slate-500'} ${project ? 'p-1' : 'p-3'}`} type="text" id="tech" placeholder='Project technologies' />
        </div>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="budget">Budget</label>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)} className={` bg-transparent border focus:border-sky-700 outline-none rounded ${emptyFields.includes('budget') ? 'border-rose-500' : ' border-slate-500'} ${project ? 'p-1' : 'p-3'}`} type="number" id="budget" placeholder='Project budget' />
        </div>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="duration">Duration</label>
          <input
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className={` bg-transparent border focus:border-sky-700 outline-none rounded ${emptyFields.includes('duration') ? 'border-rose-500' : ' border-slate-500'} ${project ? 'p-1' : 'p-3'}`} type="number" id="duration" placeholder='Project duration' />
        </div>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="manager">Manager</label>
          <input
            value={manager}
            onChange={(e) => setManager(e.target.value)}
            className={` bg-transparent border focus:border-sky-700 outline-none rounded ${emptyFields.includes('manager') ? 'border-rose-500' : ' border-slate-500'} ${project ? 'p-1' : 'p-3'}`} type="text" id="manager" placeholder='Project manager' />
        </div>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="dev">Developers</label>
          <input
            value={dev}
            onChange={(e) => setDev(e.target.value)}
            className={` bg-transparent border focus:border-sky-700 outline-none rounded ${emptyFields.includes('dev') ? 'border-rose-500' : ' border-slate-500'} ${project ? 'p-1' : 'p-3'}`} type="number" id="dev" placeholder='Number of developers' />
        </div>
        <button className={`form-control bg-sky-700 text-sky-50 rounded-md text-center font-medium uppercase tracking-wider  ${project ? 'p-1' : 'p-3'}`} type="submit">
          {
            !project ? "Post" : "Confirm Update"
          }
        </button>

      </form>
      <div>
        {
          error ? error : ''
        }
      </div>
    </div>
  );
};

export default Form;