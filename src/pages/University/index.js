import {
  Box,
  styled,
  Typography,
  TextField,
  Pagination,
  Grid,
} from "@mui/material";
import AcademiaSection from "./AcademiaSection";
import Progress from "./ProgressSection";
import ProgressSection from "./ProgressSection";
import SidebarSection from "./SidebarSection";
// import Banner from "./Banner";

const University = () => {
  const StyledDashboardWrapper = styled(Box)({
    padding: "0 66px",
    backgroundColor: "#F5F5FF",
  });
  const CustomWrapper = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
  });
  const CustomTextField = styled(TextField)({
    width: "307px",
    // border: "1px solid #9597AB",
    // borderRadius: "1rem",
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <StyledDashboardWrapper>
          <CustomWrapper>
            <Typography fontSize={"40px"} fontWeight={700}>
              Courses
            </Typography>
            <CustomTextField
              id="outlined-basic"
              label="Search Course Here"
              variant="outlined"
            />
          </CustomWrapper>

          {/* <Banner /> */}
          {/* <EducatorsSection /> */}
          <AcademiaSection />
          <ProgressSection />
        </StyledDashboardWrapper>
      </Grid>
      <Grid item xs={3}>
        <Typography
          fontSize={"24px"}
          pl={"21px"}
          mt={"11px"}
          display={"flex"}
          justifyContent={"center"}
          fontWeight={700}
          textTransform={"uppercase"}
        >
          FRx Series : English
        </Typography>
        <SidebarSection />
      </Grid>
    </Grid>
  );
};

export default University;
