import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const StyledNavbar = styled("nav")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "39px 66px",
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
    <StyledNavbar>
      <ul style={{ listStyle: "none", display: "inline-flex" }}>
        {navigation.map(({ id, name, path }) => (
          <li key={id}>
            <StyledLink to={path}>{name}</StyledLink>
          </li>
        ))}
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
