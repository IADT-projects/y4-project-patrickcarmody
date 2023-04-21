import { useEffect, useState, useRef } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { CloudinaryContext, Image } from "cloudinary-react";


const CreateStep6 = ({ formData, setFormData, stepData, setStepData }) => {
    const [bannerImage, setBannerImage] = useState("")
    const [uploaded, setUploaded] = useState(false);

    useEffect(() => {
        setFormData({ ...formData, bannerImage: bannerImage });
    }, [bannerImage]);

    useEffect(() => {
        setStepData({ bannerImage });
      }, [bannerImage]);

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
        setBannerImage(result.info.public_id)
        setUploaded(true);
        }
    });

    }, [])

    return(
        <>
            <Grid item xs={12}>
                <Typography variant="h3">Add a banner image</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="body1">This is displayed on your charity page.</Typography>
            </Grid>
            <Grid item xs={12}>
                {uploaded ? 
                <>
                    <Typography variant="body1">Cover image uploaded!</Typography>
                    <CloudinaryContext cloudName="dzooewr3a">
                        <Image publicId={bannerImage} width="300" crop="scale" />
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

export default CreateStep6;