import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { ethers } from "ethers";
import { useAccount, useBalance } from "wagmi";
import useDeposit from "../../hooks/useDeposit";
import useReadWithArgs from "../../hooks/useReadWithArgs";
import GetTotalDepositsABI from '../../assets/abi/getTotalDeposits.json';
import { Web3Button } from "@web3modal/react";
import { Stack } from "@mui/system";

const Donate = ({charity}) => {
    
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const [totalDeposited, setTotalDeposited] = useState(0);
    
    const amountWei = parseEther(amount || "0");
    const { address, isConnected } = useAccount();
    const { data } = useBalance({
        address: address,
    });

    useEffect(() => {
        if(data) {
            setBalance(data.value);
        }
        if(totalDepositsData) {
            setTotalDeposited(ethers.utils.formatEther(totalDepositsData));
        }
    },[data]);

    // Deposit Function
    const {
        deposit,
        isLoading: depositLoading,
        isSuccess: depositSuccess,
        error: depositError,
    } = useDeposit(charity.address, amountWei);

    // Total deposited amount
    const {
        data: totalDepositsData,
        error: totalDepositsError,
        isLoading: totalDepositsIsLoading,
        isSuccess: totalDepositsIsSuccess,
        isError: totalDepositsIsError
    } = useReadWithArgs(charity.address, GetTotalDepositsABI, "getTotalDeposits", []);
    
    const handleInputChange = (e) => {
        setAmount(e.target.value);
    }
    
    const handleDeposit = () => {
        deposit?.();
    }
    
    return (
        <Box 
          sx={{
            display: 'flex',
            width: "100%",
            height: '270px',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: "95%",
              height: '95%',
              boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
              position: 'relative',
            }}
          >
            { !isConnected &&
              <Box 
                sx={{
                  position: 'absolute',
                  width: '100%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  textAlign: 'center'
                }}
              >
                <Stack spacing={3}>
                    <Typography variant="h4">Please connect your wallet</Typography>
                    <Web3Button/>
                </Stack>
              </Box>
            }
      
            <Box 
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                filter: isConnected ? 'none' : 'blur(5px)' // add filter property
              }}
            >
              <Typography mt={3} mb={2} variant="h5" textAlign={'center'}>Donate</Typography>
              <Typography textAlign={'center'} sx={{ fontWeight: '500', fontSize: '17px' }}>{totalDeposited} MATIC</Typography>
              <Typography textAlign={'center'}>Raised so far</Typography>
              <TextField 
                type='number'
                id='amount'
                value={amount}
                onChange={handleInputChange}
                placeholder="Amount"
                sx={{
                  mx: 2, 
                  my: 2
                }}
              />
              <Button
                onClick={handleDeposit}
                disabled={!deposit}
                variant="contained" 
                sx={{ 
                  width: '85px',
                }}
              >
                Donate
              </Button>
            </Box>
          </Box>
        </Box>
      );
      
      
      
}

export default Donate;