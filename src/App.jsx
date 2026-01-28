import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./containers/Login";
import Register from "./containers/Register";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { Bounce, ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/*" element={<UserRoutes />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeOnClick={true}
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </>
  );
}

export default App;
