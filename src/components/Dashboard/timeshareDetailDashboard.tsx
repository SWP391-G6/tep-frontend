import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import BackButton from "../Button/backButton";
import TimeshareTitle from "../Timeshare/timeshareTitle";
import TimesharePriceInformation from "../Timeshare/timesharePriceInformation";
import TimeshareDetail from "../Timeshare/timeshareDetail";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import { useParams } from "react-router";
import roomTypeAPI from "../../services/roomtype/roomtypeAPI";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import { isEmpty } from "lodash";

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
  const [roomType, setRoomType] = useState<RoomTypeResponse>({
    bath: 0,
    bed: 0,
    sleeps: 0,
    entertaiment: "",
    feature: "",
    kitchen: "",
    name: "",
    policies: "",
    roomview: "",
    timeshareId: "",
    roomtypeId: "",
  });

  useEffect(() => {
    const getTimeshareDetailByTimeshareID = async (timeshareID: string) => {
      const data: any = await timeshareAPI.getTimeshareDetailByTimeshareID(
        timeshareID
      );
      if (data && !isEmpty(data)) {
        setTimeshareDetail(data);
      }
    };

    const getRoomTypeByTimeshareID = async (timeshareID: string) => {
      const data: any = await roomTypeAPI.getRoomTypeByTimeshareID(timeshareID);
      if (data && !isEmpty(data)) {
        setRoomType(data);
      }
    };

    const initUseEffect = async () => {
      if (timeshareID) {
        await Promise.all([
          getTimeshareDetailByTimeshareID(timeshareID),
          getRoomTypeByTimeshareID(timeshareID),
        ]);
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
            padding: "20px",
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <TimeshareTitle timeshare={timeshareDetail} roomType={roomType} />
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
            roomType={roomType}
          />
        </Grid2>
        <Grid2
          xs={8}
          sx={{
            boxShadow: "1px 1px 2px 2px rgba(0, 0, 0, 0.2)",
            backgroundColor: "#ffffff",
          }}
        >
          <TimeshareDetail timeshare={timeshareDetail} roomType={roomType} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default TimeshareDetailDashboard;
