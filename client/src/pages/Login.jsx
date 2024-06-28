import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      const data = await response.json();
      if (!data.token) {
        throw new Error("Error while sending user data");
      }
      setToken(data.token);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" ref={emailRef} />
      <input
        type="password"
        name="password"
        placeholder="********"
        ref={passwordRef}
      />
      <button type="submit">Login</button>
    </form>
  );
}
