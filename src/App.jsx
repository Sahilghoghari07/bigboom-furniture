import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Splashscreen from "./containers/Splashscreen";

const Login = lazy(() => import("./containers/Login"));
const Register = lazy(() => import("./containers/Register"));
const AdminRoutes = lazy(() => import("./routes/AdminRoutes"));
const UserRoutes = lazy(() => import("./routes/UserRoutes"));

function App() {
  return (
    <>
      <Suspense fallback={<Splashscreen />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          <Route path="/*" element={<UserRoutes />} />
        </Routes>
      </Suspense>

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
