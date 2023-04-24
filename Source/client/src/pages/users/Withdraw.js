import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useAccount } from "wagmi";
import axios from '../../config';
import useWithdraw from "../../hooks/useWithdraw";

const Withdraw = () => {

    const { address } = useAccount();
    const { id } = useParams();
    
    const {
        withdraw,
        isLoading: withdrawLoading,
        isSuccess: withdrawSuccess,
        error: withdrawError,
    } = useWithdraw(id);


    
    return(
        <Box
            sx={{
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                width: '900px',
                height: '400px',
                p: 5
            }}
        >
            <Typography variant="h3">Withdraw</Typography>
            <Button 
                variant="contained"
                sx={{
                    my: 5,
                    p: 3

                }}
            >
                Withdraw
            </Button>
        </Box>
    )
}

export default Withdraw;