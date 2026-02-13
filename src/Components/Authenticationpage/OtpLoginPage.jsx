import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logimg from "../../assets/Frame 1.png";

const OtpLoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState("");

  const phone = useMemo(() => {
    const statePhone = location.state?.phone;
    const storedPhone = sessionStorage.getItem("login_phone");
    return statePhone || storedPhone || "";
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp !== "008500") {
      toast.error("Please enter the correct OTP");
      return;
    }

    // Frontend-only success flow
    localStorage.setItem("role", "admin");
    toast.success("Login successful!");
    setTimeout(() => navigate("/admin-panel"), 900);
  };

  const handleResend = () => {
    toast.info("OTP resent to your phone");
  };

  const handleEditNumber = () => {
    navigate("/login-page", { replace: true });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden animate-fade-in">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6 bg-yellow-50">
          <img
            src={logimg}
            alt="Login Illustration"
            className="w-full h-64 sm:h-80 object-contain rounded-lg animate-float"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2">
            Verify your number
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            We sent an OTP to {phone ? `+91 ${phone}` : "your phone"}. Use
            008500 to continue.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              placeholder="Enter 6-digit OTP"
              value={otp}
              onChange={(e) => {
                const digitsOnly = e.target.value.replace(/\D/g, "");
                setOtp(digitsOnly.slice(0, 6));
              }}
              required
              className="w-full px-4 py-2 border rounded-lg tracking-[0.3em] text-center text-lg"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Verify & Login
            </button>
          </form>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <button
              type="button"
              onClick={handleResend}
              className="text-yellow-600 hover:text-yellow-700"
            >
              Resend OTP
            </button>
            <button
              type="button"
              onClick={handleEditNumber}
              className="text-gray-500 hover:text-gray-700"
            >
              Edit number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpLoginPage;
