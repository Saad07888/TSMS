import { Box, Typography, Avatar, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const DashboardHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mb: 4,
      }}
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Smart Tourist Dashboard
        </Typography>

        <Typography color="text.secondary">
          Welcome back, Admin
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={2}>
        <IconButton>
          <Badge badgeContent={3} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <Avatar sx={{ bgcolor: "#2563EB" }}>A</Avatar>
      </Box>
    </Box>
  );
};

export default DashboardHeader;