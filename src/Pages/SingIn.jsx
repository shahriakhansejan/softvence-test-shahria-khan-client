import img from "../assets/image/login.png";
import bgImg from "../assets/image/bg.png";
import { Link, Navigate } from "react-router";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSignInUserMutation } from "../redux/feature/user/userApi";
import Swal from "sweetalert2";

const SingIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [signInUser, {data, isSuccess}] = useSignInUserMutation();

  console.log(data)

  const onSubmit = (data) => {
    signInUser(data)
  };

  useEffect(() => {
      if (isSuccess) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Successfully Log In",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      

    }, [isSuccess]);

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen flex flex-col lg:flex-row">
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className="w-full lg:w-1/2 flex items-center justify-center bg-cover bg-center"
      >
        <div className="relative w-full flex items-center justify-center z-10">
          <img
            src={img}
            alt="Login Illustration"
            className="w-full object-contain z-10 max-w-[400px]"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Login</h2>
            <p className="text-sm text-gray-500 mt-2">
              Welcome Back, Please Enter your Details to Log In.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="input input-bordered w-full pr-10"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-between mb-[50px] text-sm gap-1">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm"
                  {...register("rememberMe", {
                    required:
                      "Please check the Remember me box before proceeding.",
                  })}
                />
                Remember me
              </label>
              {errors.rememberMe && (
                <p className="text-red-500 text-sm">
                  {errors.rememberMe.message}
                </p>
              )}

               <div className="text-sm">
              <Link to="/reset" className="hover:underline">
                Forgot password?
              </Link>
            </div>
            </div>

           

            <button
              type="submit"
              className="btn bg-[#60E5AE] border-none w-full text-white"
            >
              Log In
            </button>

            <div className="divider text-gray-400">Or</div>

            <p className="text-center text-sm text-gray-600">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
