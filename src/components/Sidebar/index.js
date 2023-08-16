import React from "react";
import { Link, useLocation } from "react-router-dom";

import BrandLogo from "assets/images/brand.png";
import HomeIcon from "assets/svgs/home.svg";
import AffiliateIcon from "assets/svgs/home-trend-up.svg";
import PlaneIcon from "assets/svgs/airplane-square.svg";
import HealthIcon from "assets/svgs/health.svg";
import HatIcon from "assets/svgs/degree-hat.svg";
import LiveIcon from "assets/svgs/graph.svg";
import TeamIcon from "assets/svgs/group-people.svg";
import PersonIcon from "assets/svgs/user.svg";

import "./sidebar.css";
import { styled } from "@mui/material";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Travel",
    path: "/travel",
    icon: PlaneIcon,
  },
  {
    name: "Health",
    path: "/health",
    icon: HealthIcon,
  },
  {
    name: "University",
    path: "/university",
    icon: HatIcon,
  },
  {
    name: "Live",
    path: "/live",
    icon: LiveIcon,
    count: 5,
  },
  {
    name: "Affiliate",
    path: "/affiliate",
    icon: AffiliateIcon,
  },
  {
    name: "Team",
    path: "/team",
    icon: TeamIcon,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: PersonIcon,
  },
];

const StyledSidebar = styled("div")({
  backgroundColor: "#000",
  paddingTop: "39px",
  paddingHorizontal: "29px",
  position: "fixed",
  height: "100%",
  width: "100%",
  maxWidth: "240px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  flexShrink: 0,
});

const Brand = styled("img")({
  width: "140px",
  height: "26px",
  marginBottom: "59px",
});

const StyledNav = styled("nav")({
  width: "100%",
  "& ul": {
    maxWidth: "183px",
    margin: "auto",
  },
});

const StyledIcon = styled("img")({});

const StyledLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  padding: "12px 28px 12px 22px",
  gap: "0 12px",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textDecoration: "none",
  margin: "13px 0",
  position: "relative",

  "& .counter": {
    width: 36,
    height: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px",
    background: "#F0F0FA",
    fontSize: "14px",
    fontWeight: 500,
  },
});

const StyledSelectedLink = styled(Link)({
  display: "flex",
  alignItems: "center",
  padding: "12px 28px 12px 22px",
  gap: "0 12px",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  textDecoration: "none",
  margin: "13px 0",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "4px",
    height: "100%",
    background: "#0071C1",
    right: "-32px",
  },
  "& .counter": {
    width: 36,
    height: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    borderRadius: "10px",
    background: "#F0F0FA",
    fontSize: "14px",
    fontWeight: 500,
    color: "#A7A7CE",
  },
});

const Sidebar = () => {
  const { pathname } = useLocation();

  const getActiveLink = (path) => {
    return pathname === path ? "active-link" : "link";
  };

  return (
    <StyledSidebar>
      <Brand src={BrandLogo} alt="brand" />
      <StyledNav>
        <ul style={{ textDecoration: "none", listStyle: "none" }}>
          {navigation.map(({ icon, name, path, count }, index) => (
            <li key={`${name}-${index}`}>
              {pathname === path ? (
                <StyledSelectedLink to={path} className={getActiveLink(path)}>
                  {icon && <StyledIcon src={icon} alt={name} />} {name}
                  {count && <span className="counter">{count}</span>}
                </StyledSelectedLink>
              ) : (
                <StyledLink to={path} className={getActiveLink(path)}>
                  {icon && <StyledIcon src={icon} alt={name} />} {name}
                  {count && <span className="counter">{count}</span>}
                </StyledLink>
              )}
            </li>
          ))}
        </ul>
      </StyledNav>
    </StyledSidebar>
  );
};

export default Sidebar;
