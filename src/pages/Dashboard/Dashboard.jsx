import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/DashboardLayout";

import DashboardCard from "../../components/Dashboard/DashboardCard";
import LiveMapCard from "../../components/Dashboard/LiveMapCard";
import AIRiskCard from "../../components/Dashboard/AIRiskCard";
import WeatherCard from "../../components/Dashboard/WeatherCard";
import RecentSOSCard from "../../components/Dashboard/RecentSOSCard";
import IncidentChart from "../../components/Dashboard/IncidentChart";
import CategoryChart from "../../components/Dashboard/CategoryChart";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MapIcon from "@mui/icons-material/Map";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

const Dashboard = () => {
    const navigate = useNavigate();

useEffect(() => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    navigate("/");
  }
}, []);
  return (
    <DashboardLayout>
      {/* Header */}
      <Box mb={4}>
       <Typography
  variant="h4"
  fontWeight="bold"
  sx={{
    color: "#FFFFFF",
    mb: 0.5,
  }}
>
  Good Morning, Admin 👋
</Typography>

<Typography
  sx={{
    color: "#94A3B8",
    fontSize: 16,
  }}
>
  Smart Tourist Safety Monitoring System
</Typography>
      </Box>

      {/* ================= KPI CARDS ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4,1fr)",
          },
          gap: 3,
          mb: 3,
        }}
      >
        <DashboardCard
          title="Total Tourists"
          value="1,245"
          color="#2563EB"
          icon={<PeopleAltIcon />}
        />

        <DashboardCard
          title="Active SOS"
          value="8"
          color="#EF4444"
          icon={<WarningAmberIcon />}
        />

        <DashboardCard
          title="GeoFences"
          value="35"
          color="#16A34A"
          icon={<MapIcon />}
        />

        <DashboardCard
          title="Police Online"
          value="18"
          color="#F59E0B"
          icon={<LocalPoliceIcon />}
        />
      </Box>

      {/* ================= MAP + RIGHT PANEL ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            xl: "2.2fr 1fr",
          },
          gap: 3,
          alignItems: "start",
          mb: 3,
        }}
      >
        {/* Left */}
   <LiveMapCard />

        {/* Right */}
      <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 3,
  }}
>
  <AIRiskCard />
</Box>
      </Box>

      {/* ================= BOTTOM SECTION ================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            xl: "2fr 1fr",
          },
          gap: 3,
        }}
      >
        {/* Incident Chart */}
        <IncidentChart />

        {/* Right */}
        <CategoryChart />
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;