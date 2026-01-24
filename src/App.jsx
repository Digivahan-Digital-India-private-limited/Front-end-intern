import React, { useEffect } from "react";
import Layout from "./Layout/Layout";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import Aboutpage from "./Components/Aboutpage/Aboutpage";
import Updatespage from "./Components/Updatespage/Updatespage";
import Newspage from "./Components/Newspage/Newspage";
import Loginpage from "./Components/Authenticationpage/Loginpage";

// information page
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ProtectionPolicy from "./Pages/ProtectionPolicy";
import ReturnRefundPolicy from "./Pages/ReturnRefundPolicy";
import TermsAndConditionsPage from "./Pages/TermsAndConditionsPage";
import Contactpage from "./Components/Contactpage/Contactpage";
import VisitUs from "./Pages/VisitUs";
import Reports from "./Pages/Reports";
import SendNotificationpage from "./Pages/SendNotificationpage";
import AccidentNotification from "./Pages/AccidentNotification";
import AccessVehicleDoc from "./Pages/AccessVehicleDoc";

// Admin Pannel
import AdminPannel from "./Pages/AdminPannel/AdminPannel";
import Dashboard from "./Pages/AdminPannel/Dashboard/Dashboard";
import Order from "./Pages/AdminPannel/Orders/Order";
import Qrmanagement from "./Pages/AdminPannel/QRManagement/Qrmanagement";
import AssignedQR from "./Pages/AdminPannel/QRManagement/QRStatusTabs/AssignedQR";
import BlockedQR from "./Pages/AdminPannel/QRManagement/QRStatusTabs/BlockedQR";
import AllottedQrCode from "./Pages/AdminPannel/QRManagement/QRStatusTabs/AllottedQrCode";
import SalesDetails from "./Pages/AdminPannel/QRManagement/SalesDetails";
import ManageUserApp from "./Pages/AdminPannel/ManageUserApp/ManageUserApp";
import UpdatePolicies from "./Pages/AdminPannel/ManageUserApp/OurPolicies/UpdatePolicies";
import Editpolicypage from "./Pages/AdminPannel/ManageUserApp/OurPolicies/Editpolicypage";
import FuelPriceManager from "./Pages/AdminPannel/ManageUserApp/FuelPrice/FuelPriceManager";
import ManageTrendingCars from "./Pages/AdminPannel/ManageUserApp/TrandingCars/ManageTrendingCars";
import AddTrandingCars from "./Pages/AdminPannel/ManageUserApp/TrandingCars/AddTrandingCars";
import UpdateTrandingCars from "./Pages/AdminPannel/ManageUserApp/TrandingCars/UpdateTrandingCars";
import ViewTrandingCars from "./Pages/AdminPannel/ManageUserApp/TrandingCars/ViewTrandingCars";
import DeleteTrandingCars from "./Pages/AdminPannel/ManageUserApp/TrandingCars/DeleteTrandingCars";
import ManagePopularComparision from "./Pages/AdminPannel/ManageUserApp/PopularComparision/ManagePopularComparision";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main className="w-full h-full">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />

          {/* ✅ Other Pages */}
          <Route path="/about-us" element={<Aboutpage />} />
          <Route path="/updates-page" element={<Updatespage />} />
          <Route path="/news-page" element={<Newspage />} />
          <Route path="/login-page" element={<Loginpage />} />
          <Route path="/contact-page" element={<Contactpage />} />
          <Route path="/visit-us-page" element={<VisitUs />} />
          <Route path="/Report-page" element={<Reports />} />

          {/* Information page */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/protection-policy" element={<ProtectionPolicy />} />
          <Route
            path="/return-refund-policy"
            element={<ReturnRefundPolicy />}
          />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
        </Route>

        <Route path="/digivahan/about-us" element={<Aboutpage />} />
        <Route path="/digivahan/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/digivahan/protection-policy"
          element={<ProtectionPolicy />}
        />
        <Route
          path="/digivahan/terms-and-conditions"
          element={<TermsAndConditionsPage />}
        />

        <Route
          path="/send-notification/:qr_id"
          element={<SendNotificationpage />}
        />

        <Route
          path="/accident-notification/:qr_id"
          element={<AccidentNotification />}
        />

        <Route
          path="/access-vehicle-doc/:qr_id"
          element={<AccessVehicleDoc />}
        />

        {/* Panels */}
        <Route element={<AdminPannel />}>
          <Route path="/admin-panel" element={<Dashboard />} />
          <Route path="/orders-panel" element={<Order />} />
          <Route path="/qr-panel" element={<Qrmanagement />} />
          <Route path="/check-assigned-qr" element={<AssignedQR />} />
          <Route path="/check-blocked-qr" element={<BlockedQR />} />
          <Route path="/allotted-qr-code" element={<AllottedQrCode />} />
          <Route path="/sales-details-page" element={<SalesDetails />} />
          <Route path="/manage-user" element={<ManageUserApp />} />
          <Route path="/our-policies" element={<UpdatePolicies />} />
          <Route path="/edit-policy/:title" element={<Editpolicypage />} />
          <Route path="/fuel-Price" element={<FuelPriceManager />} />
          <Route path="/manage-tranding-car" element={<ManageTrendingCars />} />
          <Route path="/add-tranding-car" element={<AddTrandingCars />} />
          <Route path="/update-tranding-car" element={<UpdateTrandingCars />} />
          <Route path="/view-tranding-car" element={<ViewTrandingCars />} />
          <Route path="/delete-tranding-car" element={<DeleteTrandingCars />} />
          <Route
            path="/manage-popular-comparision"
            element={<ManagePopularComparision />}
          />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
