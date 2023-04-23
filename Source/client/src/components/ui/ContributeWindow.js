import { Box, Button, Card, CardContent, Divider, TextField, Typography } from "@mui/material"
import Progress from "./Progress"
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import useDeposit from "../../hooks/useDeposit";
import useReadWithArgs from "../../hooks/useReadWithArgs";
import { ethers } from "ethers";

import GetContributionABI from '../../assets/abi/getContribution.json';
import GetTotalDepositsABI from '../../assets/abi/getTotalDeposits.json';


const ContributeWindow = ({campaign}) => {
    
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const [totalDeposited, setTotalDeposited] = useState(0);
    const [userTotalDeposited, setUserTotalDeposited] = useState(0);

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
        if(userDeposit) {
            setUserTotalDeposited(formatEther(userDeposit))
        }
    });
    
    // Deposit Function
    const {
        deposit,
        isLoading: depositLoading,
        isSuccess: depositSuccess,
        error: depositError,
    } = useDeposit(campaign.address, amountWei);
    
    // Total deposited amount
    const {
        data: totalDepositsData,
        error: totalDepositsError,
        isLoading: totalDepositsIsLoading,
        isSuccess: totalDepositsIsSuccess,
        isError: totalDepositsIsError
    } = useReadWithArgs(campaign.address, GetTotalDepositsABI, "getTotalDeposits", []);

    // Total amount contributed by user
    const {
        data: userDeposit,
        error: userContributeError,
        isLoading: userContributeIsLoading,
        isSuccess: userContributeIsSuccess,
        isError: userContributeIsError,
    } = useReadWithArgs(campaign.address, GetContributionABI, "getContribution", [address])


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
        <Box sx={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}>
            <CardContent>
                <Typography variant="h5" textAlign={"center"} paddingY={2}>Donate</Typography>
                <Progress campaign={campaign}/>
                <Box paddingY={3} alignContent='center' display='flex'>
                    <TextField
                        type='number'
                        sx={{ width: '90%' }}
                        id='amount'
                        value={amount}
                        onChange={handleInputChange}
                    />
                    <Button
                        onClick={handleMaxClick}
                        sx={{
                            alignItems: 'center',
                            width: '10%',
                        }}    
                    >
                        MAX
                    </Button>
                </Box>
                <Button 
                    variant="contained"
                    onClick={handleDeposit}
                    disabled={!deposit}
                >
                    Donate
                </Button>
                <Divider sx={{ my: 1 }}/>
                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="body1" textAlign="left" sx={{width: '50%'}}>Total raised:</Typography>
                    <Typography variant="body1" textAlign='right' sx={{width: '50%'}}>{totalDeposited} MATIC</Typography>
                </Box>
                <Box sx={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                    <Typography variant="body1" textAlign="left" sx={{width: '50%'}}>Your donations:</Typography>
                    <Typography variant="body1" textAlign='right' sx={{width: '50%'}}>{userTotalDeposited} MATIC</Typography>
                </Box>
            </CardContent>
        </Box>
    )
}

export default ContributeWindow;