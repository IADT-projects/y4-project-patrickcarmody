import { Box, Button, CardContent, Divider, Stack, TextField, Typography } from "@mui/material"
import Progress from "./Progress"
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import useDeposit from "../../hooks/useDeposit";
import useReadWithArgs from "../../hooks/useReadWithArgs";
import { ethers } from "ethers";
import GetContributionABI from '../../assets/abi/getContribution.json';
import GetTotalDepositsABI from '../../assets/abi/getTotalDeposits.json';
import { Web3Button } from "@web3modal/react";

const ContributeWindow = ({campaign}) => {
    
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const [totalDeposited, setTotalDeposited] = useState(0);
    const [userTotalDeposited, setUserTotalDeposited] = useState(0);

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
        <Box
            sx={{
                display: 'flex',
                width: "100%",
                height: '350px',
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
                        <Typography variant="h4">Please connect your wallet to donate</Typography>
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
                    filter: isConnected ? 'none' : 'blur(5px)' // add filter property
                }}
                >
                    <Typography mt={3} mb={2} variant="h5" textAlign={'center'}>Donate</Typography>
                    <Progress campaign={campaign}/>
                    <TextField 
                    type='number'
                    id='amount'
                    value={amount}
                    onChange={handleInputChange}
                    placeholder='Amount'
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
                        ml: 2,
                        mb: 2
                    }}
                    >
                    Donate
                    </Button>
                    
                    <Stack spacing={0.5} alignItems='center'>
                        <Divider sx={{width: "90%", mb: 1}}/>
                        <Box sx={{ px: 2, width: "100%", display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="body1" textAlign="left" sx={{width: '50%'}}>Total raised:</Typography>
                            <Typography variant="body1" textAlign='right' sx={{width: '50%'}}>{totalDeposited} MATIC</Typography>
                        </Box>
                        <Box sx={{ px: 2, width: "100%", display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="body1" textAlign="left" sx={{width: '50%'}}>Your donations:</Typography>
                            <Typography variant="body1" textAlign='right' sx={{width: '50%'}}>{userTotalDeposited} MATIC</Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}

export default ContributeWindow;