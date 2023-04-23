import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from './components/layout/Loadable';

// Layout
const Layout = Loadable(lazy(() => import('./components/layout/Layout')));
const HomeLayout = Loadable(lazy(() => import('./components/layout/HomeLayout')));

// Pages
const Home = (Loadable(lazy(() => import('./pages/main/Home'))));
const About = Loadable(lazy(() => import('./pages/main/About')));
const Start = Loadable(lazy(() => import('./pages/main/Start')));

// Users
const User = Loadable(lazy(() => import('./pages/users/User')));
const Register = Loadable(lazy(() => import('./pages/users/Register')));
const Login = Loadable(lazy(() => import('./pages/users/Login')));
const Dashboard = Loadable(lazy(() => import('./pages/users/Dashboard')));
const UserSettings = Loadable(lazy(() => import('./pages/users/UserSettings')));

// Charities
const Charities = Loadable(lazy(() => import('./pages/campaigns/Charities')));
const Explore = Loadable(lazy(() => import('./pages/campaigns/Explore')));
const CharityForm = Loadable(lazy(() => import('./components/CharityForm/Index')));
const ViewCharity = Loadable(lazy(() => import('./pages/charities/ViewCharity')));

// User campaigns
const IndividualCampaigns = Loadable(lazy(() => import('./pages/campaigns/IndividualCampaigns')));
const SingleCampaign = Loadable(lazy(() => import('./pages/campaigns/SingleCampaign')));
const EditCampaign = Loadable(lazy(() => import('./pages/campaigns/Edit')))
const CreateForm = Loadable(lazy(() => import('./components/CreateForm/Index')));
const CreateLanding = Loadable(lazy(() => import('./pages/campaigns/CreateLanding')));
const Withdraw = Loadable(lazy(() => import('./pages/users/Withdraw')));

const NewCard = Loadable(lazy(() => import('./components/CampaignCard/CampaignCard')));

const Router = [
    {
      path: '/home',
      element: <HomeLayout/>,
      children: [
        { path: '/home', element: <Home/> }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    },
    {
    path: '/',
    element: <Layout />,
    children: [
      // Main
      { path: '/', element: <Navigate to="/home" /> },

      { path: '/newcard', element: <NewCard/>},

      // Campaigns
      { path: '/campaigns/explore', exact: true, element: <Explore /> },
      { path: '/campaigns/user', exact: true, element: <IndividualCampaigns /> },
      { path: '/campaigns/charity', exact: true, element: <Charities /> },

      { path: '/campaigns/:id', element: <SingleCampaign/> },
      { path: '/campaigns/:id/edit', element: <EditCampaign/> },
      { path: '/campaigns/:id/withdraw', element: <Withdraw/> },

      { path: '/create/campaign', exact: true, element: <CreateForm/> },
      { path: '/create', exact: true, element: <CreateLanding/> },
      { path: '/create/charity', exact: true, element: <CharityForm/> },

      { path: '/charity/:id', exact: true, element: <ViewCharity/> },
      
      //Users
      { path: '/users/:id', element: <User /> },
      { path: '/dashboard', element: <Dashboard /> },
      { path: '/settings', element: <UserSettings/> },
      
      // Other
      { path: '/about', exact: true, element: <About /> },
      { path: '/get-started', exact: true, element: <Start /> },
      { path: '*', element: <Navigate to="/home" /> }
    ],
  },
]

export default Router