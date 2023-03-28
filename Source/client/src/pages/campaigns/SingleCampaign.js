import React, { useEffect, useState } from 'react';
import PageContainer from '../../components/PageContainer'
import { Box, Grid } from '@mui/material';
import CampaignPage from '../CampaignPage';
import { useNavigate, useParams } from 'react-router-dom';
import axios from '../../config'

const SingleCampaign = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ campaign, setCampaign ] = useState(null);

    useEffect(() => {
        axios.get(`/campaigns/${id}`)
        .then((response) => {
            console.log(response.data);
            setCampaign(response.data);
        })
        .catch((err) => {
            console.error(err);
            console.log(err.response.data);
        });
    }, [id])

    if (!campaign) return(<h1>Loading...</h1>)

    return (
        <CampaignPage campaign={campaign}/>
      );
}

export default SingleCampaign;