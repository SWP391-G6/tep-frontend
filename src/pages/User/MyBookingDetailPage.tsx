import { Box, Container } from '@mui/material'
import React from 'react'
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import MyBookingDetail from '../../components/User/myBookingDetail'

type Props = {}

const MyBookingDetailPage = (props: Props) => {
  return (
    <Box sx={{ backgroundColor: "#d6dbdb51" }}>
            <Header />
            <Box component="main" sx={{ paddingTop:'10px',marginBottom: "50px" , }}>
                <Container disableGutters maxWidth="xl" sx={{marginTop:'10px'}}>
                    <MyBookingDetail/>
                </Container>
            </Box>
            <Footer />
        </Box>
  )
}

export default MyBookingDetailPage