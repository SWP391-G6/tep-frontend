import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const ShowTimeshareGrid = () => {
  return (
    <Grid2 container direction="row" justifyContent="space-between">
      <Grid2 xs={3.75}></Grid2>
      <Grid2 xs={3.75}>
        <Card sx={{ padding: "10px" }} elevation={3}>
          <CardActionArea>
            <CardMedia
              component="img"
              image={require("../../assets/jadehillsapa.jpg")}
              width="320px"
              height="200px"
              alt="Sapa Jade Hill Resort"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" noWrap component="div">
                Sapa Jade Hill Resort
              </Typography>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <LocationOnIcon sx={{ color: "#00acb3" }} />
                <Typography fontSize="16px">Sapa, Lao Cai</Typography>
              </Stack>
              <List>
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "#00acb3" }}>
                      <VpnKeyIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="$350 ($50/night)"
                    primaryTypographyProps={{ fontWeight: 700 }}
                    secondary="Feb 11, 2025 - Feb 17, 2025"
                    secondaryTypographyProps={{
                      color: "#83b3b5",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              </List>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid2>
      <Grid2 xs={3.75}></Grid2>
    </Grid2>
  );
};

export default ShowTimeshareGrid;
