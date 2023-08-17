import { Box, Pagination, styled, Typography } from "@mui/material";
import AcademiaCard from "components/Card/AcademiaCard";
import React from "react";
import CourseImg from "../../assets/images/image 13.png";
import CoursesCard from "components/Card/CoursesCard";

const AcademiaSection = () => {
  const AcademiaSectionWrapper = styled(Box)({
    "& p": {
      color: "#9597AB",
    },
  });
  const PaginationSection = styled(Pagination)({
    display: "flex",
    justifyContent: "end",
  });
  return (
    <AcademiaSectionWrapper mt={"48px"} pb={"30px"}>
      <Box
        display="flex"
        gap={"42px"}
        pb={"20px"}
        // justifyContent={"space-between"}
        flexWrap={"wrap"}
      >
        {[...Array(9)].map(() => (
          <CoursesCard src={CourseImg} title={"Learn forex trending polish "} />
        ))}
      </Box>
      <PaginationSection count={10} variant="outlined" shape="rounded" />
    </AcademiaSectionWrapper>
  );
};

export default AcademiaSection;
