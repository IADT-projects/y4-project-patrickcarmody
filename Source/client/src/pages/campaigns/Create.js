import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Select, MenuItem, Button } from '@mui/material';
import PageContainer from '../../components/PageContainer'
// import CurrencyTextField from '../../components/CurrencyTextField/CurrencyTextField';
import { useNavigate } from 'react-router-dom';

const Create = () => {

//   const [form, setForm] = useState({});
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

    return (
      <PageContainer title="Create" description="create a fundraiser">
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6}>
              <h1>Create</h1>
              <p>Enter the details for your crowdfunding campaign below</p>
            </Grid>
            {/* ---------------------------------------------------------------------------- */}
            <Grid item xs={12} lg={10}>
              <Typography variant='h5'>What would you like to name your campaign?</Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <TextField variant='standard' label='Name' required fullWidth></TextField>
            </Grid>
            <Grid item xs={12} lg={10}>
            <Typography variant='h5' sx={{ marginRight: 2}}>What are you raising money for?</Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <Select defaultValue={"noselection"}>
                <MenuItem value={"noselection"}>Please Select</MenuItem>
                <MenuItem value={"animals"}>Animals</MenuItem>
                <MenuItem value={"community"}>Community</MenuItem>
                <MenuItem value={"emergencies"}>Emergencies</MenuItem>
                <MenuItem value={"environment"}>Environment</MenuItem>
                <MenuItem value={"events"}>Events</MenuItem>
                <MenuItem value={"family"}>Family</MenuItem>
                <MenuItem value={"medical"}>Medical</MenuItem>
                <MenuItem value={"sports"}>Sports</MenuItem>
                <MenuItem value={"other"}>Other</MenuItem>
                <MenuItem value={"business"}>Business</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} lg={10}>
              <Typography variant='h5'>What is your initial target?</Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              {/* <CurrencyTextField
                label="Amount"
                variant="outlined"
                currencySymbol="€"
                outputFormat="number"
                decimalCharacter="."
                digitGroupSeparator=","
                minimumValue={1}
              /> */}
            </Grid>
            <Grid item xs={12} lg={12}>
              <Typography variant='h5'>How would you describe your campaign?</Typography>
            </Grid>
            <Grid item xs={12} lg={7}>
              <TextField variant='standard' label='Description' multiline fullWidth></TextField>
              {errors}
            </Grid>
            <Grid item xs={12} lg={7}>
              <Button variant='contained' size='large'>Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    );
  };
  
  export default Create;