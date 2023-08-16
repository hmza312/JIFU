import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

const EducatorsCard = ({ title, src, name }) => {
  const EducatorsCardWrapper = styled(Box)({
    borderRadius: "27px",
    backgroundColor: "#F5F5FF",
    width: "235px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    gap: "10px",
    alignItems: "center",
    "& img": {
      border: "1px solid #000",
      borderRadius: "27px",
      height: "262px",
      width: "100%",
      objectFit: "contain",
    },
    "& button": {
      position: "absolute",
      bottom: "10px",
      display: "flex",
      width: 214,
      height: 53,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "27px",
      background: "#000",
      backdropFilter: "blur(14px)",
      color: "white",
      "&:hover": {
        display: "flex",
        width: 214,
        height: 53,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "27px",
        background: "#000",
        backdropFilter: "blur(14px)",
        color: "white",
      },
    },
  });
  return (
    <EducatorsCardWrapper>
      <Typography
        mt={"10px"}
        color={"#9597AB"}
        fontSize={"16px"}
        fontWeight={400}
      >
        {title}
      </Typography>
      <img src={src} alt={"img"} />
      <Button>{name}</Button>
    </EducatorsCardWrapper>
  );
};

export default EducatorsCard;
