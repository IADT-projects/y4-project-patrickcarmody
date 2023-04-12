import { Grid, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CampaignInfo from "../components/ui/CampaignInfo";
import ContributeWindow from "../components/ui/ContributeWindow";
import { KeyboardArrowLeft } from "@mui/icons-material";
import UserPreviewCard from "../components/users/UserPreviewCard";

const CampaignPage = ({campaign}) => {
    const navigate = useNavigate();
    return (
        <>
        <Grid container direction={"row"}>
            <IconButton onClick={() => navigate(-1)}>
                <KeyboardArrowLeft/>
            </IconButton>
            <Typography variant="h3" marginY={2}>{campaign.title}</Typography>
        </Grid>
            <Grid container spacing={1} direction="row">
                <Grid item lg={8} md={12}>
                    <CampaignInfo campaign={campaign}/>
                </Grid>
                <Grid item container lg={4} md={12} spacing={1}>
                    <Grid item lg={12} md={6} xs={12}>
                        <ContributeWindow campaign={campaign} />
                    </Grid>
                    <Grid item lg={12} md={6} xs={12}>
                        <UserPreviewCard address={campaign.creator}/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CampaignPage;