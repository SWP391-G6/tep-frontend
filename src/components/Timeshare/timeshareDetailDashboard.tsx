import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import BackButton from "../Button/backButton";
import TimeshareTitle from "./timeshareTitle";
import TimesharePriceInformation from "./timesharePriceInformation";
import TimeshareDetail from "./timeshareDetail";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import { useParams } from "react-router";

const TimeshareDetailDashboard = () => {
  let { timeshareID } = useParams();
  const [timeshareDetail, setTimeshareDetail] =
    useState<TimeshareDetailResponse>({
      timeshareId: "",
      timeshareName: "",
      description: "",
      status: true,
      price: 0,
      nights: 0,
      postBy: {
        user_id: "",
        user_name: "",
        password: "",
        fullname: "",
        email: "",
        phone: "",
        dob: new Date(),
        gender: true,
        status: true,
        role: "",
      },
      destinationModel: {
        destinationId: "",
        address: "",
        branch: "",
        city: "",
        country: "",
        description: "",
        desName: "",
      },
      dateStart: new Date(),
      dateEnd: new Date(),
      exchange: false,
      city: "",
      image_url: "",
    });

  useEffect(() => {
    const getBillByID = async (timeshareID: string) => {
      const data: any = await timeshareAPI.getTimeshareByTimeshareID(
        timeshareID
      );
      if (data) {
        setTimeshareDetail(data);
      }
    };
    const initUseEffect = async () => {
      if (timeshareID) {
        await getBillByID(timeshareID);
      }
    };
    initUseEffect();
  }, [timeshareID]);

  return (
    <Container disableGutters maxWidth="xl" sx={{ height: "100%", zIndex: 1 }}>
      <Grid2 container gap={2} padding="10px 50px 20px 50px">
        <Grid2 xs={12}>
          <BackButton />
        </Grid2>
        <Grid2
          xs={8}
          sx={{
            padding: "30px",
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <TimeshareTitle timeshare={timeshareDetail} />
        </Grid2>
        <Grid2
          xs={3.5}
          sx={{
            height: "500px",
            position: "sticky",
            top: "10px",
            zIndex: 2,
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            backgroundColor: "#ffffff",
          }}
        >
          <TimesharePriceInformation
            timeshareID={timeshareID}
            timeshare={timeshareDetail}
          />
        </Grid2>
        <Grid2
          xs={8}
          sx={{
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <TimeshareDetail timeshare={timeshareDetail} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default TimeshareDetailDashboard;
