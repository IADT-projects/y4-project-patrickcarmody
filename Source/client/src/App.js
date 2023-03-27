import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './Router'

import { mainTheme } from './theme/mainTheme';


function App() {
  const routing = useRoutes(Router);
  const theme = mainTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      {routing}
    </ThemeProvider>
  );
}

export default App;
