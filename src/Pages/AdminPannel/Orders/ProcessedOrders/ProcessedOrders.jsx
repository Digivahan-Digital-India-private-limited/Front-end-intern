import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProcessedOrders() {
  const navigate = useNavigate();
  const [processedOrdersData, setProcessedOrdersData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Processed orders data from API
  const fetchProcessedOrders = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/orders/processed');
      // const data = await response.json();
      // setProcessedOrdersData(data);

      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API calls
      setProcessedOrdersData([
        { id: "ORD-101", name: "QR Code", user: "Rajesh Kumar", vehicle: "DL01AB1234", date: "2026 02 15\n10:20 AM", status: "delivered" },
        { id: "ORD-102", name: "QR Code", user: "Priya Singh", vehicle: "MH02CD5678", date: "2026 02 16\n11:30 AM", status: "in-transit" },
        { id: "ORD-103", name: "QR Code", user: "Amit Patel", vehicle: "GJ03EF9012", date: "2026 02 17\n09:15 AM", status: "delivered" },
        { id: "ORD-104", name: "QR Code", user: "Neha Sharma", vehicle: "KA04GH3456", date: "2026 02 18\n02:45 PM", status: "delivered" },
        { id: "ORD-105", name: "QR Code", user: "Rahul Verma", vehicle: "TN05IJ7890", date: "2026 02 19\n03:30 PM", status: "in-transit" },
      ]);
    } catch (error) {
      console.error("Error fetching Processed orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProcessedOrders();
  }, []);

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

  return (
    <main className="w-full h-screen flex flex-col bg-white">
      <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
        <button 
          onClick={() => navigate('/orders-panel')}
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

export default ProcessedOrders;
