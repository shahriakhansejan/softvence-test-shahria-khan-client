import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 p-4 border-4 border-yellow-400">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-green-400 rounded-xl p-4">
            <span className="text-3xl">🕑</span> {/* You can replace with an icon */}
          </div>
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
  );
};

export default ResetPassword;
