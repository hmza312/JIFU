import { Box, styled } from "@mui/material";
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
    <Box className={"main-wrapper"} height={"100vh"}>
      <Sidebar />
      <ContentPane>
        <Navbar />
        {children}
      </ContentPane>
    </Box>
  );
};

export default Layout;
