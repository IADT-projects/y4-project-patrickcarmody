import { Button, Stepper, Step, StepLabel, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import axios from '../../config'
import PageContainer from "../PageContainer";
import Created from "./Created";
import CreateStep1 from "./CreateStep1";
import CreateStep2 from "./CreateStep2";
import CreateStep3 from "./CreateStep3";
import CreateStep4 from "./CreateStep4";
import CreateStep5 from "./CreateStep5";
import CreateStep6 from "./CreateStep6";

import useContractDeploy from "../../hooks/useContractDeploy";
import { UserContext } from "../../context/UserContext";
import { useAccount } from "wagmi";

const CreateForm = () => {
    const {userData} = useContext(UserContext);
    const [created, setCreated] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [id, setId] = useState(null);
    const [formData, setFormData] = useState({
        "title": "",
        "description": "",
        "category": "",
        "creator": "",
        "goal": "",
        "image": "",
        "address": ""
    });
    const [step1Data, setStep1Data] = useState({ title: ""});
    const [step2Data, setStep2Data] = useState({ category: "" });
    const [step3Data, setStep3Data] = useState({ target: "" });
    const [step4Data, setStep4Data] = useState({ description: "" });
    const [step5Data, setStep5Data] = useState({ image: "" });


    const { address: account } = useAccount()

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

    const { deployContractWithPromise } = useContractDeploy();
      

    const handleSubmit = () => {
        deployContractWithPromise()
        .then((address) => {
            console.log("Deployed at: " + address)
            axios.post('/campaigns', {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                creator: account,
                goal: formData.goal,
                image: formData.image,
                address: address
            }, {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
                })
                .then((response => {
                setId(response.data._id);
                setCreated(true);
                }))
                .catch((err) => console.error(err));
        })
        .catch((err) => {console.error(err)})
    }

      
      
      

    return (
        <PageContainer title="Create Campaign" description="Create a form">
            {created ? (
            <Created redirectUrl={`/campaigns/${id}`}/>
            ) : (
                <Grid container spacing={5}>
                <Grid item xs={12}>
                <Stepper activeStep={activeStep}>
                    {steps.map((step) => (
                    <Step key={step.label}>
                        <Grid item container justify={"center"} alignItems={"center"} >
                            <StepLabel>{step.label}</StepLabel>
                        </Grid>
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
                    {activeStep !== 0 ? (
                    <Button variant="contained" disabled={activeStep === 0} onClick={handleBack}>
                        Back
                    </Button>
                    ) : ("")}
                    
                </Grid>
                <Grid item xs={6} justifyContent="flex-end">
                    {activeStep === steps.length - 1 ? (
                    <Button variant="contained" color="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                    ) : (
                    <Button variant="contained" color="primary" onClick={handleNext} disabled={activeStep === steps.length -1}>
                        Next
                    </Button>
                    )}
                </Grid>
                </Grid>
            </Grid>
            )
            }
        </PageContainer>
    );
};

export default CreateForm;