import React, { useState } from "react";
import { Clock, Check} from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    name: "Premium Car Wash",
    owner: "Rajesh Kumar",
    vehicle: "DL-01-AB-1234",
    date: "2025-12-01 10:30 AM",
  },
  {
    id: "ORD-002",
    name: "Full Service",
    owner: "Priya Sharma",
    vehicle: "MH-02-CD-5678",
    date: "2025-12-01 11:15 AM",
  },
  {
    id: "ORD-003",
    name: "Interior Cleaning",
    owner: "Amit Patel",
    vehicle: "GJ-03-EF-9012",
    date: "2025-12-01 12:00 PM",
  },
  {
    id: "ORD-004",
    name: "Express Wash",
    owner: "Neha Singh",
    vehicle: "UP-04-GH-3456",
    date: "2025-12-01 01:45 PM",
  },
  {
    id: "ORD-005",
    name: "Deluxe Package",
    owner: "Suresh Reddy",
    vehicle: "TN-05-IJ-7890",
    date: "2025-12-01 02:30 PM",
  },
];

function Order() {
  const [ordersView, setOrdersView] = useState(null);
  const [downloadedOrders, setDownloadedOrders] = useState({});

  const handleDownload = (id) => {
    setDownloadedOrders((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  return (
    <main className="w-full h-screen p-2 overflow-y-auto">
      <div>
        <h1 className="text-3xl font-bold">Order Management</h1>
        <p className="text-gray-500 mb-6">Manage and track all your orders</p>

        {/* Top Cards - Clickable */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            onClick={() => setOrdersView("unprocessed")}
            className={`p-6 bg-yellow-100 rounded-xl border-2 shadow cursor-pointer hover:shadow-lg transition ${
              ordersView === "unprocessed"
                ? "border-yellow-500"
                : "border-blue-300"
            }`}
          >
            <h2 className="text-xl font-semibold flex items-center gap-3">
              <Clock className="w-6 h-6" /> Unprocessed Orders
            </h2>
            <p className="text-gray-700">Click to view details</p>
            <div className="text-3xl font-bold text-right mt-2">24</div>
          </div>

          <div
            onClick={() => setOrdersView("processed")}
            className={`p-6 bg-green-100 rounded-xl border-2 shadow cursor-pointer hover:shadow-lg transition ${
              ordersView === "processed"
                ? "border-green-500"
                : "border-green-300"
            }`}
          >
            <h2 className="text-xl font-semibold flex items-center gap-3">
              <Check className="w-6 h-6" /> Processed Orders
            </h2>
            <p className="text-gray-700">Click to view details</p>
            <div className="text-3xl font-bold text-right mt-2">156</div>
          </div>
        </div>

        {/* Show Processed Orders Table */}
        {ordersView === "processed" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Left Form - Process Order Details */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">
                Process Order Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Order ID</label>
                  <input
                    type="text"
                    defaultValue="ORD-001"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Order Name</label>
                  <input
                    type="text"
                    defaultValue="Premium Car Wash"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Owner Name</label>
                  <input
                    type="text"
                    defaultValue="Rajesh Kumar"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Vehicle Number
                  </label>
                  <input
                    type="text"
                    defaultValue="DL-01-AB-1234"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Assigned QR Number
                  </label>
                  <input
                    type="text"
                    defaultValue="QR-2025-001"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">
                    Processed Date
                  </label>
                  <input
                    type="date"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600">Status</label>
                  <select className="w-full border rounded-lg px-3 py-2 mt-1">
                    <option>Delivered</option>
                    <option>Out for Delivery</option>
                    <option>In Progress</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600">Tracking Link</label>
                  <input
                    type="text"
                    className="w-full border rounded-lg px-3 py-2 mt-1"
                    placeholder="https://tracking..."
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
                  Process Order
                </button>
                <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400">
                  Clear
                </button>
              </div>
            </div>

            {/* Right Form - Cancel Order */}
            <div className="bg-white p-6 border border-red-300 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-red-600 mb-4">
                Cancel an Order
              </h2>

              <div>
                <label className="text-sm text-gray-600">Order ID *</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  placeholder="Enter Order ID"
                />
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">
                  Cancellation Reason
                </label>
                <select className="w-full border rounded-lg px-3 py-2 mt-1">
                  <option>Customer Request</option>
                  <option>Incorrect Order</option>
                  <option>Payment Issue</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="text-sm text-gray-600">
                  Additional Notes
                </label>
                <textarea
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  rows="4"
                  placeholder="Reason..."
                ></textarea>
              </div>

              <div className="flex gap-3 mt-4">
                <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                  Cancel Order
                </button>
                <button className="bg-gray-300 px-5 py-2 rounded-lg hover:bg-gray-400">
                  Clear
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Show Unprocessed Orders Forms */}
        {ordersView === "unprocessed" && (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Processed Orders</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Order Name</th>
                  <th className="p-3">Owner Name</th>
                  <th className="p-3">Vehicle Number</th>
                  <th className="p-3">Order Date & Time</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-blue-600 font-semibold cursor-pointer">
                      {order.id}
                    </td>
                    <td className="p-3">{order.name}</td>
                    <td className="p-3">{order.owner}</td>
                    <td className="p-3">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">
                        {order.vehicle}
                      </span>
                    </td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">
                      {downloadedOrders[order.id] ? (
                        <button className="bg-green-500 text-white px-5 py-2 rounded-lg">
                          Processed ✓
                        </button>
                      ) : (
                        <button
                          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
                          onClick={() => handleDownload(order.id)}
                        >
                          Download QR
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}

export default Order;
