import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';

// Pages
import Home from './pages/Home';

//  Components
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import All from './pages/All';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = React.useMemo(() => createTheme({
    typography: {
    fontFamily: 'Poppins'
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#807EDC',
      },
    },
  }), [darkMode]);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex'}}>
          <CssBaseline />
          <NavBar 
          darkMode={darkMode} 
          handleDarkModeToggle={handleDarkModeToggle}
          />
          <SideBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/all" element={<All/>}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
}

export default App;
