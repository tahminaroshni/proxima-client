import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setLoading(false);
    }

    if (res.ok) {
      setLoading(false);
      setError("");
      // update auth context
      dispatch({ type: 'LOGIN', payload: json })

      // save to localstorage
      localStorage.setItem('user', JSON.stringify(json));
    }
  }

  return {
    login,
    error,
    loading
  }
}
