import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(email, password);

    // reset fields
    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-2xl text-sky-400 mt-10">Login</h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="email">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-96 bg-transparent border focus:border-sky-700 outline-none rounded-lg p-3 border-slate-500' type="email" id="email" placeholder='Enter your email' />
        </div>
        <div className="from-control flex flex-col gap-2">
          <label className='cursor-pointer' htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-96 bg-transparent border focus:border-sky-700 outline-none rounded-lg p-3 border-slate-500' type="password" id="password" placeholder='Enter your password' />
        </div>
        <button type="submit" className="form-control bg-sky-700 text-sky-50 rounded-md text-center font-medium text-lg uppercasefont-semibold uppercase tracking-wider p-3">Login</button>
      </form>
      <div>
        {
          error && <p className="text-rose-500">{error}</p>
        }
      </div>
    </div>
  );
};

export default Login;