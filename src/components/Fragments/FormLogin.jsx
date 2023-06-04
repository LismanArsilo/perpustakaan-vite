import { VisibilityOff, Visibility } from "@mui/icons-material/";
import { CircularProgress } from "@mui/material";
import { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginCall } from "../../api/authenticationApi";

const FormLogin = () => {
  const [displayPassword, setDisplayPassword] = useState(true);
  const { user, isLoading, status, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    // Initial Values
    initialValues: {
      email: "",
      password: "",
    },
    // Validation Schema
    validationSchema: Yup.object({
      email: Yup.string()
        .required()
        .email("Invalid email your format")
        .min(3)
        .max(255),
      password: Yup.string().required("Password is a required field"),
    }),
    // Handle Submit
    onSubmit: (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      loginCall(data, dispatch);
      // if (status) {
      //   const Toast = Swal.mixin({
      //     toast: true,
      //     position: "top",
      //     showConfirmButton: false,
      //     timer: 1500,
      //     timerProgressBar: true,
      //     didOpen: (toast) => {
      //       toast.addEventListener("mouseenter", Swal.stopTimer);
      //       toast.addEventListener("mouseleave", Swal.resumeTimer);
      //     },
      //   });
      //   Toast.fire({
      //     icon: "success",
      //     title: "Signed in successfully",
      //   });
      //   // navigate("/");
      // } else {
      //   const Toast = Swal.mixin({
      //     toast: true,
      //     position: "top",
      //     showConfirmButton: false,
      //     timer: 2000,
      //     timerProgressBar: true,
      //     didOpen: (toast) => {
      //       toast.addEventListener("mouseenter", Swal.stopTimer);
      //       toast.addEventListener("mouseleave", Swal.resumeTimer);
      //     },
      //   });
      //   Toast.fire({
      //     icon: "error",
      //     title: "Signed in failed",
      //   });
      // }
    },
  });
  const handleDisplayPassword = (prev) => {
    setDisplayPassword(!prev);
  };

  return (
    <div>
      <form action="" className="" onSubmit={formik.handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="text-sm font-bold border rounded w-full py-2 px-3 border-slate-500 text-slate-900 placeholder: opacity-50"
            placeholder="example@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div>
              <p className="text-sm text-red-600 mt-1">{formik.errors.email}</p>
            </div>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
          >
            Password
          </label>
          <div>
            <div className="flex relative">
              <input
                type={displayPassword ? "password" : "text"}
                id="password"
                name="password"
                className="text-sm border font-bold border-slate-500 rounded w-full py-2 px-3 pe-10 text-slate-900 placeholder: opacity-50"
                placeholder={
                  displayPassword ? "*******" : "Input Your Password"
                }
                autoComplete="off"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              {displayPassword ? (
                <VisibilityOff
                  onClick={() => handleDisplayPassword(displayPassword)}
                  className="absolute right-2 top-2 hover:cursor-pointer"
                />
              ) : (
                <Visibility
                  onClick={() => handleDisplayPassword(displayPassword)}
                  className="absolute right-2 top-2 hover:cursor-pointer"
                />
              )}
            </div>
            {formik.touched.password && formik.errors.password && (
              <div>
                <p className="text-sm text-red-600 mt-1">
                  {formik.errors.password}
                </p>
              </div>
            )}
          </div>
        </div>
        <div>
          <button
            className={`h-10 px-6 font-semibold rounded-md text-white bg-blue-500 w-full`}
            type="submit"
          >
            {isLoading ? (
              <CircularProgress olor="inherit" size="20px" />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormLogin;
