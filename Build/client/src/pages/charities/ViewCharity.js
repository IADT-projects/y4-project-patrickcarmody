import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../../config/';
import PageContainer from "../../components/PageContainer";
import Donate from "../../components/Charity/Donate";
import '../../assets/css/index.css'

const ViewCharity = () => {
    const [category, setCategory] = useState("");
    const [charity, setCharity] = useState(null);
    
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`/charities/${id}`)
        .then((response) => {
            setCharity(response.data);
            console.log(response.data)
            setCategory(response.data.category.charAt(0).toUpperCase() + charity.category.slice(1));
        })
        .catch((err) => {
            console.error(err);
            console.log(err.response.data);
        });
    }, [id])

    if (!charity) return(<h1>Loading...</h1>)

    return(
        <>
        <PageContainer title={charity.title}>
        <Box sx={{width: "100%", display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
            <IconButton onClick={() => navigate(-1)}>
                <KeyboardArrowLeft/>
            </IconButton>
            <Typography variant="h3" marginY={2}>{charity.title}</Typography>
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
                    src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681903209/${charity.bannerImage}.png`}
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
                        flexDirection: 'row',
                        width: '100%',
                        height: '25%',
                        p: 1,
                        px: 2,
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    <Typography>{charity.description}</Typography>
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
                        height: '95%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Typography mt={3} mb={2} variant="h5" textAlign={'center'}>{charity.title}</Typography>
                    <Box 
                        component={'img'}
                        src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681903209/${charity.logoImage}.png`}
                        sx={{mb: 2, width: '120px', height: '120px'}}/>
                    <Link to={charity.website} target='_blank' sx={{ textDecoration: 'none' }}>
                        <Typography textAlign={'center'} color='primary' mb={2}>
                            Visit website
                        </Typography>
                    </Link>
                </Box>
            </Box>
            <Donate charity={charity}/>
            </Box>
        </Box>
        </PageContainer>
        </>
    );
}

export default ViewCharity;