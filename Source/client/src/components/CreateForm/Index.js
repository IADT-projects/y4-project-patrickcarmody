import { Button, Stepper, Step, StepLabel, Grid } from "@mui/material";
import { useState } from "react";
import PageContainer from "../PageContainer";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import CreateStep5 from "./CreateStep5";

const CreateForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { label: 'Title', component:  <CreateStep1/>},
        { label: 'Category', component:  <CreateStep2/>},
        { label: 'Target', component:  <CreateStep3/>},
        { label: 'About', component:  <CreateStep4/>},
        { label: 'Confirm', component:  <CreateStep5/>},
    ]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
    <PageContainer title="Create Campaign" description="Create a form">
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Stepper activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step.label}>
                        <StepLabel>{step.label}</StepLabel>
                    </Step>
                    
                ))}
                </Stepper>
            </Grid>
            <Grid item xs={12} height={'500px'}>
                <Grid container spacing={5} sx={{ padding: 2 }}>        
                    {steps[activeStep].component}
                </Grid>
            </Grid>
            <Grid item xs={12} container width={"100%"} paddingX={2}>
                <Grid item xs={6}>
                    <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
                        Back
                    </Button>
                </Grid>
                <Grid item xs={6} justifyContent='flex-end'>
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    disabled={activeStep === steps.length - 1}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>    
        </Grid>
    </PageContainer>
    )
}

export default CreateForm;