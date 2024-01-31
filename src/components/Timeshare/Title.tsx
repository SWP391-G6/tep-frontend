import { Box, Grid, Typography } from "@mui/material"
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BathtubIcon from '@mui/icons-material/Bathtub';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

type Props = {}

const Title = (props: Props) => {

    return (
        <Box sx={{
            boxShadow: '1px 1px 2px 2px rgba(0, 0, 0, 0.2)',
        }}>
            <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '400px',
                    gap: '20px'
                }}>
                <img
                    src="https://onetouchmedia.vn/wp-content/uploads/2019/10/N.NT-31.jpg"
                    alt="title"
                    style={{
                        width: '250px',
                        height: '210px',
                        marginLeft: '50px'
                    }}
                />
                <Box>
                    <Typography variant="h5">Rental R1158988 </Typography>
                    <Typography variant="h2" color="blue">
                        The Westin Kaanapali Ocean Resort Villas
                    </Typography>
                    <Typography variant="h6">Lahaina, Hawaii </Typography>
                </Box>
            </Box>

            <div>
                <Grid container spacing={5} alignItems={'center'} sx={{ marginLeft: '20px' }}>
                    <Grid item xs={6} sx={{display:'flex',gap:'20px'}}>
                        <LocalHotelIcon fontSize="large" color="primary"/>
                        <div>
                            <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                                2 Bedrooms
                            </Typography>
                            <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                                Sleeps 8
                            </Typography>
                            <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                                Beds 2 King, 2 Sofa beds
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{display:'flex',gap:'20px'}}>
                        <ApartmentIcon fontSize="large" color="primary"/>
                        <div>
                        <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                            2 Bedroom Villa
                        </Typography>
                        <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                            Building/Unit: Unassigned
                        </Typography>
                        <Typography variant="h5" sx={{ marginBottom: '8px' }}>
                            View: Oceanfront
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '40px',display:'flex',gap:'20px' }}>
                        <BathtubIcon fontSize="large" color="primary"/>
                        <div>
                        <Typography variant="h5">
                            2 Bathrooms
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6} sx={{ marginBottom: '40px',display:'flex',gap:'20px' }}>
                        <RamenDiningIcon fontSize="large" color="primary"/>
                        <div>
                        <Typography variant="h5">
                            Full kitchen
                        </Typography>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </Box>
    )
}

export default Title