import { createContext, useContext, useState, useMemo } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useState();

  const state = useMemo(() => ({ token, setToken }), []);

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
