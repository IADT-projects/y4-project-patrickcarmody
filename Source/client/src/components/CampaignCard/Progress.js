import { Box, LinearProgress, Typography } from "@mui/material"

const Progress = ({ campaign }) => {
    const currentValue = 2000;
    // get current contract balance in euro here

    const progress = currentValue / campaign.goal * 100
    const progressPercent = Math.round(progress)
    
    return(
        <>
            <Box
                sx={{
                    height: '50px'
                }}
            >
                <Typography 
                    variant="body1"
                    sx={{
                        fontSize: 13,
                        textAlign: "left",
                        fontFamily: 'Poppins',
                        paddingBottom: 1
                    }}
                >
                    Progress ({ progressPercent }%)
                </Typography>
                
                <LinearProgress
                    value={ progress }
                    variant="determinate"
                    color="primary"
                    sx={{
                        height: "8px",
                        borderRadius: "3px"
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Typography 
                        variant="body1"
                        sx={{
                            fontSize: 13,
                            fontFamily: 'Poppins',
                            paddingTop: 1
                        }}
                    >
                        €{ currentValue }
                    </Typography>
                    <Typography 
                        variant="body1"
                        sx={{
                            fontSize: 13,
                            fontFamily: 'Poppins',
                            paddingTop: 1
                        }}
                    >
                        €{ campaign.goal }
                    </Typography>
                </Box>
            </Box>
            
        </>
    )
}

export default Progress;