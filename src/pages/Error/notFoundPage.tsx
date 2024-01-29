import { Container } from "@mui/material";
import NotFoundComponent from "../../components/Error/notFoundComponent";

const NotFoundPage = () => {
  return (
    <Container maxWidth={false} style={{ flex: 1, backgroundColor: "#f6f8fa" }}>
      <NotFoundComponent />
    </Container>
  );
};

export default NotFoundPage;
