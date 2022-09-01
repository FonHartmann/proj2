import * as React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        {" "}
        <Header />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
