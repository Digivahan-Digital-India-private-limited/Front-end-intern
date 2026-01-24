import React from "react";
import { useNavigate } from "react-router-dom";

const ManageUserApp = () => {
  const navigate = useNavigate();

  const handlePage = (path) => {
    navigate(path);
  };
  return (
    <main className="w-full h-screen overflow-y-auto p-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Manage User App
          </h1>
          <p className="text-gray-600">
            Configure and manage user-facing app content
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Update Policies */}
          <div
            onClick={() => handlePage("/our-policies")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-blue-500 p-6"
          >
            <div className="bg-blue-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Update Policies
            </h3>
            <p className="text-sm text-gray-600">
              Manage Terms, Privacy, Data Protection, and Refund policies
            </p>
          </div>

          {/* Update Fuel Price */}
          <div
            onClick={() => handlePage("/fuel-Price")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-orange-500 p-6"
          >
            <div className="bg-orange-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Update Fuel Price
            </h3>
            <p className="text-sm text-gray-600">
              Update state-wise CNG, Petrol, and Diesel prices
            </p>
          </div>

          {/* Manage Top Trending Cars */}
          <div
            onClick={() => handlePage("/manage-tranding-car")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-green-500 p-6"
          >
            <div className="bg-green-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage Top Trending Cars
            </h3>
            <p className="text-sm text-gray-600">
              Add, update, delete, or view trending cars
            </p>
          </div>

          {/* Manage Popular Comparison */}
          <div
            onClick={() => handlePage("/manage-popular-comparision")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-purple-500 p-6"
          >
            <div className="bg-purple-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage Popular Comparison
            </h3>
            <p className="text-sm text-gray-600">
              Create and manage car comparisons
            </p>
          </div>

          {/* Manage Tips Info */}
          <div
            //   onClick={() => setCurrentPage("managetipsinfo")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-orange-600 p-6"
          >
            <div className="bg-orange-600 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage Tips Info
            </h3>
            <p className="text-sm text-gray-600">
              Update helpful tips for users
            </p>
          </div>

          {/* Manage News */}
          <div
            //   onClick={() => setCurrentPage("managenews")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-cyan-500 p-6"
          >
            <div className="bg-cyan-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage News
            </h3>
            <p className="text-sm text-gray-600">
              Add and manage automotive news
            </p>
          </div>

          {/* Manage QR Guide */}
          <div
            //   onClick={() => setCurrentPage("manageQrguide")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-pink-500 p-6"
          >
            <div className="bg-pink-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage QR Guide
            </h3>
            <p className="text-sm text-gray-600">Update QR code usage guides</p>
          </div>

          {/* Manage QR Benefits */}
          <div
            //   onClick={() => setCurrentPage("manageQrbenifits")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-teal-500 p-6"
          >
            <div className="bg-teal-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage QR Benefits UpdatePolicies
            </h3>
            <p className="text-sm text-gray-600">Highlight QR code benefits</p>
          </div>

          {/* App info */}
          <div
            //   onClick={() => setCurrentPage("appinfo")}
            className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-red-500 p-6"
          >
            <div className="bg-red-500 w-16 h-16 rounded-full mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Manage App info
            </h3>
            <p className="text-sm text-gray-600">Highlight App info benefits</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManageUserApp;
