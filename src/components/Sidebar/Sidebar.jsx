import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Chip,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const menu = [
  {
    name: "Dashboard",
      path: "/dashboard",
    icon: <DashboardRoundedIcon />,
  },
  {
    name: "Tourists",
    path: "/tourists",
    icon: <PeopleAltRoundedIcon />,
  },
  {
    name: "Geo Fence",
    path: "/geofence",
    icon: <MapRoundedIcon />,
  },
  {
    name: "SOS Alerts",
    path: "/sos",
    icon: <WarningAmberRoundedIcon />,
  },
  {
    name: "Incidents",
    path: "/incidents",
    icon: <DescriptionRoundedIcon />,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: <BarChartRoundedIcon />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <SettingsRoundedIcon />,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box
      sx={{
        width: 250,
        minHeight: "100vh",
        bgcolor: "#07111F",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        borderRight: "1px solid rgba(255,255,255,.05)",
      }}
    >
      {/* Logo */}

      <Box
        sx={{
          px: 3,
          py: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            width: 48,
            height: 48,
            background:
              "linear-gradient(135deg,#3B82F6,#6366F1)",
          }}
        >
          <ShieldRoundedIcon />
        </Avatar>

        <Box>
          <Typography
            fontWeight="bold"
            fontSize={24}
          >
            SafeTour AI
          </Typography>

          <Typography
            fontSize={12}
            color="#94A3B8"
          >
            Smart Tourist Safety
          </Typography>
        </Box>
      </Box>

      {/* Navigation */}

      <List
        sx={{
          px: 2,
          mt: 2,
        }}
      >
        {menu.map((item) => (
          <ListItemButton
            key={item.name}
            onClick={() => navigate(item.path)}
            selected={location.pathname === item.path}
            sx={{
              borderRadius: 3,
              py: 1.4,
              mb: 1.2,

              color: "#94A3B8",

              transition: ".3s",

              "& .MuiListItemIcon-root": {
                color: "inherit",
                minWidth: 42,
              },

              "&:hover": {
                color: "#fff",
                bgcolor: "#182235",
              },

              "&.Mui-selected": {
                color: "#fff",

                background:
                  "linear-gradient(90deg,#3B82F6,#5B5DF7)",

                boxShadow:
                  "0 8px 25px rgba(59,130,246,.35)",

                "&:hover": {
                  background:
                    "linear-gradient(90deg,#3B82F6,#5B5DF7)",
                },
              },
            }}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>

            <ListItemText
              primary={item.name}
            />
          </ListItemButton>
        ))}
      </List>

      <Box sx={{ flexGrow: 1 }} />

            {/* Divider */}
      <Box
        sx={{
          mx: 3,
          mb: 3,
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      />

      {/* Admin Profile */}
      <Box
        sx={{
          px: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            width: 50,
            height: 50,
            bgcolor: "#3B82F6",
            fontWeight: "bold",
          }}
        >
          A
        </Avatar>

        <Box>
          <Typography fontWeight="bold">
            Admin
          </Typography>

          <Typography
            fontSize={12}
            color="#94A3B8"
          >
            Super Administrator
          </Typography>

          <Chip
            label="Online"
            size="small"
            sx={{
              mt: 1,
              bgcolor: "#16A34A",
              color: "#fff",
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>

      {/* Logout */}
      <Box sx={{ px: 3, mt: 3 }}>
        <ListItemButton
          sx={{
            borderRadius: 3,
            py: 1.5,
            justifyContent: "center",

            color: "#fff",

            background:
              "linear-gradient(135deg,#EF4444,#DC2626)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#DC2626,#B91C1C)",
            },
          }}
        >
          <Typography fontWeight="bold">
            Logout
          </Typography>
        </ListItemButton>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: 4,
          p: 3,
          textAlign: "center",
        }}
      >
        <Typography
          fontWeight="bold"
          color="#fff"
        >
          SafeTour AI
        </Typography>

        <Typography
          fontSize={12}
          color="#64748B"
        >
          Travel Safe. Stay Connected.
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;