import React, { useEffect, useState } from "react";
import { FaWhatsapp, FaGooglePlay } from "react-icons/fa";
import { MdSms } from "react-icons/md";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";
import calculateAgeFromDate from "../utils/dateUtils";
import NoParking from "../assets/No Parking.png";
import CongestedParking from "../assets/Congested Parking.png";
import RoadBlockAlert from "../assets/Road Block Alert.png";
import BlockedVehicleAlert from "../assets/Blocked Vehicle Alert.png";
import CarLightsWindowsOpen from "../assets/Car Lights  Windows Open.png";
import CarHornorAlarmGoingOn from "../assets/Car Horn or Alarm Going On.png";
import UnknownIssueAlert from "../assets/Unknown Issue Alert.png";
import AccidentAlert from "../assets/Accident Alert.png";
// import DocumentAccess from "../assets/Request for Document Access.png";

import axios from "axios";

const notificationOptions = {
  vehicle: [
    {
      id: 1,
      title: "No Parking",
      icon: NoParking,
      issue_type: "no_parking",
      notification_type: "Vehicle",
      message: "Your car is parking in no parking zone.",
    },
    {
      id: 2,
      title: "Congested Parking",
      icon: CongestedParking,
      issue_type: "congested_parking",
      notification_type: "Vehicle",
      message: "Your vehicle is causing parking congestion. Please move it.",
    },
    {
      id: 3,
      title: "Road Block Alert",
      icon: RoadBlockAlert,
      issue_type: "road_block_alert",
      notification_type: "Vehicle",
      message: "Your vehicle is blocking traffic. Please move it immediately.",
    },
    {
      id: 4,
      title: "Blocked Vehicle Alert",
      icon: BlockedVehicleAlert,
      issue_type: "blocked_vehicle_alert",
      notification_type: "Vehicle",
      message: "Your vehicle is blocking another vehicle.",
    },
    {
      id: 5,
      title: "Car Lights / Windows Open",
      icon: CarLightsWindowsOpen,
      issue_type: "car_lights_windows_left_open",
      notification_type: "Vehicle",
      message: "Your car lights or windows are open.",
    },
    {
      id: 6,
      title: "Car Horn or Alarm Going On",
      icon: CarHornorAlarmGoingOn,
      issue_type: "car_horn_alarm_going_on",
      notification_type: "Vehicle",
      message: "Your car alarm or horn is going on.",
    },
    {
      id: 7,
      title: "Unknown Issue Alert",
      icon: UnknownIssueAlert,
      issue_type: "unknown_issue_alert",
      notification_type: "Vehicle",
      message: "An unknown issue has been detected with your vehicle.",
    },
    {
      id: 8,
      title: "Accident Alert",
      icon: AccidentAlert,
      issue_type: "accident_alert",
      notification_type: "Vehicle",
      message: "Your vehicle met with an accident.",
    },
    // {
    //   id: 9,
    //   title: "Request for Document Access",
    //   icon: DocumentAccess,
    //   issue_type: "doc_access",
    //   notification_type: "Vehicle",
    //   message: "You have received a request for document access.",
    // },
  ],

  pet: [
    {
      id: 1,
      title: "Pet Issue Alert",
      icon: UnknownIssueAlert,
      issue_type: "pet_notification",
      notification_type: "Pet",
      message: "There is an issue related to your pet.",
    },
  ],

  other: [
    {
      id: 1,
      title: "Other Notification",
      icon: UnknownIssueAlert,
      issue_type: "other_notification",
      notification_type: "Other",
      message: "You have received a notification.",
    },
  ],
};

const SendNotificationpage = () => {
  const [selected, setSelected] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cooldown, setCooldown] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [timer, setTimer] = useState(30);
  const [showPopup, setShowPopup] = useState(false);
  const [firstIssueType, setFirstIssueType] = useState(null);
  const [lockNotifications, setLockNotifications] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [contactNumber, setContactNumber] = useState("");
  const [contactType, setContactType] = useState(""); // "whatsapp" | "sms"

  const PLAYSTORE_URL =
    "https://play.google.com/store/apps/details?id=com.digivahan";

  const navigate = useNavigate();
  const { qr_id } = useParams();

  // 🔥 API call
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/user-details/${qr_id}`,
        );

        if (!res.data.success) {
          setError(res.data.message);
        } else {
          const userData = res.data.data;
          const ageInYears = calculateAgeFromDate(userData.age);

          setUser({
            ...userData,
            age: ageInYears,
          });
        }
      } catch (error) {
        setError(error?.response?.data?.message || "Something Went Wrong");
      } finally {
        setLoading(false);
      }
    };

    if (qr_id) fetchUserDetails();

    // Timer
    if (!cooldown) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCooldown(false);
          setSelected(null);
          setShowPopup(false); // 👈 yeh line add karo
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [qr_id, cooldown]);

  // Filter Notification Type base on product type
  const activeReasons = user?.product_type
    ? notificationOptions[user.product_type] || []
    : [];

  const handleSendNotification = async () => {
    if (!selected || !user || isSending) return;

    // ⏳ Cooldown block
    if (cooldown) return;

    const notificationdetails = activeReasons.find(
      (data) => data.id === selected,
    );
    if (!notificationdetails) return;
    const currentIssue = notificationdetails.issue_type;
    setFirstIssueType(currentIssue);

    const NAVIGATION_ONLY_ISSUES = [
      "accident_alert",
      "pet_notification",
      "other_notification",
      "doc_access",
    ];

    if (NAVIGATION_ONLY_ISSUES.includes(notificationdetails.issue_type)) {
      if (notificationdetails.issue_type === "doc_access") {
        navigate(`/access-vehicle-doc/${qr_id}`);
      } else {
        navigate(`/accident-notification/${qr_id}`);
      }
      return;
    }

    setIsSending(true);

    try {
      const payload = {
        receiver_id: user.user_id,
        notification_type: notificationdetails.notification_type,
        notification_title: notificationdetails.title,
        message: notificationdetails.message,
        link: "",
        vehicle_id: user.vehicle_id || "",
        issue_type: notificationdetails.issue_type,
        latitude: "",
        longitude: "",
        incident_proof: [],
        seen_status: false,
      };

      await axios.post("http://localhost:3000/api/notifications/send", payload);

      if (!lockNotifications) {
        setLockNotifications(true); // first successful send ke baad disable
      }

      setCooldown(true);
      setTimer(30);
      setShowPopup(true); // 👈 YE LINE ADD KARO (popup open)
    } catch (error) {
      alert(error?.response?.data?.message || "Failed to send notification");
    } finally {
      setIsSending(false);
    }
  };

  // ❌ Error
  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-400 text-white px-6 py-2 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ⏳ Loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <main>
      {showContactPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80">
            <h2 className="text-lg font-semibold mb-3 text-gray-800">
              Contact via {contactType === "whatsapp" ? "WhatsApp" : "SMS"}
            </h2>

            <label className="block text-sm text-gray-600 mb-1">
              {contactType === "whatsapp" ? "Please enter your number to send a WhatsApp Alert" : "Please enter your number to send a SMS Alert"}
            </label>

            <input
              type="number"
              placeholder="Enter your number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <div className="flex gap-3 mt-5">
              <button
                onClick={() => {
                  setShowContactPopup(false);
                  setContactNumber("");
                }}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-medium"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (!contactNumber) {
                    alert("Please enter mobile number");
                    return;
                  }

                  // future use (WhatsApp deep link / API)
                  console.log("Entered Number:", contactNumber);

                  setShowContactPopup(false);
                  setContactNumber("");
                }}
                className="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {showPopup && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-80 text-center">
            <h2 className="text-lg font-bold mb-3">
              Install App for Better Experience
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              Aapka notification delivered ho chuka hai chatting aur calling
              features ke liye App ko install kijiye!
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  window.location.href = PLAYSTORE_URL;
                }}
                className="flex-1 bg-green-500 text-white py-2 rounded-lg font-semibold"
              >
                Install App
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen max-w-6xl mx-auto bg-gray-100 p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/")} className="text-xl">
            ←
          </button>
          <h1 className="font-semibold text-lg">Scan QR Code</h1>
        </div>

        {/* 👤 Profile Card */}
        <div className="bg-white rounded-xl p-3 shadow mb-6">
          <div className="flex items-start flex-col md:flex-row justify-between gap-4">
            {/* Left: Profile Info */}
            <div className="flex items-center gap-4">
              <img
                src={user.profile_pic}
                alt="profile"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h2 className="font-semibold text-lg">{user.full_Name}</h2>
                <p className="text-sm text-gray-500">
                  {user.age || "N/A"} year old • {user.gender || "N/A"}
                </p>
                <p className="text-xs text-gray-400">
                  {user.address || "Address not available"}
                </p>
              </div>
            </div>

            {/* Right: Action Icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setContactType("whatsapp");
                  setShowContactPopup(true);
                }}
                className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </button>

              <button
                onClick={() => {
                  setContactType("sms");
                  setShowContactPopup(true);
                }}
                className="w-9 h-9 rounded-full bg-blue-500 text-white flex items-center justify-center"
                title="SMS"
              >
                <MdSms size={18} />
              </button>

              {/* Google Play */}
              <button
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.digivahan",
                    "_blank",
                  )
                }
                className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center"
                title="Open in Google Play"
              >
                <FaGooglePlay size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Reason Title */}
        <h3 className="font-medium mb-4 text-gray-700">
          Please select the reason why you want to contact the owner
        </h3>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
          {activeReasons.map((item) => {
            const isSelected = selected === item.id;
            const isDisabled =
              lockNotifications && item.issue_type !== firstIssueType;
            return (
              <div
                key={item.id}
                onClick={() => {
                  if (isDisabled) return;
                  if (!cooldown) setSelected(item.id);
                }}
                className={`relative rounded-xl border bg-white ${
                  isSelected ? "border-orange-500 bg-orange-50" : ""
                }
      ${
        isDisabled
          ? "opacity-40 pointer-events-none"
          : cooldown && !isSelected
            ? "opacity-40 pointer-events-none"
            : "cursor-pointer"
      }`}
              >
                {/* ⏱️ TIMER OVERLAY – ONLY ON SELECTED */}
                {cooldown && isSelected && (
                  <div className="absolute inset-0 z-10 bg-black/60 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      00:{timer < 10 ? `0${timer}` : timer}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center justify-center text-center p-3 space-y-2 h-full">
                  <img src={item.icon} alt="" className="h-12 object-cover" />
                  <p className="text-xs text-gray-600">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <button
          disabled={!selected || isSending}
          onClick={handleSendNotification}
          className="w-full bg-orange-400 disabled:bg-orange-200 text-white py-3 rounded-xl font-semibold"
        >
          {cooldown
            ? `Please wait ${timer}s`
            : isSending
              ? "Sending..."
              : "Send Notification"}
        </button>
      </div>
    </main>
  );
};

export default SendNotificationpage;
