import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function GenerateManifest() {
  const navigate = useNavigate();
  const [manifestData, setManifestData] = useState([]);
  const [expandedManifest, setExpandedManifest] = useState(null);
  const [printedManifests, setPrintedManifests] = useState({});
  const [printingManifest, setPrintingManifest] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Manifest data from API
  const fetchManifestData = async () => {
    setLoading(true);
    try {
      // TODO: Replace with actual API endpoint
      // const response = await fetch('/api/orders/manifests');
      // const data = await response.json();
      // setManifestData(data);

      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - replace with actual API calls
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
      console.error("Error fetching manifest data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchManifestData();
  }, []);

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

  return (
    <main className="w-full h-screen flex flex-col bg-white">
      <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
        <button 
          onClick={() => navigate('/orders-panel')}
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

export default GenerateManifest;
