import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useProjectContext } from "../hooks/useProjectContext";

const Navbar = () => {
  const { user, dispatch: userDispatch } = useAuthContext();
  const { dispatch: projectsDispatch } = useProjectContext();

  const handleLogout = () => {
    // update UI
    userDispatch({ type: 'LOGOUT' });
    projectsDispatch({ type: 'SET_PROJECTS', payload: null })

    // clear localstorage
    localStorage.removeItem('user');
  }

  return (
    <div className="h-20 bg-slate-900 text-slate-50 border-b border-sky-700 px-10 flex justify-between items-center">
      <h2>
        <Link to="/" className="text-sky-400 text-xl">Proxima</Link>
      </h2>
      <nav>
        {
          !user ? <div className="flex gap-5 items-center">
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
          </div> : <div className="flex gap-5 items-center">
            <p>{user?.email}</p>
            <Link onClick={handleLogout} to='/logout' className="rounded bg-rose-500 text-rose-50 p-2 px-5">Logout</Link>
          </div>
        }

      </nav>
    </div>
  );
};

export default Navbar;