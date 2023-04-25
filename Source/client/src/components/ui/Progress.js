import { Grid, LinearProgress, Typography } from "@mui/material";
import { ethers } from "ethers";
import { useEffect } from "react";
import { useState } from "react";
import GetTotalDepositsABI from '../../assets/abi/getTotalDeposits.json';
import useReadWithArgs from "../../hooks/useReadWithArgs";

const Progress = ({campaign}) => {

    const [depositedAmount, setDepositedAmount] = useState(0);
    const [progress, setProgress] = useState(0);
    const [percent, setPercent] = useState("");

    const {
        data: totalDepositsData,
        error: totalDepositsError,
        isLoading: totalDepositsIsLoading,
        isSuccess: totalDepositsIsSuccess,
        isError: totalDepositsIsError
    } = useReadWithArgs(campaign.address, GetTotalDepositsABI, "getTotalDeposits", []);
    
    useEffect(() => {
        if(totalDepositsData) {
            setDepositedAmount(ethers.utils.formatEther(totalDepositsData));
            setProgress(depositedAmount / campaign.goal * 100);
            setPercent(Math.round(progress))
        }
        
    });

    return (
        <Grid container spacing={1} px={2.5}>
            <Grid item xs={12} >
                <Typography variant="body2">Progress ({percent}%)</Typography>
            </Grid>
            <Grid item xs={12}>
                <LinearProgress
                    variant="determinate"
                    color="secondary"
                    value={progress}
                    sx={{ height: 8, borderRadius: 1}}
                    />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2">{depositedAmount} MATIC</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body2" textAlign={"right"}>{campaign.goal} MATIC</Typography>
            </Grid>
        </Grid>
    )
}

export default Progress;