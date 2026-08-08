import Login from "../pages/Auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";    
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
        <Route path="/" element={<Login />} />
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