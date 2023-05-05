import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useBalance } from "wagmi";


const BalanceText = ({address}) => {

    const [contractBalance, setContractBalance] = useState(0);
    const { data: balance} = useBalance({
        address: address
    })

    useEffect(() => {
        if (balance) {
            setContractBalance(balance.formatted);
        }
    })

    return(
        <Typography>{contractBalance} MATIC</Typography>
    )
}

export default BalanceText;