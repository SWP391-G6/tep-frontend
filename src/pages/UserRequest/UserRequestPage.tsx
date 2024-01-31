import { Box, Container, Grid } from "@mui/material"

import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import UserActivityTab from "../../components/UserDetails/UserActivityTab";
import UserCard from "../../components/UserDetails/UserCard";
import UserProfile from "../../components/UserDetails/UserProfile";
import UserRequestActivity from "../../components/UserDetails/UserRequestActivity";

type Props = {}

const UserRequestPage = (props: Props) => {

    return (
        <Box sx={{ backgroundColor: "#d6dbdb51" }}>
            <Header />
            <Box component="main" sx={{ paddingTop:'10px',marginBottom: "50px" , }}>
                <Container disableGutters maxWidth="xl" sx={{marginTop:'130px'}}>
                    <Grid container spacing={3}>

                        <Grid item xs={3.3}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <UserCard />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: "15px" }}>
                                    <UserActivityTab />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={8.7}>
                            <Box>
                                <UserRequestActivity/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}

export default UserRequestPage