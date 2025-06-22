import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import resetImg from "../assets/image/reset.png";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-white shadow-2xl mb-6 rounded-lg p-3 lg:p-10 relative z-20 -mt-[60px] max-w-[1320px] mx-auto">
      <div className="">
        <div className="w-full max-w-xl mx-auto rounded-lg p-4 sm:p-8">
          <div className="flex justify-center mb-6">
            <img src={resetImg} alt="icon" />
          </div>
          <h2 className="text-2xl font-bold text-center">Reset your Password</h2>
          <p className="text-sm text-center text-gray-500 mt-1 mb-6">
            Strong passwords include numbers, letters, and punctuation marks.
          </p>

          {/* Email */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email Address</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered w-full"
            />
          </div>

          {/* New Password */}
          <div className="form-control mb-4 relative">
            <label className="label">
              <span className="label-text">Enter New Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="New Password"
              className="input input-bordered w-full pr-10"
            />
            <span
              className="absolute right-3 top-12 cursor-pointer text-lg text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="form-control mb-6 relative">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Retype password"
              className="input input-bordered w-full pr-10"
            />
            <span
              className="absolute right-3 top-12 cursor-pointer text-lg text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          {/* Submit */}
          <button className="btn w-full bg-[#60E5AE] text-black border-none hover:bg-[#4fd89f]">
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;