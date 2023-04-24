import { useContractRead } from "wagmi";

const useReadWithArgs = (address, abi, functionName, args) => {
    const {
        data,
        error,
        isLoading,
        isSuccess,
        isError,
    } = useContractRead({
        address: address,
        abi: abi,
        functionName: functionName,
        args: args,
        watch: true,
    })

    return({
        data,
        error,
        isLoading,
        isSuccess,
        isError,
    })
}

export default useReadWithArgs;