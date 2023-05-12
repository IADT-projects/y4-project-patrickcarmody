import { Button, Stepper, Step, StepLabel, Grid, Dialog, Box, Typography, Stack, CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
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
    const [openDialog, setOpenDialog] = useState(false);
    const [step1Completed, setStep1Completed] = useState(false);
    const [step2Completed, setStep2Completed] = useState(false);
    const [step3Completed, setStep3Completed] = useState(false);
    const [step4Completed, setStep4Completed] = useState(false);
    const [step5Completed, setStep5Completed] = useState(false);
    


    const { address: account } = useAccount();

    const steps = [
        { label: "Title", component: <CreateStep1 formData={formData} setFormData={setFormData} stepData={step1Data} setStepData={setStep1Data} setStepCompleted={(completed) => setStep1Completed(completed)}/> },
        { label: "Category", component: <CreateStep2 formData={formData} setFormData={setFormData} stepData={step2Data} setStepData={setStep2Data} setStepCompleted={(completed) => setStep2Completed(completed)} /> },
        { label: "Target", component: <CreateStep3 formData={formData} setFormData={setFormData} stepData={step3Data} setStepData={setStep3Data} setStepCompleted={(completed) => setStep3Completed(completed)}/> },
        { label: "About", component: <CreateStep4 formData={formData} setFormData={setFormData} stepData={step4Data} setStepData={setStep4Data} setStepCompleted={(completed) => setStep4Completed(completed)}/> },
        { label: "Image", component: <CreateStep5 formData={formData} setFormData={setFormData} stepData={step5Data} setStepData={setStep5Data} setStepCompleted={(completed) => setStep5Completed(completed)}/> },
        { label: "Confirm", component: <CreateStep6 formData={formData} setFormData={setFormData}/> },
    ];
    const handleNext = () => {
        if (activeStep < steps.length - 1) {
          switch (activeStep) {
            case 0:
              setStep1Completed(!!step1Data.title);
              break;
            case 1:
              setStep2Completed(!!step2Data.category);
              break;
            // Repeat for other steps
            case 2:
              setStep3Completed(!!step3Data.target);
              break;
            case 3:
              setStep4Completed(!!step4Data.target);
              break;
            case 4:
              setStep5Completed(!!step5Data.target);
              break;
            default:
              break;
          }
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const { deployContractWithPromise, loading, data } = useContractDeploy();
      
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
            <Created url={`/campaigns/${id}`} type={'campaign'}/>
            ) : (
                <>
                <Dialog
                    open={openDialog}
                    onClose={handleCloseDialog}
                >
                    
                    <Box 
                        sx={{
                            width: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignContent: 'center',
                            px: 4,
                        }}
                    >
                        <Typography variant="h3" py={3} textAlign='center'>Deploy campaign on blockchain</Typography>
                        <Typography variant="subtitle1" textAlign='left' sx={{ my: 1, whiteSpace: 'pre-wrap'}}>
                            Almost there!
                        </Typography>
                        <Typography variant="subtitle1" textAlign='left' sx={{ my: 1, whiteSpace: 'pre-wrap'}}>
                            This will deploy your fundraiser to the blockchain. A small amount of MATIC is required to do this.
                        </Typography>
                        <Typography variant="subtitle1" textAlign='left' sx={{ my: 1, whiteSpace: 'pre-wrap'}}>
                            After clicking the button below, you will be prompted to confirm a transaction in your wallet.
                        </Typography>
                        { loading? (
                            <Box 
                                sx={{ 
                                    width: '250px', 
                                    height: '60px', 
                                    mx: 'auto', 
                                    my: 5,
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <CircularProgress variant="indeterminate"/>
                            </Box>
                        ) : (
                            <>
                            <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={handleSubmit} 
                            sx={{
                                width: "250px",
                                height: '60px',
                                mx: 'auto',
                                my: 5,
                                fontSize: '16px'
                            }}
                            >
                                Deploy
                            </Button>
                            <Typography textAlign='center' color={"red"} mb={2}>
                                { data.error ? "User rejected transaction": ""}
                            </Typography>
                            </>
                        )}
                    </Box>
                </Dialog>
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
                    <Grid item xs={12} >
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
                            <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                                Submit
                            </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    disabled={
                                        activeStep === steps.length - 1
                                        ? false
                                        : activeStep === 0
                                        ? !step1Completed
                                        : activeStep === 1
                                        ? !step2Completed
                                        : activeStep === 2
                                        ? !step3Completed
                                        : activeStep === 3
                                        ? !step4Completed
                                        : activeStep === 4
                                        ? !step5Completed
                                        : // Add similar conditions for other steps
                                            true
                                    }
                                >
                                Next
                            </Button>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
                </>
            )
            }
        </PageContainer>
    );
};

export default CreateForm;