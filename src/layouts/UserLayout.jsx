import React from "react";
import Header from "../components/user/Header";
import { Outlet } from "react-router-dom";

function UserLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default UserLayout;
