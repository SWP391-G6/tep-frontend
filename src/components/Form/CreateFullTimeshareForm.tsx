import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ImageUploading, { ImageListType } from "react-images-uploading";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { cityList } from "../../utils/cities";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  isEndDateValid,
  isStartingFromTomorrow,
} from "../../helpers/dateHelpers";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import ErrorMessage from "../Error/errorMessage";
import { isEmpty } from "lodash";
import axios from "axios";
import Textarea from "@mui/joy/Textarea";
import { ToastContainer, toast } from "react-toastify";
import { USER_ID_KEY } from "../../constant";
import destinationAPI from "../../services/destination/destinationAPI";
import timeshareAPI from "../../services/timeshare/timeshareAPI";
import roomTypeAPI from "../../services/roomtype/roomtypeAPI";
import InstructMessage from "../Instruct/instructMessage";
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
  timeshareDescription: string;
  desName: string;
  destinationDescription: string;
  branch: string;
  address: string;
  roomTypeName: string;
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
  name: yup.string().required("Name can't be empty!"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .integer("Price must be integer!")
    .min(0)
    .required("Price can't be blank!"),
  timeshareDescription: yup.string().required("Description can't be empty!"),
  desName: yup.string().required("Name can't be empty!"),
  destinationDescription: yup.string().required("Description can't be empty!"),
  branch: yup.string().required("Description can't be empty!"),
  address: yup.string().required("Description can't be empty!"),
  roomTypeName: yup.string().required("Room type name can't be empty!"),
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

const CreateFullTimeshareForm = () => {
  let timeoutRef = useRef<any>();
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const [dateEnd, setDateEnd] = useState<dayjs.Dayjs>();
  const navigate = useNavigate();
  const [dateStart, setDateStart] = useState<dayjs.Dayjs>();
  const [dateStartError, setDateStartError] = useState(true);
  const [dateEndError, setDateEndError] = useState(true);
  const [citySelectError, setCitySelectError] = useState(true);
  const [city, setCity] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const [image, setImage] = useState("");
  const maxNumber = 69;
  const [errorImage, setErrorImage] = useState(true);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleClickOpenConfirmDialog = () => {
    setOpenConfirmDialog(true);
  };

  const handleClickCloseConfirmDialog = () => {
    setOpenConfirmDialog(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCitySelectError(false);
    setCity(event.target.value as string);
  };

  const onChangeImage = async (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList as any);
    setErrorImage(false);
    if (imageList.length > 0 && !isEmpty(imageList)) {
      let body = new FormData();
      body.set("key", "b38ea87fcf9472d58c07aaa731f9925f");
      body.append("image", imageList[0].file!);

      const responseImage = await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
      });

      if (responseImage.status === 200) {
        setImage(responseImage.data.data.url);
      } else {
        setErrorImage(true);
      }
    }
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
    try {
      const createDestinationResponse: any =
        await destinationAPI.createDestination({
          desName: data.desName,
          branch: data.branch,
          city: city,
          country: "Việt Nam",
          address: data.address,
          description: data.destinationDescription,
        });
      if (
        createDestinationResponse &&
        createDestinationResponse.destinationId &&
        dateStart &&
        dateEnd
      ) {
        const createTimeshareResponse: any = await timeshareAPI.createTimeshare(
          {
            date_start: dateStart,
            date_end: dateEnd,
            price: data.price,
            status: true,
            name: data.name,
            owner: userID,
            destination_id: createDestinationResponse.destinationId,
            description: data.timeshareDescription,
            image_url: image,
            city: city,
            exchange: true,
          }
        );
        if (createTimeshareResponse && !isEmpty(createTimeshareResponse)) {
          const createRoomType: any = await roomTypeAPI.createRoomType({
            name: data.roomTypeName,
            sleeps: data.sleeps,
            room_view: data.room_view,
            bed: data.bed,
            bath: data.bath,
            kitchen: data.kitchen,
            entertaiment: data.entertainment,
            features: data.features,
            policies: data.policies,
            timeshareId: createTimeshareResponse.timeshareId,
          });
          if (createRoomType && !isEmpty(createRoomType)) {
            toast.success("Create Timeshare Successfully!", {
              position: "top-center",
            });
            timeoutRef.current = setTimeout(() => {
              navigate("/member/profile/my_timeshare");
            }, 1700);
            return;
          } else {
            console.log("Lỗi tạo Room Type!");
            toast.error("Create Timeshare Failed!", {
              position: "top-center",
            });
          }
        } else {
          console.log("Lỗi tạo Destination!");
          toast.error("Create Timeshare Failed!", {
            position: "top-center",
          });
        }
      }
    } catch (error) {
      console.log("Error at CreateFullTimeshareForm.tsx line 182.", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(() => {
        // if (isEmpty(dateStart)) {
        //   setDateEndError(true);
        //   setDateStartError(true);
        // } else {
        //   setDateEndError(false);
        //   setDateStartError(false);
        // }
        if (
          errorImage === true ||
          dateEndError === true ||
          dateStartError === true ||
          citySelectError === true
        ) {
          return;
        }

        if (errors && isEmpty(errors)) {
          handleClickOpenConfirmDialog();
        }
      })}
    >
      <Grid2
        container
        p={2}
        width={"100%"}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        {/* Timeshare Form */}
        <Grid2 xs={5.5}>
          <Paper elevation={10} sx={{ width: "100%", height: "815px", p: 2 }}>
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
                        setDateStartError(false);
                        setDateStart(dateStart);
                      } else {
                        setDateStartError(true);
                      }
                    }}
                  />
                  {dateStartError === true ? (
                    <React.Fragment>
                      <Box sx={{ height: "5px" }} />
                      <InstructMessage
                        message={"Check in day start from tomorrow!"}
                      />
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
                          setDateEndError(false);
                          setDateEnd(dateEnd);
                        } else {
                          setDateEndError(true);
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
                  {dateEndError === true ? (
                    <React.Fragment>
                      <Box sx={{ height: "5px" }} />
                      <InstructMessage
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
                mt={3}
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
                      <InstructMessage message={"Please select the city!"} />
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

              <Grid2 xs={12} mt={3}>
                <Textarea
                  sx={{ marginBottom: "15px" }}
                  color="primary"
                  disabled={false}
                  minRows={2}
                  placeholder="Type the description timeshare...."
                  size="lg"
                  variant="soft"
                  {...register("timeshareDescription")}
                />
                {errors["timeshareDescription"]?.message ? (
                  <ErrorMessage
                    message={errors["timeshareDescription"].message}
                  />
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
                            <InstructMessage
                              message={"Please upload timeshare image!"}
                            />
                          </React.Fragment>
                        ) : null}
                        <Grid2>
                          {imageList.length > 0 ? (
                            imageList.map((image, index) => (
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
                                  boxShadow:
                                    "2px 2px 3px 3px rgba(0, 0, 0, 0.2)",
                                }}
                              >
                                <img
                                  src={image.dataURL}
                                  alt=""
                                  width={280}
                                  height={200}
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
                                    onClick={() => {
                                      onImageRemove(index);
                                      setErrorImage(true);
                                    }}
                                  >
                                    Remove
                                  </Button>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div
                              className="image-item"
                              style={{
                                width: "100%",
                                height: "100%",
                                marginBottom: "16px",
                                marginTop: "30px",
                              }}
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/3820/3820184.png"
                                alt="Upload Image Icon"
                                width={170}
                                height={170}
                              />
                            </div>
                          )}
                        </Grid2>
                      </Grid2>
                    </div>
                  )}
                </ImageUploading>
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
        {/* Destination */}
        <Grid2 xs={5.5}>
          <Paper elevation={10} sx={{ width: "100%", height: "100%", p: 2.5 }}>
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

                <Grid2 xs={12}>
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
                <Grid2
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                  mt={2}
                  xs={12}
                >
                  <Grid2 xs={4} width={"55%"}>
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

                  <Grid2 width={"40%"} xs={8}>
                    <CustomBorderTextField
                      label="Country"
                      value={"Viet Nam"}
                      variant="outlined"
                      disabled
                      sx={{ width: "100%" }}
                    />
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
                    {...register("destinationDescription")}
                  />
                  {errors["destinationDescription"]?.message ? (
                    <ErrorMessage
                      message={errors["destinationDescription"].message}
                    />
                  ) : null}
                </Grid2>
              </Grid2>
            </Grid2>
            <Divider sx={{ width: "100%" }} />

            {/* Room Type */}
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
                    {...register("roomTypeName")}
                    sx={{ width: "100%" }}
                  />
                  {errors["roomTypeName"]?.message ? (
                    <ErrorMessage message={errors["roomTypeName"].message} />
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
                  <Grid2 width={"31%"}>
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
                  <Grid2 width={"31%"}>
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
                  <Grid2 width={"31%"}>
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
                <Grid2
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                  mt={2}
                >
                  <Grid2 width={"48%"}>
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
                  <Grid2 width={"48%"}>
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
                </Grid2>
                <Grid2
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  width={"100%"}
                  mt={2}
                >
                  <Grid2 width={"48%"}>
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
                  <Grid2 width={"48%"}>
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
              </Grid2>
            </Grid2>
          </Paper>
        </Grid2>
        <Grid2
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          xs={11.15}
          p={2}
          bgcolor={"#b2e2e4"}
        >
          <Button
            variant="outlined"
            onClick={() => {
              navigate(-1);
            }}
            sx={{
              color: "#00acb3",
              borderColor: "#00acb3",
              backgroundColor: "#fff",
              marginRight: "10px",
              "&:hover": {
                backgroundColor: "#00acb3",
                borderColor: "#00acb3",
                color: "#fff",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "#fff",
              backgroundColor: "#00acb3",
              "&:hover": {
                backgroundColor: "#08b7bd",
              },
            }}
          >
            Create Timeshare
          </Button>
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
        <ToastContainer
          autoClose={2000}
          style={{ marginTop: "50px", width: "400px" }}
        />
      </Grid2>
    </form>
  );
};

export default CreateFullTimeshareForm;
