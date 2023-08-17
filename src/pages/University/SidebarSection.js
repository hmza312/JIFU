import { Box, Button, styled } from "@mui/material";
// import Banner from "./Banner";

import CourseImg from "../../assets/images/image 13.png";

const SidebarSection = () => {
  const StyledDashboardWrapper = styled(Box)({
    // padding: "0 66px",
    // backgroundColor: "#F5F5FF",
  });

  const CoursesCardWrapper = styled(Box)({
    borderRadius: "27px",
    background: "#FFF",
    boxShadow: "0px 8px 14px 3px rgba(0, 0, 0, 0.05)",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  });
  const ImageWrapper = styled(Box)({
    background: "#E5FFF0",
    display: "flex",
    height: "100%",
    justifyContent: "center",
  });
  const ButtonWrapper = styled(Button)({
    background: "#3F4254",
    color: "#fff",
    borderRadius: "45px",
    width: "120px",
    textAlign: "center",
  });
  return (
    <StyledDashboardWrapper>
      <CoursesCardWrapper className="courses-card-wrapper">
        <ImageWrapper>
          <img src={CourseImg} alt={"img"} />
        </ImageWrapper>
      </CoursesCardWrapper>
      <ButtonWrapper variant="contained">Enrol</ButtonWrapper>
    </StyledDashboardWrapper>
  );
};

export default SidebarSection;
