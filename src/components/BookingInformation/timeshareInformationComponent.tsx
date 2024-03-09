import { Box, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import dayjs from "dayjs";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import { formatNumber } from "../../helpers/numberHelpers";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("en");

type Props = { timeshare: TimeshareDetailResponse; roomType: RoomTypeResponse };

const TimeshareInformationComponent = (props: Props) => {
  const rightContent = {
    fontWeight: 900,
    fontSize: 18,
    color: "#00acb3",
  };

  const leftContent = {
    fontWeight: 500,
    fontSize: 18,
  };

  return (
    <Box>
      <Grid2 container>
        <img
          src={props.timeshare.image_url}
          style={{ marginBottom: "5px" }}
          width="100%"
          height={220}
        />
        <Typography variant="h5" fontWeight="bolder" mt={1} color="#00acb3">
          {props.timeshare.timeshareName}
        </Typography>
        <Grid2
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
        >
          <>
            <Grid2 xs={6}>
              <Typography fontWeight={400} fontSize={20}>
                {props.timeshare.city}
              </Typography>
            </Grid2>
            <Grid2 xs={6} sx={{ textAlign: "right" }}>
              <Typography fontWeight={300} fontSize={14}>
                #R20240201
              </Typography>
            </Grid2>
            <Divider sx={{ width: "100%", margin: "10px 0" }} />
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Size:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                {props.roomType.bed} Bedrooms / Sleeps {props.roomType.sleeps}
              </Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Stay:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                {props.timeshare.nights}-nights
              </Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Check-in:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                {" "}
                {dayjs(props.timeshare.dateStart)
                  .format("DD MMM YYYY")
                  .toString()}
              </Typography>
            </Grid2>
          </>
          <>
            <Grid2 xs={3}>
              <Typography style={leftContent}>Check-out:</Typography>
            </Grid2>
            <Grid2 xs={9} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                {" "}
                {dayjs(props.timeshare.dateEnd)
                  .format("DD MMM YYYY")
                  .toString()}
              </Typography>
            </Grid2>
          </>
          <Divider sx={{ width: "100%", margin: "10px 0" }} />
          <>
            <Grid2 xs={7}>
              <Typography style={leftContent}>
                {formatNumber(props.timeshare.price / props.timeshare.nights)}{" "}
                VNĐ/night
              </Typography>
            </Grid2>
            <Grid2 xs={5} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                {formatNumber(props.timeshare.price)} VNĐ
              </Typography>
            </Grid2>
          </>
          {/* <>
            <Grid2 xs={7}>
              <Typography style={leftContent}>Service Fee</Typography>
            </Grid2>
            <Grid2 xs={5} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>20.000 ₫</Typography>
            </Grid2>
          </> */}
          <>
            <Grid2 xs={7}>
              <Typography style={leftContent}>Total</Typography>
            </Grid2>
            <Grid2 xs={5} sx={{ textAlign: "right" }}>
              <Typography style={rightContent}>
                {formatNumber(props.timeshare.price)} VNĐ
              </Typography>
            </Grid2>
          </>
          <Divider sx={{ width: "100%", margin: "10px 0" }} />
        </Grid2>
        <Grid2 xs={12} container justifyContent="center" alignItems="center">
          <img
            src={"https://i.ibb.co/995RZ07/logo.png"}
            width="50px"
            height="50px"
            alt=""
          />
          <Typography ml={1} style={rightContent}>
            Manage By TEP
          </Typography>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default TimeshareInformationComponent;
