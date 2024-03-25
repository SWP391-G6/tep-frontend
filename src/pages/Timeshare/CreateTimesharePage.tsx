import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";

import BackButton from "../../components/Button/backButton";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateRoomTypeForm from "../../components/Form/CreateRoomTypeForm";
import CreateDestinationForm from "../../components/Form/CreateDestinationForm";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import CreateTimeshareForm from "../../components/Form/CreateTimeshareForm";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { useAppDispatch } from "../../configStore";
import { timeshareActions } from "../../slices/timeshare/timeshare";
import { destinationActions } from "../../slices/destination/destination";
import { roomTypeActions } from "../../slices/roomtype/roomtype";
import { useSelector } from "react-redux";
import { USER_ID_KEY } from "../../constant";
import destinationAPI from "../../services/destination/destinationAPI";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import roomTypeAPI from "../../services/roomtype/roomtypeAPI";
import { ToastContainer, toast } from "react-toastify";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(0, 172, 179) 0%, rgb(135, 206, 235) 50%, rgb(127, 255, 212) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 136deg, rgb(0, 172, 179) 0%, rgb(135, 206, 235) 50%, rgb(127, 255, 212) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient(136deg, rgb(0, 172, 179) 0%, rgb(135, 206, 235) 50%, rgb(127, 255, 212) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient(136deg, rgb(0, 172, 179) 0%, rgb(135, 206, 235) 50%, rgb(127, 255, 212) 100%)",
  }),
}));

const steps = [
  "Timeshare Information",
  "Destination Information",
  "Room Type Information",
];

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return <CreateTimeshareForm />;
    case 1:
      return <CreateDestinationForm />;
    case 2:
      return <CreateRoomTypeForm />;
    default:
      throw new Error("Unknown step");
  }
};

const ColorlibStepIcon = (props: StepIconProps) => {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
};

const CreateTimesharePage = () => {
  let timeoutRef = useRef<any>();
  const response = useSelector((state: any) => state);
  const navigate = useNavigate();
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const [activeStep, setActiveStep] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const dispatch = useAppDispatch();

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  useEffect(() => {
    setIsNext(response.timeshare.isNext);
    return () => {
      dispatch(timeshareActions.resetState());
      dispatch(destinationActions.resetState());
      dispatch(roomTypeActions.resetState());
    };
  }, []);

  const handleCreateTimeshare = async () => {
    try {
      if (response && response.destination) {
        const createDestinationResponse: any =
          await destinationAPI.createDestination({
            desName: response.destination.desName,
            branch: response.destination.branch,
            city: response.destination.city,
            country: "Việt Nam",
            address: response.destination.address,
            description: response.destination.description,
          });

        if (
          createDestinationResponse &&
          createDestinationResponse.destinationId
        ) {
          const createTimeshareResponse: any =
            await timeshareAPI.createTimeshare({
              date_start: response.timeshare.date_start,
              date_end: response.timeshare.date_end,
              price: response.timeshare.price,
              status: true,
              name: response.timeshare.name,
              owner: userID,
              destination_id: createDestinationResponse.destinationId,
              description: response.timeshare.description,
              image_url: response.timeshare.image_url,
              city: response.timeshare.city,
              exchange: true,
            });

          console.log("TS", createTimeshareResponse);
          if (createTimeshareResponse) {
            console.log("123");
            console.log(createDestinationResponse.timeshareId)
            
            const createRoomType: any = await roomTypeAPI.createRoomType({
              name: response.roomtype.name,
              sleeps: response.roomtype.sleeps,
              room_view: response.roomtype.room_view,
              bed: response.roomtype.bed,
              bath: response.roomtype.bath,
              kitchen: response.roomtype.kitchen,
              entertainment: response.roomtype.entertainment,
              features: response.roomtype.features,
              policies: response.roomtype.policies,
              timeshareId: createTimeshareResponse.timeshareId,
            });
            console.log("RoomType: ", createRoomType);
            if (createRoomType) {
              toast.success("Create Timeshare Successfully!", {
                position: "top-center",
              });
              timeoutRef.current = setTimeout(() => {
                navigate("/member/profile/my_timeshare");
              }, 1700);
              return;
            } else {
              toast.error("Create Timeshare Failed!", {
                position: "top-center",
              });
            }
          }
        }
      }
    } catch (error) {
      console.log("Error at handleCreateTimeshare! ", error);
    }
  };

  return (
    <Container
      disableGutters={true}
      maxWidth={false}
      style={{ padding: "0 40px 17px 40px" }}
    >
      <BackButton />
      <Container>
        <Typography
          align="center"
          sx={{
            fontSize: "2rem",
            fontWeight: "bold ",
            color: "#00acb3",
          }}
        >
          Create Timeshare
        </Typography>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<ColorlibConnector />}
          sx={{ mt: 2 }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Create Timeshare Successfully!
            </Typography>
          </React.Fragment>
        ) : (
          <Grid2
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid2
              xs={12}
              sx={{ position: "relative", marginTop: "30px", width: "800px" }}
            >
              {getStepContent(activeStep)}
              <Grid2
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  backgroundColor: "#b2e2e4",
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {activeStep !== 0 ? (
                  <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{
                      color: "#00acb3",
                      borderColor: "#00acb3",
                      backgroundColor: "#fff",
                      "&:hover": {
                        backgroundColor: "#00acb3",
                        borderColor: "#00acb3",
                        color: "#fff",
                      },
                    }}
                  >
                    Back
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    disabled
                    onClick={handleBack}
                    sx={{
                      color: "#00acb3",
                      borderColor: "#00acb3",
                      backgroundColor: "#fff",
                      "&:hover": {
                        backgroundColor: "#00acb3",
                        borderColor: "#00acb3",
                        color: "#fff",
                      },
                    }}
                  >
                    Back
                  </Button>
                )}
                {activeStep === steps.length - 1 ? (
                  <Button
                    variant="contained"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#00acb3",
                      "&:hover": {
                        backgroundColor: "#08b7bd",
                      },
                    }}
                    onClick={handleClickOpenConfirmDialog}
                  >
                    Create
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{
                      color: "#fff",
                      backgroundColor: "#00acb3",
                      "&:hover": {
                        backgroundColor: "#08b7bd",
                      },
                    }}
                    onClick={handleNext}
                  >
                    Next
                  </Button>
                )}
              </Grid2>
            </Grid2>
          </Grid2>
        )}
      </Container>
      <Dialog
        open={openConfirmDialog}
        onClose={handleClickCloseConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm to create timeshare!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please check information carefully before save!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              my: 2,
              color: "#ffffff",
              backgroundColor: "#00acb3",
              display: "block",
              marginLeft: "10px",
              "&:hover": {
                backgroundColor: "#08b7bd",
              },
            }}
            variant="contained"
            onClick={() => {
              handleCreateTimeshare();
              handleClickCloseConfirmDialog();
            }}
            autoFocus
          >
            Yes
          </Button>
          <Button
            sx={{
              my: 2,
              color: "#00acb3",
              display: "block",
              marginLeft: "10px",
              "&:hover": {
                borderColor: "#08b7bd",
              },
            }}
            variant="outlined"
            onClick={handleClickCloseConfirmDialog}
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "400px" }}
      />
    </Container>
  );
};
export default CreateTimesharePage;
