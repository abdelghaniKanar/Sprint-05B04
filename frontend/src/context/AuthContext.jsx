import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // TODO: Verify token with backend
      setUser({ id: 1, name: "Kanar Abdelghani" });
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      // TODO: Connect to backend API
      console.log("Login attempt:", credentials);
      const user = { id: 1, name: "Kanar Abdelghani" };
      setUser(user);
      localStorage.setItem("token", "dummy-token");
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const signup = async (userData) => {
    try {
      // TODO: Connect to backend API
      console.log("Signup attempt:", userData);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
