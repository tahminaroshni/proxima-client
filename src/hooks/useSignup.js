import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setLoading(true);
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/user/signup`, {
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
    signup,
    error,
    loading
  }
}