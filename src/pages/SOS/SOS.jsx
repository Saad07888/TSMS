import DashboardLayout from "../../layouts/DashboardLayout";
import { Box, Typography } from "@mui/material";
import SOSStats from "../../components/SOS/SOSStats";

const SOS = () => {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        {/* Page Header */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#F8FAFC",
              mb: 0.5,
            }}
          >
            🚨 SOS Command Center
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: "0.95rem",
            }}
          >
            Real-time monitoring and emergency response system
          </Typography>
        </Box>

        {/* SOS Statistics */}
        <SOSStats />
      </Box>
    </DashboardLayout>
  );
};

export default SOS;