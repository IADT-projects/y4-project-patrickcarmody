import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from './components/layout/Loadable';

// Layout
const Layout = Loadable(lazy(() => import('./components/layout/Layout')));

const Home = (Loadable(lazy(() => import('./pages/main/Home'))));
const Campaigns = Loadable(lazy(() => import('./pages/campaigns/Campaigns')))
const Charities = Loadable(lazy(() => import('./pages/campaigns/Charities')))
const Individuals = Loadable(lazy(() => import('./pages/campaigns/Individuals')))
const SingleCampaign = Loadable(lazy(() => import('./pages/campaigns/SingleCampaign')));
const About = Loadable(lazy(() => import('./pages/main/About')))
const Start = Loadable(lazy(() => import('./pages/main/Start')))
const CreateForm = Loadable(lazy(() => import('./components/CreateForm/Index')))
const User = Loadable(lazy(() => import('./pages/users/User')))
const UserPreviewCard = Loadable(lazy(() => import('./components/users/UserPreviewCard')));

// Pages


const Router = [
    {
    path: '/',
    element: <Layout />,
    children: [
      // Main
      { path: '/', element: <Navigate to="/home" /> },
      { path: '/home', exact: true, element: <Home /> },
      // { path: '/page', exact: true, element: <Page /> },
      // Campaigns
      { path: '/campaigns', exact: true, element: <Campaigns /> },
      { path: '/campaigns/charity', exact: true, element: <Charities /> },
      { path: '/campaigns/individual', exact: true, element: <Individuals /> },
      { path: '/campaigns/create', exact: true, element: <CreateForm/> },
      { path: '/campaigns/:id', element: <SingleCampaign/> },
      //Users
      { path: '/users/:id', element: <User /> },
      // Other
      { path: '/about', exact: true, element: <About /> },
      { path: '/get-started', exact: true, element: <Start /> },
      { path: '*', element: <Navigate to="/home" /> },
      { path: 'card', element: <UserPreviewCard/> }
    ],
  },
]

export default Router