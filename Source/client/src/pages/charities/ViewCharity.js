import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from '../../config/';
import PageContainer from "../../components/PageContainer";
import Donate from "../../components/Charity/Donate";

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
                height: '500px',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
            }}
            >
                <Box 
                    component={'img'}
                    src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681903209/${charity.bannerImage}.png`}
                    sx={{
                        width: '100%',
                        height: '50%',
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
                        px: 2,
                        mt: 1
                    }}
                >
                    <Box
                        component={'img'}
                        src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1681903209/${charity.logoImage}`}
                        sx={{
                            height: '100%',
                            maxWidth: '30%'
                        }}
                    />
                    <Box
                        sx={{
                            width: '70%',
                            p: 2
                        }}
                    >
                        <Typography sx={{fontSize: '15px', fontWeight: '600', mb: 1}}>Category: {category}</Typography>
                        <Link to={charity.website} sx={{ textDecoration: 'none' }}>
                            <Typography sx={{fontSize: '13px', fontWeight: '500', color: '3F84D4', textDecoration: 'none' }}>Visit Organisation Website</Typography>
                        </Link>
                    </Box>
                </Box>
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
            <Donate charity={charity}/>
        </Box>
        </PageContainer>
        </>
    );
}

export default ViewCharity;