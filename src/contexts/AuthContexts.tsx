import React, { createContext, useState, useEffect, ReactNode } from "react";

// Defining types for the authentication state and context
interface AuthState {
  user?: string;
  token?: string;
}

interface AuthContextType {
  auth: AuthState;
  setAuth: React.Dispatch<React.SetStateAction<AuthState>>;
}

// Creates the context with an empty default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Creates the provider component that will manage the authentication state
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const storedAuth: AuthState = JSON.parse(localStorage.getItem("auth") || "{}");

  const [auth, setAuth] = useState<AuthState>(storedAuth);

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
