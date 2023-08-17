import { Box, styled, Typography } from "@mui/material";
import React from "react";

const AcademiaCard = ({ src, title }) => {
  const AcademiaCardWrapper = styled(Box)({
    borderRadius: "27px",
    background: "#FFF",
    boxShadow: "0px 8px 14px 3px rgba(0, 0, 0, 0.05)",
    width: "100%",
    maxWidth: "307px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "13px",
    gap: "13px",
    "& img": {
      borderRadius: "27px",
      height: "206px",
      width: "100%",
    },
  });
  return (
    <AcademiaCardWrapper className="academia-card-wrapper">
      <img src={src} alt={"img"} />
      <Typography
        color={"#9597AB"}
        pl={"21px"}
        fontSize={"24px"}
        fontWeight={500}
      >
        {title}
      </Typography>
    </AcademiaCardWrapper>
  );
};

export default AcademiaCard;
