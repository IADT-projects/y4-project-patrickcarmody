import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";


function useDeposit(address, amount) {
    const {
        config,
        error: prepareError,
        isError: isPrepareError,
    } = usePrepareContractWrite({
        address: address,
        abi: [
            {
                name: "deposit",
                type: "function",
                stateMutability: 'payable',
                inputs: [],
                outputs: [],
            },
        ],
        functionName: "deposit",
        overrides: {
            value: amount,
        },
    });

    const { data, write: deposit, error, isError } = useContractWrite(config);

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash,
    });

    return({
        deposit,
        isLoading,
        isSuccess,
        isError: isPrepareError || isError,
        error: (prepareError || error)?.message
    })
}

export default useDeposit;