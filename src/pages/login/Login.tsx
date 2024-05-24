import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      if (
        values.email === "user@example.com" &&
        values.password === "password"
      ) {
        localStorage.setItem("authenticated", "true");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    },
  });

  return (
    <div className="flex justify-center mt-[180px]">
      <div className="border-1 rounded p-2 w-[50%] h-[400px] px-[20px] bg-[#ffffff] flex flex-col items-center">
        <div className="mt-[60px] w-full">
          <p className="text-lg text-[24px] mb-4 text-center">Sign in</p>
          <form onSubmit={formik.handleSubmit} className="w-full">
            <div className="mb-4 w-full">
              <label className="block mb-1 text-[12px]">Email:</label>
              <input
                className="border px-2 py-2 w-full"
                type="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-4 w-full">
              <label className="block mb-1 text-[12px]">Password:</label>
              <input
                className="border px-2 py-2 w-full"
                type="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>
            <button className="text-lg h-10 w-full bg-yellow-500 text-white mx-auto">
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
