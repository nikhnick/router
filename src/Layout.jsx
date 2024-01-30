import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./compnenents/Footer/Footer";
import Header from "./compnenents/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
