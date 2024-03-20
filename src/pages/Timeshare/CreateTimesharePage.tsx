import { Box, Button, Card, Container, Typography } from "@mui/material";

import BackButton from "../../components/Button/backButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ position: "relative", marginTop: "30px" }}>
              {getStepContent(activeStep)}
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
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </Box>
          </React.Fragment>
        )}
      </Container>
    </Container>
  );
};
export default CreateTimesharePage;
