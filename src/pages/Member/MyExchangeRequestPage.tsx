import { Box, Container, Grid } from "@mui/material"
import UserActivityTab from "../../components/User/UserActivityTab";
import UserCard from "../../components/User/UserCard";
import ExchangeRequestDataGrid from "../../components/DataGrid/member/exchangeRequestDataGrid";
import BackButton from "../../components/Button/backButton";

const MyExchangeRequestPage = () => {

    return (
        <Box sx={{ backgroundColor: "#d6dbdb51" }}>
            <Box component="main" sx={{ padding: "10px 0" }}>
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
                                <ExchangeRequestDataGrid/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}

export default MyExchangeRequestPage