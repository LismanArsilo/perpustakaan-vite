import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormRegister = () => {
  const [displayPassword, setDisplayPassword] = useState(true);
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(true);
  const formik = useFormik({
    // Initial Values
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
    // Validation Schema
    validationSchema: Yup.object({
      name: Yup.string().required().min(3).max(255),
      phone: Yup.string().required().min(3).max(255),
      email: Yup.string()
        .required()
        .email("invalid email your format")
        .min(3)
        .max(255),
      password: Yup.string()
        .required()
        .min(8, "Should mote than 8 characters")
        .matches(/[a-z]/g, "Should contain at least 1 lowercase")
        .matches(/[A-Z]/g, "Should contain at least 1 uppercase")
        .matches(/[0-9]/g, "Should contain at least 1 number")
        .matches(/^S*$/, "Should not contain spaces"),
      confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password")], "Password must match"),
      agreement: Yup.bool().isTrue("Field must be checked"),
    }),
    // Handle Submit
    onSubmit: (values) => {
      console.log({ Values: values });
    },
  });
  const handleDisplayPassword = (prev) => {
    setDisplayPassword(!prev);
  };
  const handleDisplayConfirmPassword = (prev) => {
    setDisplayConfirmPassword(!prev);
  };
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Username *
        </label>
        <input
          type="text"
          id="username"
          name="name"
          className="text-sm font-bold border rounded w-full py-2 px-3 border-slate-500 text-slate-900 placeholder: opacity-50"
          placeholder="Input Your Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div>
            <p className="text-sm text-red-600">{formik.errors.name}</p>
          </div>
        )}
      </div>
      <div className="mb-4 ">
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
            <p className="text-sm text-red-600">{formik.errors.email}</p>
          </div>
        )}
      </div>
      <div className="mb-4 ">
        <label
          htmlFor="phone"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
          autoComplete="off"
        >
          Phone *
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          className="text-sm font-bold border rounded w-full py-2 px-3 border-slate-500 text-slate-900 placeholder: opacity-50"
          placeholder="08xxxxxxxxxxx"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div>
            <p className="text-sm text-red-600 mt-1">{formik.errors.phone}</p>
          </div>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Password *
        </label>
        <div>
          <div className="flex relative">
            <input
              type={displayPassword ? "password" : "text"}
              id="password"
              name="password"
              className="text-sm border font-bold border-slate-500 rounded w-full py-2 px-3 pe-10 text-slate-900 placeholder: opacity-50"
              placeholder={displayPassword ? "*******" : "Input Your Password"}
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
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Confirm Password *
        </label>
        <div>
          <div className="flex relative">
            <input
              type={displayConfirmPassword ? "password" : "text"}
              id="confirmPassword"
              name="confirmPassword"
              className="text-sm border font-bold border-slate-500 rounded w-full py-2 px-3 pe-10 text-slate-900 placeholder: opacity-50"
              placeholder={
                displayConfirmPassword
                  ? "*******"
                  : "Input Your Confirm Password"
              }
              autoComplete="off"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {displayConfirmPassword ? (
              <VisibilityOff
                onClick={() =>
                  handleDisplayConfirmPassword(displayConfirmPassword)
                }
                className="absolute right-2 top-2 hover:cursor-pointer"
              />
            ) : (
              <Visibility
                onClick={() =>
                  handleDisplayConfirmPassword(displayConfirmPassword)
                }
                className="absolute right-2 top-2 hover:cursor-pointer"
              />
            )}
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div>
              <p className="text-sm text-red-600 mt-1">
                {formik.errors.confirmPassword}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="mb-2">
        <div className="flex gap-2 ms-2 font-light">
          <input
            type="checkbox"
            name="agreement"
            id="agreement"
            checked={formik.values.agreement}
            value={formik.values.agreement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="agreement">I agree to Terms of Services</label>
        </div>
        {formik.touched.agreement && formik.errors.agreement && (
          <div>
            <p className="text-sm text-red-600 mt-1 ms-9">
              {formik.errors.agreement}
            </p>
          </div>
        )}
      </div>
      <div>
        <button
          className={`h-10 px-6 font-semibold rounded-md text-white bg-blue-500 w-full`}
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
