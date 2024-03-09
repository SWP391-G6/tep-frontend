import { Box, Button, Divider, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import vnpayAPI from "../../services/payment/vnpayAPI";
import { useNavigate } from "react-router";
import { TimeshareDetailResponse } from "../../interfaces/timeshare/timeshareDetailResponse";
import { formatNumber } from "../../helpers/numberHelpers";
import { RoomTypeResponse } from "../../interfaces/roomtype/roomTypeResponse";
import { USER_ID_KEY } from "../../constant";

type Props = { timeshare: TimeshareDetailResponse; roomType: RoomTypeResponse };

const PaymentSummaryComponent = (props: Props) => {
  const navigate = useNavigate();

  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  var d = new Date(2024, 2, 19);

  // const handleCheckOut = async () => {
  //   try {
  //     let link = "";
  //     const data: any = await vnpayAPI.checkout({
  //       adults: "1",
  //       children: "1",
  //       city: "Ho Chi Minh",
  //       country: "Việt Nam",
  //       create_date: d,
  //       payment_status: 1,
  //       postal_code: "70000",
  //       state: "Thu Duc",
  //       status: 1,
  //       street: "Duong D2",
  //       telephone: "0979121340",
  //       total: props.timeshare.price,
  //       fullname: "Minh Duy",
  //       payment_method: "1",
  //       user_id: userID,
  //       timeshare_id: props.timeshare.timeshareId,
  //     });
  //     if (data && data.data) {
  //       window.open(`${data.data}`);
  //     }
  //   } catch (error) {
  //     console.log("Error at Handle Checkout");
  //   }
  // };

  return (
    <Box>
      <Grid2 container>
        <Grid2 xs={12}>
          <Typography
            variant="subtitle1"
            fontSize={22}
            fontWeight={900}
            color="#00acb3"
          >
            Payment Summary
          </Typography>
        </Grid2>
        <Grid2 xs={12} container>
          <Grid2 xs={6}>
            <Typography variant="subtitle1" fontWeight={900}>
              Rental Booking
            </Typography>
            {/* <Typography variant="subtitle1" fontWeight={900}>
              Service Fee
            </Typography> */}
            {/* <Typography variant="subtitle1" fontWeight={900}>
              TEP Membership
            </Typography> */}
          </Grid2>
          <Grid2 xs={6} textAlign="right">
            <Typography fontWeight={300}>
              {formatNumber(props.timeshare.price)} VNĐ
            </Typography>
            {/* <Typography fontWeight={300}>20.000 ₫</Typography> */}
            {/* <Typography fontWeight={300} color={red[500]}>
                -20.000 ₫
              </Typography> */}
          </Grid2>
          <Divider sx={{ width: "100%", margin: "15px 0" }} />
        </Grid2>
        <Grid2 xs={12} container>
          <Grid2 xs={3}>
            <Typography fontSize={26} fontWeight={900}>
              Total
            </Typography>
          </Grid2>
          <Grid2 xs={9} textAlign="right">
            <Typography fontSize={26} fontWeight={300}>
              {formatNumber(props.timeshare.price)} VNĐ
            </Typography>
            <Button
              variant="contained"
              sx={{
                marginTop: "10px",
                width: "150px",
                background: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
              // onClick={handleCheckOut}
            >
              Check Out
            </Button>
            <Typography fontSize={14} mt={1} fontWeight={300}>
              Your card will be charged {formatNumber(props.timeshare.price)}{" "}
              VNĐ once the owner accepts your booking request
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default PaymentSummaryComponent;
