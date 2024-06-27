import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users`,
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
      if (!data.id) {
        throw new Error("Error while sending user data");
      }
      navigate("/login");
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
      <button type="submit">Send</button>
    </form>
  );
}
