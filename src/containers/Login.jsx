import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Login() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#212326] to-[#3c484e]">
      <div className="bg-white backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black">Welcome Back</h2>
          <p className="text-black-200 mt-2">Login to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className={`w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border focus:outline-none focus:ring-1 ${formik.touched.email && formik.errors.email ? "border-red-500 focus:ring-red-50" : "border-black/30 focus:ring-black/50"}`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter password"
              className={`w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border focus:outline-none focus:ring-1 ${formik.touched.password && formik.errors.password ? "border-red-500 focus:ring-red-50" : "border-black/30 focus:ring-black/50"}`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="text-sm text-center text-black-200 my-2">
            <p>
              Forgot password?{" "}
              <Link
                to={"#"}
                className="text-black font-semibold hover:underline hover:text-orange-500 transition-all"
              >
                reset here
              </Link>
            </p>
          </div>

          <PrimaryButton type="submit" text="Login" className="w-full" />
          <button
            type="button"
            onClick={signInWithGoogle}
            className="w-full flex items-center justify-center gap-3 py-3 cursor-pointer rounded-xl border border-black/20 hover:-translate-y-0.5 hover:bg-orange-300 transition-all"
          >
            <FcGoogle className="h-5 w-5" />
            <span className="font-medium">Continue with Google</span>
          </button>
        </form>

        {/* Register */}
        <p className="text-center text-black-200 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to={"/register"}
            className="text-black font-semibold hover:underline hover:text-orange-500 transition-all"
          >
            register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
