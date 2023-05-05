import { Box, LinearProgress, Typography } from "@mui/material"
import useReadWithArgs from "../../hooks/useReadWithArgs";
import GetTotalDepositsABI from "../../assets/abi/getTotalDeposits.json";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

const Progress = ({ campaign }) => {

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
    
    return(
        <>
            <Box
                sx={{
                    height: '50px',
                    width: '100%'
                }}
            >
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: 13,
                        textAlign: "left",
                        fontFamily: 'Poppins',
                        paddingBottom: 1
                    }}
                >
                    Progress ({percent}%)
                </Typography>
                <LinearProgress
                    value={ progress }
                    variant="determinate"
                    color="primary"
                    sx={{
                        height: "8px",
                        borderRadius: "3px"
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography 
                        variant="body1"
                        sx={{
                            fontSize: 13,
                            fontFamily: 'Poppins',
                            paddingTop: 1
                        }}
                    >
                        {depositedAmount} MATIC
                    </Typography>
                    <Typography 
                        variant="body1"
                        sx={{
                            fontSize: 13,
                            fontFamily: 'Poppins',
                            paddingTop: 1
                        }}
                    >
                        {campaign.goal} MATIC
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default Progress;