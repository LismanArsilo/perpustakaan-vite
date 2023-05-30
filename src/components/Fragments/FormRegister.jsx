import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";

const FormRegister = () => {
  const [displayPassword, setDisplayPassword] = useState(true);
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(true);

  const handleDisplayPassword = (prev) => {
    setDisplayPassword(!prev);
  };
  const handleDisplayConfirmPassword = (prev) => {
    setDisplayConfirmPassword(!prev);
  };
  return (
    <form action="" className="">
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="text-sm font-bold border rounded w-full py-2 px-3 border-slate-500 text-slate-900 placeholder: opacity-50"
          placeholder="Input Your Name"
        />
      </div>
      <div className="mb-4 ">
        <label
          htmlFor="email"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="text-sm font-bold border rounded w-full py-2 px-3 border-slate-500 text-slate-900 placeholder: opacity-50"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Password
        </label>
        <div className="flex relative">
          <input
            type={displayPassword ? "password" : "text"}
            id="password"
            className="text-sm border font-bold border-slate-500 rounded w-full py-2 px-3 pe-10 text-slate-900 placeholder: opacity-50"
            placeholder={displayPassword ? "*******" : "Input Your Password"}
            autoComplete="off"
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
      </div>
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-slate-700 text-sm font-bold mb-2 hover:cursor-pointer"
        >
          Confirm Password
        </label>
        <div className="flex relative">
          <input
            type={displayConfirmPassword ? "password" : "text"}
            id="confirmPassword"
            className="text-sm border font-bold border-slate-500 rounded w-full py-2 px-3 pe-10 text-slate-900 placeholder: opacity-50"
            placeholder={
              displayConfirmPassword ? "*******" : "Input Your Confirm Password"
            }
            autoComplete="off"
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
      </div>
      <div>
        <button
          className={`h-10 px-6 font-semibold rounded-md text-white bg-blue-500 w-full`}
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
