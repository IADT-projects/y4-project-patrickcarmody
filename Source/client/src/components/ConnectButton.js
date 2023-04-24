import { Button } from "@mui/material"
import { useWeb3Modal } from "@web3modal/react"

const ConnectButton = () => {

    
    const [web3Modal, setModal] = useWeb3Modal();
    const isConnected = true

    const handleClick = async () => {
        const provider = await web3Modal.connect();
    }

    return(
        <Button 
            onClick={handleClick}
            variant={isConnected ? "outlined":"contained"}
            sx={{
                border: '1px solid #377DFF',
            }}
        >
            Connect Wallet
        </Button>
    )
}

export default ConnectButton;