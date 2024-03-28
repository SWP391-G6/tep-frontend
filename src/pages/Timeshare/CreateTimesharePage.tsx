import {
  Container,
  Typography,
} from "@mui/material";

import BackButton from "../../components/Button/backButton";
import CreateFullTimeshareForm from "../../components/Form/CreateFullTimeshareForm";

const CreateTimesharePage = () => {
  // const handleCreateTimeshare = async () => {
  //   try {
      // if (response && response.destination) {
        // const createDestinationResponse: any =
        //   await destinationAPI.createDestination({
        //     desName: response.destination.desName,
        //     branch: response.destination.branch,
        //     city: response.destination.city,
        //     country: "Việt Nam",
        //     address: response.destination.address,
        //     description: response.destination.description,
        //   });

  //       if (
  //         createDestinationResponse &&
  //         createDestinationResponse.destinationId
  //       ) {
          // const createTimeshareResponse: any =
          //   await timeshareAPI.createTimeshare({
          //     date_start: response.timeshare.date_start,
          //     date_end: response.timeshare.date_end,
          //     price: response.timeshare.price,
          //     status: true,
          //     name: response.timeshare.name,
          //     owner: userID,
          //     destination_id: createDestinationResponse.destinationId,
          //     description: response.timeshare.description,
          //     image_url: response.timeshare.image_url,
          //     city: response.timeshare.city,
          //     exchange: true,
          //   });

  //         console.log("TS", createTimeshareResponse);
  //         if (createTimeshareResponse) {
  //           console.log("123");
  //           console.log(createDestinationResponse.timeshareId)

            // const createRoomType: any = await roomTypeAPI.createRoomType({
            //   name: response.roomtype.name,
            //   sleeps: response.roomtype.sleeps,
            //   room_view: response.roomtype.room_view,
            //   bed: response.roomtype.bed,
            //   bath: response.roomtype.bath,
            //   kitchen: response.roomtype.kitchen,
            //   entertainment: response.roomtype.entertainment,
            //   features: response.roomtype.features,
            //   policies: response.roomtype.policies,
            //   timeshareId: createTimeshareResponse.timeshareId,
            // });
  //           console.log("RoomType: ", createRoomType);
            // if (createRoomType) {
            //   toast.success("Create Timeshare Successfully!", {
            //     position: "top-center",
            //   });
            //   timeoutRef.current = setTimeout(() => {
            //     navigate("/member/profile/my_timeshare");
            //   }, 1700);
            //   return;
  //           } else {
  //             toast.error("Create Timeshare Failed!", {
  //               position: "top-center",
  //             });
  //           }
  //         }
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Error at handleCreateTimeshare! ", error);
  //   }
  // };

  return (
    <Container
      disableGutters={true}
      maxWidth={"xl"}
      style={{ padding: "0 40px 17px 40px" }}
    >
      <BackButton />
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
      <CreateFullTimeshareForm />
    </Container>
  );
};
export default CreateTimesharePage;
