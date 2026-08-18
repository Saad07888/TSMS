import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import AdminLogin from "../pages/Auth/AdminLogin";

import Dashboard from "../pages/Dashboard/Dashboard";
import Tourists from "../pages/Tourists/Tourists";
import GeoFence from "../pages/GeoFence/GeoFence";
import SOS from "../pages/SOS/SOS";
import Reports from "../pages/Reports/Reports";
import Incidents from "../pages/Incidents/Incidents";
import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tourists" element={<Tourists />} />
        <Route path="/geofence" element={<GeoFence />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/incidents" element={<Incidents />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;