import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material"
import Progress from "./Progress"
import { formatEther, parseEther } from "ethers/lib/utils.js";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import useDeposit from "../../hooks/useDeposit";

const ContributeWindow = ({campaign}) => {
    
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const amountWei = parseEther(amount || "0");

    const { address } = useAccount();

    const { data } = useBalance({
        address: address,
    });

    useEffect(() => {
        if(data) {
            setBalance(data.value);
        }
    });

    const {
        deposit,
        isLoading: depositLoading,
        isSuccess: depositSuccess,
        error: depositError,
    } = useDeposit(campaign.address, amountWei);

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
        <>
            <Card elevation={2}>
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
                </CardContent>
            </Card>
        </>
    )
}

export default ContributeWindow;