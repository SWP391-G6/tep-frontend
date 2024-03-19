import { Box, Button, Card, Container, Typography } from "@mui/material";

import BackButton from "../../components/Button/backButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import CreateRoomTypeForm from "../../components/Form/CreateRoomTypeForm";
import CreateDestinationForm from "../../components/Form/CreateDestinationForm";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { StepIconProps } from "@mui/material/StepIcon";
import { blue } from "@mui/material/colors";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
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

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const steps = [
  "Timeshare Information",
  "Destination Information",
  "Room Type Information",
];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <CreateTimesharePage />;
    case 1:
      return <CreateDestinationForm />;
    case 2:
      return <CreateRoomTypeForm />;
    default:
      throw new Error("Unknown step");
  }
}

function ColorlibStepIcon(props: StepIconProps) {
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
}

const CreateTimesharePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
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
        {/* <Card
          sx={{ marginTop: "30px", width: "100%", height: "800px" }}
          elevation={10}
        ></Card> */}
        <Box sx={{ position: "relative", marginTop: "30px" }}>
          <Card sx={{ width: "100%", height: "800px" }} elevation={10}>
            {/* Nội dung của Card */}
          </Card>
          <Box
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
            <Button
              variant="outlined"
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
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                backgroundColor: "#00acb3",
                "&:hover": {
                  backgroundColor: "#08b7bd",
                },
              }}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
export default CreateTimesharePage;
