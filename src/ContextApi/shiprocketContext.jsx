import { createContext, useContext, useState } from "react";

const ShiprocketContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useShiprocket = () => {
  const context = useContext(ShiprocketContext);
  if (!context) {
    throw new Error("useShiprocket must be used within a ShiprocketProvider");
  }
  return context;
};

export const ShiprocketProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const generateLabel = async (shipmentId) => {
    if (!token) {
      throw new Error("Shiprocket token is not set. Please paste your token first.");
    }

    const response = await fetch(
      "https://apiv2.shiprocket.in/v1/external/courier/generate/label",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ shipment_id: [shipmentId] }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate label. Check your token or shipment ID.");
    }

    const data = await response.json();
    const labelUrl = data?.label_url || data?.response?.label_url;

    if (!labelUrl) {
      throw new Error("Label URL not found in response.");
    }

    return labelUrl;
  };

  return (
    <ShiprocketContext.Provider value={{ generateLabel, token, setToken }}>
      {children}
    </ShiprocketContext.Provider>
  );
};
