import { NavLink, Outlet } from "react-router-dom";
import * as React from "react";
import { Footer } from "./Footer";

export const Header = () => {
  return (
    <>
      <div >
        <header styleName="HeaderStyle">
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">LogIn</NavLink>
          </nav>
        </header>
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};
