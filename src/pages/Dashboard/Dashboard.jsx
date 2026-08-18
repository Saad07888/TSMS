import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";

import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../../layouts/DashboardLayout";

/* =========================================================
   EXISTING DASHBOARD COMPONENTS
========================================================= */

import DashboardCard from "../../components/Dashboard/DashboardCard";
import LiveMapCard from "../../components/Dashboard/LiveMapCard";
import AIRiskCard from "../../components/Dashboard/AIRiskCard";
import WeatherCard from "../../components/Dashboard/WeatherCard";
import RecentSOSCard from "../../components/Dashboard/RecentSOSCard";
import IncidentChart from "../../components/Dashboard/IncidentChart";
import CategoryChart from "../../components/Dashboard/CategoryChart";

/* =========================================================
   ICONS
========================================================= */

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import LocalPoliceRoundedIcon from "@mui/icons-material/LocalPoliceRounded";

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import EmergencyRoundedIcon from "@mui/icons-material/EmergencyRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

/* =========================================================
   DASHBOARD
========================================================= */

const Dashboard = () => {
  const navigate = useNavigate();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);

  /* =======================================================
     EXISTING FRONTEND AUTH GUARD
  ======================================================= */

useEffect(() => {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") ||
    sessionStorage.getItem("isLoggedIn");

  const adminToken =
    localStorage.getItem("adminToken") ||
    sessionStorage.getItem("adminToken");

  if (!isLoggedIn || !adminToken) {
    navigate("/admin-login", { replace: true });
  }
}, [navigate]);

  /* =======================================================
     LIVE CLOCK
  ======================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  /* =======================================================
     DATE + TIME
  ======================================================= */

  const formattedTime = useMemo(() => {
    return new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(currentTime);
  }, [currentTime]);

  const formattedDate = useMemo(() => {
    return new Intl.DateTimeFormat("en-IN", {
      weekday: "long",
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(currentTime);
  }, [currentTime]);

  /* =======================================================
     REFRESH
  ======================================================= */

  const handleRefresh = () => {
    if (refreshing) return;

    setRefreshing(true);

    window.setTimeout(() => {
      setCurrentTime(new Date());
      setRefreshing(false);
    }, 700);
  };

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const goTo = (path) => {
    navigate(path);
  };

  /* =======================================================
     COLORS

     Intentionally lighter than previous Dashboard.
  ======================================================= */

  const colors = {
    page: "#0D1C2E",
    pageSecondary: "#10243A",

    panel: "#142A43",
    panelLight: "#17314D",
    panelElevated: "#193752",

    border: "rgba(148, 190, 230, 0.14)",
    borderStrong: "rgba(96, 165, 250, 0.22)",

    primary: "#3B82F6",
    primaryLight: "#60A5FA",
    cyan: "#38BDF8",

    green: "#22C55E",
    red: "#EF4444",
    orange: "#F59E0B",
    purple: "#8B5CF6",

    text: "#F8FAFC",
    textSecondary: "#A9BED3",
    textMuted: "#6F8AA5",
  };

  /* =======================================================
     TOP STATUS
  ======================================================= */

  const systemStatus = [
    {
      label: "Monitoring",
      value: "Live",
      icon: <RadarRoundedIcon />,
      color: colors.green,
    },
    {
      label: "AI Engine",
      value: "Active",
      icon: <SmartToyRoundedIcon />,
      color: colors.primaryLight,
    },
    {
      label: "Network",
      value: "Connected",
      icon: <WifiRoundedIcon />,
      color: colors.cyan,
    },
  ];

  /* =======================================================
     QUICK ACTIONS
  ======================================================= */

  const quickActions = [
    {
      title: "SOS Center",
      description: "Respond to emergencies",
      icon: <EmergencyRoundedIcon />,
      color: colors.red,
      path: "/sos",
    },
    {
      title: "Tourists",
      description: "Monitor registered tourists",
      icon: <PeopleAltRoundedIcon />,
      color: colors.primaryLight,
      path: "/tourists",
    },
    {
      title: "GeoFence",
      description: "Manage safety zones",
      icon: <MapRoundedIcon />,
      color: colors.green,
      path: "/geofence",
    },
    {
      title: "Reports",
      description: "View safety analytics",
      icon: <AnalyticsRoundedIcon />,
      color: colors.purple,
      path: "/reports",
    },
  ];

  /* =======================================================
     SECTION HEADER
  ======================================================= */

  const SectionHeader = ({
    icon,
    title,
    subtitle,
    rightContent,
    color = colors.primaryLight,
  }) => (
    <Box
      sx={{
        display: "flex",
        alignItems: {
          xs: "flex-start",
          sm: "center",
        },
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        gap: 1.2,
        mb: 1.5,
      }}
    >
      <Stack direction="row" spacing={1.2} alignItems="center">
        <Box
          sx={{
            width: 36,
            height: 36,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "11px",

            color,

            background: `${color}12`,

            border: `1px solid ${color}20`,

            "& svg": {
              fontSize: 19,
            },
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            sx={{
              color: colors.text,
              fontSize: {
                xs: 15,
                md: 16.5,
              },
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: colors.textMuted,
              fontSize: 9,
              mt: 0.35,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Stack>

      {rightContent}
    </Box>
  );

  return (
    <DashboardLayout>
      {/* =====================================================
          DASHBOARD BACKGROUND
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          minHeight: "100vh",

          mx: {
            xs: -2,
            sm: -2.5,
            md: -3,
          },

          mt: {
            xs: -2,
            sm: -2.5,
            md: -3,
          },

          px: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          pt: {
            xs: 2,
            sm: 2.5,
            md: 3,
          },

          pb: 5,

          background: `
            radial-gradient(
              circle at 45% -10%,
              rgba(59,130,246,0.13),
              transparent 31%
            ),
            radial-gradient(
              circle at 95% 20%,
              rgba(56,189,248,0.07),
              transparent 26%
            ),
            linear-gradient(
              135deg,
              ${colors.page} 0%,
              ${colors.pageSecondary} 48%,
              #0E2034 100%
            )
          `,

          color: colors.text,
        }}
      >
        {/* DECORATIVE LIGHT */}

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: "30%",
            width: "45%",
            height: 1,

            background:
              "linear-gradient(90deg, transparent, rgba(96,165,250,.32), transparent)",

            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 1,

            width: "100%",
            maxWidth: 1900,
            mx: "auto",
          }}
        >
          {/* ===================================================
              COMPACT DASHBOARD HEADER
          =================================================== */}

          <Box
            sx={{
              mb: 2.25,

              p: {
                xs: 1.7,
                md: 2,
              },

              borderRadius: "18px",

              background:
                "linear-gradient(135deg, rgba(24,53,82,.90), rgba(18,42,67,.88))",

              border: `1px solid ${colors.border}`,

              boxShadow:
                "0 15px 35px rgba(0,0,0,.12), inset 0 1px 0 rgba(255,255,255,.025)",
            }}
          >
            <Box
              sx={{
                display: "flex",

                flexDirection: {
                  xs: "column",
                  lg: "row",
                },

                alignItems: {
                  xs: "stretch",
                  lg: "center",
                },

                justifyContent: "space-between",

                gap: 2,
              }}
            >
              {/* LEFT */}

              <Stack
                direction="row"
                alignItems="center"
                spacing={1.4}
              >
                <Box
                  sx={{
                    width: 44,
                    height: 44,

                    flexShrink: 0,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: "13px",

                    color: "#FFFFFF",

                    background:
                      "linear-gradient(135deg,#3B82F6,#2563EB)",

                    border:
                      "1px solid rgba(147,197,253,.25)",

                    boxShadow:
                      "0 10px 25px rgba(37,99,235,.23)",
                  }}
                >
                  <ShieldRoundedIcon
                    sx={{
                      fontSize: 23,
                    }}
                  />
                </Box>

                <Box>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Typography
                      sx={{
                        color: colors.text,

                        fontSize: {
                          xs: 20,
                          md: 23,
                        },

                        fontWeight: 850,

                        letterSpacing: "-.6px",
                      }}
                    >
                      Dashboard
                    </Typography>

                    <Chip
                      label="COMMAND CENTER"
                      size="small"
                      sx={{
                        height: 20,

                        color: "#8DD9FF",

                        background:
                          "rgba(56,189,248,.08)",

                        border:
                          "1px solid rgba(56,189,248,.16)",

                        fontSize: 7.5,

                        fontWeight: 900,

                        letterSpacing: 0.7,

                        "& .MuiChip-label": {
                          px: 0.9,
                        },
                      }}
                    />
                  </Stack>

                  <Typography
                    sx={{
                      color: colors.textSecondary,

                      fontSize: {
                        xs: 10,
                        md: 11,
                      },

                      mt: 0.3,
                    }}
                  >
                    Smart Tourist Safety Monitoring & Incident Response
                  </Typography>
                </Box>
              </Stack>

              {/* RIGHT */}

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                alignItems={{
                  xs: "stretch",
                  sm: "center",
                }}
                gap={1}
              >
                {/* SYSTEM STATUS */}

                <Stack
                  direction="row"
                  spacing={0.7}
                  sx={{
                    flexWrap: "wrap",
                  }}
                >
                  {systemStatus.map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        gap: 0.7,

                        minHeight: 36,

                        px: 1.1,

                        borderRadius: "10px",

                        background:
                          "rgba(10,27,45,.48)",

                        border:
                          "1px solid rgba(148,190,230,.10)",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",

                          color: item.color,

                          "& svg": {
                            fontSize: 14,
                          },
                        }}
                      >
                        {item.icon}
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: colors.textMuted,
                            fontSize: 6.8,
                            lineHeight: 1,
                          }}
                        >
                          {item.label}
                        </Typography>

                        <Typography
                          sx={{
                            color: item.color,

                            fontSize: 8,

                            fontWeight: 800,

                            lineHeight: 1.3,

                            mt: 0.25,
                          }}
                        >
                          {item.value}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>

                {/* REFRESH */}

                <Tooltip title="Refresh dashboard">
                  <IconButton
                    onClick={handleRefresh}
                    sx={{
                      width: 38,
                      height: 38,

                      color: colors.textSecondary,

                      borderRadius: "10px",

                      border:
                        "1px solid rgba(148,190,230,.12)",

                      background:
                        "rgba(10,27,45,.40)",

                      "&:hover": {
                        color: colors.primaryLight,

                        background:
                          "rgba(59,130,246,.10)",

                        borderColor:
                          "rgba(96,165,250,.24)",
                      },
                    }}
                  >
                    <RefreshRoundedIcon
                      sx={{
                        fontSize: 18,

                        animation: refreshing
                          ? "dashboardSpin .7s linear infinite"
                          : "none",

                        "@keyframes dashboardSpin": {
                          from: {
                            transform: "rotate(0deg)",
                          },

                          to: {
                            transform: "rotate(360deg)",
                          },
                        },
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Box>
          </Box>

          {/* ===================================================
              KPI + TIME ROW
          =================================================== */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, minmax(0, 1fr)) 230px",
              },

              gap: 1.5,

              mb: 2.25,
            }}
          >
            <DashboardCard
              title="Total Tourists"
              value="1,245"
              color="#3B82F6"
              icon={<PeopleAltRoundedIcon />}
            />

            <DashboardCard
              title="Active SOS"
              value="8"
              color="#EF4444"
              icon={<WarningAmberRoundedIcon />}
            />

            <DashboardCard
              title="GeoFences"
              value="35"
              color="#22C55E"
              icon={<MapRoundedIcon />}
            />

            <DashboardCard
              title="Police Online"
              value="18"
              color="#F59E0B"
              icon={<LocalPoliceRoundedIcon />}
            />

            {/* TIME CARD */}

            <Box
              sx={{
                position: "relative",

                overflow: "hidden",

                minHeight: 170,

                p: 2,

                borderRadius: "20px",

                background:
                  "linear-gradient(145deg,#193752 0%,#142E48 60%,#122940 100%)",

                border: `1px solid ${colors.border}`,

                boxShadow:
                  "0 18px 38px rgba(0,0,0,.14), inset 0 1px 0 rgba(255,255,255,.025)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",

                  width: 130,
                  height: 130,

                  top: -70,
                  right: -50,

                  borderRadius: "50%",

                  background:
                    "radial-gradient(circle, rgba(56,189,248,.16), transparent 70%)",
                }}
              />

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
              >
                <Box>
                  <Typography
                    sx={{
                      color: colors.textMuted,

                      fontSize: 8,

                      fontWeight: 800,

                      letterSpacing: 1,

                      textTransform: "uppercase",
                    }}
                  >
                    Local Command Time
                  </Typography>

                  <Typography
                    sx={{
                      color: colors.text,

                      fontSize: {
                        xs: 22,
                        lg: 20,
                      },

                      fontWeight: 900,

                      letterSpacing: "-.8px",

                      mt: 1,
                    }}
                  >
                    {formattedTime}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 38,
                    height: 38,

                    borderRadius: "11px",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    color: colors.cyan,

                    background:
                      "rgba(56,189,248,.08)",

                    border:
                      "1px solid rgba(56,189,248,.16)",
                  }}
                >
                  <AccessTimeRoundedIcon
                    sx={{
                      fontSize: 19,
                    }}
                  />
                </Box>
              </Stack>

              <Typography
                sx={{
                  color: colors.textSecondary,

                  fontSize: 8.5,

                  mt: 1,
                }}
              >
                {formattedDate}
              </Typography>

              <Stack
                direction="row"
                alignItems="center"
                spacing={0.65}
                sx={{
                  position: "absolute",
                  bottom: 18,
                  left: 16,
                }}
              >
                <Box
                  sx={{
                    width: 6,
                    height: 6,

                    borderRadius: "50%",

                    bgcolor: colors.green,

                    boxShadow:
                      "0 0 8px rgba(34,197,94,.75)",
                  }}
                />

                <Typography
                  sx={{
                    color: "#6EE7A0",

                    fontSize: 8,

                    fontWeight: 800,
                  }}
                >
                  SYSTEM LIVE
                </Typography>
              </Stack>
            </Box>
          </Box>

          {/* ===================================================
              LIVE OPERATIONS
          =================================================== */}

          <Box sx={{ mb: 2.5 }}>
            <SectionHeader
              icon={<RadarRoundedIcon />}
              title="Live Operations"
              subtitle="Real-time tourist location, emergency and GeoFence monitoring"
              color={colors.primaryLight}
              rightContent={
                <Stack direction="row" spacing={0.8}>
                  <Chip
                    label="LIVE"
                    size="small"
                    icon={
                      <Box
                        sx={{
                          width: 5,
                          height: 5,

                          borderRadius: "50%",

                          bgcolor: `${colors.green} !important`,

                          boxShadow:
                            "0 0 7px rgba(34,197,94,.7)",
                        }}
                      />
                    }
                    sx={{
                      height: 28,

                      color: "#6EE7A0",

                      background:
                        "rgba(34,197,94,.07)",

                      border:
                        "1px solid rgba(34,197,94,.14)",

                      fontSize: 8,

                      fontWeight: 900,
                    }}
                  />

                  <Button
                    onClick={() => goTo("/sos")}
                    startIcon={
                      <NotificationsActiveRoundedIcon />
                    }
                    endIcon={<ArrowForwardRoundedIcon />}
                    sx={{
                      minHeight: 28,

                      px: 1.3,

                      borderRadius: "9px",

                      textTransform: "none",

                      color: "#FDA4AF",

                      background:
                        "rgba(239,68,68,.07)",

                      border:
                        "1px solid rgba(239,68,68,.15)",

                      fontSize: 8.5,

                      fontWeight: 800,

                      "& .MuiButton-startIcon svg, & .MuiButton-endIcon svg":
                        {
                          fontSize: 14,
                        },

                      "&:hover": {
                        background:
                          "rgba(239,68,68,.13)",
                      },
                    }}
                  >
                    8 Active SOS
                  </Button>
                </Stack>
              }
            />

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  xl: "minmax(0, 2.15fr) minmax(330px, .95fr)",
                },

                gap: 2,

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  minWidth: 0,

                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <LiveMapCard />
              </Box>

              <Box
                sx={{
                  minWidth: 0,

                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <AIRiskCard />
              </Box>
            </Box>
          </Box>

          {/* ===================================================
              QUICK OPERATIONS
          =================================================== */}

          <Box sx={{ mb: 2.5 }}>
            <SectionHeader
              icon={<ShieldRoundedIcon />}
              title="Quick Operations"
              subtitle="Frequently used SafeTour command-center actions"
              color={colors.cyan}
            />

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  lg: "repeat(4, 1fr)",
                },

                gap: 1.25,
              }}
            >
              {quickActions.map((action) => (
                <Box
                  key={action.title}
                  onClick={() => goTo(action.path)}
                  sx={{
                    position: "relative",

                    overflow: "hidden",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "space-between",

                    gap: 1,

                    p: 1.35,

                    minHeight: 68,

                    borderRadius: "15px",

                    cursor: "pointer",

                    background:
                      "linear-gradient(135deg,rgba(25,55,82,.94),rgba(20,46,72,.94))",

                    border:
                      "1px solid rgba(148,190,230,.11)",

                    boxShadow:
                      "0 12px 28px rgba(0,0,0,.10)",

                    transition:
                      "transform .22s ease, border-color .22s ease, box-shadow .22s ease",

                    "&::before": {
                      content: '""',

                      position: "absolute",

                      width: 100,
                      height: 100,

                      right: -45,
                      top: -50,

                      borderRadius: "50%",

                      background: `${action.color}0D`,

                      pointerEvents: "none",
                    },

                    "&:hover": {
                      transform: "translateY(-3px)",

                      borderColor: `${action.color}30`,

                      boxShadow:
                        "0 18px 35px rgba(0,0,0,.15)",
                    },

                    "&:hover .quick-arrow": {
                      transform: "translateX(3px)",

                      color: action.color,
                    },
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    minWidth={0}
                  >
                    <Box
                      sx={{
                        width: 38,
                        height: 38,

                        flexShrink: 0,

                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",

                        borderRadius: "11px",

                        color: action.color,

                        background: `${action.color}0E`,

                        border: `1px solid ${action.color}1D`,

                        "& svg": {
                          fontSize: 19,
                        },
                      }}
                    >
                      {action.icon}
                    </Box>

                    <Box minWidth={0}>
                      <Typography
                        sx={{
                          color: colors.text,

                          fontSize: 10,

                          fontWeight: 800,

                          whiteSpace: "nowrap",

                          overflow: "hidden",

                          textOverflow: "ellipsis",
                        }}
                      >
                        {action.title}
                      </Typography>

                      <Typography
                        sx={{
                          color: colors.textMuted,

                          fontSize: 7.5,

                          mt: 0.3,

                          whiteSpace: "nowrap",

                          overflow: "hidden",

                          textOverflow: "ellipsis",
                        }}
                      >
                        {action.description}
                      </Typography>
                    </Box>
                  </Stack>

                  <ArrowForwardRoundedIcon
                    className="quick-arrow"
                    sx={{
                      position: "relative",

                      zIndex: 1,

                      flexShrink: 0,

                      color: colors.textMuted,

                      fontSize: 16,

                      transition:
                        "transform .2s ease, color .2s ease",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Box>

          {/* ===================================================
              INCIDENT INTELLIGENCE
          =================================================== */}

          <Box sx={{ mb: 2.5 }}>
            <SectionHeader
              icon={<AnalyticsRoundedIcon />}
              title="Safety Intelligence"
              subtitle="Incident trends, categories and predictive safety analytics"
              color={colors.purple}
              rightContent={
                <Button
                  onClick={() => goTo("/reports")}
                  endIcon={<ArrowForwardRoundedIcon />}
                  sx={{
                    color: colors.primaryLight,

                    textTransform: "none",

                    fontSize: 8.5,

                    fontWeight: 800,

                    borderRadius: "9px",

                    px: 1.2,

                    "& .MuiButton-endIcon svg": {
                      fontSize: 14,
                    },

                    "&:hover": {
                      background:
                        "rgba(59,130,246,.08)",
                    },
                  }}
                >
                  View Reports
                </Button>
              }
            />

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  xl: "minmax(0, 2fr) minmax(330px, 1fr)",
                },

                gap: 2,

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  minWidth: 0,

                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <IncidentChart />
              </Box>

              <Box
                sx={{
                  minWidth: 0,

                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <CategoryChart />
              </Box>
            </Box>
          </Box>

          {/* ===================================================
              SOS + WEATHER
          =================================================== */}

          <Box sx={{ mb: 2.5 }}>
            <SectionHeader
              icon={<EmergencyRoundedIcon />}
              title="Emergency & Environment"
              subtitle="Latest emergency activity and environmental safety conditions"
              color={colors.red}
            />

            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  lg: "minmax(0, 1.35fr) minmax(320px, .85fr)",
                },

                gap: 2,

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  minWidth: 0,

                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <RecentSOSCard />
              </Box>

              <Box
                sx={{
                  minWidth: 0,

                  "& > *": {
                    width: "100%",
                  },
                }}
              >
                <WeatherCard />
              </Box>
            </Box>
          </Box>

          {/* ===================================================
              SYSTEM FOOTER
          =================================================== */}

          <Box
            sx={{
              position: "relative",

              overflow: "hidden",

              p: {
                xs: 1.5,
                sm: 1.7,
              },

              borderRadius: "15px",

              background:
                "linear-gradient(90deg,#17314D,#183752,#15304B)",

              border: `1px solid ${colors.border}`,

              boxShadow:
                "0 12px 30px rgba(0,0,0,.10)",
            }}
          >
            <Box
              sx={{
                position: "absolute",

                width: 260,
                height: 130,

                right: "20%",
                bottom: -110,

                borderRadius: "50%",

                background:
                  "radial-gradient(circle,rgba(59,130,246,.16),transparent 70%)",
              }}
            />

            <Box
              sx={{
                position: "relative",

                zIndex: 1,

                display: "flex",

                flexDirection: {
                  xs: "column",
                  md: "row",
                },

                alignItems: {
                  xs: "flex-start",
                  md: "center",
                },

                justifyContent: "space-between",

                gap: 1.5,
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    borderRadius: "10px",

                    color: colors.green,

                    background:
                      "rgba(34,197,94,.08)",

                    border:
                      "1px solid rgba(34,197,94,.15)",
                  }}
                >
                  <CheckCircleRoundedIcon
                    sx={{
                      fontSize: 18,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: colors.text,

                      fontSize: 9.5,

                      fontWeight: 800,
                    }}
                  >
                    SafeTour AI Network Operational
                  </Typography>

                  <Typography
                    sx={{
                      color: colors.textMuted,

                      fontSize: 7.5,

                      mt: 0.2,
                    }}
                  >
                    Monitoring • AI Risk Analysis • GeoFence • Emergency
                    Response
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                spacing={{
                  xs: 1,
                  sm: 2,
                }}
                flexWrap="wrap"
                useFlexGap
              >
                {[
                  {
                    name: "Monitoring",
                    color: colors.green,
                  },

                  {
                    name: "AI Engine",
                    color: colors.primaryLight,
                  },

                  {
                    name: "GeoFence",
                    color: colors.green,
                  },

                  {
                    name: "Emergency Network",
                    color: colors.cyan,
                  },
                ].map((status) => (
                  <Stack
                    key={status.name}
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                  >
                    <Box
                      sx={{
                        width: 5,
                        height: 5,

                        borderRadius: "50%",

                        bgcolor: status.color,

                        boxShadow: `0 0 7px ${status.color}80`,
                      }}
                    />

                    <Typography
                      sx={{
                        color: colors.textSecondary,

                        fontSize: 7.5,

                        fontWeight: 700,
                      }}
                    >
                      {status.name}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default Dashboard;