import { NavLink } from "react-router-dom";
import { useAuth } from "../services/AuthContext";

export default function Header() {
  const { token, setToken } = useAuth();
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {token === null ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button
            type="button"
            onClick={() => {
              setToken(null);
            }}
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
}
