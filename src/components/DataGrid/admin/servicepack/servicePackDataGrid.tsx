import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import ViewIcon from "@mui/icons-material/Visibility";
import { styled } from "@mui/material/styles";
import dayjs from "dayjs";
import { formatNumber } from "../../../../helpers/numberHelpers";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { ServicePackResponse } from "../../../../interfaces/servicepack/ServivePackResponse";
import servicePackAPI from "../../../../services/servicepack/servicePackAPI";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../../../Error/errorMessage";
import { isEmpty } from "lodash";
import { ToastContainer, toast } from "react-toastify";
var customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);
dayjs.locale("en");

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

const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Service Pack Yet!</Box>
    </StyledGridOverlay>
  );
}

type Inputs = {
  ad_duration: number;
  service_price: number;
};

const validationSchema = yup.object({
  ad_duration: yup
    .number()
    .typeError("Duration must be a number")
    .integer("Duration must be integer!")
    .min(0)
    .required("Duration can't be blank!"),
  service_price: yup
    .number()
    .typeError("Price must be a number")
    .integer("Price must be integer!")
    .min(0)
    .required("Price can't be blank!"),
});

const ServicePackDataGrid = () => {
  const navigate = useNavigate();
  const [servicePackList, setServicePackList] = useState<ServicePackResponse[]>(
    []
  );
  const [servicePack, setServicePack] = useState<ServicePackResponse>({
    service_id: "",
    ad_duration: 0,
    allow_post: false,
    flag: false,
    name: "",
    priority: false,
    service_code: "",
    service_price: 0,
  });
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
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
    try {
      const response: any = await servicePackAPI.updateServicePack({
        service_id: servicePack.service_id,
        ad_duration: data.ad_duration,
        allow_post: servicePack.allow_post,
        flag: servicePack.allow_post,
        name: servicePack.name,
        priority: servicePack.priority,
        service_code: servicePack.service_code,
        service_price: data.service_price,
      });
      if (response === "Update Successfully") {
        toast.success("Update Service Pack Successfully!", {
          position: "top-center",
        });
        navigate(0);
      } else {
        toast.error("Update Service Pack Failed!", {
          position: "top-center",
        });
      }
    } catch (error) {
      console.log("Error at onSubmit ServicePackDataGrid.tsx ", error);
    }
  };

  const columns: GridColDef[] = [
    { field: "no", headerName: "No", width: 90 },
    {
      field: "name",
      headerName: "Pack Name",
      flex: 1,
    },
    {
      field: "service_code",
      headerName: "Code",
      flex: 1,
    },
    {
      field: "ad_duration",
      headerName: "Duration (day)",
      flex: 1,
    },

    {
      field: "allow_post",
      headerName: "Allow Post",
      flex: 1,
    },
    {
      field: "flag",
      headerName: "Flag",
      flex: 1,
    },
    {
      field: "priority",
      headerName: "Priority",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price (VNĐ)",
      flex: 1,
      renderCell: (param) => {
        return <Typography>{formatNumber(param.row.service_price)}</Typography>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      flex: 1,
      renderCell: (param) => {
        return (
          <Stack direction="row" spacing={1}>
            <Tooltip title="View Service Pack">
              <IconButton
                sx={{ color: "#00acb3" }}
                aria-label="View timeshare detail"
                onClick={() => {
                  setServicePack(param.row);
                  handleClickOpenDialog();
                }}
              >
                <ViewIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        );
      },
    },
  ];
  useEffect(() => {
    const getAllServicePack = async () => {
      const data: any = await servicePackAPI.getAllServicePack();
      if (data && data.length > 0) {
        setServicePackList(
          data.sort((a: any, b: any) => {
            return a.name > b.name ? -1 : 1;
          })
        );
      }
    };

    const initUseEffect = async () => {
      await getAllServicePack();
    };
    initUseEffect();
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        padding: "30px",
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box>
        {servicePackList.length == 0 ? (
          <DataGrid
            sx={{ height: "550px", marginTop: "10px" }}
            columns={columns}
            slots={{
              noRowsOverlay: CustomNoRowsOverlay,
            }}
            rows={[]}
          />
        ) : (
          <DataGrid
            rows={servicePackList.map((item, index) => {
              return { no: index + 1, ...item };
            })}
            getRowId={(row) => row.service_id}
            style={{ height: "550px", marginTop: "10px" }}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            slots={{ toolbar: GridToolbar }}
            pageSizeOptions={[10, 25]}
            disableRowSelectionOnClick
          />
        )}
      </Box>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle
          sx={{ m: 0, p: 2, color: "#00acb3", fontWeight: 900 }}
          id="customized-dialog-title"
        >
          Update Service Pack
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography
            variant="caption"
            fontSize={18}
            fontWeight={500}
            gutterBottom
            mt={1}
          >
            Pack Information
          </Typography>
          <form onSubmit={handleSubmit(handleClickOpenConfirmDialog)}>
            <CustomBorderTextField
              label="Pack Name"
              variant="outlined"
              disabled
              value={servicePack.name}
              sx={{ width: "100%", mt: 1 }}
            />

            <CustomBorderTextField
              label="Duration"
              variant="outlined"
              defaultValue={servicePack.ad_duration}
              {...register("ad_duration")}
              sx={{ width: "100%", mt: 1.5 }}
            />
            {errors["ad_duration"]?.message ? (
              <ErrorMessage message={errors["ad_duration"].message} />
            ) : null}

            <CustomBorderTextField
              label="Allow posting"
              variant="outlined"
              disabled
              value={servicePack.allow_post ? "Yes" : "No"}
              sx={{ width: "100%", mt: 1.5 }}
            />
            <CustomBorderTextField
              label="Flag"
              variant="outlined"
              disabled
              value={servicePack.flag ? "Yes" : "No"}
              sx={{ width: "100%", mt: 1.5 }}
            />
            <CustomBorderTextField
              label="Priority"
              variant="outlined"
              disabled
              value={servicePack.priority ? "Yes" : "No"}
              sx={{ width: "100%", mt: 1.5 }}
            />
            <CustomBorderTextField
              label="Price"
              variant="outlined"
              defaultValue={servicePack.service_price}
              {...register("service_price")}
              sx={{ width: "100%", mt: 1.5 }}
            />
            {errors["service_price"]?.message ? (
              <ErrorMessage message={errors["service_price"].message} />
            ) : null}
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ color: "#00acb3" }}
            onClick={() => {
              handleClickOpenConfirmDialog();
            }}
            type="submit"
          >
            Edit
          </Button>
          <Button sx={{ color: "#00acb3" }} onClick={handleCloseDialog}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openConfirmDialog}
        onClose={handleClickCloseConfirmDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm to exchange!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to update this pack?
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
              handleCloseDialog();
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
    </Box>
  );
};

export default ServicePackDataGrid;
