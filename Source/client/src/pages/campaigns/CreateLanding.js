import { Box, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import { Link } from "react-router-dom";
import { Apartment, Person } from "@mui/icons-material";
import '../../assets/css/index.css'

const CreateLanding = () => {
    return(
    <PageContainer title="Create" description="create a fundraiser">
        <Box>
            <Typography variant='h3' sx={{ marginY: 2 }}>Receive cryptocurrency for your cause</Typography>
            <Typography variant='h6'>Are you creating your own fundraiser or creating a page for your organization?</Typography>
        </Box>
        <Box display="flex" justifyContent='center' alignItems='center'>
            <Box 
                component={Link}
                to='/campaigns/create/user'
                sx={{
                    width: '40%',
                    height: '500px',
                    border: '2px dashed #3ea4f7',
                    borderRadius: 5,
                    margin: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Person sx={{ fontSize: '200px' }} />
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    User
                </Typography>
            </Box>
            <Box 
                component={Link}
                to='/campaigns/create/charity'
                sx={{
                    width: '40%',
                    height: '500px',
                    border: '2px dashed #3ea4f7',
                    borderRadius: 5,
                    margin: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Apartment sx={{ fontSize: '200px'}} />
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                    Organisation
                </Typography>
            </Box>
        </Box>
    </PageContainer>
    )
}

export default CreateLanding;
