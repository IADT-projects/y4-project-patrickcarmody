import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import axios from "../../config";
import { Button, Grid, IconButton, Link, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { ArrowForward, Edit, Euro, KeyboardArrowLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import UserIcon from "../../components/users/UserIcon";
import BalanceText from "../../components/BalanceText";

const Dashboard = () => {
    const { userData, isAuthenticated } = useContext(UserContext);
    const [numberOfCampaigns, setNumberOfCampaigns] = useState(0);
    const [campaigns, setCampaigns] = useState(null);
    const [charities, setCharities] = useState(null);
    const [pageTitle, setPageTitle] = useState("User");
    const [userCampaigns, setUserCampaigns] = useState(false);
    const [userCharities, setUserCharities] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/campaigns?creator=${userData.address}`)
            .then((response) => {
                if (response.data.length > 0) {
                    setUserCampaigns(true);
                }
                setNumberOfCampaigns(response.data.length);
                setCampaigns(response.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(`/charities?creator=${userData.address}`)
            .then((response) => {
                if (response.data.length > 0) {
                    setUserCharities(true);
                }
                setCharities(response.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <PageContainer title={"Dashboard"} description="user profile">
            {userData ? (
                <>
                    <Grid container direction={"row"}>
                        {/* ----- Nav ----- */}
                        <IconButton onClick={() => navigate(-1)}>
                            <KeyboardArrowLeft />
                        </IconButton>
                        <Typography variant="h3" marginY={2}>
                            Dashboard
                        </Typography>
                    </Grid>
                    <Grid container spacing={3}>
                        {/* ----- User info ----- */}
                        <Grid item xs={12} md={6} sx={{ height: "500px" }}>
                            <Box
                                sx={{
                                    padding: 4,
                                    height: "100%",
                                    border: "1px solid #f0f0f0",
                                    boxShadow:
                                        "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                    },
                                }}
                            >
                                <Grid item xs={12} width="100%">
                                    <Box
                                        sx={{
                                            height: "200px",
                                            width: "200px",
                                            borderRadius: "80%",
                                            display: "block",
                                            margin: "0 auto",
                                        }}
                                    >
                                        <UserIcon user={userData} size="200" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        variant="h2"
                                        sx={{ textAlign: "center", mt: 4 }}
                                    >
                                        {userData.first_name}{" "}
                                        {userData.last_name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        sx={{
                                            fontSize: 17,
                                            textAlign: "center",
                                            mt: 4,
                                        }}
                                    >
                                        {userData.biography}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Link
                                        href={`https://mumbai.polygonscan.com/address/${userData.address}`}
                                        underline="hover"
                                        rel="noopener"
                                        target="blank"
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 14,
                                                textAlign: "center",
                                                mt: 4,
                                            }}
                                        >
                                            {userData.address}
                                        </Typography>
                                    </Link>
                                </Grid>
                            </Box>
                        </Grid>

                        {/* ----- Stats -----  */}
                        <Grid item container xs={12} md={6}>
                            <Box
                                sx={{
                                    padding: 4,
                                    width: "100%",
                                    height: "100%",
                                    border: "1px solid #f0f0f0",
                                    boxShadow:
                                        "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        padding: 4,
                                        height: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: "medium",
                                            textAlign: "center",
                                            fontSize: "25px",
                                        }}
                                    >
                                        {numberOfCampaigns}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "center",
                                        }}
                                    >
                                        Campaigns
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        padding: 4,
                                        height: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: "medium",
                                            textAlign: "center",
                                            fontSize: "25px",
                                        }}
                                    >
                                        €20,728
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: 15,
                                            textAlign: "center",
                                        }}
                                    >
                                        Raised
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        {/* ----- Campaigns -----  */}
                        {userCampaigns && userCharities ? (
                            <>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            padding: 4,
                                            width: "100%",
                                            height: "100%",
                                            border: "1px solid #f0f0f0",
                                            boxShadow:
                                                "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                boxShadow:
                                                    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: "25px",
                                            }}
                                        >
                                            Your Campaigns
                                        </Typography>
                                        <Box
                                            sx={{
                                                overflow: "auto",
                                                width: {
                                                    xs: "280px",
                                                    sm: "auto",
                                                },
                                            }}
                                        >
                                            <Table sx={{ mt: 2 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight={600}
                                                            >
                                                                Name
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight={600}
                                                            >
                                                                Balance
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight={600}
                                                            >
                                                                Actions
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {campaigns &&
                                                        campaigns.map(
                                                            (campaign) => (
                                                                <TableRow
                                                                    key={
                                                                        campaign.title
                                                                    }
                                                                    sx={{
                                                                        "&:last-child td, &:last-child th": {
                                                                            border: 0,
                                                                        },
                                                                    }}
                                                                >
                                                                    <TableCell>
                                                                        <Typography
                                                                            sx={{
                                                                                fontSize:
                                                                                    "15px",
                                                                                fontWeight:
                                                                                    "500",
                                                                            }}
                                                                        >
                                                                            {
                                                                                campaign.title
                                                                            }
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Box
                                                                            sx={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <Box>
                                                                                {/* <Typography
                                                            color="textSecondary"
                                                            sx={{
                                                                fontSize: "15px",
                                                            }}
                                                        > */}
                                                                                <BalanceText
                                                                                    address={
                                                                                        campaign.address
                                                                                    }
                                                                                />
                                                                                {/* </Typography> */}
                                                                            </Box>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Box
                                                                            sx={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <Button
                                                                                component={
                                                                                    Link
                                                                                }
                                                                                href={`/campaigns/${campaign._id}`}
                                                                                variant="contained"
                                                                                sx={{
                                                                                    mx: 1,
                                                                                }}
                                                                                endIcon={
                                                                                    <ArrowForward />
                                                                                }
                                                                            >
                                                                                View
                                                                            </Button>
                                                                            <Button
                                                                                component={
                                                                                    Link
                                                                                }
                                                                                href={`/campaigns/${campaign._id}/edit`}
                                                                                variant="contained"
                                                                                sx={{
                                                                                    mx: 1,
                                                                                }}
                                                                                color="warning"
                                                                                startIcon={
                                                                                    <Edit />
                                                                                }
                                                                            >
                                                                                Edit
                                                                            </Button>
                                                                            <Button
                                                                                href={`/campaigns/${campaign._id}/withdraw`}
                                                                                variant="contained"
                                                                                sx={{
                                                                                    mx: 1,
                                                                                }}
                                                                                color="success"
                                                                                startIcon={
                                                                                    <Euro />
                                                                                }
                                                                            >
                                                                                Withdraw
                                                                            </Button>
                                                                        </Box>
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <Box
                                        sx={{
                                            padding: 4,
                                            width: "100%",
                                            height: "100%",
                                            border: "1px solid #f0f0f0",
                                            boxShadow:
                                                "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                            transition: "all 0.2s ease",
                                            "&:hover": {
                                                boxShadow:
                                                    "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h2"
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: "25px",
                                            }}
                                        >
                                            Your Charities
                                        </Typography>
                                        <Box
                                            sx={{
                                                overflow: "auto",
                                                width: {
                                                    xs: "280px",
                                                    sm: "auto",
                                                },
                                            }}
                                        >
                                            <Table sx={{ mt: 2 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight={600}
                                                            >
                                                                Name
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight={600}
                                                            >
                                                                Balance
                                                            </Typography>
                                                        </TableCell>
                                                        <TableCell>
                                                            <Typography
                                                                variant="subtitle2"
                                                                fontWeight={600}
                                                            >
                                                                Actions
                                                            </Typography>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {charities &&
                                                        charities.map(
                                                            (charity) => (
                                                                <TableRow
                                                                    key={
                                                                        charity.title
                                                                    }
                                                                    sx={{
                                                                        "&:last-child td, &:last-child th": {
                                                                            border: 0,
                                                                        },
                                                                    }}
                                                                >
                                                                    <TableCell>
                                                                        <Typography
                                                                            sx={{
                                                                                fontSize:
                                                                                    "15px",
                                                                                fontWeight:
                                                                                    "500",
                                                                            }}
                                                                        >
                                                                            {
                                                                                charity.title
                                                                            }
                                                                        </Typography>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Box
                                                                            sx={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <Box>
                                                                                {/* <Typography
                                                        color="textSecondary"
                                                        sx={{
                                                            fontSize: "15px",
                                                        }}
                                                    > */}
                                                                                <BalanceText
                                                                                    address={
                                                                                        charity.address
                                                                                    }
                                                                                />
                                                                                {/* </Typography> */}
                                                                            </Box>
                                                                        </Box>
                                                                    </TableCell>
                                                                    <TableCell>
                                                                        <Box
                                                                            sx={{
                                                                                display:
                                                                                    "flex",
                                                                                alignItems:
                                                                                    "center",
                                                                            }}
                                                                        >
                                                                            <Button
                                                                                component={
                                                                                    Link
                                                                                }
                                                                                href={`/charity/${charity._id}`}
                                                                                variant="contained"
                                                                                sx={{
                                                                                    mx: 1,
                                                                                }}
                                                                                endIcon={
                                                                                    <ArrowForward />
                                                                                }
                                                                            >
                                                                                View
                                                                            </Button>
                                                                            <Button
                                                                                component={
                                                                                    Link
                                                                                }
                                                                                href={`/charity/${charity._id}/edit`}
                                                                                variant="contained"
                                                                                sx={{
                                                                                    mx: 1,
                                                                                }}
                                                                                color="warning"
                                                                                startIcon={
                                                                                    <Edit />
                                                                                }
                                                                            >
                                                                                Edit
                                                                            </Button>
                                                                            <Button
                                                                                href={`/charity/${charity._id}/withdraw`}
                                                                                variant="contained"
                                                                                sx={{
                                                                                    mx: 1,
                                                                                }}
                                                                                color="success"
                                                                                startIcon={
                                                                                    <Euro />
                                                                                }
                                                                            >
                                                                                Withdraw
                                                                            </Button>
                                                                        </Box>
                                                                    </TableCell>
                                                                </TableRow>
                                                            )
                                                        )}
                                                </TableBody>
                                            </Table>
                                        </Box>
                                    </Box>
                                </Grid>
                            </>
                        ) : userCampaigns ? (
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        padding: 4,
                                        width: "100%",
                                        height: "100%",
                                        border: "1px solid #f0f0f0",
                                        boxShadow:
                                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "25px",
                                        }}
                                    >
                                        Your Campaigns
                                    </Typography>
                                    <Box
                                        sx={{
                                            overflow: "auto",
                                            width: { xs: "280px", sm: "auto" },
                                        }}
                                    >
                                        <Table sx={{ mt: 2 }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography
                                                            variant="subtitle2"
                                                            fontWeight={600}
                                                        >
                                                            Name
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography
                                                            variant="subtitle2"
                                                            fontWeight={600}
                                                        >
                                                            Balance
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography
                                                            variant="subtitle2"
                                                            fontWeight={600}
                                                        >
                                                            Actions
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {campaigns &&
                                                    campaigns.map(
                                                        (campaign) => (
                                                            <TableRow
                                                                key={
                                                                    campaign.title
                                                                }
                                                                sx={{
                                                                    "&:last-child td, &:last-child th": {
                                                                        border: 0,
                                                                    },
                                                                }}
                                                            >
                                                                <TableCell>
                                                                    <Typography
                                                                        sx={{
                                                                            fontSize:
                                                                                "15px",
                                                                            fontWeight:
                                                                                "500",
                                                                        }}
                                                                    >
                                                                        {
                                                                            campaign.title
                                                                        }
                                                                    </Typography>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Box
                                                                        sx={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        <Box>
                                                                            {/* <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "15px",
                                            }}
                                        > */}
                                                                            <BalanceText
                                                                                address={
                                                                                    campaign.address
                                                                                }
                                                                            />
                                                                            {/* </Typography> */}
                                                                        </Box>
                                                                    </Box>
                                                                </TableCell>
                                                                <TableCell>
                                                                    <Box
                                                                        sx={{
                                                                            display:
                                                                                "flex",
                                                                            alignItems:
                                                                                "center",
                                                                        }}
                                                                    >
                                                                        <Button
                                                                            component={
                                                                                Link
                                                                            }
                                                                            href={`/campaigns/${campaign._id}`}
                                                                            variant="contained"
                                                                            sx={{
                                                                                mx: 1,
                                                                            }}
                                                                            endIcon={
                                                                                <ArrowForward />
                                                                            }
                                                                        >
                                                                            View
                                                                        </Button>
                                                                        <Button
                                                                            component={
                                                                                Link
                                                                            }
                                                                            href={`/campaigns/${campaign._id}/edit`}
                                                                            variant="contained"
                                                                            sx={{
                                                                                mx: 1,
                                                                            }}
                                                                            color="warning"
                                                                            startIcon={
                                                                                <Edit />
                                                                            }
                                                                        >
                                                                            Edit
                                                                        </Button>
                                                                        <Button
                                                                            href={`/campaigns/${campaign._id}/withdraw`}
                                                                            variant="contained"
                                                                            sx={{
                                                                                mx: 1,
                                                                            }}
                                                                            color="success"
                                                                            startIcon={
                                                                                <Euro />
                                                                            }
                                                                        >
                                                                            Withdraw
                                                                        </Button>
                                                                    </Box>
                                                                </TableCell>
                                                            </TableRow>
                                                        )
                                                    )}
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Box>
                            </Grid>
                        ) : userCharities ? (
                            <Grid item xs={12}>
                                <Box
                                    sx={{
                                        padding: 4,
                                        width: "100%",
                                        height: "100%",
                                        border: "1px solid #f0f0f0",
                                        boxShadow:
                                            "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            boxShadow:
                                                "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "25px",
                                        }}
                                    >
                                        Your Charities
                                    </Typography>
                                    <Box
                                        sx={{
                                            overflow: "auto",
                                            width: { xs: "280px", sm: "auto" },
                                        }}
                                    >
                                        <Table sx={{ mt: 2 }}>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>
                                                        <Typography
                                                            variant="subtitle2"
                                                            fontWeight={600}
                                                        >
                                                            Name
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography
                                                            variant="subtitle2"
                                                            fontWeight={600}
                                                        >
                                                            Balance
                                                        </Typography>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Typography
                                                            variant="subtitle2"
                                                            fontWeight={600}
                                                        >
                                                            Actions
                                                        </Typography>
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {charities &&
                                                    charities.map((charity) => (
                                                        <TableRow
                                                            key={charity.title}
                                                            sx={{
                                                                "&:last-child td, &:last-child th": {
                                                                    border: 0,
                                                                },
                                                            }}
                                                        >
                                                            <TableCell>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize:
                                                                            "15px",
                                                                        fontWeight:
                                                                            "500",
                                                                    }}
                                                                >
                                                                    {
                                                                        charity.title
                                                                    }
                                                                </Typography>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <Box>
                                                                        {/* <Typography
                                            color="textSecondary"
                                            sx={{
                                                fontSize: "15px",
                                            }}
                                        > */}
                                                                        <BalanceText
                                                                            address={
                                                                                charity.address
                                                                            }
                                                                        />
                                                                        {/* </Typography> */}
                                                                    </Box>
                                                                </Box>
                                                            </TableCell>
                                                            <TableCell>
                                                                <Box
                                                                    sx={{
                                                                        display:
                                                                            "flex",
                                                                        alignItems:
                                                                            "center",
                                                                    }}
                                                                >
                                                                    <Button
                                                                        component={
                                                                            Link
                                                                        }
                                                                        href={`/charity/${charity._id}`}
                                                                        variant="contained"
                                                                        sx={{
                                                                            mx: 1,
                                                                        }}
                                                                        endIcon={
                                                                            <ArrowForward />
                                                                        }
                                                                    >
                                                                        View
                                                                    </Button>
                                                                    <Button
                                                                        component={
                                                                            Link
                                                                        }
                                                                        href={`/charity/${charity._id}/edit`}
                                                                        variant="contained"
                                                                        sx={{
                                                                            mx: 1,
                                                                        }}
                                                                        color="warning"
                                                                        startIcon={
                                                                            <Edit />
                                                                        }
                                                                    >
                                                                        Edit
                                                                    </Button>
                                                                    <Button
                                                                        href={`/charity/${charity._id}/withdraw`}
                                                                        variant="contained"
                                                                        sx={{
                                                                            mx: 1,
                                                                        }}
                                                                        color="success"
                                                                        startIcon={
                                                                            <Euro />
                                                                        }
                                                                    >
                                                                        Withdraw
                                                                    </Button>
                                                                </Box>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                            </TableBody>
                                        </Table>
                                    </Box>
                                </Box>
                            </Grid>
                        ) : (
                        <Grid item xs={12}>
                            <Box
                                sx={{
                                    padding: 4,
                                    width: "100%",
                                    height: "100%",
                                    border: "1px solid #f0f0f0",
                                    boxShadow:
                                        "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                        boxShadow:
                                            "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "25px",
                                    }}
                                >
                                    Your Campaigns
                                </Typography>
                                <Box
                                        sx={{
                                            width: "100%",
                                            height: '50px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            py: 5
                                        }}
                                    >
                                        <Typography variant="subtitle1" textAlign='center'>You don't have any fundraisers 
                                        <Link href='/create'> click here to create one</Link>
                                        </Typography>
                                    </Box>
                            </Box>
                        </Grid>
                        )}
                    </Grid>
                </>
            ) : (
                <>
                    <h1>Please log in to view this page</h1>
                </>
            )}
        </PageContainer>
    );
};

export default Dashboard;
