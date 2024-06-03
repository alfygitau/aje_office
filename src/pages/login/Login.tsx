import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../sdk/auth/index";
import { AxiosError } from "axios";
import { useAuth } from "../../hooks/useAuth";



interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [submittingLogin, setSubmittingLogin] = useState<boolean>(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleLogin = async (values: LoginFormValues) => {
    try {
      setSubmittingLogin(true);
      const response = await login({
        username: values.username,
        password: values.password,
      });
      if (response && response.user) {
        toast.success("Welcome to Aje bets");
        setAuth({ user: response.user });
        navigate("/dashboard");
      } else {
        toast.error("Invalid response from server");
      }
    } catch (error) {
      console.error(error);

      if (
        error instanceof AxiosError &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setSubmittingLogin(false);
    }
  };

  const loginFormik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: handleLogin,
  });

  return (
    <div className="flex justify-center mt-[180px]">
      <div className="border-1 rounded p-2 w-[50%] h-[400px] px-[20px] bg-[#ffffff] flex flex-col items-center">
        <div className="mt-[60px] w-full">
          <p className="text-lg text-[24px] mb-4 text-center">Sign in</p>
          <form onSubmit={loginFormik.handleSubmit} className="w-full">
            <div className="mb-4 w-full">
              <label className="block mb-1 text-[12px]">Username:</label>
              <input
                className="border px-2 py-2 w-full"
                type="text"
                name="username"
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                value={loginFormik.values.username}
              />
              {loginFormik.touched.username && loginFormik.errors.username ? (
                <div className="text-red-500">
                  {loginFormik.errors.username}
                </div>
              ) : null}
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-1 text-[12px]">Password:</label>
              <input
                className="border px-2 py-2 w-full"
                type="password"
                name="password"
                onChange={loginFormik.handleChange}
                onBlur={loginFormik.handleBlur}
                value={loginFormik.values.password}
              />
              {loginFormik.touched.password && loginFormik.errors.password ? (
                <div className="text-red-500">
                  {loginFormik.errors.password}
                </div>
              ) : null}
            </div>
            <button
              type="submit"
              disabled={submittingLogin}
              className="text-lg h-10 w-full bg-yellow-500 text-white mx-auto"
            >
              Login
            </button>
          </form>
          <div className="mt-[10px] text-[#4050b5] text-[12px]">
            <p>Forgot password?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
