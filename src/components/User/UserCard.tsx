import {
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { UserResponse } from "../../interfaces/user/userResponse";
import userAPI from "../../services/user/userAPI";
import { USER_ID_KEY } from "../../constant";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

const UserCard = () => {
  const userID = JSON.parse(localStorage.getItem(USER_ID_KEY)!);
  const [userProfile, setUserProfile] = useState<UserResponse>({
    user_id: "",
    user_name: "",
    password: "",
    fullname: "",
    email: "",
    phone: "",
    dob: new Date(),
    gender: false,
    status: false,
    role: "",
  });

  useEffect(() => {
    const getUserByUserID = async () => {
      const data: any = await userAPI.getUserByID(userID);
      if (data && !isEmpty(data)) {
        setUserProfile(data);
      }
    };

    const initUseEffect = async () => {
      await getUserByUserID();
    };
    initUseEffect();
  }, []);

  return (
    <CardContent
      sx={{
        backgroundColor: "white",
        border: "solid 1px ",
        borderColor: "rgba(0, 0, 0, 0.2)",
      }}
    >
      <CardContent
        style={{
          display: "contents",
          alignItems: "center",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            sx={{ backgroundColor: "#00acb3", width: "50px", height: "50px" }}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Grid>
            <Typography
              variant="h5"
              fontWeight={"bold"}
              marginTop={"15px"}
              sx={{ height: "32px", width: "100%" }}
            >
              {userProfile.fullname}
            </Typography>
          </Grid>
          <Typography variant="h6" align="center" sx={{ width: "100%" }}>
            {userProfile.role === "member" ? "Member" : userProfile.role}
          </Typography>
          <Grid>
            <Link
              style={{
                color: "#00acb3",
                width: "100%",
                textDecoration: "NONE",
              }}
              to="/member/profile/my_profile"
            >
              Edit my profile
            </Link>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button
            sx={{
              width: "90%",
              height: "47px",
              backgroundColor: "#00acb3",
              "&:hover": {
                backgroundColor: "#08b7bd",
              },
            }}
            color="primary"
            variant="contained"
          >
            Register Pack
          </Button>
        </Grid>
      </CardActions>
    </CardContent>
  );
};

export default UserCard;
