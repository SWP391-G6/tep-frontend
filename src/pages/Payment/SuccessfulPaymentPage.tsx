import { Container } from "@mui/material";
import SuccessfulPaymentComponent from "../../components/Payment/SuccessfulPaymentComponent";

const SuccessfulPaymentPage = () => {
  return (
    <Container maxWidth={false} style={{ flex: 1, backgroundColor: "#f6f8fa" }}>
      <SuccessfulPaymentComponent />
    </Container>
  );
};

export default SuccessfulPaymentPage;
