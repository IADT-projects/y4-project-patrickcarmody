import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Button, Divider, Grid, IconButton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAccount, useBalance } from "wagmi";
import PageContainer from "../../components/PageContainer";
import { UserContext } from "../../context/UserContext";
import axios from '../../config';
import useWithdraw from "../../hooks/useWithdraw";
import { ethers } from "ethers";
import useReadWithArgs from "../../hooks/useReadWithArgs";
import GetTotalDepositsABI from '../../assets/abi/getTotalDeposits.json';

const Withdraw = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [charity, setCharity] = useState({});
    const [totalRaised, setTotalRaised] = useState(0);
    const [contractBalance, setContractBalance] = useState(0);
    
    const { data: balanceData } = useBalance({
        address: charity.address,
        watch: true,
    })

    const { data: totalDepositsData } = useReadWithArgs(charity.address, GetTotalDepositsABI, "getTotalDeposits", []);

    useEffect(() => {
        if(balanceData) {
            setContractBalance(balanceData.formatted);
        }
        if(totalDepositsData) {
            setTotalRaised(ethers.utils.formatEther(totalDepositsData));
        }
    })
    useEffect(() => {
        axios.get(`/charities/${id}`)
        .then((res) => {setCharity(res.data);})
        .catch((err) => {console.error(err)})
    }, [])

    const { withdraw, isLoading } = useWithdraw(charity.address);

    const handleWithdraw = () => {
        withdraw?.()
    }
    
    return(
        <PageContainer title='Withdraw' description='withdraw'>
        <Grid container direction={"row"}>
            <IconButton onClick={() => navigate(-1)}>
                <KeyboardArrowLeft/>
            </IconButton>
            <Typography variant="h3" marginY={2}>Withdraw Balance</Typography>
        </Grid>
        <Box
            sx={{ 
                padding: 3, 
                width: '100%', 
                height: '100%', 
                bgcolor: '#fafafa',
                border: '1px solid #f2f2f2',
                borderRadius: 2
            }}
        >
            <Grid container>
                <Grid item md={6} sx={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            alignItems: 'center'
                        }}
                    >
                        <Typography textAlign='center' sx={{ mb: 3.5, fontSize: "20px", fontWeight: 'bold' }}>
                            {charity.title}
                        </Typography>
                        <Stack spacing={2}
                            sx={{
                                justifyContent: 'center',
                                mr: 2,
                                borderRadius: 2,
                                width: '100%',
                                height: '180px',
                                p: 2,
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            }}
                        >
                            <Typography sx={{ fontSize: "15px", fontWeight: 550 }}>
                                Available balance: {contractBalance} MATIC
                            </Typography>
                            <Divider/>
                            <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                                Total Raised: {totalRaised} MATIC
                            </Typography>
                            <Divider/>
                            <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
                                <b>Total withdrawn: TBD MATIC</b>
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item md={6} sx={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            alignItems: 'center'
                        }}
                    >
                        <Typography textAlign='center' sx={{ mb: 3.5, fontSize: "20px", fontWeight: 'bold' }}>
                            Withdraw
                        </Typography>
                        <Stack spacing={2}
                            sx={{
                                ml: 2,
                                borderRadius: 2,
                                width: '100%',
                                height: '180px',
                                p: 2,
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            }}
                        >
                            <Typography sx={{fontSize: '15px'}}>Withdrawing your charity's balance will not affect the progress displayed on the site</Typography>
                            <Typography textAlign={'center'} sx={{fontSize: '15px', fontWeight: 500}}>Click below to withdraw {contractBalance} MATIC</Typography>
                            <Button variant="contained" onClick={handleWithdraw} disabled={contractBalance < 0.01}>
                                { isLoading ? ("Loading") : ("Withdraw")}
                            </Button>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </PageContainer>
    )
}

export default Withdraw;