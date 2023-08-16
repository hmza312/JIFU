import { Box, styled, Typography } from "@mui/material";
import { backArrow } from "assets/svgs/back-arrow";
import { forwardArrow } from "assets/svgs/forward-arrow";
import EducatorsCard from "components/Card/EducatorsCard";
import React from "react";
import EducatorsImg from "../../assets/images/WhatsApp Image 2023-08-15 at 02.10 1.png";

const EducatorsSection = () => {
  const EducatorsSectionWrapper = styled(Box)({
    borderRadius: "27px",
    background: "#FFF",
    padding: "43px 33px",
  });
  return (
    <EducatorsSectionWrapper mt={"48px"}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography fontSize={"24px"} fontWeight={500} mb={"30px"}>
          Educators
        </Typography>
        <Box display={"flex"} gap={"14px"}>
          <Box>{backArrow}</Box>
          <Box>{forwardArrow}</Box>
        </Box>
      </Box>
      <Box
        display="flex"
        gap={"42px"}
        flexWrap={"wrap"}
        // justifyContent={"space-between"}
      >
        {[...Array(5)].map(() => (
          <EducatorsCard
            src={EducatorsImg}
            title={"JIFU Travel"}
            name={"JC Morales"}
          />
        ))}
      </Box>
    </EducatorsSectionWrapper>
  );
};

export default EducatorsSection;
