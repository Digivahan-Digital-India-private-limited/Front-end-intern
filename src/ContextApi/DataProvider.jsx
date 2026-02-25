import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { io } from "socket.io-client";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const MyContext = createContext();

const DataProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

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

  const AddDeliveryPartners = async (partnername) => {
    try {
      const token = Cookies.get("admin_token");

      if (!token) {
        console.error("Token not found");
        return;
      }

      const decoded = jwtDecode(token);
      const admin_id = decoded?.userId; // check id or _id

      if (!admin_id) {
        console.error("Admin ID not found in token");
        return;
      }

      // 4️⃣ Call API
      const response = await axios.post(
        `${BASE_URL}/api/admin/add-active-partner`,
        {
          admin_id: admin_id,
          partner_name: partnername,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      console.log("Partner Activated:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Error adding delivery partner:",
        error.response?.data || error.message,
      );
    }
  };

  useEffect(() => {
    const token = Cookies.get("admin_token");
    if (!token) return;

    const decoded = jwtDecode(token);

    const socket = io("http://localhost:3000");

    socket.emit("join_admin_room", { adminId: decoded.userId });

    socket.on("new_order_created", (order) => {
      console.log("🔥 Real-time Order:", order);

      setOrders((prev) => [order, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <MyContext.Provider
      value={{
        AdminSignInwithOtp,
        verifyAdminOtp,
        LogoutAdmin,
        AddDeliveryPartners,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default DataProvider;
