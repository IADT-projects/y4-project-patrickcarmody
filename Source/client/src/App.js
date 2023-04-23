import { CssBaseline, ThemeProvider } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import Router from './Router'
import { mainTheme } from './theme/mainTheme';

// Provider
import { UserProvider } from './context/UserProvider';

// Web3 Imports
import { Web3Modal } from '@web3modal/react';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, goerli, polygonMumbai } from 'wagmi/chains';
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';

//Web3
const chains = [mainnet, goerli, polygonMumbai]
const projectId = '0afb09d091a22717a29a967913a0a531'

const { provider } = configureChains(chains, [w3mProvider({projectId})])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains}),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains)

function App() {
  const routing = useRoutes(Router);
  const theme = mainTheme;

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <UserProvider>
            {routing}
          </UserProvider>
        </ThemeProvider>
      </WagmiConfig>
      <Web3Modal 
        projectId={projectId} 
        ethereumClient={ethereumClient}
        themeVariables={{
          '--w3m-font-family': 'Poppins, sans-serif',
          '--w3m-accent-color': '#377DFF',
          '--w3m-text-medium-regular-weight': 'heavy',
          '--w3m-text-medium-regular-size': '13px',
          '--w3m-button-border-radius': '4px',
        }}
      />
    </>
  );
}

export default App;