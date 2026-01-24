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
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
