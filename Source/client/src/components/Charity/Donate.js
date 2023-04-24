import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { ethers } from "ethers";
import { useAccount, useBalance } from "wagmi";
import useDeposit from "../../hooks/useDeposit";
import useReadWithArgs from "../../hooks/useReadWithArgs";
import GetTotalDepositsABI from '../../assets/abi/getTotalDeposits.json';

const Donate = ({charity}) => {
    
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const [totalDeposited, setTotalDeposited] = useState(0);
    
    const amountWei = parseEther(amount || "0");
    const { address } = useAccount();
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

    const handleMaxClick = () => {
        if (balance) {
            setAmount(formatEther(balance.toString()));
        }
    }


    return(
        <Box 
            sx={{
                display: 'flex',
                width: "100%",
                height: '260px',
                justifyContent: 'center',
            }}
        >
            <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: "95%",
                    height: '95%',
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
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
                        ml: 2
                    }}
                >
                    Donate
                </Button>
            </Box>
        </Box>
    )
}

export default Donate;