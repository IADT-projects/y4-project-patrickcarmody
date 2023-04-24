import { verifyMessage } from "ethers/lib/utils.js";
import { useState } from "react";
import { useSignMessage } from "wagmi";

const useVerifyWallet = (msg, onSuccess) => {
    const [address, setAddress] = useState("");
    const {
        data,
        isError,
        isLoading,
        isSuccess,
        signMessage,
        status
    } = useSignMessage({
        message: msg,
        onSuccess(data, variables) {
            const address = verifyMessage(variables.message, data);
            setAddress(address);
            if(onSuccess) {
                onSuccess(address);
            }
        }
      })

    return({
        data,
        isError,
        isLoading,
        isSuccess,
        signMessage,
        status,
        address
    })
}

export default useVerifyWallet;
