import React, { useState, useEffect } from "react";
import { Clock, Check, ArrowLeft, ChevronDown, ChevronUp, Package, Truck, Box, CheckCircle, FileText, Settings } from "lucide-react";
// import { useShiprocket } from "../../../ContextApi/shiprocketContext";
import ManageOrder from "./ManageOrder";

// const unprocessedOrders = [
//   { id: "ORD-001", shipmentId: 1169201746, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
//   { id: "ORD-002", shipmentId: 1169201747, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
//   { id: "ORD-003", shipmentId: 1169201748, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
//   { id: "ORD-004", shipmentId: 1169201749, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
//   { id: "ORD-005", shipmentId: 1169201750, name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM" },
// ];

// Sample manifest data - now using dynamic state
// Sample processed orders data - now using dynamic state

function Order() {
  // const { generateLabel, token, setToken } = useShiprocket();
  const [ordersView, setOrdersView] = useState(null);
  // const [processedOrders, setProcessedOrders] = useState({});
  // const [printedOrders, setPrintedOrders] = useState({});
  // const [processingOrder, setProcessingOrder] = useState(null);
  // const [printingOrder, setPrintingOrder] = useState(null);
  const [expandedManifest, setExpandedManifest] = useState(null);
  const [printedManifests, setPrintedManifests] = useState({});
  const [printingManifest, setPrintingManifest] = useState(null);
  // State for Shiprocket orders
  const [processedOrders, setProcessedOrders] = useState({});
  const [printedOrders, setPrintedOrders] = useState({});
  // State for Delhivery orders
  const [processedDelhiveryOrders, setProcessedDelhiveryOrders] = useState({});
  const [printedDelhiveryOrders, setPrintedDelhiveryOrders] = useState({});
  // State for EshopBox orders
  const [processedEshopboxOrders, setProcessedEshopboxOrders] = useState({});
  const [printedEshopboxOrders, setPrintedEshopboxOrders] = useState({});
  // const [labelError, setLabelError] = useState("");
  // const [tokenInput, setTokenInput] = useState(token);

  // State for order counts
  const [shiprocketOrders, setShiprocketOrders] = useState([]);
  const [delhiveryOrders, setDelhiveryOrders] = useState([]);
  const [eshopboxOrders, setEshopboxOrders] = useState([]);
  const [processedOrdersData, setProcessedOrdersData] = useState([]);
  const [manifestData, setManifestData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch orders data from API
  const fetchOrdersData = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API endpoints
      // Fetch Shiprocket orders
      // const shiprocketResponse = await fetch('/api/orders/shiprocket');
      // const shiprocketData = await shiprocketResponse.json();
      // setShiprocketOrders(shiprocketData);

      // Fetch Delhivery orders
      // const delhiveryResponse = await fetch('/api/orders/delhivery');
      // const delhiveryData = await delhiveryResponse.json();
      // setDelhiveryOrders(delhiveryData);

      // Fetch EshopBox orders
      // const eshopboxResponse = await fetch('/api/orders/eshopbox');
      // const eshopboxData = await eshopboxResponse.json();
      // setEshopboxOrders(eshopboxData);

      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API calls
      setShiprocketOrders([
        { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-002", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-003", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-004", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-005", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-006", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-007", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-008", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
      ]);
      
      setDelhiveryOrders([
        { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-002", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-003", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-004", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-005", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-006", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-007", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-008", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
      ]);
      
      setEshopboxOrders([
        { id: "ORD-001", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-002", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-003", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-004", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-005", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-006", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-007", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
        { id: "ORD-008", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2025 12 01\n10:20 AM", status: "pending" },
      ]);

      // Fetch Processed Orders
      // const processedResponse = await fetch('/api/orders/processed');
      // const processedData = await processedResponse.json();
      // setProcessedOrdersData(processedData);
      
      setProcessedOrdersData([
        { id: "ORD-101", name: "QR Code", user: "Rajesh Kumar", vehicle: "DL01AB1234", date: "2026 02 15\n10:20 AM", status: "delivered" },
        { id: "ORD-102", name: "QR Code", user: "Priya Singh", vehicle: "MH02CD5678", date: "2026 02 16\n11:30 AM", status: "in-transit" },
        { id: "ORD-103", name: "QR Code", user: "Amit Patel", vehicle: "GJ03EF9012", date: "2026 02 17\n09:15 AM", status: "delivered" },
        { id: "ORD-104", name: "QR Code", user: "Neha Sharma", vehicle: "KA04GH3456", date: "2026 02 18\n02:45 PM", status: "delivered" },
        { id: "ORD-105", name: "QR Code", user: "Rahul Verma", vehicle: "TN05IJ7890", date: "2026 02 19\n03:30 PM", status: "in-transit" },
      ]);

      // Fetch Manifest Data
      // const manifestResponse = await fetch('/api/orders/manifests');
      // const manifestDataApi = await manifestResponse.json();
      // setManifestData(manifestDataApi);
      
      setManifestData([
        {
          id: "MAN-001",
          dateRange: "20 Feb 2026 - 21 Feb 2026",
          courierPartner: "Delhivery Surface",
          orderQuantity: 8,
          orders: [
            { id: "ORD-101", name: "QR Code", user: "Rajesh", vehicle: "DL01AB1234", date: "2026 02 20\n10:20 AM" },
            { id: "ORD-102", name: "QR Code", user: "Priya", vehicle: "MH02CD5678", date: "2026 02 20\n11:30 AM" },
            { id: "ORD-103", name: "QR Code", user: "Amit", vehicle: "GJ03EF9012", date: "2026 02 20\n02:15 PM" },
            { id: "ORD-104", name: "QR Code", user: "Neha", vehicle: "KA04GH3456", date: "2026 02 21\n09:30 AM" },
            { id: "ORD-105", name: "QR Code", user: "Rahul", vehicle: "TN05IJ7890", date: "2026 02 21\n10:45 AM" },
            { id: "ORD-106", name: "QR Code", user: "Suresh", vehicle: "UP06KL1234", date: "2026 02 21\n01:20 PM" },
            { id: "ORD-107", name: "QR Code", user: "Kavita", vehicle: "RJ07MN5678", date: "2026 02 21\n03:30 PM" },
            { id: "ORD-108", name: "QR Code", user: "Arjun", vehicle: "AP08OP9012", date: "2026 02 21\n05:15 PM" },
          ]
        },
        {
          id: "MAN-002",
          dateRange: "18 Feb 2026 - 19 Feb 2026",
          courierPartner: "Delhivery Surface",
          orderQuantity: 5,
          orders: [
            { id: "ORD-201", name: "QR Code", user: "Vikram", vehicle: "HR09QR3456", date: "2026 02 18\n09:00 AM" },
            { id: "ORD-202", name: "QR Code", user: "Sneha", vehicle: "PB10ST7890", date: "2026 02 18\n11:30 AM" },
            { id: "ORD-203", name: "QR Code", user: "Kiran", vehicle: "WB11UV1234", date: "2026 02 19\n10:15 AM" },
            { id: "ORD-204", name: "QR Code", user: "Deepak", vehicle: "BR12WX5678", date: "2026 02 19\n02:45 PM" },
            { id: "ORD-205", name: "QR Code", user: "Anjali", vehicle: "MP13YZ9012", date: "2026 02 19\n04:30 PM" },
          ]
        },
      ]);

    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchOrdersData();
  }, []);

  // Handle Process button click - calls 3 APIs
  // const handleProcess = async (orderId) => {
  //   setProcessingOrder(orderId);
  //   try {
  //     // TODO: Backend Integration - Call 3 APIs
  //     // await api.processOrder(orderId);
  //     // await api.generateLabel(orderId);
  //     // await api.updateOrderStatus(orderId);
  //     
  //     // Simulate API calls
  //     await new Promise(resolve => setTimeout(resolve, 500));
  //     
  //     setProcessedOrders(prev => ({
  //       ...prev,
  //       [orderId]: true
  //     }));
  //   } catch (error) {
  //     console.error("Error processing order:", error);
  //   } finally {
  //     setProcessingOrder(null);
  //   }
  // };

  // const triggerDownload = (url, filename) => {
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = filename;
  //   link.target = "_blank";
  //   link.rel = "noopener noreferrer";
  //   document.body.appendChild(link);
  //   link.click();
  //   link.remove();
  // };

  // Handle Print button click - calls API
  // const handlePrint = async (order) => {
  //   setPrintingOrder(order.id);
  //   setLabelError("");
  //   try {
  //     const labelUrl = await generateLabel(order.shipmentId);
  //     triggerDownload(labelUrl, `label-${order.shipmentId}.pdf`);
  //
  //     setPrintedOrders(prev => ({
  //       ...prev,
  //       [order.id]: true
  //     }));
  //   } catch (error) {
  //     console.error("Error printing label:", error);
  //     setLabelError(error?.message || "Unable to download label.");
  //   } finally {
  //     setPrintingOrder(null);
  //   }
  // };

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
          <span className="ml-auto text-sm font-medium text-gray-600">
            Total Manifests: {manifestData.length}
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">Loading manifests...</p>
            </div>
          ) : manifestData.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">No Manifests Available</p>
            </div>
          ) : (
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
          )}
        </div>
      </main>
    );
  }

  // Render Shiprocket Page
  if (ordersView === "shiprocket") {
    const handleProcessOrder = (orderId) => {
      setProcessedOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    };

    const handlePrintLabel = (orderId) => {
      // Simulate label download
      const element = document.createElement("a");
      const file = new Blob([`Label for ${orderId}`], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `label_${orderId}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      // Mark as printed
      setPrintedOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    };

    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Shiprocket Orders</h1>
          <span className="ml-auto text-sm font-medium text-gray-600">
            Total Orders: {shiprocketOrders.length}
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">Loading orders...</p>
            </div>
          ) : shiprocketOrders.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">No Orders Available</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg overflow-hidden">
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
                  {shiprocketOrders.map((order, index) => (
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
                              onClick={() => handleProcessOrder(order.id)}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                            >
                              Process
                            </button>
                          )}
                        </td>
                      </tr>
                      {/* Download Label Row - appears after processing */}
                      {processedOrders[order.id] && (
                        <tr className="border-b border-gray-100 bg-blue-50">
                          <td colSpan="5" className="p-4">
                            <div className="pl-4">
                              <span className="text-gray-700 font-medium">Download the label for the order</span>
                            </div>
                          </td>
                          <td className="p-4">
                            {printedOrders[order.id] ? (
                              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium cursor-default">
                                Printed
                              </button>
                            ) : (
                              <button 
                                onClick={() => handlePrintLabel(order.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                              >
                                Print
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
          )}
        </div>
      </main>
    );
  }

  // Render Delhivery Page
  if (ordersView === "delhivery") {
    const handleProcessOrder = (orderId) => {
      setProcessedDelhiveryOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    };

    const handlePrintLabel = (orderId) => {
      // Simulate label download
      const element = document.createElement("a");
      const file = new Blob([`Label for ${orderId}`], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `label_${orderId}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      // Mark as printed
      setPrintedDelhiveryOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    };

    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Delhivery Orders</h1>
          <span className="ml-auto text-sm font-medium text-gray-600">
            Total Orders: {delhiveryOrders.length}
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">Loading orders...</p>
            </div>
          ) : delhiveryOrders.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">No Orders Available</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg overflow-hidden">
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
                  {delhiveryOrders.map((order, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 text-gray-600">{order.id}</td>
                        <td className="p-4 text-gray-600">{order.name}</td>
                        <td className="p-4 text-gray-600">{order.user}</td>
                        <td className="p-4 text-gray-600">{order.vehicle}</td>
                        <td className="p-4 text-gray-600 whitespace-pre-line">{order.date}</td>
                        <td className="p-4">
                          {processedDelhiveryOrders[order.id] ? (
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium cursor-default">
                              Processed
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleProcessOrder(order.id)}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                            >
                              Process
                            </button>
                          )}
                        </td>
                      </tr>
                      {/* Download Label Row - appears after processing */}
                      {processedDelhiveryOrders[order.id] && (
                        <tr className="border-b border-gray-100 bg-blue-50">
                          <td colSpan="5" className="p-4">
                            <div className="pl-4">
                              <span className="text-gray-700 font-medium">Download the label for the order</span>
                            </div>
                          </td>
                          <td className="p-4">
                            {printedDelhiveryOrders[order.id] ? (
                              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium cursor-default">
                                Printed
                              </button>
                            ) : (
                              <button 
                                onClick={() => handlePrintLabel(order.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                              >
                                Print
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
          )}
        </div>
      </main>
    );
  }

  // Render EshopBox Page
  if (ordersView === "eshopbox") {
    const handleProcessOrder = (orderId) => {
      setProcessedEshopboxOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    };

    const handlePrintLabel = (orderId) => {
      // Simulate label download
      const element = document.createElement("a");
      const file = new Blob([`Label for ${orderId}`], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `label_${orderId}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      // Mark as printed
      setPrintedEshopboxOrders(prev => ({
        ...prev,
        [orderId]: true
      }));
    };

    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button 
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">EshopBox Orders</h1>
          <span className="ml-auto text-sm font-medium text-gray-600">
            Total Orders: {eshopboxOrders.length}
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">Loading orders...</p>
            </div>
          ) : eshopboxOrders.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">No Orders Available</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg overflow-hidden">
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
                  {eshopboxOrders.map((order, index) => (
                    <React.Fragment key={index}>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 text-gray-600">{order.id}</td>
                        <td className="p-4 text-gray-600">{order.name}</td>
                        <td className="p-4 text-gray-600">{order.user}</td>
                        <td className="p-4 text-gray-600">{order.vehicle}</td>
                        <td className="p-4 text-gray-600 whitespace-pre-line">{order.date}</td>
                        <td className="p-4">
                          {processedEshopboxOrders[order.id] ? (
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium cursor-default">
                              Processed
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleProcessOrder(order.id)}
                              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                            >
                              Process
                            </button>
                          )}
                        </td>
                      </tr>
                      {/* Download Label Row - appears after processing */}
                      {processedEshopboxOrders[order.id] && (
                        <tr className="border-b border-gray-100 bg-blue-50">
                          <td colSpan="5" className="p-4">
                            <div className="pl-4">
                              <span className="text-gray-700 font-medium">Download the label for the order</span>
                            </div>
                          </td>
                          <td className="p-4">
                            {printedEshopboxOrders[order.id] ? (
                              <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium cursor-default">
                                Printed
                              </button>
                            ) : (
                              <button 
                                onClick={() => handlePrintLabel(order.id)}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium"
                              >
                                Print
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
          )}
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
          <h1 className="text-2xl font-semibold">Processed Orders</h1>
          <span className="ml-auto text-sm font-medium text-gray-600">
            Total Orders: {processedOrdersData.length}
          </span>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">Loading orders...</p>
            </div>
          ) : processedOrdersData.length === 0 ? (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <p className="text-gray-600 text-lg">No Processed Orders</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left p-4 font-medium text-gray-700">Order ID</th>
                    <th className="text-left p-4 font-medium text-gray-700">Order Name</th>
                    <th className="text-left p-4 font-medium text-gray-700">User Name</th>
                    <th className="text-left p-4 font-medium text-gray-700">Vehicle Number</th>
                    <th className="text-left p-4 font-medium text-gray-700">Order Date</th>
                    <th className="text-left p-4 font-medium text-gray-700">Status</th>
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
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          order.status === 'delivered' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {order.status}
                        </span>
                      </td>
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
          )}
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
  // if (ordersView === "unprocessed") {
  //   return (
  //     <main className="w-full h-screen flex flex-col bg-white">
  //       <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
  //         <button 
  //           onClick={() => setOrdersView(null)}
  //           className="p-2 hover:bg-gray-100 rounded-lg"
  //         >
  //           <ArrowLeft className="w-5 h-5" />
  //         </button>
  //         <h1 className="text-2xl font-semibold">Unprocessed Orders</h1>
  //       </div>
  //       
  //       <div className="flex-1 overflow-y-auto p-6">
  //         <div className="mb-4 flex flex-wrap items-center gap-3">
  //           <input
  //             type="password"
  //             value={tokenInput}
  //             onChange={(event) => setTokenInput(event.target.value)}
  //             placeholder="Paste Shiprocket token"
  //             className="w-full max-w-xl rounded-lg border border-gray-300 px-3 py-2 text-sm"
  //           />
  //           <button
  //             type="button"
  //             onClick={() => setToken(tokenInput)}
  //             className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white"
  //           >
  //             Save Token
  //           </button>
  //           {labelError && (
  //             <span className="text-sm text-red-600">{labelError}</span>
  //           )}
  //         </div>
  //         <div className="bg-gray-50 rounded-lg">
  //           <table className="w-full">
  //             <thead>
  //               <tr className="border-b border-gray-200">
  //                 <th className="text-left p-4 font-medium text-gray-700">Order ID</th>
  //                 <th className="text-left p-4 font-medium text-gray-700">Order Name</th>
  //                 <th className="text-left p-4 font-medium text-gray-700">User Name</th>
  //                 <th className="text-left p-4 font-medium text-gray-700">Vehicle Name</th>
  //                 <th className="text-left p-4 font-medium text-gray-700">Order Date</th>
  //                 <th className="text-left p-4 font-medium text-gray-700">Action</th>
  //               </tr>
  //             </thead>
  //             <tbody>
  //               {unprocessedOrders.map((order, index) => (
  //                 <React.Fragment key={index}>
  //                   <tr className="border-b border-gray-100">
  //                     <td className="p-4 text-gray-600">{order.id}</td>
  //                     <td className="p-4 text-gray-600">{order.name}</td>
  //                     <td className="p-4 text-gray-600">{order.user}</td>
  //                     <td className="p-4 text-gray-600">{order.vehicle}</td>
  //                     <td className="p-4 text-gray-600 whitespace-pre-line">{order.date}</td>
  //                     <td className="p-4">
  //                       {processedOrders[order.id] ? (
  //                         <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium cursor-default">
  //                           Processed
  //                         </button>
  //                       ) : (
  //                         <button 
  //                           onClick={() => handleProcess(order.id)}
  //                           disabled={processingOrder === order.id}
  //                           className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
  //                         >
  //                           {processingOrder === order.id ? "Processing..." : "Process"}
  //                         </button>
  //                       )}
  //                     </td>
  //                   </tr>
  //                   {/* Download Label Dialog Row - appears after processing */}
  //                   {processedOrders[order.id] && (
  //                     <tr className="border-b border-gray-100 bg-white">
  //                       <td colSpan="5" className="p-4">
  //                         <div className="flex items-center gap-4 pl-4 border-l-4 border-gray-200">
  //                           <span className="text-gray-700">Download the label for the order</span>
  //                         </div>
  //                       </td>
  //                       <td className="p-4">
  //                         {printedOrders[order.id] ? (
  //                           <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-medium cursor-default">
  //                             Printed
  //                           </button>
  //                         ) : (
  //                           <button 
  //                             onClick={() => handlePrint(order)}
  //                             disabled={printingOrder === order.id}
  //                             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium disabled:opacity-50"
  //                           >
  //                             {printingOrder === order.id ? "Printing..." : "Print"}
  //                           </button>
  //                         )}
  //                       </td>
  //                     </tr>
  //                   )}
  //                 </React.Fragment>
  //               ))}
  //             </tbody>
  //           </table>
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <main className="w-full h-screen p-2 overflow-y-auto">
      <div>
        <h1 className="text-3xl font-bold">Order Management</h1>
        <p className="text-gray-500 mb-6">Manage and track all your orders</p>

        {/* Order Section - 3 Column Grid */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Order Section</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Shiprocket Card */}
            <div
              onClick={() => setOrdersView("shiprocket")}
              className={`group relative flex items-center justify-between p-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "shiprocket"
                  ? "ring-4 ring-blue-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Shiprocket</h2>
                  <p className="text-sm text-blue-100">Click to view details</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {loading ? (
                      <span className="inline-flex items-center">
                        <span className="animate-pulse">Loading...</span>
                      </span>
                    ) : (
                      `Total Orders: ${shiprocketOrders.length}`
                    )}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Delhivery Card */}
            <div
              onClick={() => setOrdersView("delhivery")}
              className={`group relative flex items-center justify-between p-6 bg-gradient-to-br from-rose-400 to-rose-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "delhivery"
                  ? "ring-4 ring-rose-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Delhivery</h2>
                  <p className="text-sm text-rose-100">Click to view details</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {loading ? (
                      <span className="inline-flex items-center">
                        <span className="animate-pulse">Loading...</span>
                      </span>
                    ) : (
                      `Total Orders: ${delhiveryOrders.length}`
                    )}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* EshopBox Card */}
            <div
              onClick={() => setOrdersView("eshopbox")}
              className={`group relative flex items-center justify-between p-6 bg-gradient-to-br from-violet-400 to-violet-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "eshopbox"
                  ? "ring-4 ring-violet-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Box className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">EshopBox</h2>
                  <p className="text-sm text-violet-100">Click to view details</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {loading ? (
                      <span className="inline-flex items-center">
                        <span className="animate-pulse">Loading...</span>
                      </span>
                    ) : (
                      `Total Orders: ${eshopboxOrders.length}`
                    )}
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Processed Orders Card */}
            <div
              onClick={() => setOrdersView("processed")}
              className={`group relative flex items-center justify-between p-6 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "processed"
                  ? "ring-4 ring-emerald-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Processed Order</h2>
                  <p className="text-sm text-emerald-100">Click to view details</p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {loading ? (
                    <span className="animate-pulse text-3xl">...</span>
                  ) : (
                    processedOrdersData.length
                  )}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Generate Manifest Card */}
            <div
              onClick={() => setOrdersView("manifest")}
              className={`group relative flex items-center justify-between p-6 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "manifest"
                  ? "ring-4 ring-amber-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Generate Manifest</h2>
                  <p className="text-sm text-amber-100">Click to view details</p>
                </div>
              </div>
              <div className="relative z-10">
                <div className="text-5xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                  {loading ? (
                    <span className="animate-pulse text-3xl">...</span>
                  ) : (
                    manifestData.reduce((acc, m) => acc + m.orderQuantity, 0)
                  )}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Manage Order Card */}
            <div
              onClick={() => setOrdersView("manage")}
              className={`group relative flex items-center justify-between p-6 bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "manage"
                  ? "ring-4 ring-indigo-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Manage Order</h2>
                  <p className="text-sm text-indigo-100">Update & Cancel Orders</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Order;
