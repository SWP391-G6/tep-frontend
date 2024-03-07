import { Box, Container } from "@mui/material";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import BackButton from "../../components/Button/backButton";
import TimeshareTitle from "../../components/Timeshare/timeshareTitle";
import TimesharePriceInformation from "../../components/Timeshare/timesharePriceInformation";
import TimeshareDetail from "../../components/Timeshare/timeshareDetail";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet, useParams } from "react-router";
import { useEffect, useState } from "react";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import TimeshareDetailDashboard from "../../components/Dashboard/timeshareDetailDashboard";

const TimeshareDetailPage = () => {
  return (
    <Box bgcolor="#f6f8fa">
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default TimeshareDetailPage;
