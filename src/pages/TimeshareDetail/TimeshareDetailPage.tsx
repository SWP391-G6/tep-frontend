import { Box, Button, Container, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Title from "../../components/TimeshareDetail/Title";
import PostingDetail from "../../components/TimeshareDetail/PostingDetails";
import PostingMainPrice from "../../components/TimeshareDetail/PostingMainPrice";


const TimeshareDetailPage = () => {

    return (

        <Box>
            <Header />
            <Box component="main" sx={{ marginTop: "120px",marginBottom: "60px" }}>
                <Container disableGutters maxWidth="xl">

                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Title />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: "50px" }}> 
                                    <PostingDetail />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    height: '510px',
                                    width:'427px',
                                    position: 'sticky',
                                    top: '70px',
                                    zIndex: 2,
                                }}
                            >
                                <PostingMainPrice/>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </Box>

    );
};

export default TimeshareDetailPage;