import React from "react";
import Topbar from "../components/admin/Topbar";
import Sidebar from "../components/admin/Sidebar";
import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <>
      <Topbar />
      <main className="flex bg-gray-100 h-screen">
        <Sidebar />
        <Outlet />
      </main>
      <footer className="fixed bottom-0 w-full h-10 z-1 bg-black text-orange-500 flex items-center justify-center">
        <p className="text-xl font-semibold">
          &copy; Made by{" "}
          <Link
            to={"https://github.com/Sahilghoghari07"}
            className="hover:underline transition-all"
          >
            Sahil
          </Link>
        </p>
      </footer>
    </>
  );
}

export default AdminLayout;
