import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";

const UserIcon = ({user, size}) => {
    const [userImage, setUserImage] = useState(false);

    useEffect(() => {
        if(user.image) {
        if(user.image.length > 0) {
            setUserImage(true);
        }
    }
    }, [])
    
    return(
        <>
            {userImage ? (
                <Avatar src={`https://res.cloudinary.com/dzooewr3a/image/upload/v1680787491/${user.image}.png`} sx={{ height: `${size}px`, width: `${size}px` }}/>
                ) : (
                <Avatar sx={{ height: `${size}px`, width: `${size}px`, fontSize: `${size/3}px`, bgcolor: '#4694fa' }}>
                    {user.first_name.charAt(0)}
                </Avatar>
            )}
        </>
    )
}

export default UserIcon;