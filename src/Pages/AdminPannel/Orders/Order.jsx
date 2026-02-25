import React, { useState, useEffect } from "react";
import { Clock, Check, ArrowLeft, ChevronDown, ChevronUp, Package, Truck, Box, CheckCircle, FileText, Settings } from "lucide-react";
import ManageOrder from "./ManageOrder";

// Sample manifest data - now using dynamic state
// Sample processed orders data - now using dynamic state

function Order() {
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

  // State for order counts
  const [shiprocketOrders, setShiprocketOrders] = useState([]);
  const [delhiveryOrders, setDelhiveryOrders] = useState([]);
  const [eshopboxOrders, setEshopboxOrders] = useState([]);
  const [processedOrdersData, setProcessedOrdersData] = useState([]);
  const [manifestData, setManifestData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [deliveryPartners, setDeliveryPartners] = useState([
    {
      id: "shiprocket",
      name: "Shiprocket",
      status: "active",
    },
    {
      id: "delhivery",
      name: "Delhivery",
      status: "inactive",
    },
    {
      id: "eshopbox",
      name: "EshopBox",
      status: "inactive",
    },
  ]);
  const [showAddPartner, setShowAddPartner] = useState(false);
  const [newPartner, setNewPartner] = useState({
    name: "",
  });

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

  const setActivePartner = (partnerId) => {
    setDeliveryPartners((prev) =>
      prev.map((partner) => ({
        ...partner,
        status: partner.id === partnerId ? "active" : "inactive",
      }))
    );
  };

  const handleNewPartnerChange = (event) => {
    const { name, value } = event.target;
    setNewPartner((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddPartner = (event) => {
    event.preventDefault();
    if (!newPartner.name.trim()) {
      return;
    }

    const partnerId = newPartner.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    setDeliveryPartners((prev) => [
      ...prev,
      {
        id: partnerId || `partner-${prev.length + 1}`,
        name: newPartner.name.trim(),
        status: "inactive",
      },
    ]);

    setNewPartner({
      name: "",
    });
    setShowAddPartner(false);
  };

  const handleRemovePartner = (partnerId) => {
    setDeliveryPartners((prev) => prev.filter((p) => p.id !== partnerId));
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

  // Render Delivery Partners Page
  if (ordersView === "partners") {
    const activePartner = deliveryPartners.find(
      (partner) => partner.status === "active"
    );

    return (
      <main className="w-full h-screen flex flex-col bg-white">
        <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
          <button
            onClick={() => setOrdersView(null)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold">Delivery Partners</h1>
          <span className="ml-auto text-sm font-medium text-gray-600">
            Total Partners: {deliveryPartners.length}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="text-sm text-gray-500">Active Partner</p>
              <p className="text-lg font-semibold text-gray-900">
                {activePartner ? activePartner.name : "Not set"}
              </p>
            </div>
            <button
              onClick={() => setShowAddPartner(true)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              Add Partner
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliveryPartners.map((partner) => {
              const colorSchemes = {
                shiprocket: {
                  border: "border-blue-200",
                  activeBorder: "border-blue-400",
                  textHover: "group-hover:text-blue-600",
                  gradientHover: "from-blue-400 to-cyan-500",
                  buttonGradient: "from-blue-500 to-blue-600",
                  buttonHover: "hover:from-blue-600 hover:to-blue-700",
                  badgeActive: "bg-blue-100 text-blue-800",
                  badgeInactive: "bg-blue-50 text-blue-700 group-hover:bg-blue-100",
                  icon: "🚀",
                },
                delhivery: {
                  border: "border-orange-200",
                  activeBorder: "border-orange-400",
                  textHover: "group-hover:text-orange-600",
                  gradientHover: "from-orange-400 to-red-500",
                  buttonGradient: "from-orange-500 to-orange-600",
                  buttonHover: "hover:from-orange-600 hover:to-orange-700",
                  badgeActive: "bg-orange-100 text-orange-800",
                  badgeInactive: "bg-orange-50 text-orange-700 group-hover:bg-orange-100",
                  icon: "🚚",
                },
                eshopbox: {
                  border: "border-purple-200",
                  activeBorder: "border-purple-400",
                  textHover: "group-hover:text-purple-600",
                  gradientHover: "from-purple-400 to-pink-500",
                  buttonGradient: "from-purple-500 to-purple-600",
                  buttonHover: "hover:from-purple-600 hover:to-purple-700",
                  badgeActive: "bg-purple-100 text-purple-800",
                  badgeInactive: "bg-purple-50 text-purple-700 group-hover:bg-purple-100",
                  icon: "📦",
                },
              };

              const scheme = colorSchemes[partner.id] || colorSchemes.shiprocket;

              return (
                <div
                  key={partner.id}
                  className={`group relative bg-white border-2 rounded-xl p-6 transition-all duration-300 ease-out transform hover:scale-105 hover:-translate-y-2 ${
                    partner.status === "active"
                      ? `${scheme.activeBorder} shadow-lg hover:shadow-2xl`
                      : `${scheme.border} shadow-md hover:shadow-2xl`
                  }`}
                >
                  {/* Animated background gradient on hover */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${scheme.gradientHover}`}
                  ></div>

                  <div className="relative z-10 flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{scheme.icon}</span>
                        <h3 className={`text-lg font-bold text-gray-900 ${scheme.textHover} transition-colors duration-300`}>
                          {partner.name}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold mt-3 transition-all duration-300 ${
                          partner.status === "active"
                            ? `bg-green-100 text-green-800 scale-105`
                            : scheme.badgeInactive
                        }`}
                      >
                        {partner.status}
                      </span>
                    </div>
                    <button
                      onClick={() => handleRemovePartner(partner.id)}
                      className="ml-2 text-red-300 hover:text-red-600 font-medium text-lg transition-all duration-200 hover:scale-125 hover:rotate-90"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="relative z-10 flex gap-2 mt-6">
                    {partner.status === "active" ? (
                      <button className="flex-1 px-4 py-2.5 rounded-lg bg-green-500 text-white text-sm font-semibold cursor-default shadow-md transition-all duration-300 hover:shadow-lg">
                        ✓ Active
                      </button>
                    ) : (
                      <button
                        onClick={() => setActivePartner(partner.id)}
                        className={`flex-1 px-4 py-2.5 rounded-lg bg-linear-to-r ${scheme.buttonGradient} text-white text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg ${scheme.buttonHover} transform hover:scale-105 active:scale-95`}
                      >
                        Set Active
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {showAddPartner && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold">Add Delivery Partner</h2>
                <button
                  onClick={() => setShowAddPartner(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>
              <form onSubmit={handleAddPartner} className="px-6 py-5 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Partner Name
                  </label>
                  <input
                    name="name"
                    value={newPartner.name}
                    onChange={handleNewPartnerChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Enter partner name"
                    required
                  />
                </div>
                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddPartner(false)}
                    className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
                  >
                    Add Partner
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    );
  }

  // Render Manage Order Page
  if (ordersView === "manage") {
    return (
      <ManageOrder onBack={() => setOrdersView(null)} />
    );
  }


  return (
    <main className="w-full h-screen px-4 py-3 overflow-y-auto">
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
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-blue-400 to-blue-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
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

            {/* Delivery Partners Card */}
            <div
              onClick={() => setOrdersView("partners")}
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-cyan-400 to-cyan-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
                ordersView === "partners"
                  ? "ring-4 ring-cyan-300 ring-offset-2"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Delivery Partners</h2>
                  <p className="text-sm text-cyan-100">Switch and manage partners</p>
                  <p className="text-sm font-semibold text-white mt-1">
                    {deliveryPartners.length} Partners
                  </p>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
            </div>

            {/* Delhivery Card */}
            <div
              onClick={() => setOrdersView("delhivery")}
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-rose-400 to-rose-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
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
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-violet-400 to-violet-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
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
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-emerald-400 to-emerald-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
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
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-amber-400 to-amber-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
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
              className={`group relative flex items-center justify-between p-5 bg-linear-to-br from-indigo-400 to-indigo-500 rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden ${
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
