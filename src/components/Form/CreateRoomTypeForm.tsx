import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Textarea from "@mui/joy/Textarea";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../Error/errorMessage";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../../configStore";
import { roomTypeActions } from "../../slices/roomtype/roomtype";

const CustomBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #00acb3;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #00acb3;
    }
  }
`;

type Inputs = {
  name: string;
  room_view: string;
  kitchen: string;
  entertainment: string;
  features: string;
  policies: string;
  sleeps: number;
  bed: number;
  bath: number;
};

const validationSchema = yup.object({
  name: yup.string().required("Room type name can't be empty!"),
  room_view: yup.string().required("Room view can't be empty!"),
  kitchen: yup.string().required("Kitchen can't be empty!"),
  entertainment: yup.string().required("Entertainment can't be empty!"),
  features: yup.string().required("Features can't be empty!"),
  policies: yup.string().required("Policies can't be empty!"),
  sleeps: yup
    .number()
    .min(1, "Minimum is 1!")
    .max(10, "Maximum is 10!")
    .typeError("Amount of people is number!")
    .required("Amount of people can't be empty!"),
  bed: yup
    .number()
    .min(1, "Minimum is 1!")
    .max(10, "Maximum is 10!")
    .typeError("Amount of bed is number!")
    .required("Bed can't be empty!"),
  bath: yup
    .number()
    .min(1, "Minimum is 1!")
    .max(10, "Maximum is 10!")
    .typeError("Amount of bath is number!")
    .required(" Bath can't be empty!"),
});

const CreateRoomTypeForm = () => {
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const dispatch = useAppDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const onSubmit = async (data: Inputs) => {
    dispatch(
      roomTypeActions.setState({
        ...data,
        isNext: true,
      })
    );
    setIsSuccess(true);
    toast.success("Create Destination Successfully!", {
      position: "top-center",
    });
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        padding: "20px 20px 70px 20px",
      }}
      elevation={10}
    >
      <form onSubmit={handleSubmit(handleClickOpenConfirmDialog)}>
        <Grid2
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid2 xs={12}>
            <Typography
              variant="subtitle1"
              fontSize={22}
              fontWeight={900}
              color="#00acb3"
            >
              Room Type Information
            </Typography>

            <Grid2 xs={12} mt={1}>
              <CustomBorderTextField
                label="Room Type Name"
                variant="outlined"
                {...register("name")}
                sx={{ width: "100%" }}
              />
              {errors["name"]?.message ? (
                <ErrorMessage message={errors["name"].message} />
              ) : null}
            </Grid2>

            <Grid2
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width={"100%"}
              mt={2}
            >
              <Grid2 xs={4}>
                <CustomBorderTextField
                  label="Amount of people"
                  variant="outlined"
                  type="number"
                  {...register("sleeps")}
                  sx={{ width: "100%" }}
                />
                {errors["sleeps"]?.message ? (
                  <ErrorMessage message={errors["sleeps"].message} />
                ) : null}
              </Grid2>
              <Grid2 xs={4}>
                <CustomBorderTextField
                  label="Amount of bed"
                  variant="outlined"
                  type="number"
                  {...register("bed")}
                  sx={{ width: "100%" }}
                />

                {errors["bed"]?.message ? (
                  <ErrorMessage message={errors["bed"].message} />
                ) : null}
              </Grid2>
              <Grid2 xs={4}>
                <CustomBorderTextField
                  label="Amount of bath"
                  variant="outlined"
                  type="number"
                  {...register("bath")}
                  sx={{ width: "100%" }}
                />
                {errors["bath"]?.message ? (
                  <ErrorMessage message={errors["bath"].message} />
                ) : null}
              </Grid2>
            </Grid2>

            <Grid2 xs={6} mt={2}>
              <CustomBorderTextField
                label="Kitchen"
                variant="outlined"
                {...register("kitchen")}
                sx={{ width: "100%" }}
              />
              {errors["kitchen"]?.message ? (
                <ErrorMessage message={errors["kitchen"].message} />
              ) : null}
            </Grid2>

            <Grid2 xs={6} mt={2}>
              <CustomBorderTextField
                label="Entertainment"
                variant="outlined"
                {...register("entertainment")}
                sx={{ width: "100%" }}
              />
              {errors["entertainment"]?.message ? (
                <ErrorMessage message={errors["entertainment"].message} />
              ) : null}
            </Grid2>

            <Grid2 xs={6} mt={2}>
              <CustomBorderTextField
                label="Policies"
                variant="outlined"
                {...register("policies")}
                sx={{ width: "100%" }}
              />
              {errors["policies"]?.message ? (
                <ErrorMessage message={errors["policies"].message} />
              ) : null}
            </Grid2>
            <Grid2 xs={6} mt={2}>
              <CustomBorderTextField
                label="Features"
                variant="outlined"
                {...register("features")}
                sx={{ width: "100%" }}
              />
              {errors["features"]?.message ? (
                <ErrorMessage message={errors["features"].message} />
              ) : null}
            </Grid2>

            <Grid2 xs={6} mt={2}>
              <Textarea
                sx={{ marginBottom: "15px" }}
                color="primary"
                disabled={false}
                minRows={2}
                placeholder="Type the description room view...."
                size="lg"
                variant="soft"
                {...register("room_view")}
              />
              {errors["room_view"]?.message ? (
                <ErrorMessage message={errors["room_view"].message} />
              ) : null}
            </Grid2>

            <Grid2 container xs={12} mt={1} justifyContent="flex-end">
              {isSuccess === false ? (
                <Button
                  variant="outlined"
                  startIcon={<SaveAsIcon />}
                  type="submit"
                  onClick={() => {
                    if (!errors && isEmpty(errors)) {
                      handleClickOpenConfirmDialog();
                    }
                  }}
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
                  Draft
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  startIcon={<SaveAsIcon />}
                  type="submit"
                  disabled
                  onClick={() => {
                    if (!errors && isEmpty(errors)) {
                      handleClickOpenConfirmDialog();
                    }
                  }}
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
                  Draft
                </Button>
              )}
            </Grid2>
          </Grid2>
        </Grid2>
        <Dialog
          open={openConfirmDialog}
          onClose={handleClickCloseConfirmDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm to create room type!"}
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
                handleClickCloseConfirmDialog();

                let formValue = getValues();
                if (formValue || !isEmpty(formValue)) {
                  onSubmit(formValue);
                }
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
      </form>
      <ToastContainer
        autoClose={2000}
        style={{ marginTop: "50px", width: "400px" }}
      />
    </Card>
  );
};

export default CreateRoomTypeForm;
