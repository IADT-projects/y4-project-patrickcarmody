import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";

const useWithdraw = (address) => {
    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: address,
        abi: [
            {
                name: 'withdraw',
                type: 'function',
                stateMutability: 'nonpayable',
                inputs: [],
                outputs: [],
            },
        ],
        functionName: "withdraw"
    });

    const { data, write: withdraw, error, isError } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    return({
        withdraw,
        isLoading,
        isSuccess,
        isError: isPrepareError || isError,
        error: (prepareError || error)?.message
    });
}

export default useWithdraw;