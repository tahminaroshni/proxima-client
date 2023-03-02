import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-3 items-center">
      <h2 className="text-2xl text-sky-400 mt-10">Signup</h2>

      <form className="flex flex-col gap-5">
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
        <button type="submit" className="form-control bg-sky-700 text-sky-50 rounded-md text-center font-medium text-lg uppercase tracking-wider p-3">Signup</button>
      </form>
    </div>
  );
};

export default Signup;