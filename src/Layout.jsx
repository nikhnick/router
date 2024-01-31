import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./compnenents";

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
