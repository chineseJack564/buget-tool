import React, { createContext, useEffect, useCallback, useMemo } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

let logoutTimer;

export const AuthContext = createContext();

const AuthContextProvider = function ({ children }) {
  const [currentUser, storeUser, clearStoredUser] = useLocalStorage('user');
  const [sessionExpDate, storeSessionExpDate, clearSessionExpDate] = useLocalStorage('sessionExpiration');
  const navigate = useNavigate();

  const handleUserLogin = (user) => {
    const expiration = new Date(jwtDecode(user.accessToken).exp * 1000);
    storeUser(user);
    storeSessionExpDate(expiration);
  };

  const handleUserLogout = () => {
    clearStoredUser();
    clearSessionExpDate();
    navigate('/');
  };

  const handleAutomaticLogout = useCallback(() => {
    handleUserLogout();
    navigate('/');
  }, [navigate]);

  useEffect(() => {
    if (currentUser && sessionExpDate) {
      const remainingTime = new Date(sessionExpDate).getTime() - new Date().getTime();
      logoutTimer = setTimeout(handleAutomaticLogout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [currentUser, sessionExpDate, handleAutomaticLogout]);

  const userStatus = useMemo(
    () => ({ currentUser, handleUserLogin, handleUserLogout }),
    [currentUser, handleUserLogin, handleUserLogout],
  );

  return (
    <AuthContext.Provider value={userStatus}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;