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

function AnimatedRoutes() {

  // Reusable animation variants
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  };

  return (
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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
