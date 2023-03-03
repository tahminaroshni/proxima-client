import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <Navbar />
      <div className="app bg-slate-900 text-slate-50 min-h-screen container mx-auto py-5">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to='/login' />} />
          <Route path="/projects" element={user ? <Projects /> : <Navigate to='/login' />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
