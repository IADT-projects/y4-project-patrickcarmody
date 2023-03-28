import React, { useEffect, useState } from 'react';
import CampaignPage from '../CampaignPage';
import { useParams } from 'react-router-dom';
import axios from '../../config'

const SingleCampaign = () => {
    const { id } = useParams();
    const [ campaign, setCampaign ] = useState(null);

    useEffect(() => {
        axios.get(`/campaigns/${id}`)
        .then((response) => {
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