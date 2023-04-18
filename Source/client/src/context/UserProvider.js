import { useState, useEffect } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    console.log('Loading user data from localStorage');
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
    console.log('Saving user data to localStorage');
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ userData, setUserData, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};
