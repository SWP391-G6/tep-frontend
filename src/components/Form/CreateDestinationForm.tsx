import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { cityList } from "../../utils/cities";
import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";

import SaveAsIcon from "@mui/icons-material/SaveAs";
import { isEmpty } from "lodash";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../Error/errorMessage";
import { useAppDispatch } from "../../configStore";
import { destinationActions } from "../../slices/destination/destination";

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
  desName: string;
  description: string;
  branch: string;
  address: string;
};
const validationSchema = yup.object({
  desName: yup.string().required("Name can't be empty!"),
  description: yup.string().required("Description can't be empty!"),
  branch: yup.string().required("Description can't be empty!"),
  address: yup.string().required("Description can't be empty!"),
});

const CreateDestinationForm = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();
  const [isSuccess, setIsSuccess] = useState(false);
  const [citySelectError, setCitySelectError] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const handleChange = (event: SelectChangeEvent) => {
    setCitySelectError(false);
    setCity(event.target.value as string);
  };

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: Inputs) => {
    dispatch(
      destinationActions.setState({
        ...data,
        city: city,
        country: "Việt Nam",
        isNext: true,
      })
    );
    setIsSuccess(true);
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
              Destination Information
            </Typography>

            <Grid2
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width={"100%"}
              mt={1}
            >
              <Grid2 width={"55%"} xs={8}>
                <CustomBorderTextField
                  label="Destination Name"
                  variant="outlined"
                  {...register("desName")}
                  sx={{ width: "100%" }}
                />
                {errors["desName"]?.message ? (
                  <ErrorMessage message={errors["desName"].message} />
                ) : null}
              </Grid2>

              <Grid2 width={"40%"} xs={4}>
                <CustomBorderTextField
                  label="Branch Name"
                  variant="outlined"
                  {...register("branch")}
                  sx={{ width: "100%" }}
                />
                {errors["branch"]?.message ? (
                  <ErrorMessage message={errors["branch"].message} />
                ) : null}
              </Grid2>
            </Grid2>
            <Grid2
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              width={"100%"}
              xs={12}
              mt={2}
            >
              <Grid2 width={"40%"} xs={8}>
                <CustomBorderTextField
                  label="Country"
                  value={"Viet Nam"}
                  variant="outlined"
                  disabled
                  sx={{ width: "100%" }}
                />
              </Grid2>

              <Grid2 width={"55%"} xs={4}>
                <FormControl fullWidth>
                  <InputLabel id="cities-select-label">City</InputLabel>
                  <Select
                    labelId="cities-select-label"
                    id="cities-select"
                    value={city}
                    label="City"
                    onChange={handleChange}
                    MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}
                  >
                    {cityList.map((city) => {
                      return (
                        <MenuItem key={city.code} value={city.name}>
                          {city.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                {citySelectError === true ? (
                  <React.Fragment>
                    <ErrorMessage message={"Please select the city!"} />
                  </React.Fragment>
                ) : null}
              </Grid2>
            </Grid2>
            <Grid2 xs={12} mt={2}>
              <CustomBorderTextField
                label="Address"
                variant="outlined"
                sx={{ width: "100%" }}
                {...register("address")}
              />
              {errors["address"]?.message ? (
                <ErrorMessage message={errors["address"].message} />
              ) : null}
            </Grid2>

            <Grid2 xs={12} mt={2}>
              <Textarea
                sx={{ marginBottom: "15px" }}
                color="primary"
                disabled={false}
                minRows={2}
                placeholder="Type the description destination...."
                size="lg"
                variant="soft"
                {...register("description")}
              />
              {errors["description"]?.message ? (
                <ErrorMessage message={errors["description"].message} />
              ) : null}
            </Grid2>

            <Grid2 container xs={12} mt={1} justifyContent="flex-end">
              {isSuccess === false ? (
                <Button
                  variant="outlined"
                  startIcon={<SaveAsIcon />}
                  type="submit"
                  onClick={() => {
                    if (isEmpty(city) || city === "") {
                      setCitySelectError(true);
                      return;
                    } else setCitySelectError(false);
                    if (!errors && isEmpty(errors) && !citySelectError) {
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
                  onClick={() => {
                    if (isEmpty(city) || city === "") {
                      setCitySelectError(true);
                      return;
                    } else setCitySelectError(false);
                    if (!errors && isEmpty(errors) && !citySelectError) {
                      handleClickOpenConfirmDialog();
                    }
                  }}
                  disabled
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
            {"Confirm to create destination!"}
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
    </Card>
  );
};

export default CreateDestinationForm;
