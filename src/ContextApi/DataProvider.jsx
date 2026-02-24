import axios from "axios";
import Cookies from "js-cookie";
import React, { createContext } from "react";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();
const BASE_URL = import.meta.env.VITE_BASE_URL;

const DataProvider = ({ children }) => {
  console.log(BASE_URL);

  const AdminSignInwithOtp = async (phone) => {
    try {
      const response = await axios.post(`${BASE_URL}/api/auth/admin/send-otp`, {
        phone,
      });

      if (response.data) {
        return response.data;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP send failed");

      return null;
    }
  };

  const verifyAdminOtp = async (userOtp) => {
    try {
      const phone = localStorage.getItem("login_phone");

      const response = await axios.post(
        `${BASE_URL}/api/auth/admin/verify-admin`,
        {
          phone,
          OtpCode: userOtp,
        },
      );

      if (response && response.data) {
        const token = response.data.token;

        Cookies.set("admin_token", token, {
          expires: 7,
          secure: false,
          sameSite: "Strict",
        });

        localStorage.removeItem("login_phone");

        return response.data; // ✅ always return
      }

      return null; // ✅ explicit fallback
    } catch (error) {
      console.log("Context error:", error);

      toast.error(error.response?.data?.message || "Verification failed");

      return null;
    }
  };

  const LogoutAdmin = async () => {
    try {
      // ✅ get token from cookies
      const token = Cookies.get("admin_token");
      console.log(token);

      if (!token) {
        toast.error("No active session found");
        return null;
      }

      // ✅ call logout API
      const response = await axios.post(
        `${BASE_URL}/api/auth/admin/logout-admin`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);

      // ✅ if logout successful
      if (response.data) {
        // remove cookie
        Cookies.remove("admin_token");
        toast.success("Logged out successfully");
        return response.data;
      }

      return null;
    } catch (error) {
      console.log("Logout error:", error);

      toast.error(error.response?.data?.message || "Logout failed");

      return null;
    }
  };

  return (
    <MyContext.Provider
      value={{ AdminSignInwithOtp, verifyAdminOtp, LogoutAdmin }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default DataProvider;
