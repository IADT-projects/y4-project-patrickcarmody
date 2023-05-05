import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Created = ({ redirectUrl }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(redirectUrl);
        }, 5000);

        return () => {
            clearTimeout(timer)
        }
    }, []);

    return(
        <>
            <h1>Created!</h1>
            <p>Redirecting you to your campaign page</p>
        </>
    )
}

export default Created;