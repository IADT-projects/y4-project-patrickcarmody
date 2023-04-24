import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      localStorage.setItem('userData', JSON.stringify({}));
    }

    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus) {
      setIsAuthenticated(JSON.parse(storedAuthStatus));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const logout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <UserContext.Provider value={{ userData, setUserData, isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
  );
};
