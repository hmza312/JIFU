import { Box, Container, styled } from "@mui/material";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React from "react";

const ContentPane = styled("main")({
  maxWidth: "calc(100% - 240px)",
  height: "100%",
  marginLeft: "240px",
});

const Layout = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#F5F5FF" }} className={"main-wrapper"}>
      <Sidebar />
      <Container>
        <ContentPane>
          <Navbar />
          {children}
        </ContentPane>
      </Container>
    </Box>
  );
};

export default Layout;
