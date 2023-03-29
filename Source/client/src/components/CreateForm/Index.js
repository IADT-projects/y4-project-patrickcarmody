import { Button, Stepper, Step, StepLabel, Grid } from "@mui/material";
import { useState } from "react";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";

const CreateForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const steps = [
        { label: 'Title', component:  <CreateStep1/>},
        { label: 'Category', component:  <CreateStep2/>},
        { label: 'Target', component:  <CreateStep3/>},
        { label: 'About', component:  <CreateStep4/>},
        { label: 'Step 5', component:  <CreateStep2/>},
    ]

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
    <>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Stepper activeStep={activeStep}>
            {steps.map((step) => (
                <Step key={step.label}>
                    <StepLabel>{step.label}</StepLabel>
                </Step>
                
            ))}
            </Stepper>
        </Grid>
        <Grid item xs={12}>        
        {steps[activeStep].component}
        </Grid>
        <Grid container width={"100%"}>
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
    </>
    )
}

export default CreateForm;