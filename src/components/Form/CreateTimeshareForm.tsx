import {
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/system";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { cityList } from "../../utils/cities";
import React, { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Textarea from "@mui/joy/Textarea";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEmpty } from "lodash";
import ErrorMessage from "../Error/errorMessage";
import {
  isEndDateValid,
  isStartingFromTomorrow,
} from "../../helpers/dateHelpers";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("vn");

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
  price: number;
  description: string;
};

const CreateTimeshareForm = () => {
  const [dateEnd, setDateEnd] = useState<dayjs.Dayjs>();
  const [dateStart, setDateStart] = useState<dayjs.Dayjs>();
  const [startDayError, setStartDayError] = useState(false);
  const [endDayError, setEndDayError] = useState(false);
  const [citySelectError, setCitySelectError] = useState(false);
  const [city, setCity] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const maxNumber = 69;
  const [errorImage, setErrorImage] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const validationSchema = yup.object({
    name: yup.string().required("Name can't be empty!"),
    price: yup
      .number()
      .typeError("Price must be a number")
      .integer("Price must be integer!")
      .min(0)
      .required("Price can't be blank!"),
    description: yup.string().required("Description can't be empty!"),
  });

  const handleChange = (event: SelectChangeEvent) => {
    setCitySelectError(false);
    setCity(event.target.value as string);
  };

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList as any);
    setErrorImage(false);
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
    console.log("Data: ", data);
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
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid2 xs={12}>
            <Typography
              variant="subtitle1"
              fontSize={22}
              fontWeight={900}
              color="#00acb3"
            >
              Timeshare Information
            </Typography>
          </Grid2>
          <Grid2 mt={1.5} sx={{ width: "100%" }}>
            <CustomBorderTextField
              label="Timeshare Name"
              variant="outlined"
              sx={{ width: "100%" }}
              {...register("name")}
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
            mt={1}
          >
            <Grid2 xs={5}>
              <Typography
                sx={{ marginTop: "10px", marginLeft: "5px" }}
                fontSize="0.75rem"
                color="#00acb3"
              >
                Check In Date
              </Typography>
              <DatePicker
                sx={{ width: "100%" }}
                views={["day", "month", "year"]}
                disablePast
                format="DD/MM/YYYY"
                onChange={(dateStart: any) => {
                  if (isStartingFromTomorrow(dayjs(dateStart))) {
                    setStartDayError(false);
                    setDateStart(dateStart);
                  } else {
                    setStartDayError(true);
                  }
                }}
              />
              {startDayError === true ? (
                <React.Fragment>
                  <Box sx={{ height: "5px" }} />
                  <ErrorMessage message={"Check in day start from tomorrow!"} />
                </React.Fragment>
              ) : null}
            </Grid2>
            <Grid2>
              <Typography
                fontWeight={900}
                color={"#00acb3"}
                fontSize={18}
                mt={4}
              >
                To
              </Typography>
            </Grid2>
            <Grid2 xs={5}>
              <Typography
                sx={{ marginTop: "10px", marginLeft: "5px" }}
                fontSize="0.75rem"
                color="#00acb3"
              >
                Check Out Date
              </Typography>
              {dateStart ? (
                <DatePicker
                  sx={{ width: "100%" }}
                  minDate={dateStart}
                  views={["day", "month", "year"]}
                  disablePast
                  onChange={(dateEnd: any) => {
                    if (isEndDateValid(dateStart, dateEnd)) {
                      setEndDayError(false);
                      setDateEnd(dateEnd);
                    } else {
                      setEndDayError(true);
                    }
                  }}
                  format="DD/MM/YYYY"
                />
              ) : (
                <DatePicker
                  disabled
                  sx={{ width: "100%" }}
                  minDate={dateStart}
                  value={dateStart}
                  views={["day", "month", "year"]}
                  disablePast
                  onChange={(dateEnd: any) => {
                    setDateEnd(dateEnd);
                  }}
                  format="DD/MM/YYYY"
                />
              )}
              {endDayError === true ? (
                <React.Fragment>
                  <Box sx={{ height: "5px" }} />
                  <ErrorMessage
                    message={"Checkout date at least 3 days after checkin!"}
                  />
                </React.Fragment>
              ) : null}
            </Grid2>
          </Grid2>

          <Grid2
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width={"100%"}
            mt={2}
          >
            <Grid2 xs={6}>
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

            <Grid2 xs={5}>
              <CustomBorderTextField
                sx={{ width: "100%" }}
                type="number"
                label="Price"
                {...register("price")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography fontWeight={900} color={"#00acb3"}>
                        VNĐ
                      </Typography>
                    </InputAdornment>
                  ),
                }}
              />
              {errors["price"]?.message ? (
                <ErrorMessage message={errors["price"].message} />
              ) : null}
            </Grid2>
          </Grid2>

          <Grid2 xs={12} mt={2}>
            <Textarea
              sx={{ marginBottom: "15px" }}
              color="primary"
              disabled={false}
              minRows={2}
              placeholder="Type the description timeshare...."
              size="lg"
              variant="soft"
              {...register("description")}
            />
            {errors["description"]?.message ? (
              <ErrorMessage message={errors["description"].message} />
            ) : null}
          </Grid2>

          <Grid2 xs={12} mt={1}>
            <ImageUploading
              multiple={false}
              value={images}
              onChange={onChangeImage}
              maxNumber={maxNumber}
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <Grid2
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid2>
                      {imageList.length <= 0 ? (
                        <Button
                          startIcon={<CloudUploadOutlinedIcon />}
                          variant="contained"
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                          sx={{
                            bgcolor: "#00acb3",
                            "&:hover": {
                              bgcolor: "#08b7bd",
                            },
                          }}
                        >
                          Add Image
                        </Button>
                      ) : (
                        <Button
                          startIcon={<CloudUploadOutlinedIcon />}
                          disabled
                          variant="contained"
                          style={isDragging ? { color: "red" } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                          sx={{
                            bgcolor: "#00acb3",
                            "&:hover": {
                              bgcolor: "#08b7bd",
                            },
                          }}
                        >
                          Add Image
                        </Button>
                      )}
                    </Grid2>
                    {errorImage === true ? (
                      <React.Fragment>
                        <Box sx={{ height: "5px" }} />
                        <ErrorMessage
                          message={"Please upload timeshare image!"}
                        />
                      </React.Fragment>
                    ) : null}
                    <Grid2>
                      {imageList.map((image, index) => (
                        <div
                          key={0}
                          className="image-item"
                          style={{
                            width: "100%",
                            height: "100%",
                            marginBottom: "16px",
                            marginTop: "16px",
                            border: "2px solid #00acb3",
                            padding: "16px",
                            borderRadius: "8px",
                            boxShadow: "2px 2px 3px 3px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                          <img
                            src={image.dataURL}
                            alt=""
                            width={320}
                            height={250}
                          />
                          <div className="image-item__btn-wrapper">
                            <Button
                              variant="outlined"
                              startIcon={<ChangeCircleOutlinedIcon />}
                              onClick={() => onImageUpdate(index)}
                              sx={{
                                color: "#00acb3",
                                "&:hover": {
                                  borderColor: "#08b7bd",
                                },
                              }}
                            >
                              Change
                            </Button>
                            <Button
                              variant="outlined"
                              startIcon={<DeleteOutlineOutlinedIcon />}
                              sx={{
                                ml: 2,
                                color: "#00acb3",
                                "&:hover": {
                                  borderColor: "#08b7bd",
                                },
                              }}
                              onClick={() => onImageRemove(index)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </Grid2>
                  </Grid2>
                </div>
              )}
            </ImageUploading>
          </Grid2>

          <Grid2 container xs={12} mt={1} justifyContent="flex-end">
            <Button
              variant="outlined"
              startIcon={<SaveAsIcon />}
              type="submit"
              onClick={() => {
                if (isEmpty(dateStart)) {
                  setEndDayError(true);
                  setStartDayError(true);
                } else {
                  setEndDayError(false);
                  setStartDayError(false);
                }
                if (isEmpty(images)) {
                  setErrorImage(true);
                }
                if (isEmpty(city) || city === "") {
                  setCitySelectError(true);
                  return;
                } else setCitySelectError(false);
                if (
                  !errors &&
                  isEmpty(errors) &&
                  dateEnd &&
                  dateStart &&
                  images &&
                  city &&
                  !endDayError &&
                  !startDayError &&
                  !errorImage &&
                  !citySelectError
                ) {
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
          </Grid2>
        </Grid2>
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

export default CreateTimeshareForm;
