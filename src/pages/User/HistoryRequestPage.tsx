import { Box, Container, Grid } from "@mui/material"

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import UserActivityTab from "../../components/User/UserActivityTab";
import UserCard from "../../components/User/UserCard";
import BackButton from "../../components/Button/backButton";
import BookingHistoryList from "../../components/User/myBookingHistory";

type Props = {}

const HistoryRequestPage = (props: Props) => {

    return (
        <Box sx={{ backgroundColor: "#d6dbdb51" }}>
            <Header />
            <Box component="main" sx={{ paddingTop:'10px',marginBottom: "50px" , }}>
                <Container disableGutters maxWidth="xl" sx={{marginTop:'10px'}}>
                    <BackButton/>
                    <Grid container spacing={2}>

                        <Grid item xs={3}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <UserCard />
                                </Grid>
                                <Grid item xs={12} >
                                    <UserActivityTab />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={9}>
                            <Box>
                                <BookingHistoryList/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default HistoryRequestPage