import React, { useState } from "react";
import { Clock, Check, ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";
import ManageOrder from "./ManageOrder";

const unprocessedOrders = [
  { id: "ORD-001", shipmentId: 1169201746, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-002", shipmentId: 1169201747, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-003", shipmentId: 1169201748, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-004", shipmentId: 1169201749, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-005", shipmentId: 1169201750, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
];

// Sample manifest data - this will be populated from processed orders
const manifestData = [
  {
    id: "MAN-001",
    dateRange: "8 Feb 2026 - 9 Feb 2026",
    courierPartner: "Delhivery Surface",
    orderQuantity: 23,
    orders: [
      { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-002", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-003", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-004", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-005", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-006", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-007", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-008", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
    ]
  },
  {
    id: "MAN-002",
    dateRange: "6 Feb 2026 - 7 Feb 2026",
    courierPartner: "Delhivery Surface",
    orderQuantity: 23,
    orders: [
      { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-002", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-003", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-004", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
      { id: "ORD-005", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
    ]
  },
];

// Sample processed orders data
const processedOrdersData = [
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
  { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
];

function Order() {
  
  const [ordersView, setOrdersView] = useState(null);
  const [processedOrders, setProcessedOrders] = useState({});
  const [printedOrders, setPrintedOrders] = useState({});
  const [processingOrder, setProcessingOrder] = useState(null);
  const [printingOrder, setPrintingOrder] = useState(null);
  const [expandedManifest, setExpandedManifest] = useState(null);
  const [printedManifests, setPrintedManifests] = useState({});
  const [printingManifest, setPrintingManifest] = useState(null);
  const [labelError, setLabelError] = useState("");

  // Handle Process button click - calls 3 APIs
  const handleProcess = async (orderId) => {
    setProcessingOrder(orderId);
    try {
      // TODO: Backend Integration - Call 3 APIs
      // await api.processOrder(orderId);
      // await api.generateLabel(orderId);
      // await api.updateOrderStatus(orderId);
      
      // Simulate API calls
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setProcessedOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    } catch (error) {
      console.error("Error processing order:", error);
    } finally {
      setProcessingOrder(null);
    }
  };

  const triggerDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // Handle Print button click - calls API
  const handlePrint = async (order) => {
    setPrintingOrder(order.id);
    setLabelError("");
    try {
      const labelUrl = await generateLabel(order.shipmentId);
      triggerDownload(labelUrl, `label-${order.shipmentId}.pdf`);

      setPrintedOrders(prev => ({
        ...prev,
        [order.id]: true
      }));
    } catch (error) {
      console.error("Error printing label:", error);
      setLabelError(error?.message || "Unable to download label.");
    } finally {
      setPrintingOrder(null);
    }
  };

  // Handle Manifest Print button click - calls API
  const handleManifestPrint = async (manifestId) => {
    setPrintingManifest(manifestId);
    try {
      // TODO: Backend Integration - Call manifest print API
      // await api.printManifest(manifestId);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setPrintedManifests(prev => ({
        ...prev,
        [manifestId]: true
      }));
    } catch (error) {
      console.error("Error printing manifest:", error);
    } finally {
      setPrintingManifest(null);
    }
  };

  // Toggle manifest expansion
  const toggleManifest = (manifestId) => {
    setExpandedManifest(prev => prev === manifestId ? null : manifestId);
  };

  // Handle Track button click
  const handleTrack = async (orderId) => {
    try {
      // TODO: Backend Integration - Call tracking API
      // await api.trackOrder(orderId);
      
      // Simulate opening tracking info or redirect to tracking page
      console.log(`Tracking order: ${orderId}`);
      
    } catch (error) {
      console.error("Error tracking order:", error);
    }
  };

  // Render Generate Manifesto Page
  if (ordersView === "manifest") {
    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Generate Manifesto</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-gray-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-700">Date</th>
                  <th className="text-left p-4 font-medium text-gray-700">Courier Partner</th>
                  <th className="text-left p-4 font-medium text-gray-700">Order Quantity</th>
                  <th className="text-left p-4 font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {manifestData.map((manifest) => (
                  <React.Fragment key={manifest.id}>
                    {/* Manifest Row */}
                    <tr 
                      className="border-b border-gray-100 cursor-pointer hover:bg-gray-100"
                      onClick={() => toggleManifest(manifest.id)}
                    >
                      <td className="p-4 text-gray-600">{manifest.dateRange}</td>
                      <td className="p-4 text-gray-600">{manifest.courierPartner}</td>
                      <td className="p-4 text-gray-600">{manifest.orderQuantity}</td>
                      <td className="p-4">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleManifestPrint(manifest.id);
                          }}
                          disabled={printingManifest === manifest.id}
                          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                            printedManifests[manifest.id] 
                              ? "bg-green-500 text-white cursor-default"
                              : "bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50"
                          }`}
                        >
                          {printingManifest === manifest.id ? "Printing..." : 
                           printedManifests[manifest.id] ? "Printed" : "Print"}
                        </button>
                      </td>
                    </tr>
                    
                    {/* Expanded Orders Section */}
                    {expandedManifest === manifest.id && (
                      <tr>
                        <td colSpan="4" className="p-0">
                          <div className="bg-white border-l-4 border-green-400 ml-4 max-h-60 overflow-y-auto">
                            <table className="w-full">
                              <tbody>
                                {manifest.orders.map((order, idx) => (
                                  <tr key={idx} className="border-b border-gray-100">
                                    <td className="p-4 pl-8 text-gray-600">{order.id}</td>
                                    <td className="p-4 text-gray-600">{order.name}</td>
                                    <td className="p-4 text-gray-600">{order.user}</td>
                                    <td className="p-4 text-gray-600">{order.vehicle}</td>
                                    <td className="p-4 text-gray-600 whitespace-pre-line">{order.date}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }

  // Render Processed Orders Page
  if (ordersView === "processed") {
    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Processed</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-gray-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-700">Order ID</th>
                  <th className="text-left p-4 font-medium text-gray-700">Order Name</th>
                  <th className="text-left p-4 font-medium text-gray-700">User Name</th>
                  <th className="text-left p-4 font-medium text-gray-700">Vehicle Name</th>
                  <th className="text-left p-4 font-medium text-gray-700">Order Date</th>
                  <th className="text-left p-4 font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {processedOrdersData.map((order, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="p-4 text-gray-600">{order.id}</td>
                    <td className="p-4 text-gray-600">{order.name}</td>
                    <td className="p-4 text-gray-600">{order.user}</td>
                    <td className="p-4 text-gray-600">{order.vehicle}</td>
                    <td className="p-4 text-gray-600 whitespace-pre-line">{order.date}</td>
                    <td className="p-4">
                      <button 
                        onClick={() => handleTrack(order.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                      >
                        Track
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }

  // Render Manage Order Page
  if (ordersView === "manage") {
    return (
      <ManageOrder onBack={() => setOrdersView(null)} />
    );
  }

  // Render Unprocessed Orders Table
  if (ordersView === "unprocessed") {
    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Unprocessed Orders</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <input
              type="password"
              value={tokenInput}
              onChange={(event) => setTokenInput(event.target.value)}
              placeholder="Paste Shiprocket token"
              className="w-full max-w-xl rounded-lg border border-gray-300 px-3 py-2 text-sm"
            />
            <button
              type="button"
              onClick={() => setToken(tokenInput)}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
            >
              Save Token
            </button>
            {labelError && (
              <span className="text-sm text-red-600">{labelError}</span>
            )}
          </div>
          <div className="bg-gray-50 rounded-lg">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-4 font-medium text-gray-700">Order ID</th>
                  <th className="text-left p-4 font-medium text-gray-700">Order Name</th>
                  <th className="text-left p-4 font-medium text-gray-700">User Name</th>
                  <th className="text-left p-4 font-medium text-gray-700">Vehicle Name</th>
                  <th className="text-left p-4 font-medium text-gray-700">Order Date</th>
                  <th className="text-left p-4 font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody>
                {unprocessedOrders.map((order, index) => (
                  <React.Fragment key={index}>
                    <tr className="border-b border-gray-100">
                      <td className="p-4 text-gray-600">{order.id}</td>
                      <td className="p-4 text-gray-600">{order.name}</td>
                      <td className="p-4 text-gray-600">{order.user}</td>
                      <td className="p-4 text-gray-600">{order.vehicle}</td>
                      <td className="p-4 text-gray-600 whitespace-pre-line">{order.date}</td>
                      <td className="p-4">
                        {processedOrders[order.id] ? (
                          <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium cursor-default">
                            Processed
                          </button>
                        ) : (
                          <button 
                            onClick={() => handleProcess(order.id)}
                            disabled={processingOrder === order.id}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
                          >
                            {processingOrder === order.id ? "Processing..." : "Process"}
                          </button>
                        )}
                      </td>
                    </tr>
                    {/* Download Label Dialog Row - appears after processing */}
                    {processedOrders[order.id] && (
                      <tr className="border-b border-gray-100 bg-white">
                        <td colSpan="5" className="p-4">
                          <div className="flex items-center gap-4 pl-4 border-l-4 border-gray-200">
                            <span className="text-gray-700">Download the label for the order</span>
                          </div>
                        </td>
                        <td className="p-4">
                          {printedOrders[order.id] ? (
                            <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium cursor-default">
                              Printed
                            </button>
                          ) : (
                            <button 
                              onClick={() => handlePrint(order)}
                              disabled={printingOrder === order.id}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
                            >
                              {printingOrder === order.id ? "Printing..." : "Print"}
                            </button>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="w-full h-screen p-2 overflow-y-auto">
      <div>
        <h1 className="text-3xl font-bold">Order Management</h1>
        <p className="text-gray-500 mb-6">Manage and track all your orders</p>

        {/* 2x2 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Unprocessed Orders Card */}
          <div
            onClick={() => setOrdersView("unprocessed")}
            className={`flex items-center justify-between p-6 bg-amber-100 rounded-2xl cursor-pointer hover:shadow-lg transition ${
              ordersView === "unprocessed"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center">
                <Clock className="w-7 h-7 text-gray-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Unprocessed</h2>
                <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
                <p className="text-sm text-gray-600">Click to view details</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-800">24</div>
          </div>

          {/* Generate Manifest Card */}
          <div
            onClick={() => setOrdersView("manifest")}
            className={`flex items-center justify-between p-6 bg-green-100 rounded-2xl cursor-pointer hover:shadow-lg transition ${
              ordersView === "manifest"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Generate Manifest</h2>
                <p className="text-sm text-gray-600">Click to view details</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-800">45</div>
          </div>

          {/* Processed Orders Card */}
          <div
            onClick={() => setOrdersView("processed")}
            className={`flex items-center justify-between p-6 bg-green-100 rounded-2xl cursor-pointer hover:shadow-lg transition ${
              ordersView === "processed"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center">
                <Check className="w-7 h-7 text-gray-700" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Processed</h2>
                <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
                <p className="text-sm text-gray-600">Click to view details</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-800">156</div>
          </div>

          {/* Manage Order Card */}
          <div
            onClick={() => setOrdersView("manage")}
            className={`flex items-center justify-between p-6 bg-green-100 rounded-2xl cursor-pointer hover:shadow-lg transition ${
              ordersView === "manage"
                ? "ring-2 ring-blue-500"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Manage Order</h2>
                <p className="text-sm text-gray-600">Click to view details</p>
              </div>
            </div>
            <div className="text-4xl font-bold text-gray-800">45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Order;
