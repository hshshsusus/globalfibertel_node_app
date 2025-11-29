// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'animate.css';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//user layout
// import UserLayout from './components/UserLayout';

// Components
import Page from './components/Page';
import Plans from './components/Plans';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import AddPack from './components/AddPack';
import UpdatePack from './components/UpdatePack';
import EmailOtp from './components/EmailOtp';
import VerifyOtp from './components/VerifyOtp';

// User Components
import UserDashboard from './components/Dashboard/UserDashboard';
import CustomerOrder from './components/customers and tickets ui/CustomerOrder';
import Invoice from './components/customers and tickets ui/Invoice';
import CollectPayment from './components/customers and tickets ui/CollectPayment';
import CustomerTicket from './components/customers and tickets ui/CustomerTicket';
import ChatBot from './components/ChatBot';

// Admin Components
import AdminLogin from './components/AdminComponents.jsx/AdminLogin';
import AdminDashBoard from './components/AdminComponents.jsx/AdminDashBoard';
import PlansEdit from './components/AdminComponents.jsx/EditableComponents.jsx/PlansEdit';
import FooterEdit from './components/AdminComponents.jsx/EditableComponents.jsx/FooterEdit';

// Services Components
import Broadband from './components/services/Broadband';
import WifiInternet from './components/services/WifiInternet';
import DataService from './components/services/DataService';
import CloudServices from './components/services/CloudServices';
import CyberSecurityService from './components/services/CyberSecurityService';
import MarketingService from './components/services/MarketingService';

// Important Links Components
import Support from './components/ImportentLinksComponents/Support';
import PrivacyAndPolicy from './components/ImportentLinksComponents/PrivacyAndPolicy';
import TermsAndConditions from './components/ImportentLinksComponents/TermsAndConditions';
import ParentalControle from './components/ImportentLinksComponents/ParentalControle';
import ProtectedRoutes from './components/ProtectedRoutes';
import AdminMainBody from './components/AdminComponents.jsx/AdminMainBody';
import NewAdminForm from './components/AdminComponents.jsx/NewAdminForm';

function AnimatedRoutes() {
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
    <>
      <ToastContainer />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route
            path="/"
            element={
              <motion.div {...pageVariants}>
                <Page />
              </motion.div>
            }
          >
            <Route index element={<motion.div {...pageVariants}><Home /></motion.div>} />
            <Route path="/plans" element={<motion.div {...pageVariants}><Plans /></motion.div>} />
            <Route path="/service" element={<motion.div {...pageVariants}><Services /></motion.div>} />
            <Route path="/service/broadband" element={<motion.div {...pageVariants}><Broadband /></motion.div>} />
            <Route path="/service/wifiinternet" element={<motion.div {...pageVariants}><WifiInternet /></motion.div>} />
            <Route path="/service/dataservices" element={<motion.div {...pageVariants}><DataService /></motion.div>} />
            <Route path="/service/cloudservices" element={<motion.div {...pageVariants}><CloudServices /></motion.div>} />
            <Route path="/service/cybersecurity" element={<motion.div {...pageVariants}><CyberSecurityService /></motion.div>} />
            <Route path="/service/marketingservices" element={<motion.div {...pageVariants}><MarketingService /></motion.div>} />
            <Route path="/importentlink/support" element={<motion.div {...pageVariants}><Support /></motion.div>} />
            <Route path="/importentlink/privacypolicy" element={<motion.div {...pageVariants}><PrivacyAndPolicy /></motion.div>} />
            <Route path="/importentlink/termsandconditions" element={<motion.div {...pageVariants}><TermsAndConditions /></motion.div>} />
            <Route path="/importentlink/parentalcontrole" element={<motion.div {...pageVariants}><ParentalControle /></motion.div>} />
            <Route path="/about" element={<motion.div {...pageVariants}><About /></motion.div>} />
            <Route path="/contact" element={<motion.div {...pageVariants}><Contact /></motion.div>} />
            <Route path="/package/add" element={<motion.div {...pageVariants}><AddPack /></motion.div>} />
            <Route path="/package/update/:id" element={<motion.div {...pageVariants}><UpdatePack /></motion.div>} />
            <Route path="/auth/otp" element={<motion.div {...pageVariants}><EmailOtp /></motion.div>} />
            <Route path="/auth/otp/verify" element={<motion.div {...pageVariants}><VerifyOtp /></motion.div>} />

            {/* User Protected Routes */}
            <Route
              path="/user/dashboard/:userId"
              element={
                <ProtectedRoutes allowedRoles={["user"]} redirectPath="/auth/otp">
                  <motion.div {...pageVariants}><UserDashboard /></motion.div>
                </ProtectedRoutes>
              }
            />

            <Route
              path="/user/orders"
              element={
                <ProtectedRoutes allowedRoles={["user"]} redirectPath="/auth/otp">
                  <motion.div {...pageVariants}><CustomerOrder /></motion.div>
                </ProtectedRoutes>
              }
            />

            <Route
              path="/user/orders/:customer_id/:order_id/:api_inv_id"
              element={
                <ProtectedRoutes allowedRoles={["user"]} redirectPath="/auth/otp">
                  <motion.div {...pageVariants}><Invoice /></motion.div>
                </ProtectedRoutes>
              }
            />

            <Route
              path="/user/orders/payment"
              element={
                <ProtectedRoutes allowedRoles={["user"]} redirectPath="/auth/otp">
                  <motion.div {...pageVariants}><CollectPayment /></motion.div>
                </ProtectedRoutes>
              }
            />

            <Route
              path="/user/ticket/:acc_id"
              element={
                <ProtectedRoutes allowedRoles={["user"]} redirectPath="/auth/otp">
                  <motion.div {...pageVariants}><CustomerTicket /></motion.div>
                </ProtectedRoutes>
              }
            />

            <Route
              path="/user/chatbot"
              element={
                <ProtectedRoutes allowedRoles={["user"]}>
                  <motion.div {...pageVariants}><ChatBot /></motion.div>
                </ProtectedRoutes>
              }
            />

          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin/login"
            element={<motion.div {...pageVariants}><AdminLogin /></motion.div>}
          />
          <Route
            path="/admin/create"
            element={
              <ProtectedRoutes allowedRoles={["admin"]} redirectPath={"/admin/login"}>
                <motion.div {...pageVariants}><NewAdminForm /></motion.div>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoutes allowedRoles={["admin"]} redirectPath={"/admin/login"}>
                <motion.div {...pageVariants}><AdminDashBoard /></motion.div>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/dashboard/plans"
            element={
              <ProtectedRoutes allowedRoles={["admin"]} redirectPath={"/admin/login"}>
                <motion.div {...pageVariants}><PlansEdit /></motion.div>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/admin/dashboard/footer"
            element={
              <ProtectedRoutes allowedRoles={["admin"]} redirectPath={"/admin/login"}>
                <motion.div {...pageVariants}><FooterEdit /></motion.div>
              </ProtectedRoutes>
            }
          />

          {/* Fallback for Unauthorized */}
          <Route path="/unauthorized" element={<h2>Unauthorized Access</h2>} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
