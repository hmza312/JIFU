import { Box, styled, Typography } from "@mui/material";
import AcademiaSection from "./AcademiaSection";
import Banner from "./Banner";
import EducatorsSection from "./EducatorsSection";

const Dashboard = () => {
  const StyledDashboardWrapper = styled(Box)({
    padding: "0 66px",
  });
  return (
    <StyledDashboardWrapper>
      <Typography fontSize={"40px"} fontWeight={700} mb={"52px"}>
        Dashboard
      </Typography>
      <Banner />
      <EducatorsSection />
      <AcademiaSection />
    </StyledDashboardWrapper>
  );
};

export default Dashboard;
