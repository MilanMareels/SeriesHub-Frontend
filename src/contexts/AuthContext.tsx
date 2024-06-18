import React, { useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  userId: string;
  setUserId: (userId: string) => void;
  login: (userId: string) => void;
  logout: () => void;
}

export const AuthContext = React.createContext<AuthContextType>({
  isAuthenticated: false,
  userId: "",
  login: () => {},
  logout: () => {},
  setUserId: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem("isAuthenticated") === "true";
  });
  const [userId, setUserId] = useState<string>(() => {
    return localStorage.getItem("userId") || "";
  });

  const login = (userId: string) => {
    setIsAuthenticated(true);
    setUserId(userId);
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("userId", userId);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserId("");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userId");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userId, setUserId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
