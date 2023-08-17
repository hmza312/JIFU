import { Box, MenuItem, Select, styled } from "@mui/material";
import { notificationBing } from "assets/svgs/notification-bing";
import { profileCircle } from "assets/svgs/profile-circle";
import { searchIcon } from "assets/svgs/search-normal";
import React from "react";
import { Link } from "react-router-dom";
import LanguageEllipse from "../../assets/svgs/Ellipse.svg";

const StyledNavbar = styled("nav")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "39px 60px 39px 66px",
  backgroundColor: "#F5F5FF",
  "& ul": {
    width: "100%",
    gap: "47px",
    "& li": {
      "& a": {
        color: "#9597AB",
        fontSize: "20px",
        fontWeight: 500,
      },
    },
  },
});

const StyledDropdown = styled(Box)({
  "& .styled-select": {
    fontSize: "16px",
    color: "#000",
    fontWeight: 300,
    width: "auto",
    display: "flex",
    alignItems: "center",
    "& .MuiOutlinedInput-input ": {
      padding: "0 0 0 12px",
      textOverflow: "initial",
      display: "flex",
      gap: "6px",
      alignItems: "center",
    },
    "& fieldset": {
      border: "none",
    },
    "& .MuiSvgIcon-root": {
      display: "none",
    },
  },
});

const navigation = [
  {
    id: 1,
    path: "/travel",
    name: "Travel",
    icon: null,
  },
  {
    id: 2,
    path: "/health",
    name: "Health",
    icon: null,
  },
  {
    id: 3,
    path: "/university",
    name: "University",
    icon: null,
  },
];

const StyledLink = styled(Link)({
  textDecoration: "none",
});

const Navbar = () => {
  return (
    <StyledNavbar className={"styled-navbar"}>
      <ul style={{ listStyle: "none", display: "inline-flex" }}>
        {navigation.map(({ id, name, path }) => (
          <li key={id}>
            <StyledLink to={path}>{name}</StyledLink>
          </li>
        ))}
      </ul>
      <Box display={"flex"} gap={"30px"} alignItems={"center"}>
        {searchIcon}
        <Box display={"flex"} alignItems={"center"} gap={"7.5px"}>
          <StyledDropdown className="styled-language-dropdown">
            <Select className={"styled-select"} defaultValue={1}>
              <MenuItem value={1}>
                <img src={LanguageEllipse} alt={"language-icon"} />
                &nbsp; Spanish
              </MenuItem>
              <MenuItem value={2}>
                <img src={LanguageEllipse} alt={"language-icon"} /> &nbsp;
                English
              </MenuItem>
              <MenuItem value={3}>
                <img src={LanguageEllipse} alt={"language-icon"} /> &nbsp;
                French
              </MenuItem>
            </Select>
          </StyledDropdown>
        </Box>
        {notificationBing}
        {profileCircle}
      </Box>
    </StyledNavbar>
  );
};

export default Navbar;
