import { Box, Button, Divider, IconButton, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ContributeWindow from "../components/ui/ContributeWindow";
import { KeyboardArrowLeft } from "@mui/icons-material";
import PageContainer from "../components/PageContainer";
import UserIcon from "../components/users/UserIcon";
import axios from '../config';
import { useEffect, useState } from "react";
import { Stack } from "@mui/system";
import useReadWithArgs from "../hooks/useReadWithArgs";
import GetTotalDepositsAbi from '../assets/abi/getTotalDeposits.json';
import { ethers } from "ethers";

const CampaignPage = ({campaign}) => {
    const navigate = useNavigate();
    const [numberOfCampaigns, setNumberOfCampaigns] = useState(0);
    const [totalDeposited, setTotalDeposited] = useState(0)
    const [user, setUser] = useState({
        image: "",
        first_name: "",
        last_name: ""
    });

    const date = new Date(Date.parse(campaign.createdAt));
    const dateCreated = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })

    useEffect(() => {
        if (totalDepositedData) {
            setTotalDeposited(ethers.utils.formatEther(totalDepositedData));
        }
    });
    const { data: totalDepositedData } = useReadWithArgs(campaign.address, GetTotalDepositsAbi, "getTotalDeposits", []);
    const campaignaddress = `${campaign.address.substring(0,6)}...${campaign.address.substring(38)}`

    useEffect(() => {
        axios.get(`/users?address=${campaign.creator}`)
        .then((res) => {
            setUser(res.data[0]);
            axios.get(`/campaigns?creator=${campaign.creator}`)
            .then((response) => {
                setNumberOfCampaigns(response.data.length)
            })
            .catch((err) => {
                console.log(err);
            });
            })
        .catch((err) => {console.error(err)});
    }, []);
    
    
    return (
        <PageContainer title={campaign.title}>
            <Box sx={{width: "100%", display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
                <IconButton onClick={() => navigate(-1)}>
                    <KeyboardArrowLeft/>
                </IconButton>
                <Typography variant="h3" marginY={2}>{campaign.title}</Typography>
            </Box>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: {md: 'row', xs: 'column'}
            }}
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: { md: "66%", xs: '100%'},
                    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                }}
                >
                    <Box 
                        component={'img'}
                        src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681903209/${campaign.image}.png`}
                        sx={{
                            width: '100%',
                            height: '275px',
                            borderTopLeftRadius: "5px",
                            borderTopRightRadius: "5px"
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            p: 1,
                            px: 2,
                            whiteSpace: 'pre-wrap'
                        }}
                    >
                        <Typography variant="body1">{campaign.description}</Typography>
                        <Stack spacing={1}>
                            <Typography mt={2} mb={1} variant="h5" textAlign={'left'}>Campaign details</Typography>
                            <Divider/>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'left'}>Date Created:</Typography>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'right'} >{dateCreated}</Typography>
                            </Box>
                            <Divider/>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'left'}>Goal:</Typography>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'right'}>{campaign.goal} MATIC</Typography>
                            </Box>
                            <Divider/>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'left'}>Total raised:</Typography>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'right'}>{totalDeposited} MATIC</Typography>
                            </Box>
                            <Divider/>
                            <Box sx={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                                <Typography variant="body1" sx={{width: '50%'}} textAlign={'left'}>View on blockchain:</Typography>
                                <Link href={`https://mumbai.polygonscan.com/address/${campaign.address}`} sx={{width: '50%', textDecoration: 'none'}} target='_blank'>
                                    <Typography variant="body1" textAlign={'right'}>{campaignaddress}</Typography>
                                </Link>
                            </Box>
                        </Stack>
                    </Box>   
                </Box>
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: { md: "34%", xs: "100%" },
                        height: '100%',
                        justifyContent: 'center',
                    }}
                >
                    <ContributeWindow campaign={campaign}/>
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: "95%",
                                height: '255px',
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                alignContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Typography mt={3} mb={2} variant="h5" textAlign={'center'}>Creator</Typography>
                            <Typography mb={2} variant="h5" fontWeight={500} textAlign={'center'}>{user.first_name} {user.last_name}</Typography>
                            <Box sx={{ width: '100%', mb: 2, display: 'flex', flexDirection: 'row', }}>
                                <Box sx={{width: "50%", display: 'flex', justifyContent: 'center'}}>
                                    <UserIcon user={user} size={75}/>
                                </Box>
                                    <Stack sx={{ width: '50%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Typography>{numberOfCampaigns}</Typography>
                                        <Typography>Campaigns</Typography>
                                    </Stack>
                            </Box>
                            <Button variant="contained" href={`/users/${campaign.creator}`}>
                                View Profile
                            </Button>
                            
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </PageContainer>
    )
}

export default CampaignPage;