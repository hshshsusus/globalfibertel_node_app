import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'animate.css';
import { AnimatePresence, motion } from 'framer-motion';
import Page from './components/Page';
import Plans from './components/Plans';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import AddPack from './components/AddPack';
import UpdatePack from './components/UpdatePack';
import EmailOtp from './components/EmailOtp';
import VerifyOtp from './components/VerifyOtp';
import UserDashboard from './components/Dashboard/UserDashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatBot from './components/ChatBot';
import Broadband from './components/services/Broadband';
import WifiInternet from './components/services/WifiInternet';
import DataService from './components/services/DataService';
import CloudServices from './components/services/CloudServices';
import CyberSecurityService from './components/services/CyberSecurityService';
import MarketingService from './components/services/MarketingService';
import Support from './components/ImportentLinksComponents/Support';
import PrivacyAndPolicy from './components/ImportentLinksComponents/PrivacyAndPolicy';
import TermsAndConditions from './components/ImportentLinksComponents/TermsAndConditions';
import ParentalControle from './components/ImportentLinksComponents/ParentalControle';
import CustomerOrder from './components/customers and tickets ui/CustomerOrder';

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
          <Route
            path="/"
            element={
              <motion.div {...pageVariants}>
                <Page />
              </motion.div>
            }
          >
            <Route
              index
              element={
                <motion.div {...pageVariants}>
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/plans"
              element={
                <motion.div {...pageVariants}>
                  <Plans />
                </motion.div>
              }
            />
            <Route
              path="/service"
              element={
                <motion.div {...pageVariants}>
                  <Services />
                </motion.div>
              }
            />
             <Route
              path="/service/broadband"
              element={
                <motion.div {...pageVariants}>
                  <Broadband />
                </motion.div>
              }
            />
            <Route
              path="/service/wifiinternet"
              element={
                <motion.div {...pageVariants}>
                  <WifiInternet />
                </motion.div>
              }
            />
            <Route
              path="/service/dataservices"
              element={
                <motion.div {...pageVariants}>
                  <DataService />
                </motion.div>
              }
            />
            <Route
              path="/service/cloudservices"
              element={
                <motion.div {...pageVariants}>
                  <CloudServices />
                </motion.div>
              }
            />
            <Route
              path="/service/cybersecurity"
              element={
                <motion.div {...pageVariants}>
                  <CyberSecurityService />
                </motion.div>
              }
            />
            <Route
              path="/service/marketingservices"
              element={
                <motion.div {...pageVariants}>
                  <MarketingService />
                </motion.div>
              }
            />
            <Route
              path="/importentlink/support"
              element={
                <motion.div {...pageVariants}>
                  <Support />
                </motion.div>
              }
            />
            <Route
              path="/importentlink/privacypolicy"
              element={
                <motion.div {...pageVariants}>
                  <PrivacyAndPolicy />
                </motion.div>
              }
            />
            <Route
              path="/importentlink/termsandconditions"
              element={
                <motion.div {...pageVariants}>
                  <TermsAndConditions />
                </motion.div>
              }
            />
            <Route
              path="/importentlink/parentalcontrole"
              element={
                <motion.div {...pageVariants}>
                  <ParentalControle />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div {...pageVariants}>
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div {...pageVariants}>
                  <Contact />
                </motion.div>
              }
            />
            <Route
              path="/package/add"
              element={
                <motion.div {...pageVariants}>
                  <AddPack />
                </motion.div>
              }
            />
            <Route
              path="/package/update/:id"
              element={
                <motion.div {...pageVariants}>
                  <UpdatePack />
                </motion.div>
              }
            />

            <Route
              path="/user/dashboard/:userId"
              element={
                <motion.div {...pageVariants}>
                  <UserDashboard />
                </motion.div>
              }
            />
            <Route
              path="/user/orders"
              element={
                <motion.div {...pageVariants}>
                  <CustomerOrder />
                </motion.div>
              }
            />
            <Route
              path="/user/chatbot"
              element={
                <motion.div {...pageVariants}>
                  <ChatBot />
                </motion.div>
              }
            />
          </Route>

          <Route
            path="/login"
            element={
              <motion.div {...pageVariants}>
                <Login />
              </motion.div>
            }
          />
          <Route
            path="/auth/otp"
            element={
              <motion.div {...pageVariants}>
                <EmailOtp />
              </motion.div>
            }
          />
          <Route
            path="/auth/otp/verify"
            element={
              <motion.div {...pageVariants}>
                <VerifyOtp />
              </motion.div>
            }
          />
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
