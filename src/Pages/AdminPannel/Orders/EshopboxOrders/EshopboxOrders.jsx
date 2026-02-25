import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function EshopboxOrders() {
  const navigate = useNavigate();
  const [eshopboxOrders, setEshopboxOrders] = useState([]);
  const [processedOrders, setProcessedOrders] = useState({});
  const [printedOrders, setPrintedOrders] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch EshopBox orders data from API
  const fetchEshopboxOrders = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/orders/eshopbox');
      // const data = await response.json();
      // setEshopboxOrders(data);

      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API calls
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
    } catch (error) {
      console.error("Error fetching EshopBox orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEshopboxOrders();
  }, []);

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
          onClick={() => navigate('/orders-panel')}
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

export default EshopboxOrders;
