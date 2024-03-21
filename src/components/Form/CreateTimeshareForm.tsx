import {
  Box,
  Button,
  Card,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
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
import { useEffect, useState } from "react";
import { formatNumber } from "../../helpers/numberHelpers";
import ImageUploading, { ImageListType } from "react-images-uploading";
import Textarea from "@mui/joy/Textarea";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { red } from "@mui/material/colors";
var now = dayjs();
const currenttDate = dayjs(now, "DD-MM-YYYY", "vn");

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

const CreateTimeshareForm = () => {
  const [dateEnd, setDateEnd] = useState<dayjs.Dayjs>(dayjs());
  const [dateStart, setDateStart] = useState<dayjs.Dayjs>(dayjs());
  const [city, setCity] = useState("");
  const [images, setImages] = useState<any[]>([]);
  const maxNumber = 69;
  const [error, setError] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const onChangeImage = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    // console.log(imageList, addUpdateIndex);
    setImages(imageList as any);
    setError(false);
  };

  return (
    <Card
      sx={{
        width: "100%",
        height: "800px",
        padding: 3,
      }}
      elevation={10}
    >
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
          />
        </Grid2>
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
            value={currenttDate}
            disablePast
            format="DD/MM/YYYY"
            onChange={(dateStart: any) => {
              setDateStart(dateStart);
            }}
          />
        </Grid2>
        <Grid2 mt={3}>
          <Typography fontWeight={900} color={"#00acb3"} fontSize={18}>
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
          <DatePicker
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
        </Grid2>
        <Grid2 xs={6} mt={1}>
          <FormControl sx={{ marginTop: "10px" }} fullWidth>
            <InputLabel id="cities-select-label">City</InputLabel>
            <Select
              labelId="cities-select-label"
              id="cities-select"
              value={city}
              label="City"
              onChange={handleChange}
              sx={{ mb: 2 }}
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
        </Grid2>

        <Grid2 xs={5} mt={1}>
          <CustomBorderTextField
            sx={{ width: "100%" }}
            label="Price"
            // onChange={}
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
        </Grid2>

        <Grid2 xs={12} mt={1}>
          <Textarea
            sx={{ marginBottom: "15px" }}
            color="primary"
            disabled={false}
            minRows={2}
            placeholder="Type the description...."
            size="lg"
            variant="soft"
          />
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
                <Button
                  startIcon={<CloudUploadOutlinedIcon />}
                  variant="contained"
                  style={isDragging ? { color: "red" } : undefined}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Add Image
                </Button>
                <Grid2 xs={12}>
                  <Paper elevation={10}></Paper>
                </Grid2>
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="image-item"
                    style={{
                      width: "30vw",
                      marginBottom: "16px",
                      marginTop: "16px",
                      border: "1px solid",
                      padding: "16px",
                      borderRadius: "8px",
                    }}
                  >
                    <img src={image.dataURL} alt="" width="100%" />
                    <div className="image-item__btn-wrapper">
                      <Button
                        variant="outlined"
                        startIcon={<ChangeCircleOutlinedIcon />}
                        onClick={() => onImageUpdate(index)}
                      >
                        Thay đổi
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<DeleteOutlineOutlinedIcon />}
                        sx={{ ml: 2 }}
                        onClick={() => onImageRemove(index)}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </Grid2>
      </Grid2>
    </Card>
  );
};

export default CreateTimeshareForm;
