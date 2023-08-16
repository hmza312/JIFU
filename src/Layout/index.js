import styled from "@emotion/styled";
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";
import React from "react";

const ContentPane = styled("main")({
  maxWidth: "calc(100% - 240px)",
  marginLeft: "240px",
  backgroundColor: "#F5F5FF",
});

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <ContentPane>
        <Navbar />
        {children}
      </ContentPane>
    </>
  );
};

export default Layout;
