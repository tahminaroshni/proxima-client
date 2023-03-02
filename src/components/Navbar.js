import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-14 border-b border-sky-700 px-10">
      <Link to="/" className="text-sky-400 text-xl">Proxima</Link>
    </div>
  );
};

export default Navbar;