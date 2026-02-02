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
import ConnectTabs from "./Pages/ConnectTabs";
import AccidentNotification from "./Pages/AccidentNotification";
import EmergencyContactUspage from "./Pages/EmergencyContactUspage";
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
import ManageTipsInfo from "./Pages/AdminPannel/ManageUserApp/TipsInfo/ManageTipsInfo";
import ManageNews from "./Pages/AdminPannel/ManageUserApp/News/ManageNews";
import ManageQRGuide from "./Pages/AdminPannel/ManageUserApp/QRGuide/ManageQRGuide";
import ManageQRBenefits from "./Pages/AdminPannel/ManageUserApp/QRBenefits/ManageQRBenefits";
import ManageAppInfo from "./Pages/AdminPannel/ManageUserApp/AppInfo/ManageAppInfo";
import CustomerQueries from "./Pages/AdminPannel/CustomerQueries/CustomerQueries";
import PostFAQ from "./Pages/AdminPannel/CustomerQueries/FAQManagement/PostFAQ";
import DeleteFAQ from "./Pages/AdminPannel/CustomerQueries/FAQManagement/DeleteFAQ";
import UpdateFAQ from "./Pages/AdminPannel/CustomerQueries/FAQManagement/UpdateFAQ";
import GeneralInformationQueries from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/GeneralInformationQueries";
import TechnicalQueries from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/TechnicalQueries";
import AccountRelated from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/AccountRelated";
import PaymentBilling from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/PaymentBilling";
import OrderServiceStatus from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/OrderServiceStatus";
import ProductServiceComplaints from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/ProductServiceComplaints";
import FeedbackSuggestions from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/FeedbackSuggestions";
import CancellationReturn from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/CancellationReturn";
import Escalation from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/Escalation";
import OnboardingSetup from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/OnboardingSetup";
import Subscription from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/Subscription";
import VerificationQueries from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/VerificationQueries";
import ReplyPage from "./Pages/AdminPannel/CustomerQueries/CustomerQueriesByCategory/ReplyPage";
import Reviews from "./Pages/AdminPannel/Reviews/Reviews";
import PositiveReviews from "./Pages/AdminPannel/Reviews/PositiveReviews/PositiveReviews";
import AverageReviews from "./Pages/AdminPannel/Reviews/AverageReviews/AverageReviews";
import NegativeReviews from "./Pages/AdminPannel/Reviews/NegativeReviews/NegativeReviews";
import ReplyToReview from "./Pages/AdminPannel/Reviews/ReplyToReview";
import Issues from "./Pages/AdminPannel/Issues/Issues";
import PriorityIssue from "./Pages/AdminPannel/Issues/PriorityIssue/PriorityIssue";
import AppIssue from "./Pages/AdminPannel/Issues/AppIssue/AppIssue";
import ServiceIssue from "./Pages/AdminPannel/Issues/ServiceIssue/ServiceIssue";
import SupportIssue from "./Pages/AdminPannel/Issues/SupportIssue/SupportIssue";
import Suggestion from "./Pages/AdminPannel/Issues/Suggestion/Suggestion";
import IssueResolution from "./Pages/AdminPannel/Issues/IssueResolution";
import AdminReports from "./Pages/AdminPannel/Reports/Reports";
import VehicleOwnerReports from "./Pages/AdminPannel/Reports/VehicleOwnerReports/VehicleOwnerReports";
import InteractorReports from "./Pages/AdminPannel/Reports/InteractorReports/InteractorReports";

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

        <Route path="/connect-tabs/:qr_id/:issue_type" element={<ConnectTabs />} />

        <Route
          path="/accident-notification/:qr_id"
          element={<AccidentNotification />}
        />

        <Route
          path="/emergency-notification/:qr_id"
          element={<EmergencyContactUspage />}
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
          <Route path="/manage-tips-info" element={<ManageTipsInfo />} />
          <Route path="/manage-news" element={<ManageNews />} />
          <Route path="/manage-qr-guide" element={<ManageQRGuide />} />
          <Route path="/manage-qr-benefits" element={<ManageQRBenefits />} />
          <Route path="/manage-app-info" element={<ManageAppInfo />} />
          <Route path="/customer-queries" element={<CustomerQueries />} />
          <Route path="/post-faq" element={<PostFAQ />} />
          <Route path="/delete-faq" element={<DeleteFAQ />} />
          <Route path="/update-faq" element={<UpdateFAQ />} />
          <Route
            path="/general-information-queries"
            element={<GeneralInformationQueries />}
          />
          <Route path="/technical-queries" element={<TechnicalQueries />} />
          <Route path="/account-related" element={<AccountRelated />} />
          <Route path="/payment-billing" element={<PaymentBilling />} />
          <Route
            path="/order-service-status"
            element={<OrderServiceStatus />}
          />
          <Route
            path="/product-service-complaints"
            element={<ProductServiceComplaints />}
          />
          <Route
            path="/feedback-suggestions"
            element={<FeedbackSuggestions />}
          />
          <Route path="/cancellation-return" element={<CancellationReturn />} />
          <Route path="/escalation" element={<Escalation />} />
          <Route path="/onboarding-setup" element={<OnboardingSetup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route
            path="/verification-queries"
            element={<VerificationQueries />}
          />
          <Route path="/customer-queries/reply" element={<ReplyPage />} />
          <Route path="/admin/reviews" element={<Reviews />} />
          <Route path="/admin/reviews/positive" element={<PositiveReviews />} />
          <Route path="/admin/reviews/average" element={<AverageReviews />} />
          <Route path="/admin/reviews/negative" element={<NegativeReviews />} />
          <Route path="/admin/reviews/reply" element={<ReplyToReview />} />
          <Route path="/admin/issues" element={<Issues />} />
          <Route path="/admin/issues/priority" element={<PriorityIssue />} />
          <Route path="/admin/issues/app" element={<AppIssue />} />
          <Route path="/admin/issues/service" element={<ServiceIssue />} />
          <Route path="/admin/issues/support" element={<SupportIssue />} />
          <Route path="/admin/issues/suggestion" element={<Suggestion />} />
          <Route path="/admin/issues/resolution" element={<IssueResolution />} />
          <Route path="/admin/reports" element={<AdminReports />} />
          <Route path="/admin/reports/vehicle-owners" element={<VehicleOwnerReports />} />
          <Route path="/admin/reports/interactors" element={<InteractorReports />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
