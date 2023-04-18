import { Box, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { Apartment, Person } from "@mui/icons-material";
import '../../assets/css/index.css'
import { Link } from "react-router-dom";

const CreateLanding = () => {
    return(
        <PageContainer title="Create" description="create a fundraiser">
            <Box>
                <Typography variant='h2' sx={{ marginY: 2 }}>Receive cryptocurrency for your cause</Typography>
                <Typography variant='h3' sx={{ fontWeight: 500 }}>Are you creating your own fundraiser or creating a page for your organization?</Typography>
            </Box>
            <Box sx={{ display: { sx: 'block' , md: 'flex' } }} mt={3}>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: {xs: "100%", md: "40%" }, height: '350px'}}>
                    <Box
                        component={Link}
                        to='/create/campaign'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            height: '320px',
                            width: '320px',
                            border: '1px solid #e6e6e6',
                            borderRadius: 4,
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            p: 4,
                            m: 2,
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            '&:hover': {
                                height: '330px',
                                width: '330px',
                                cursor: 'pointer',
                                backgroundColor: '#3BBBEB',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                                '& svg , & p': {
                                    color: '#FFFFFF',
                                }
                            },
                        }}
                    >
                        <Person sx={{ fontSize: '150px',  }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '25px', color: '#2b2b2b', lineHeight: '30px' }}>
                            User
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: {xs: "100%", md: "40%" }, height: '350px'}}>
                    <Box
                        component={Link}
                        to='/create/charity'
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            height: '320px',
                            width: '320px',
                            border: '1px solid #e6e6e6',
                            borderRadius: 4,
                            boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                            p: 4,
                            m: 2,
                            transition: 'all 0.3s ease',
                            boxSizing: 'border-box',
                            '&:hover': {
                                height: '330px',
                                width: '330px',
                                cursor: 'pointer',
                                backgroundColor: '#377DFF',
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
                                '& svg , & p': {
                                    color: '#FFFFFF',
                                }
                            },
                        }}
                    >
                        <Apartment sx={{ fontSize: '150px' }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '25px', color: '#2b2b2b', lineHeight: '30px' }}>
                            Organization
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </PageContainer>
    )
}

export default CreateLanding;
