import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const ContactTabs = ({ setShowContactPopup, receiverNumber }) => {
  const [contactNumber, setContactNumber] = useState(localStorage.getItem("agentNumber") || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const timeoutRef = useRef(null); // 👈 cleanup ke liye

  // 🔁 Load agent number from localStorage
  useEffect(() => {
    // 🧹 cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
  

  const handleContinue = async () => {
    try {
      if (!contactNumber) {
        alert("Please enter your mobile number");
        return;
      }

      setLoading(true);
      setMessage("");

      localStorage.setItem("agentNumber", contactNumber);

      // ✅ CORRECT axios POST
      const res = await axios.post(
        "http://localhost:3000/api/user/contact-via-call",
        {
          receiver: receiverNumber,
          agent: contactNumber,
        },
      );

      console.log(res.data);

      setMessage(
        "📞 Your call request has been sent. Please attend the call after a few seconds.",
      );

      setLoading(false);

      // ⏳ auto close safely
      timeoutRef.current = setTimeout(() => {
        setShowContactPopup(false);
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <div className="relative bg-white rounded-xl p-6 w-80 text-center">
        {/* ❌ Cross Button */}
        <button
          onClick={() => setShowContactPopup(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-lg font-semibold mb-3 text-gray-800">
          Contact On Calling
        </h2>

        {!localStorage.getItem("agentNumber") && (
          <>
            <label className="block text-sm text-gray-600 mb-1">
              Enter your mobile number
            </label>

            <input
              type="tel"
              placeholder="Enter your number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </>
        )}

        {/* ⏳ Loading */}
        {loading && (
          <p className="mt-4 text-sm text-blue-600 font-medium">
            📡 Call processing, please wait...
          </p>
        )}

        {/* ✅ Success Message */}
        {message && (
          <p className="mt-4 text-sm text-green-600 font-medium">{message}</p>
        )}

        {!loading && !message && (
          <button
            onClick={handleContinue}
            className="w-full mt-5 bg-green-500 text-white py-2 rounded-lg font-medium"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default ContactTabs;
