import { Card } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../configStore";

const CreateDestinationForm = () => {
  const user = useSelector((state: RootState) => state.timeshare);
  console.log(console.log(user));
  return (
    <Card sx={{ width: "100%", height: "800px" }} elevation={10}>
      Create Des Form
    </Card>
  );
};

export default CreateDestinationForm;
