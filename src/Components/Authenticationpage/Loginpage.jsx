import React, { useState } from "react";
import logimg from "../../assets/Frame 1.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Simple Frontend-based login
    if (email === "admin@gmail.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      toast.success("Welcome Admin!");
      setTimeout(() => navigate("/admin-panel"), 1000);
    } else {
      localStorage.setItem("role", "user");
      toast.success("Welcome User!");
      setTimeout(() => navigate("/user-panel"), 1000);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row w-full max-w-3xl overflow-hidden">
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-6 bg-yellow-50">
          <img
            src={logimg}
            alt="Logo"
            className="w-full h-64 sm:h-80 object-contain rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-yellow-500 mb-2">
            Welcome to DigiVahan!
          </h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button className="w-full bg-yellow-500 text-white py-2 rounded-lg">
              Login
            </button>
          </form>

          {/* iOS App Login Button */}
          <button
            type="button"
            onClick={() => navigate("/ios/login")}
            className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            iOS Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
