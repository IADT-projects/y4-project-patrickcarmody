import { Grid, Paper } from "@mui/material";
import CampaignInfo from "../components/ui/CampaignInfo";
import ContributeWindow from "../components/ui/ContributeWindow";

const CampaignPage = (campaign) => {
    return (
        <>
            <Grid container spacing={1} direction="row">
                <Grid item xs={8} >
                    <CampaignInfo/>
                </Grid>
                <Grid item xs={4}>
                    <ContributeWindow/>
                </Grid>
            </Grid>
        </>
    )
}

export default CampaignPage;