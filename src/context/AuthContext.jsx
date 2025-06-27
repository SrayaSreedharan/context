import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);

  const login = (email) => {
    setUserEmail(email);
  };

  return (
    <AuthContext.Provider value={{ userEmail, login }}>
      {children}
    </AuthContext.Provider>
  );
};
