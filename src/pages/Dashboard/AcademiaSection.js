import { Box, styled, Typography } from "@mui/material";
import AcademiaCard from "components/Card/AcademiaCard";
import React from "react";
import AcademiaImg from "../../assets/images/Rectangle 10.png";

const AcademiaSection = () => {
  const AcademiaSectionWrapper = styled(Box)({
    "& p": {
      color: "#9597AB",
    },
  });
  return (
    <AcademiaSectionWrapper mt={"48px"} pb={"80px"}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={"40px"}
      >
        <Typography fontSize={"24px"} fontWeight={500}>
          Elige tu Academia
        </Typography>
        <Typography fontSize={"20px"} fontWeight={400}>
          See more
        </Typography>
      </Box>
      <Box display="flex" gap={"42px"} flexWrap={"wrap"}>
        {[...Array(4)].map(() => (
          <AcademiaCard src={AcademiaImg} title={"JIFU Travel"} />
        ))}
      </Box>
    </AcademiaSectionWrapper>
  );
};

export default AcademiaSection;
