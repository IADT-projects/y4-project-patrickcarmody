import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CampaignInfo from "../components/ui/CampaignInfo";
import ContributeWindow from "../components/ui/ContributeWindow";
import { KeyboardArrowLeft } from "@mui/icons-material";

const CampaignPage = ({campaign}) => {
    const navigate = useNavigate();
    return (
        <>
        <Grid container direction={"row"}>
            <IconButton onClick={() => navigate(-1)}>
                <KeyboardArrowLeft/>
            </IconButton>
            <Typography variant="h3" marginY={2}>View Campaign</Typography>
        </Grid>
            <Grid container spacing={1} direction="row">
                <Grid item xs={8} >
                    <CampaignInfo campaign={campaign} />
                </Grid>
                <Grid item xs={4}>
                    <ContributeWindow campaign={campaign} />
                </Grid>
            </Grid>
        </>
    )
}

export default CampaignPage;