import React, { useState } from "react";
import {
  ArrowLeft,
  Edit3,
  X,
  ChevronDown,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

// Sample order database
const orderDatabase = {
  "ORD-001": {
    id: "ORD-001",
    name: "Premium QR Code Package",
    ownerName: "Rajesh Kumar",
    vehicleNumber: "DL-01-AB-1234",
    qrCode: "QR-2025-001",
    status: "Delivered",
    processedDate: "12/01/2025",
    trackingLink: "https://tracking.example.com/ORD-001",
  },
  "ORD-002": {
    id: "ORD-002",
    name: "Standard QR Code",
    ownerName: "Priya Singh",
    vehicleNumber: "MH-02-CD-5678",
    qrCode: "QR-2025-002",
    status: "Processing",
    processedDate: "12/02/2025",
    trackingLink: "https://tracking.example.com/ORD-002",
  },
  "ORD-003": {
    id: "ORD-003",
    name: "Premium QR Code Package",
    ownerName: "Amit Patel",
    vehicleNumber: "GJ-03-EF-9012",
    qrCode: "QR-2025-003",
    status: "Pending",
    processedDate: "12/03/2025",
    trackingLink: "https://tracking.example.com/ORD-003",
  },
};

const cancellationReasons = [
  { value: "customer_request", label: "Customer Request" },
  { value: "wrong_details", label: "Wrong Order Details" },
  { value: "duplicate_order", label: "Duplicate Order" },
  { value: "out_of_stock", label: "Out of Stock" },
  { value: "other", label: "Other" },
];

const ManageOrder = ({ onBack }) => {
  const [activeCard, setActiveCard] = useState(null);
  const [inputOrderId, setInputOrderId] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [updateData, setUpdateData] = useState(null);
  const [cancellationReason, setCancellationReason] = useState("");
  const [cancellationNotes, setCancellationNotes] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCardClick = (cardType) => {
    setActiveCard(cardType);
    setInputOrderId("");
    setSelectedOrder(null);
    setUpdateData(null);
    setSuccessMessage("");
  };

  const handleSubmitOrderId = () => {
    const orderKey = inputOrderId.toUpperCase();
    if (orderDatabase[orderKey]) {
      setSelectedOrder(orderDatabase[orderKey]);
      setShowDetails(true);
      if (activeCard === "update") {
        setUpdateData({ ...orderDatabase[orderKey] });
      }
    } else {
      alert("Order not found. Please check the Order ID.");
    }
  };

  const handleUpdateOrder = () => {
    if (!updateData.name || !updateData.ownerName || !updateData.vehicleNumber) {
      alert("Please fill all required fields");
      return;
    }
    setSuccessMessage("Order updated successfully!");
    setTimeout(() => {
      setActiveCard(null);
      setShowDetails(false);
      setUpdateData(null);
      setSuccessMessage("");
    }, 2000);
  };

  const handleCancelOrder = () => {
    if (!cancellationReason || !cancellationNotes.trim()) {
      alert("Please select a reason and add notes");
      return;
    }
    setSuccessMessage("Order cancelled successfully!");
    setTimeout(() => {
      setActiveCard(null);
      setShowDetails(false);
      setCancellationReason("");
      setCancellationNotes("");
      setSuccessMessage("");
    }, 2000);
  };

  const handleClose = () => {
    setActiveCard(null);
    setShowDetails(false);
    setInputOrderId("");
    setSelectedOrder(null);
    setUpdateData(null);
    setCancellationReason("");
    setCancellationNotes("");
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <button
          className="p-2 md:p-2.5 rounded-lg bg-white border-2 border-indigo-100 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 text-gray-700 shadow-sm hover:shadow-md"
          onClick={onBack}
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Manage Orders
          </h1>
          <p className="text-sm text-gray-600">Update or cancel orders with ease</p>
        </div>
      </div>

      {/* Content Area */}
      <div>
        {activeCard === null ? (
          // Cards Grid
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl">
            {/* Update Order Card */}
            <div
              onClick={() => handleCardClick("update")}
              className="group bg-white rounded-lg p-5 md:p-6 cursor-pointer transition-all duration-300 border-t-4 border-t-emerald-500 hover:border-t-emerald-600 shadow-md hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-md bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <Edit3 className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Update Order</h2>
                <p className="text-sm text-gray-600">Modify order details and tracking</p>
                <div className="mt-4 flex justify-end">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300">
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cancel Order Card */}
            <div
              onClick={() => handleCardClick("cancel")}
              className="group bg-white rounded-lg p-5 md:p-6 cursor-pointer transition-all duration-300 border-t-4 border-t-red-500 hover:border-t-red-600 shadow-md hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-md bg-linear-to-br from-red-500 to-red-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <X className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Cancel Order</h2>
                <p className="text-sm text-gray-600">Process cancellation requests</p>
                <div className="mt-4 flex justify-end">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-gray-200 transition-colors duration-300">
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Action Panel
          <div className="bg-white rounded-xl p-5 md:p-8 shadow-lg max-w-2xl relative">
            <button
              className="absolute top-3 right-3 md:top-5 md:right-5 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-all duration-300"
              onClick={handleClose}
            >
              <X className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Order ID Input Section */}
            {!showDetails && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {activeCard === "update" ? "Update Order" : "Cancel Order"}
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-5 md:mb-6">
                  Please enter the Order ID for{" "}
                  {activeCard === "update" ? "updating" : "cancelling"} and checking details
                </p>

                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Enter the Order ID"
                    value={inputOrderId}
                    onChange={(e) => setInputOrderId(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" && handleSubmitOrderId()
                    }
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 border-2 border-gray-200 rounded-lg text-sm md:text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-300 bg-gray-50 focus:bg-white"
                  />
                </div>

                <button
                  className="w-full py-2.5 md:py-3 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-semibold text-sm md:text-base hover:shadow-lg hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 mb-4 disabled:hover:shadow-none"
                  onClick={handleSubmitOrderId}
                  disabled={!inputOrderId.trim()}
                >
                  Submit
                </button>

                <div className="flex items-center gap-2 md:gap-3 bg-blue-50 border-l-4 border-blue-500 p-3 md:p-4 rounded text-blue-700 text-xs md:text-sm">
                  <AlertCircle className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
                  <span>Example: ORD-001, ORD-002, ORD-003</span>
                </div>
              </div>
            )}

            {/* Order Details Section */}
            {showDetails && !successMessage && (
              <div className="animate-fadeIn">
                <div className="mb-5 md:mb-6 pb-4 md:pb-5 border-b-2 border-gray-200">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Order Details</h3>
                  <p className="text-sm text-gray-600 mt-1">Update tracking and status information</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-6">
                  {/* Order ID */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Order ID
                    </label>
                    <input
                      type="text"
                      value={selectedOrder?.id}
                      disabled
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  {/* Order Name */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Order Name
                    </label>
                    <input
                      type="text"
                      value={updateData?.name || selectedOrder?.name}
                      onChange={(e) =>
                        activeCard === "update" &&
                        setUpdateData({
                          ...updateData,
                          name: e.target.value,
                        })
                      }
                      disabled={activeCard === "cancel"}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-300"
                    />
                  </div>

                  {/* Owner Name */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Owner Name
                    </label>
                    <input
                      type="text"
                      value={updateData?.ownerName || selectedOrder?.ownerName}
                      onChange={(e) =>
                        activeCard === "update" &&
                        setUpdateData({
                          ...updateData,
                          ownerName: e.target.value,
                        })
                      }
                      disabled={activeCard === "cancel"}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-300"
                    />
                  </div>

                  {/* Vehicle Number */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      value={
                        updateData?.vehicleNumber ||
                        selectedOrder?.vehicleNumber
                      }
                      onChange={(e) =>
                        activeCard === "update" &&
                        setUpdateData({
                          ...updateData,
                          vehicleNumber: e.target.value,
                        })
                      }
                      disabled={activeCard === "cancel"}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-300"
                    />
                  </div>

                  {/* QR Code */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      QR Code
                    </label>
                    <input
                      type="text"
                      value={selectedOrder?.qrCode}
                      disabled
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Status
                    </label>
                    <div className="flex items-center">
                      <span
                        className={`inline-block px-3 py-2 rounded-lg text-xs md:text-sm font-semibold ${
                          selectedOrder?.status === "Delivered"
                            ? "bg-green-100 text-green-800"
                            : selectedOrder?.status === "Processing"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {selectedOrder?.status}
                      </span>
                    </div>
                  </div>

                  {/* Processed Date */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Processed Date
                    </label>
                    <input
                      type="text"
                      value={selectedOrder?.processedDate}
                      disabled
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm bg-gray-100 text-gray-600 cursor-not-allowed"
                    />
                  </div>

                  {/* Tracking Link */}
                  <div>
                    <label className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 block">
                      Tracking Link (Optional)
                    </label>
                    <input
                      type="text"
                      value={
                        updateData?.trackingLink ||
                        selectedOrder?.trackingLink
                      }
                      onChange={(e) =>
                        activeCard === "update" &&
                        setUpdateData({
                          ...updateData,
                          trackingLink: e.target.value,
                        })
                      }
                      disabled={activeCard === "cancel"}
                      placeholder="https://tracking.example.com"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 disabled:bg-gray-100 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Cancellation Reason (only for cancel) */}
                {activeCard === "cancel" && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 md:p-5 mb-5 md:mb-6">
                    <h4 className="text-base md:text-lg font-bold text-red-700 mb-3">
                      Cancellation Reason
                    </h4>
                    <select
                      value={cancellationReason}
                      onChange={(e) => setCancellationReason(e.target.value)}
                      className="w-full px-3 py-2.5 border-2 border-red-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 mb-3 transition-all duration-300 bg-white"
                    >
                      <option value="">-- Select a reason --</option>
                      {cancellationReasons.map((reason) => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </select>

                    <textarea
                      value={cancellationNotes}
                      onChange={(e) => setCancellationNotes(e.target.value)}
                      placeholder="Add any additional notes or details about cancellation..."
                      className="w-full px-3 py-2.5 border-2 border-red-300 rounded-lg text-sm focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition-all duration-300 resize-none"
                      rows="3"
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3 md:gap-4">
                  <button
                    className="flex-1 py-2.5 md:py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg text-sm md:text-base transition-all duration-300"
                    onClick={() => setShowDetails(false)}
                  >
                    Back
                  </button>
                  <button
                    className={`flex-1 py-2.5 md:py-3 text-white font-semibold rounded-lg text-sm md:text-base transition-all duration-300 ${
                      activeCard === "update"
                        ? "bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg"
                        : "bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 hover:shadow-lg"
                    }`}
                    onClick={
                      activeCard === "update"
                        ? handleUpdateOrder
                        : handleCancelOrder
                    }
                  >
                    {activeCard === "update" ? "Save / Update" : "Cancel Order"}
                  </button>
                </div>
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="flex flex-col items-center justify-center py-8 md:py-12 animate-fadeIn">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 animate-pulse" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {successMessage}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {activeCard === "update"
                      ? "The order has been successfully updated."
                      : "The order has been successfully cancelled."}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ManageOrder;
