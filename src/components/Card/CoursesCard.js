import { Box, styled, Typography } from "@mui/material";
import React from "react";

const CoursesCard = ({ src, title }) => {
  const CoursesCardWrapper = styled(Box)({
    borderRadius: "27px",
    background: "#FFF",
    boxShadow: "0px 8px 14px 3px rgba(0, 0, 0, 0.05)",
    width: "276px",
    height: "275px",
    display: "flex",
    flexDirection: "column",
  });
  const ImageWrapper = styled(Box)({
    background: "#E5FFF0",
    position: "relative",
    height: "200px",
    textAlign: "center",
  });
  const TextSectionWrapper = styled(Typography)({
    // background: "#E5FFF0",
    position: "relative",
    height: "95px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  });
  const Image = styled("img")({
    position: "absolute",
    top: " 25%",
    left: "30%",
  });

  const TextWrapper = styled("div")({
    position: "absolute",
    top: " 17px",
    left: "16px",

    borderRadius: "31px",
    border: "1px solid  #D0FFE4",
    background: "  #D0FFE4",
    color: "#72DD9F",
    padding: "8px 16px 8px 16px",
    gap: "9px",
  });

  return (
    <CoursesCardWrapper className="courses-card-wrapper">
      <ImageWrapper>
        <Image src={src} alt={"img"} />
        <TextWrapper class="top-left">Course</TextWrapper>
      </ImageWrapper>
      <TextSectionWrapper
        color={"#9597AB"}
        // pl={"21px"}
        fontSize={"20px"}
        fontWeight={500}
      >
        {title}
      </TextSectionWrapper>
    </CoursesCardWrapper>
  );
};

export default CoursesCard;
