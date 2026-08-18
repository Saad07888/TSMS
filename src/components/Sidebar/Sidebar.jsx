import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  DashboardRounded,
  PeopleAltRounded,
  MapRounded,
  WarningAmberRounded,
  DescriptionRounded,
  BarChartRounded,
  SettingsRounded,
  LogoutRounded,
  ShieldRounded,
  CircleRounded,
  ChevronRightRounded,
  WifiRounded,
} from "@mui/icons-material";

import { useLocation, useNavigate } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <DashboardRounded />,
  },
  {
    label: "Tourists",
    path: "/tourists",
    icon: <PeopleAltRounded />,
  },
  {
    label: "Geo Fence",
    path: "/geofence",
    icon: <MapRounded />,
  },
  {
    label: "SOS Alerts",
    path: "/sos",
    icon: <WarningAmberRounded />,
    alert: true,
  },
  {
    label: "Incidents",
    path: "/incidents",
    icon: <DescriptionRounded />,
  },
  {
    label: "Reports",
    path: "/reports",
    icon: <BarChartRounded />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <SettingsRounded />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <Box
      sx={{
        width: 248,
        height: "100vh",

        position: "fixed",
        left: 0,
        top: 0,

        display: "flex",
        flexDirection: "column",

        background:
          "linear-gradient(180deg,#07111F 0%,#081321 55%,#06101C 100%)",

        borderRight:
          "1px solid rgba(148,163,184,.08)",

        color: "#fff",

        zIndex: 1200,

        overflow: "hidden",

        /* subtle background glow */
        "&::before": {
          content: '""',

          position: "absolute",

          width: 260,
          height: 260,

          top: -100,
          left: -100,

          borderRadius: "50%",

          background:
            "rgba(37,99,235,.08)",

          filter: "blur(70px)",

          pointerEvents: "none",
        },

        "&::after": {
          content: '""',

          position: "absolute",

          width: 220,
          height: 220,

          bottom: -100,
          left: -80,

          borderRadius: "50%",

          background:
            "rgba(79,70,229,.05)",

          filter: "blur(70px)",

          pointerEvents: "none",
        },
      }}
    >
      {/* =====================================================
          BRAND
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          px: 2,

          pt: 2.4,
          pb: 2.2,

          borderBottom:
            "1px solid rgba(148,163,184,.07)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.4,
          }}
        >
          {/* Logo */}

          <Box
            sx={{
              width: 44,
              height: 44,

              flexShrink: 0,

              borderRadius: "14px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "linear-gradient(135deg,#2563EB,#4F46E5)",

              boxShadow:
                "0 10px 30px rgba(37,99,235,.35)",

              position: "relative",

              "&::after": {
                content: '""',

                position: "absolute",

                inset: -4,

                borderRadius: "17px",

                border:
                  "1px solid rgba(96,165,250,.12)",
              },
            }}
          >
            <ShieldRounded
              sx={{
                color: "#fff",
                fontSize: 25,
              }}
            />
          </Box>

          {/* Brand text */}

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 15,

                fontWeight: 800,

                letterSpacing: "-0.2px",

                lineHeight: 1.15,
              }}
            >
              SafeTour AI
            </Typography>

            <Typography
              sx={{
                color: "#64748B",

                fontSize: 10,

                mt: 0.4,

                fontWeight: 600,

                letterSpacing: 0.2,
              }}
            >
              SMART TOURIST SAFETY
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          flex: 1,

          px: 1.5,

          pt: 2,
        }}
      >
        <Typography
          sx={{
            color: "#475569",

            fontSize: 9,

            fontWeight: 800,

            letterSpacing: 1.3,

            textTransform: "uppercase",

            px: 1.3,

            mb: 1,
          }}
        >
          Main Menu
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.55,
          }}
        >
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path;

            return (
              <Box
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  position: "relative",

                  height: 46,

                  px: 1.1,

                  display: "flex",
                  alignItems: "center",

                  borderRadius: "13px",

                  cursor: "pointer",

                  color: isActive
                    ? "#F8FAFC"
                    : "#8FA0B8",

                  background: isActive
                    ? "linear-gradient(90deg,rgba(59,130,246,.22),rgba(79,70,229,.16))"
                    : "transparent",

                  border: isActive
                    ? "1px solid rgba(96,165,250,.12)"
                    : "1px solid transparent",

                  boxShadow: isActive
                    ? "0 8px 25px rgba(37,99,235,.12)"
                    : "none",

                  transition:
                    "all .25s ease",

                  "&:hover": {
                    background:
                      "rgba(59,130,246,.08)",

                    color: "#E2E8F0",

                    transform:
                      "translateX(3px)",
                  },

                  /* active indicator */

                  "&::before": {
                    content: '""',

                    position: "absolute",

                    left: -1,

                    top: "50%",

                    transform:
                      "translateY(-50%)",

                    width: isActive ? 3 : 0,

                    height: 25,

                    borderRadius: "0 4px 4px 0",

                    background:
                      "linear-gradient(180deg,#60A5FA,#6366F1)",

                    boxShadow:
                      "0 0 12px rgba(59,130,246,.7)",

                    transition:
                      "all .25s ease",
                  },
                }}
              >
                {/* Icon */}

                <Box
                  sx={{
                    width: 34,
                    height: 34,

                    borderRadius: "10px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: isActive
                      ? "#60A5FA"
                      : "#8292A8",

                    background: isActive
                      ? "rgba(59,130,246,.10)"
                      : "transparent",

                    transition: ".25s",

                    "& svg": {
                      fontSize: 20,
                    },
                  }}
                >
                  {item.icon}
                </Box>

                {/* Label */}

                <Typography
                  sx={{
                    ml: 0.9,

                    fontSize: 13,

                    fontWeight:
                      isActive ? 700 : 500,

                    letterSpacing:
                      "-0.1px",
                  }}
                >
                  {item.label}
                </Typography>

                {/* SOS indicator */}

                {item.alert && (
                  <Box
                    sx={{
                      ml: "auto",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      width: 21,
                      height: 21,

                      borderRadius: "7px",

                      bgcolor:
                        "rgba(239,68,68,.12)",

                      color: "#F87171",

                      fontSize: 9,

                      fontWeight: 900,
                    }}
                  >
                    2
                  </Box>
                )}

                {/* Active arrow */}

                {isActive && (
                  <ChevronRightRounded
                    sx={{
                      ml: "auto",

                      color: "#60A5FA",

                      fontSize: 18,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* =====================================================
          SYSTEM STATUS
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          mx: 1.5,
          mb: 1.5,

          p: 1.4,

          borderRadius: "14px",

          background:
            "linear-gradient(135deg,rgba(15,23,42,.9),rgba(13,27,48,.75))",

          border:
            "1px solid rgba(34,197,94,.09)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 28,
              height: 28,

              borderRadius: "9px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              bgcolor:
                "rgba(34,197,94,.08)",
            }}
          >
            <WifiRounded
              sx={{
                color: "#22C55E",
                fontSize: 15,
              }}
            />
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: "#CBD5E1",

                fontSize: 10,

                fontWeight: 700,
              }}
            >
              System Status
            </Typography>

            <Typography
              sx={{
                color: "#475569",

                fontSize: 8,

                mt: 0.2,
              }}
            >
              All services operational
            </Typography>
          </Box>

          <CircleRounded
            sx={{
              color: "#22C55E",

              fontSize: 8,

              filter:
                "drop-shadow(0 0 5px rgba(34,197,94,.7))",
            }}
          />
        </Box>
      </Box>

      {/* =====================================================
          ADMIN PROFILE
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          mx: 1.5,

          p: 1.4,

          borderRadius: "15px",

          background:
            "rgba(255,255,255,.025)",

          border:
            "1px solid rgba(255,255,255,.06)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.1,
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Avatar
              sx={{
                width: 38,
                height: 38,

                bgcolor: "#3B82F6",

                fontSize: 15,

                fontWeight: 800,

                boxShadow:
                  "0 6px 18px rgba(59,130,246,.25)",
              }}
            >
              A
            </Avatar>

            <Box
              sx={{
                position: "absolute",

                right: -1,
                bottom: 0,

                width: 9,
                height: 9,

                borderRadius: "50%",

                bgcolor: "#22C55E",

                border:
                  "2px solid #0A1524",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,

              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 12,

                fontWeight: 700,
              }}
            >
              Admin
            </Typography>

            <Typography
              sx={{
                color: "#64748B",

                fontSize: 9,

                mt: 0.2,
              }}
            >
              Super Administrator
            </Typography>
          </Box>

          <Tooltip title="Logout">
            <IconButton
              onClick={handleLogout}
              size="small"
              sx={{
                width: 30,
                height: 30,

                color: "#64748B",

                borderRadius: "9px",

                "&:hover": {
                  color: "#F87171",

                  bgcolor:
                    "rgba(239,68,68,.08)",
                },
              }}
            >
              <LogoutRounded
                sx={{ fontSize: 17 }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          px: 2,
          py: 1.7,

          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#334155",

            fontSize: 8,

            fontWeight: 600,

            letterSpacing: 0.4,
          }}
        >
          SAFETOUR AI
        </Typography>

        <Typography
          sx={{
            color: "#253449",

            fontSize: 8,

            mt: 0.3,
          }}
        >
          Secure • Monitor • Respond
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;