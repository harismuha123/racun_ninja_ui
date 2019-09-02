import React from "react";

import Wrapper from "../components/Wrapper";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Dashboard = ({ children }) => (
  <Wrapper>
    <Sidebar />
    <Main>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Main>
  </Wrapper>
);

export default Dashboard;
