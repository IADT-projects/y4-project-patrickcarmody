import { Button, Stepper, Step, StepLabel, Grid } from "@mui/material";
import { useState } from "react";
import axios from '../../config'
import PageContainer from "../PageContainer";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import CreateStep5 from "./CreateStep5";
import CreateStep6 from "./CreateStep6";

const CreateForm = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        "title": "",
        "description": "",
        "category": "",
        "creator": "0x9bc72d38226C9433C8cd18bd758E732aB494b00C",
        "goal": "",
        "image": "",
        "address": "0xfA88EFd9f846a57479dF3402E685B2AD455dBde7"
    });
    const [step1Data, setStep1Data] = useState({ title: ""});
    const [step2Data, setStep2Data] = useState({ category: "" });
    const [step3Data, setStep3Data] = useState({ target: "" });
    const [step4Data, setStep4Data] = useState({ description: "" });
    const [step5Data, setStep5Data] = useState({ image: "" });

    const steps = [
        { label: "Title", component: <CreateStep1 formData={formData} setFormData={setFormData} stepData={step1Data} setStepData={setStep1Data} /> },
        { label: "Category", component: <CreateStep2 formData={formData} setFormData={setFormData} stepData={step2Data} setStepData={setStep2Data} /> },
        { label: "Target", component: <CreateStep3 formData={formData} setFormData={setFormData} stepData={step3Data} setStepData={setStep3Data} /> },
        { label: "About", component: <CreateStep4 formData={formData} setFormData={setFormData} stepData={step4Data} setStepData={setStep4Data} /> },
        { label: "Image", component: <CreateStep5 formData={formData} setFormData={setFormData} stepData={step5Data} setStepData={setStep5Data} /> },
        { label: "Confirm", component: <CreateStep6 formData={formData} setFormData={setFormData}/> },
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        console.log(formData);
        axios.post('/campaigns', formData)
            .then((response) => {
                console.log(response.data);

            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
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
            <Grid item xs={12} height={"500px"}>
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
            <Grid item xs={6} justifyContent="flex-end">
                {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
                ) : (
                <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === steps.length - 1}>
                    Next
                </Button>
                )}
            </Grid>
            </Grid>
        </Grid>
        </PageContainer>
    );
};

export default CreateForm;