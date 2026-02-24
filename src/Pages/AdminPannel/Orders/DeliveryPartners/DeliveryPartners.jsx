import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function DeliveryPartners() {
  const navigate = useNavigate();
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

  const activePartner = deliveryPartners.find(
    (partner) => partner.status === "active"
  );

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

  return (
    <main className="w-full h-screen flex flex-col bg-white">
      <div className="flex items-center gap-4 p-6 border-b border-gray-200 bg-white">
        <button
          onClick={() => navigate('/orders-panel')}
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
                  className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${scheme.gradientHover}`}
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
                      className={`flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r ${scheme.buttonGradient} text-white text-sm font-semibold shadow-md transition-all duration-300 hover:shadow-lg ${scheme.buttonHover} transform hover:scale-105 active:scale-95`}
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

export default DeliveryPartners;
