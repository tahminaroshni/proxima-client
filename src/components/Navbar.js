import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-20 bg-slate-900 text-slate-50 border-b border-sky-700 px-10 flex justify-between items-center">
      <h2>
        <Link to="/" className="text-sky-400 text-xl">Proxima</Link>
      </h2>
      <nav className="flex gap-5">
        <Link to='/login'>Login</Link>
        <Link to='/signup'>Signup</Link>
      </nav>
    </div>
  );
};

export default Navbar;