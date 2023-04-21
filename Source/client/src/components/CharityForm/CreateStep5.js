import { useEffect, useState, useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { CloudinaryContext, Image } from "cloudinary-react";


const CreateStep5 = ({ formData, setFormData, stepData, setStepData }) => {
    const [logoImage, setLogoImage] = useState("")
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        setFormData({ ...formData, logoImage: logoImage });
    }, [logoImage]);

    useEffect(() => {
        setStepData({ logoImage });
      }, [logoImage]);

    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
        cloudName: 'dzooewr3a',
        uploadPreset: 'kcjt9zeq',
        sources: ["local"],
        cropping: true,
        multiple: false,
        styles: {
            palette: {
                window: "#FFFFFF",
                windowBorder: "#191818",
                tabIcon: "#0078FF",
                menuIcons: "#437DC7",
                textDark: "#000000",
                textLight: "#FFFFFF",
                link: "#3F84D4",
                action: "#FF620C",
                inactiveTabIcon: "#0E2F5A",
                error: "#F44235",
                inProgress: "#0078FF",
                complete: "#20B832",
                sourceBg: "#FFFFFF"
            },
            fonts: {
                default: null,
                "'Poppins', sans-serif": {
                    url: "https://fonts.googleapis.com/css?family=Poppins",
                    active: true
                }
            }
        }
    }, (error, result) => {
        if (!error && result && result.event === 'success') {
        console.log("Image uploaded:", result.info)
        setLogoImage(result.info.public_id)
        setUploaded(true);
        }
    });

    }, [])

    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Upload your organisation's logo</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">User's will see this when browsing, as well as on your campaign page.</Typography>
            </Grid>
            <Grid item xs={12}>
                {uploaded ? 
                <>
                    <Typography variant="body1">Logo image uploaded!</Typography>
                    <CloudinaryContext cloudName="dzooewr3a">
                        <Image publicId={logoImage} width="300" crop="scale" />
                    </CloudinaryContext>
                </>
                : 
                <Button variant="contained" onClick={() => {widgetRef.current.open()}}>
                    Click here to upload
                </Button>}
                
            </Grid>
        </>
    )    
}

export default CreateStep5;