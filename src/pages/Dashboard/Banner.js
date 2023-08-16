import { Box, MenuItem, Select, styled, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../assets/images/Rectangle 1 (1).png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Banner = () => {
  const StyledBannerWrapper = styled(Box)({
    position: "relative",
    height: 248,
  });
  const StyledBannerImg = styled("img")({
    borderRadius: "27px",
  });
  const StyledDropdown = styled(Box)({
    "& .styled-select": {
      borderRadius: "27px",
      width: 98,
      height: "29px",
      fontSize: "16px",
      backgroundColor: "#F0F0FA",
      color: "#000",
      fontWeight: 300,
      "& .MuiOutlinedInput-input ": {
        padding: "0 0 0 12px",
      },
      "& fieldset": {
        border: "none",
      },
    },
  });

  return (
    <StyledBannerWrapper className={"styled-banner-wrapper"}>
      <Box
        padding={"0 36px"}
        position={"absolute"}
        height={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        gap={"35px"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography
            fontSize={"48px"}
            fontWeight={700}
            color={"white"}
            sx={{ lineHeight: "normal" }}
          >
            Welcome to JIFU
          </Typography>
          <Typography
            fontSize={"36px"}
            fontWeight={300}
            color={"white"}
            sx={{ lineHeight: "normal" }}
          >
            Elige un Idioma
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"7.5px"}>
          <Typography
            fontSize={"16px"}
            fontWeight={500}
            color={"white"}
            sx={{ lineHeight: "normal" }}
          >
            Select language
          </Typography>

          <StyledDropdown>
            <Select
              IconComponent={() => <ExpandMoreIcon />}
              className={"styled-select"}
              defaultValue={1}
            >
              <MenuItem value={1}>Spanish</MenuItem>
              <MenuItem value={2}>English</MenuItem>
              <MenuItem value={3}>French</MenuItem>
            </Select>
          </StyledDropdown>
        </Box>
      </Box>
      <StyledBannerImg
        width={"100%"}
        height={"100%"}
        src={bannerImage}
        alt={"banner"}
      />
    </StyledBannerWrapper>
  );
};

export default Banner;
