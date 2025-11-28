import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const ProtectedRoutes = ({ children, allowedRoles, redirectPath }) => {
    const token = Cookies.get("token");
    // console.log("ProtectedRoutes token:", token);

    if (!token) {
        console.log("No token found, redirecting to login");
        return <Navigate to="/auth/otp" />;
    }

    let decoded;
    try {
        decoded = jwt_decode(token);
        // console.log("Decoded token:", decoded);
    } catch (err) {
        // console.error("Error decoding token:", err);
        return <Navigate to="/auth/otp" />;
    }

    if (!decoded || !allowedRoles.includes(decoded.role)) {
        // console.log("Role not allowed, redirecting to unauthorized");
        return <Navigate to={redirectPath} />;
    }

    // console.log("Access granted, rendering children");
    return children;
};

export default ProtectedRoutes;



