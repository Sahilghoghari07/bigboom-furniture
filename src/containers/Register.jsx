import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";
import { FcGoogle } from "react-icons/fc";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Register() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("This field is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password must be same")
      .required("This field is required"),
  });

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#212326] to-[#3c484e]">
      <div className="bg-white backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black">Create Account</h2>
          <p className="text-black-200 mt-2">Join with us and start shopping</p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium text-black mb-1"
            >
              Full Name
            </label>
            <input
              type="fullname"
              name="fullname"
              id="fullname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullname}
              placeholder="ex., John Due"
              className={`w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border focus:outline-none focus:ring-1 ${formik.touched.fullname && formik.errors.fullname ? "border-red-500 focus:ring-red-50" : "border-black/30 focus:ring-black/50"}`}
            />
            {formik.touched.fullname && formik.errors.fullname && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.fullname}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-1"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="example@domain.com"
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
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              placeholder="Enter strong password"
              className={`w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border focus:outline-none focus:ring-1 ${formik.touched.password && formik.errors.password ? "border-red-500 focus:ring-red-50" : "border-black/30 focus:ring-black/50"}`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-black mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              placeholder="Confirm password"
              className={`w-full px-4 py-3 bg-black/20 rounded-xl text-black placeholder-black-300 border focus:outline-none focus:ring-1 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? "border-red-500 focus:ring-red-50" : "border-black/30 focus:ring-black/50"}`}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors.confirmPassword}
                </p>
              )}
          </div>

          <PrimaryButton
            type="submit"
            text="Create Account"
            className="w-full"
          />
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
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-black font-semibold hover:underline hover:text-orange-500 transition-all"
          >
            login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
