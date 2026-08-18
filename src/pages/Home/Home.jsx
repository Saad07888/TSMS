import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Stack,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
  Avatar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SosRoundedIcon from "@mui/icons-material/SosRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const Home = () => {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const features = [
    {
      icon: <LocationOnRoundedIcon />,
      title: "Smart GeoFence",
      description:
        "Create and monitor geographic safety zones around important tourist locations.",
      color: "#1769E0",
    },
    {
      icon: <SosRoundedIcon />,
      title: "Emergency SOS",
      description:
        "A dedicated emergency workflow helps tourists request assistance when needed.",
      color: "#E5484D",
    },
    {
      icon: <SmartToyRoundedIcon />,
      title: "AI Risk Intelligence",
      description:
        "Intelligent analysis helps identify safety conditions and potential risks.",
      color: "#7657E8",
    },
    {
      icon: <NotificationsActiveRoundedIcon />,
      title: "Instant Alerts",
      description:
        "Important safety events can trigger timely alerts for the responsible team.",
      color: "#E99A22",
    },
    {
      icon: <AnalyticsRoundedIcon />,
      title: "Safety Analytics",
      description:
        "Transform tourist, incident and zone data into useful safety insights.",
      color: "#0E9F6E",
    },
    {
      icon: <SecurityRoundedIcon />,
      title: "Secure Access",
      description:
        "Separate tourist and administrator experiences keep the platform organized.",
      color: "#087EAA",
    },
  ];

  const faqs = [
    {
      question: "What is SafeTour AI?",
      answer:
        "SafeTour AI is a smart tourist safety platform that combines GeoFencing, tourist monitoring, emergency SOS, incident management and safety analytics.",
    },
    {
      question: "Who can use SafeTour AI?",
      answer:
        "The platform is designed around two main experiences: tourists who use safety services and authorized administrators who manage the safety ecosystem.",
    },
    {
      question: "How does GeoFence protection work?",
      answer:
        "Administrators can define geographic zones and monitor important location events around those zones.",
    },
    {
      question: "Can tourists send an SOS?",
      answer:
        "Yes. SafeTour AI includes a dedicated SOS workflow designed to make emergency assistance easier to request.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F5F9FE",
        color: "#0B1F36",
        overflow: "hidden",
      }}
    >
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: "rgba(6, 24, 45, 0.88)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              minHeight: "74px !important",
              px: { xs: 0, md: 1 },
            }}
          >
            {/* LOGO */}

            <Box
              onClick={() => scrollToSection("home")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
                cursor: "pointer",
                flexGrow: 1,
              }}
            >
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  borderRadius: "13px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, #2F80ED, #35C2E8)",
                  boxShadow:
                    "0 10px 28px rgba(47,128,237,0.30)",
                }}
              >
                <ShieldRoundedIcon
                  sx={{
                    color: "#fff",
                    fontSize: 26,
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "1.08rem",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  SafeTour
                </Typography>

                <Typography
                  sx={{
                    color: "#6DD5FA",
                    fontSize: "0.61rem",
                    fontWeight: 800,
                    letterSpacing: 1.7,
                    mt: 0.5,
                  }}
                >
                  AI SAFETY
                </Typography>
              </Box>
            </Box>

            {/* DESKTOP NAV */}

            <Stack
              direction="row"
              spacing={0.4}
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            >
              {[
                ["Home", "home"],
                ["Safety", "features"],
                ["How It Works", "how-it-works"],
                ["About", "about"],
                ["FAQ", "faq"],
              ].map(([label, id]) => (
                <Button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 1.5,
                    "&:hover": {
                      color: "#fff",
                      background:
                        "rgba(255,255,255,0.07)",
                    },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>

            {/* DESKTOP ACTIONS */}

            <Stack
              direction="row"
              spacing={1}
              sx={{
                ml: 2,
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Button
                onClick={() => navigate("/admin-login")}
                startIcon={
                  <AdminPanelSettingsRoundedIcon />
                }
                sx={{
                  color: "#7DDDF7",
                  border:
                    "1px solid rgba(125,221,247,0.25)",
                  background:
                    "rgba(125,221,247,0.05)",
                  borderRadius: "11px",
                  textTransform: "none",
                  fontWeight: 800,
                  px: 1.6,
                  "&:hover": {
                    background:
                      "rgba(125,221,247,0.10)",
                    borderColor: "#7DDDF7",
                  },
                }}
              >
                Admin Portal
              </Button>

              <Button
                onClick={() => navigate("/login")}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 700,
                }}
              >
                Sign In
              </Button>

              <Button
                onClick={() => navigate("/register")}
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontWeight: 800,
                  borderRadius: "11px",
                  px: 2.2,
                  background:
                    "linear-gradient(135deg, #2F80ED, #35C2E8)",
                  boxShadow:
                    "0 8px 24px rgba(47,128,237,0.28)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1769E0, #00A8C7)",
                  },
                }}
              >
                Get Started
              </Button>
            </Stack>

            {/* MOBILE */}

            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: "#fff",
              }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* =====================================================
          MOBILE DRAWER
      ===================================================== */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            background: "#071A2F",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              onClick={() => setMobileOpen(false)}
              sx={{
                color: "#fff",
              }}
            >
              <CloseRoundedIcon />
            </IconButton>
          </Box>

          <Box sx={{ px: 2, pb: 2 }}>
            <Typography
              sx={{
                fontWeight: 900,
                fontSize: "1.2rem",
              }}
            >
              SafeTour AI
            </Typography>

            <Typography
              sx={{
                color: "#6DD5FA",
                fontSize: "0.65rem",
                letterSpacing: 1.5,
              }}
            >
              SMART TOURIST SAFETY
            </Typography>
          </Box>

          <List>
            {[
              ["Home", "home"],
              ["Safety", "features"],
              ["How It Works", "how-it-works"],
              ["About", "about"],
              ["FAQ", "faq"],
            ].map(([label, id]) => (
              <ListItem key={id} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(id)}
                  sx={{
                    borderRadius: "12px",
                    mb: 0.5,
                  }}
                >
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider
            sx={{
              borderColor:
                "rgba(255,255,255,0.10)",
              my: 2,
            }}
          />

          <Stack spacing={1.5} sx={{ px: 2 }}>
            <Button
              fullWidth
              startIcon={
                <AdminPanelSettingsRoundedIcon />
              }
              onClick={() =>
                navigate("/admin-login")
              }
              sx={{
                color: "#6DD5FA",
                border:
                  "1px solid rgba(109,213,250,0.25)",
                textTransform: "none",
                fontWeight: 800,
              }}
            >
              Admin Portal
            </Button>

            <Button
              fullWidth
              onClick={() => navigate("/login")}
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: 700,
                border:
                  "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Tourist Sign In
            </Button>

            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/register")}
              sx={{
                textTransform: "none",
                fontWeight: 800,
                background:
                  "linear-gradient(135deg, #2F80ED, #35C2E8)",
              }}
            >
              Get Started
            </Button>
          </Stack>
        </Box>
      </Drawer>

      {/* =====================================================
          HERO
      ===================================================== */}

      <Box
        id="home"
        sx={{
          position: "relative",
          pt: {
            xs: 14,
            md: 16,
          },
          pb: {
            xs: 9,
            md: 12,
          },
          background:
            "radial-gradient(circle at 80% 30%, rgba(53,194,232,0.20), transparent 27%), radial-gradient(circle at 10% 20%, rgba(47,128,237,0.20), transparent 30%), linear-gradient(135deg, #06182D 0%, #092A4A 55%, #0B4667 100%)",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{
              xs: 6,
              md: 5,
            }}
            alignItems="center"
          >
            {/* HERO TEXT */}

            <Grid item xs={12} md={6}>
              <Chip
                icon={
                  <TravelExploreRoundedIcon
                    sx={{
                      color:
                        "#6DD5FA !important",
                    }}
                  />
                }
                label="SMART TOURIST SAFETY PLATFORM"
                sx={{
                  color: "#BCEFFF",
                  background:
                    "rgba(53,194,232,0.09)",
                  border:
                    "1px solid rgba(109,213,250,0.20)",
                  fontWeight: 800,
                  letterSpacing: 0.8,
                  height: 36,
                }}
              />

              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: {
                    xs: "3rem",
                    sm: "4rem",
                    md: "4.5rem",
                  },
                  lineHeight: 1.02,
                  letterSpacing: "-3px",
                  mt: 3,
                }}
              >
                Explore freely.
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    background:
                      "linear-gradient(90deg, #6DD5FA, #35C2E8)",
                    WebkitBackgroundClip:
                      "text",
                    WebkitTextFillColor:
                      "transparent",
                  }}
                >
                  Travel safely.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.70)",
                  maxWidth: 590,
                  lineHeight: 1.8,
                  fontSize: {
                    xs: "0.98rem",
                    md: "1.1rem",
                  },
                  mt: 3,
                }}
              >
                SafeTour AI brings together intelligent
                risk monitoring, GeoFence protection,
                emergency SOS and safety analytics into
                one connected tourist safety ecosystem.
              </Typography>

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={1.5}
                sx={{ mt: 4 }}
              >
                <Button
                  onClick={() =>
                    navigate("/register")
                  }
                  variant="contained"
                  endIcon={
                    <ArrowForwardRoundedIcon />
                  }
                  sx={{
                    minHeight: 55,
                    px: 2.8,
                    borderRadius: "14px",
                    textTransform: "none",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, #2F80ED, #35C2E8)",
                    boxShadow:
                      "0 15px 35px rgba(47,128,237,0.28)",
                    "&:hover": {
                      transform:
                        "translateY(-2px)",
                    },
                  }}
                >
                  Start Safe Journey
                </Button>

                <Button
                  onClick={() =>
                    scrollToSection(
                      "how-it-works"
                    )
                  }
                  sx={{
                    minHeight: 55,
                    px: 2.5,
                    borderRadius: "14px",
                    color: "#fff",
                    border:
                      "1px solid rgba(255,255,255,0.17)",
                    background:
                      "rgba(255,255,255,0.05)",
                    textTransform: "none",
                    fontWeight: 800,
                    "&:hover": {
                      background:
                        "rgba(255,255,255,0.10)",
                    },
                  }}
                >
                  Discover SafeTour
                </Button>
              </Stack>

              {/* HERO TRUST */}

              <Stack
                direction="row"
                spacing={3}
                sx={{
                  mt: 4,
                  flexWrap: "wrap",
                  rowGap: 1.5,
                }}
              >
                {[
                  "24/7 Monitoring",
                  "Smart GeoFence",
                  "Emergency Ready",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={0.7}
                    alignItems="center"
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "#4FE0A0",
                        fontSize: 17,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.62)",
                        fontSize: "0.76rem",
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            {/* HERO VISUAL */}

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  maxWidth: 600,
                  mx: "auto",
                }}
              >
                {/* Main dashboard */}

                <Paper
                  elevation={0}
                  sx={{
                    minHeight: {
                      xs: 430,
                      md: 510,
                    },
                    borderRadius: "30px",
                    overflow: "hidden",
                    position: "relative",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.035))",
                    border:
                      "1px solid rgba(255,255,255,0.14)",
                    backdropFilter:
                      "blur(20px)",
                    boxShadow:
                      "0 35px 80px rgba(0,0,0,0.25)",
                  }}
                >
                  {/* Fake map */}

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(90deg, rgba(109,213,250,0.06) 1px, transparent 1px), linear-gradient(rgba(109,213,250,0.06) 1px, transparent 1px)",
                      backgroundSize:
                        "55px 55px",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 45% 48%, rgba(53,194,232,0.12), transparent 28%)",
                    }}
                  />

                  {/* Safety zone */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: 250,
                      height: 250,
                      borderRadius: "50%",
                      left: "24%",
                      top: "28%",
                      background:
                        "rgba(16,185,129,0.08)",
                      border:
                        "2px solid rgba(16,185,129,0.35)",
                      boxShadow:
                        "0 0 50px rgba(16,185,129,0.08)",
                    }}
                  />

                  {/* Warning zone */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: 130,
                      height: 130,
                      borderRadius: "50%",
                      right: "7%",
                      bottom: "18%",
                      background:
                        "rgba(245,158,11,0.08)",
                      border:
                        "2px solid rgba(245,158,11,0.35)",
                    }}
                  />

                  {/* Map roads */}

                  <Box
                    sx={{
                      position: "absolute",
                      width: "80%",
                      height: 2,
                      left: "10%",
                      top: "57%",
                      background:
                        "rgba(255,255,255,0.12)",
                      transform:
                        "rotate(-12deg)",
                    }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      width: "65%",
                      height: 2,
                      left: "20%",
                      top: "45%",
                      background:
                        "rgba(255,255,255,0.10)",
                      transform:
                        "rotate(35deg)",
                    }}
                  />

                  {/* Header */}

                  <Box
                    sx={{
                      position: "absolute",
                      top: 20,
                      left: 20,
                      right: 20,
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 900,
                          fontSize: "0.9rem",
                        }}
                      >
                        Live Safety Map
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "rgba(255,255,255,0.48)",
                          fontSize: "0.66rem",
                        }}
                      >
                        Real-time protection overview
                      </Typography>
                    </Box>

                    <Chip
                      size="small"
                      label="LIVE"
                      sx={{
                        color: "#A5FFD7",
                        background:
                          "rgba(16,185,129,0.12)",
                        border:
                          "1px solid rgba(16,185,129,0.22)",
                        fontWeight: 900,
                        fontSize: "0.62rem",
                      }}
                    />
                  </Box>

                  {/* Tourist marker */}

                  <Box
                    sx={{
                      position: "absolute",
                      left: "46%",
                      top: "44%",
                    }}
                  >
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#35C2E8",
                        border:
                          "4px solid #fff",
                        boxShadow:
                          "0 0 0 12px rgba(53,194,232,0.12), 0 0 30px rgba(53,194,232,0.55)",
                      }}
                    />
                  </Box>

                  {/* Other tourists */}

                  {[
                    ["34%", "35%"],
                    ["58%", "50%"],
                    ["41%", "62%"],
                    ["66%", "35%"],
                  ].map(
                    ([top, left], index) => (
                      <Box
                        key={index}
                        sx={{
                          position:
                            "absolute",
                          top,
                          left,
                          width: 11,
                          height: 11,
                          borderRadius:
                            "50%",
                          background:
                            "#6DD5FA",
                          border:
                            "2px solid #fff",
                        }}
                      />
                    )
                  )}

                  {/* Safe label */}

                  <Box
                    sx={{
                      position: "absolute",
                      top: "31%",
                      left: "14%",
                    }}
                  >
                    <Chip
                      size="small"
                      label="SAFE ZONE"
                      sx={{
                        color: "#8CF1C6",
                        background:
                          "rgba(16,185,129,0.12)",
                        border:
                          "1px solid rgba(16,185,129,0.24)",
                        fontWeight: 800,
                        fontSize: "0.58rem",
                      }}
                    />
                  </Box>

                  {/* Warning label */}

                  <Box
                    sx={{
                      position: "absolute",
                      right: "5%",
                      bottom: "30%",
                    }}
                  >
                    <Chip
                      size="small"
                      label="WARNING"
                      sx={{
                        color: "#FFD58A",
                        background:
                          "rgba(245,158,11,0.12)",
                        border:
                          "1px solid rgba(245,158,11,0.24)",
                        fontWeight: 800,
                        fontSize: "0.58rem",
                      }}
                    />
                  </Box>

                  {/* Bottom status */}

                  <Box
                    sx={{
                      position: "absolute",
                      left: 18,
                      right: 18,
                      bottom: 18,
                      p: 1.7,
                      borderRadius: "18px",
                      background:
                        "rgba(5,20,36,0.78)",
                      border:
                        "1px solid rgba(255,255,255,0.09)",
                      backdropFilter:
                        "blur(14px)",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1.2}
                    >
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          background:
                            "linear-gradient(135deg, #2F80ED, #35C2E8)",
                        }}
                      >
                        <LocationOnRoundedIcon
                          sx={{
                            fontSize: 21,
                          }}
                        />
                      </Avatar>

                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: 800,
                            fontSize: "0.78rem",
                          }}
                        >
                          Tourist location protected
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.46)",
                            fontSize: "0.63rem",
                          }}
                        >
                          Safe zone • Monitoring active
                        </Typography>
                      </Box>

                      <CheckCircleRoundedIcon
                        sx={{
                          color: "#42E6A4",
                        }}
                      />
                    </Stack>
                  </Box>
                </Paper>

                {/* Floating safety card */}

                <Paper
                  elevation={0}
                  sx={{
                    position: "absolute",
                    top: 35,
                    right: {
                      xs: -5,
                      md: -38,
                    },
                    p: 1.6,
                    borderRadius: "17px",
                    background: "#fff",
                    boxShadow:
                      "0 18px 45px rgba(0,0,0,0.18)",
                    minWidth: 165,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "11px",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        background: "#E9FBF3",
                        color: "#10B981",
                      }}
                    >
                      <SecurityRoundedIcon
                        sx={{
                          fontSize: 20,
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#718096",
                          fontSize: "0.63rem",
                        }}
                      >
                        Safety status
                      </Typography>

                      <Typography
                        sx={{
                          color: "#0B1F36",
                          fontWeight: 900,
                          fontSize: "0.8rem",
                        }}
                      >
                        Protected
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                {/* Floating tourist card */}

                <Paper
                  elevation={0}
                  sx={{
                    position: "absolute",
                    bottom: 40,
                    left: {
                      xs: -5,
                      md: -38,
                    },
                    p: 1.6,
                    borderRadius: "17px",
                    background: "#fff",
                    boxShadow:
                      "0 18px 45px rgba(0,0,0,0.18)",
                    minWidth: 175,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <Box
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: "11px",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        background: "#EEF5FF",
                        color: "#1769E0",
                      }}
                    >
                      <GroupsRoundedIcon
                        sx={{
                          fontSize: 20,
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#718096",
                          fontSize: "0.63rem",
                        }}
                      >
                        Monitoring
                      </Typography>

                      <Typography
                        sx={{
                          color: "#0B1F36",
                          fontWeight: 900,
                          fontSize: "0.8rem",
                        }}
                      >
                        Active 24/7
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          QUICK STATS
      ===================================================== */}

      <Box
        sx={{
          background: "#fff",
          borderBottom:
            "1px solid #E5EDF6",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            sx={{
              py: 4,
            }}
          >
            {[
              {
                icon: <AccessTimeRoundedIcon />,
                value: "24/7",
                label: "Safety Monitoring",
              },
              {
                icon: <MapRoundedIcon />,
                value: "Smart",
                label: "GeoFence Protection",
              },
              {
                icon: <SmartToyRoundedIcon />,
                value: "AI",
                label: "Risk Intelligence",
              },
              {
                icon: <SosRoundedIcon />,
                value: "SOS",
                label: "Emergency Ready",
              },
            ].map((item, index) => (
              <Grid
                item
                xs={6}
                md={3}
                key={item.label}
                sx={{
                  borderRight: {
                    xs: "none",
                    md:
                      index < 3
                        ? "1px solid #E5EDF6"
                        : "none",
                  },
                  mb: {
                    xs:
                      index < 2
                        ? 3
                        : 0,
                    md: 0,
                  },
                }}
              >
                <Stack
                  alignItems="center"
                  spacing={0.6}
                >
                  <Box
                    sx={{
                      color: "#1769E0",
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    sx={{
                      color: "#0B1F36",
                      fontWeight: 900,
                      fontSize: "1.2rem",
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#718096",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          FEATURES
      ===================================================== */}

      <Box
        id="features"
        sx={{
          py: {
            xs: 9,
            md: 13,
          },
          background:
            "linear-gradient(180deg, #F5F9FE, #FFFFFF)",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 720,
              mx: "auto",
              textAlign: "center",
              mb: 7,
            }}
          >
            <Chip
              label="ONE CONNECTED SAFETY ECOSYSTEM"
              sx={{
                color: "#1769E0",
                background: "#EAF3FF",
                fontWeight: 800,
                letterSpacing: 0.8,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                color: "#0B1F36",
                fontWeight: 900,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.25rem",
                },
                lineHeight: 1.1,
                letterSpacing: "-1.5px",
              }}
            >
              Everything designed around
              <Box
                component="span"
                sx={{
                  color: "#1769E0",
                }}
              >
                {" "}
                safety.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              From location intelligence to emergency
              response, SafeTour AI connects the tools
              needed to build a smarter tourist safety
              experience.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {features.map((feature) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={feature.title}
              >
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    borderRadius: "22px",
                    border:
                      "1px solid #DFE9F4",
                    background: "#fff",
                    transition:
                      "0.3s ease",
                    "&:hover": {
                      transform:
                        "translateY(-8px)",
                      boxShadow:
                        "0 25px 60px rgba(15,55,95,0.11)",
                      borderColor:
                        "#C8DCF2",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3.5,
                    }}
                  >
                    <Box
                      sx={{
                        width: 58,
                        height: 58,
                        borderRadius: "17px",
                        display: "flex",
                        alignItems:
                          "center",
                        justifyContent:
                          "center",
                        color: "#fff",
                        background:
                          feature.color,
                        boxShadow: `0 12px 25px ${feature.color}35`,
                        mb: 3,
                      }}
                    >
                      {feature.icon}
                    </Box>

                    <Typography
                      sx={{
                        color: "#0B1F36",
                        fontWeight: 900,
                        fontSize: "1.1rem",
                      }}
                    >
                      {feature.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#718096",
                        lineHeight: 1.7,
                        fontSize: "0.86rem",
                        mt: 1,
                      }}
                    >
                      {feature.description}
                    </Typography>

                    <Button
                      onClick={() =>
                        scrollToSection(
                          "how-it-works"
                        )
                      }
                      endIcon={
                        <ArrowForwardRoundedIcon />
                      }
                      sx={{
                        mt: 2,
                        px: 0,
                        color:
                          feature.color,
                        textTransform:
                          "none",
                        fontWeight: 800,
                      }}
                    >
                      Explore feature
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}

      <Box
        id="how-it-works"
        sx={{
          py: {
            xs: 9,
            md: 13,
          },
          background: "#071A2F",
          position: "relative",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={7}
            alignItems="center"
          >
            <Grid item xs={12} md={5}>
              <Chip
                label="HOW SAFETOUR WORKS"
                sx={{
                  color: "#6DD5FA",
                  background:
                    "rgba(53,194,232,0.09)",
                  border:
                    "1px solid rgba(109,213,250,0.17)",
                  fontWeight: 800,
                  letterSpacing: 0.8,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 900,
                  fontSize: {
                    xs: "2.3rem",
                    md: "3.3rem",
                  },
                  lineHeight: 1.08,
                  letterSpacing: "-1.5px",
                }}
              >
                One platform.
                <Box
                  component="span"
                  sx={{
                    display: "block",
                    color: "#6DD5FA",
                  }}
                >
                  Connected protection.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.60)",
                  lineHeight: 1.8,
                  mt: 2.5,
                }}
              >
                SafeTour AI connects tourists, locations,
                safety zones, alerts and administrators
                into one coordinated system.
              </Typography>

              <Button
                onClick={() =>
                  navigate("/register")
                }
                endIcon={
                  <ArrowForwardRoundedIcon />
                }
                sx={{
                  mt: 4,
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, #2F80ED, #35C2E8)",
                  borderRadius: "13px",
                  px: 2.5,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 900,
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #1769E0, #00A8C7)",
                  },
                }}
              >
                Create Tourist Account
              </Button>
            </Grid>

            <Grid item xs={12} md={7}>
              <Stack spacing={2}>
                {[
                  {
                    number: "01",
                    title: "Create your profile",
                    text: "Register as a tourist and create your safety profile.",
                  },
                  {
                    number: "02",
                    title: "Start your journey",
                    text: "Use the platform while exploring your destination.",
                  },
                  {
                    number: "03",
                    title: "Stay informed",
                    text: "Receive important safety information and alerts.",
                  },
                  {
                    number: "04",
                    title: "Get assistance",
                    text: "Use the emergency workflow whenever support is needed.",
                  },
                ].map((item) => (
                  <Paper
                    key={item.number}
                    elevation={0}
                    sx={{
                      p: 2.5,
                      borderRadius: "20px",
                      background:
                        "rgba(255,255,255,0.05)",
                      border:
                        "1px solid rgba(255,255,255,0.09)",
                      transition:
                        "0.25s ease",
                      "&:hover": {
                        background:
                          "rgba(255,255,255,0.08)",
                        transform:
                          "translateX(5px)",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                    >
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          minWidth: 52,
                          borderRadius: "15px",
                          display: "flex",
                          alignItems:
                            "center",
                          justifyContent:
                            "center",
                          color: "#6DD5FA",
                          background:
                            "rgba(53,194,232,0.09)",
                          border:
                            "1px solid rgba(53,194,232,0.14)",
                          fontWeight: 900,
                        }}
                      >
                        {item.number}
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color: "#fff",
                            fontWeight: 800,
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.50)",
                            fontSize: "0.78rem",
                            lineHeight: 1.6,
                            mt: 0.5,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          ADMIN + TOURIST SPLIT
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 9,
            md: 12,
          },
          background: "#fff",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              textAlign: "center",
              maxWidth: 700,
              mx: "auto",
              mb: 6,
            }}
          >
            <Chip
              label="BUILT FOR TWO SIDES OF SAFETY"
              sx={{
                color: "#1769E0",
                background: "#EAF3FF",
                fontWeight: 800,
                letterSpacing: 0.7,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                color: "#0B1F36",
                fontWeight: 900,
                fontSize: {
                  xs: "2.2rem",
                  md: "3.1rem",
                },
              }}
            >
              One platform.
              <Box
                component="span"
                sx={{
                  color: "#1769E0",
                }}
              >
                {" "}
                Two experiences.
              </Box>
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
            justifyContent="center"
          >
            {/* TOURIST */}

            <Grid item xs={12} md={5.5}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: "25px",
                  p: 1,
                  background:
                    "linear-gradient(145deg, #F4F9FF, #FFFFFF)",
                  border:
                    "1px solid #DDE9F5",
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "18px",
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      background:
                        "linear-gradient(135deg, #2F80ED, #35C2E8)",
                      color: "#fff",
                      mb: 3,
                    }}
                  >
                    <TravelExploreRoundedIcon />
                  </Box>

                  <Chip
                    label="FOR TOURISTS"
                    size="small"
                    sx={{
                      color: "#1769E0",
                      background: "#EAF3FF",
                      fontWeight: 800,
                      mb: 1.5,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#0B1F36",
                      fontWeight: 900,
                      fontSize: "1.6rem",
                    }}
                  >
                    Travel with confidence.
                  </Typography>

                  <Typography
                    sx={{
                      color: "#718096",
                      lineHeight: 1.7,
                      mt: 1,
                    }}
                  >
                    Create a profile, access safety
                    services and stay connected with
                    the SafeTour ecosystem during your
                    journey.
                  </Typography>

                  <Stack
                    spacing={1}
                    sx={{ mt: 3 }}
                  >
                    {[
                      "Personal safety profile",
                      "Location safety",
                      "GeoFence awareness",
                      "Emergency SOS",
                    ].map((item) => (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        key={item}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            color: "#10B981",
                            fontSize: 18,
                          }}
                        />

                        <Typography
                          sx={{
                            color: "#475569",
                            fontSize: "0.82rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button
                    onClick={() =>
                      navigate("/register")
                    }
                    fullWidth
                    variant="contained"
                    endIcon={
                      <ArrowForwardRoundedIcon />
                    }
                    sx={{
                      mt: 3,
                      minHeight: 50,
                      borderRadius: "13px",
                      textTransform: "none",
                      fontWeight: 900,
                      background:
                        "linear-gradient(135deg, #1769E0, #35C2E8)",
                    }}
                  >
                    Get Started as Tourist
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* ADMIN */}

            <Grid item xs={12} md={5.5}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  borderRadius: "25px",
                  p: 1,
                  background:
                    "linear-gradient(145deg, #071A2F, #0B3658)",
                  border:
                    "1px solid rgba(53,194,232,0.15)",
                }}
              >
                <CardContent sx={{ p: 3.5 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: "18px",
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      background:
                        "rgba(53,194,232,0.10)",
                      border:
                        "1px solid rgba(109,213,250,0.18)",
                      color: "#6DD5FA",
                      mb: 3,
                    }}
                  >
                    <AdminPanelSettingsRoundedIcon />
                  </Box>

                  <Chip
                    label="FOR ADMINISTRATORS"
                    size="small"
                    sx={{
                      color: "#6DD5FA",
                      background:
                        "rgba(53,194,232,0.09)",
                      border:
                        "1px solid rgba(109,213,250,0.14)",
                      fontWeight: 800,
                      mb: 1.5,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 900,
                      fontSize: "1.6rem",
                    }}
                  >
                    Manage safety smarter.
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "rgba(255,255,255,0.57)",
                      lineHeight: 1.7,
                      mt: 1,
                    }}
                  >
                    Authorized administrators can
                    monitor tourists, GeoFences, SOS
                    events, incidents and safety reports.
                  </Typography>

                  <Stack
                    spacing={1}
                    sx={{ mt: 3 }}
                  >
                    {[
                      "Tourist monitoring",
                      "GeoFence management",
                      "SOS & incident response",
                      "Safety reports",
                    ].map((item) => (
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                        key={item}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            color: "#42E6A4",
                            fontSize: 18,
                          }}
                        />

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.68)",
                            fontSize: "0.82rem",
                          }}
                        >
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>

                  <Button
                    onClick={() =>
                      navigate(
                        "/admin-login"
                      )
                    }
                    fullWidth
                    variant="outlined"
                    startIcon={
                      <AdminPanelSettingsRoundedIcon />
                    }
                    sx={{
                      mt: 3,
                      minHeight: 50,
                      borderRadius: "13px",
                      textTransform: "none",
                      fontWeight: 900,
                      color: "#6DD5FA",
                      borderColor:
                        "rgba(109,213,250,0.30)",
                      "&:hover": {
                        borderColor:
                          "#6DD5FA",
                        background:
                          "rgba(109,213,250,0.08)",
                      },
                    }}
                  >
                    Open Admin Portal
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <Box
        id="about"
        sx={{
          py: {
            xs: 9,
            md: 13,
          },
          background: "#F5F9FE",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={7}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Chip
                label="ABOUT SAFETOUR AI"
                sx={{
                  color: "#1769E0",
                  background: "#EAF3FF",
                  fontWeight: 800,
                  letterSpacing: 0.8,
                  mb: 2,
                }}
              />

              <Typography
                sx={{
                  color: "#0B1F36",
                  fontWeight: 900,
                  fontSize: {
                    xs: "2.3rem",
                    md: "3.3rem",
                  },
                  lineHeight: 1.1,
                }}
              >
                Technology built around
                <Box
                  component="span"
                  sx={{
                    color: "#1769E0",
                  }}
                >
                  {" "}
                  tourist safety.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  lineHeight: 1.85,
                  mt: 2.5,
                  maxWidth: 600,
                }}
              >
                SafeTour AI combines modern web technology,
                location intelligence, GeoFence management,
                emergency response and analytics to create
                a unified tourist safety ecosystem.
              </Typography>

              <Stack
                spacing={1.5}
                sx={{ mt: 3 }}
              >
                {[
                  "Tourist-centric experience",
                  "Centralized safety monitoring",
                  "Smart geographic zones",
                  "Incident and emergency management",
                ].map((item) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    key={item}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "#1769E0",
                        fontSize: 19,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#334155",
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {[
                  {
                    icon: <MapRoundedIcon />,
                    title: "Location Aware",
                    text: "Safety features connected to geographic context.",
                  },
                  {
                    icon: <SecurityRoundedIcon />,
                    title: "Safety First",
                    text: "Designed around controlled safety workflows.",
                  },
                  {
                    icon: <AnalyticsRoundedIcon />,
                    title: "Data Driven",
                    text: "Turn safety events into useful insights.",
                  },
                  {
                    icon: <ExploreRoundedIcon />,
                    title: "Tourist Focused",
                    text: "Built for modern travel experiences.",
                  },
                ].map((item) => (
                  <Grid
                    item
                    xs={6}
                    key={item.title}
                  >
                    <Card
                      elevation={0}
                      sx={{
                        height: "100%",
                        borderRadius: "21px",
                        border:
                          "1px solid #DDE7F2",
                        background: "#fff",
                        transition:
                          "0.25s ease",
                        "&:hover": {
                          transform:
                            "translateY(-5px)",
                          boxShadow:
                            "0 20px 45px rgba(20,60,100,0.09)",
                        },
                      }}
                    >
                      <CardContent>
                        <Box
                          sx={{
                            width: 46,
                            height: 46,
                            borderRadius:
                              "13px",
                            display: "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "center",
                            color: "#1769E0",
                            background:
                              "#EAF3FF",
                            mb: 2,
                          }}
                        >
                          {item.icon}
                        </Box>

                        <Typography
                          sx={{
                            color: "#0B1F36",
                            fontWeight: 900,
                            fontSize:
                              "0.9rem",
                          }}
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          sx={{
                            color: "#718096",
                            fontSize:
                              "0.72rem",
                            lineHeight: 1.6,
                            mt: 0.7,
                          }}
                        >
                          {item.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <Box
        id="faq"
        sx={{
          py: {
            xs: 9,
            md: 13,
          },
          background: "#fff",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
              mb: 5,
            }}
          >
            <Chip
              label="FAQ"
              sx={{
                color: "#1769E0",
                background: "#EAF3FF",
                fontWeight: 800,
                letterSpacing: 0.8,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                color: "#0B1F36",
                fontWeight: 900,
                fontSize: {
                  xs: "2.2rem",
                  md: "3rem",
                },
              }}
            >
              Frequently asked questions
            </Typography>

            <Typography
              sx={{
                color: "#718096",
                mt: 1.5,
              }}
            >
              Quick answers about the SafeTour AI platform.
            </Typography>
          </Box>

          {faqs.map((faq) => (
            <Accordion
              key={faq.question}
              elevation={0}
              sx={{
                border:
                  "1px solid #E1EAF4",
                borderRadius:
                  "15px !important",
                mb: 1.5,
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreRoundedIcon
                    sx={{
                      color: "#1769E0",
                    }}
                  />
                }
                sx={{
                  px: 2.5,
                  py: 0.8,
                }}
              >
                <Typography
                  sx={{
                    color: "#0B1F36",
                    fontWeight: 800,
                    fontSize: "0.92rem",
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={{
                  px: 2.5,
                  pb: 2.5,
                }}
              >
                <Typography
                  sx={{
                    color: "#64748B",
                    lineHeight: 1.8,
                    fontSize: "0.84rem",
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Container>
      </Box>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <Box
        sx={{
          py: {
            xs: 9,
            md: 11,
          },
          background:
            "linear-gradient(135deg, #0A2C4E, #1769E0)",
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <ShieldRoundedIcon
              sx={{
                color: "#6DD5FA",
                fontSize: 40,
                mb: 2,
              }}
            />

            <Typography
              sx={{
                color: "#fff",
                fontWeight: 900,
                fontSize: {
                  xs: "2.3rem",
                  md: "3.4rem",
                },
                lineHeight: 1.1,
              }}
            >
              Your next journey starts here.
            </Typography>

            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.67)",
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              Create your SafeTour profile and experience a
              smarter approach to tourist safety.
            </Typography>

            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              justifyContent="center"
              spacing={1.5}
              sx={{ mt: 4 }}
            >
              <Button
                onClick={() =>
                  navigate("/register")
                }
                variant="contained"
                endIcon={
                  <ArrowForwardRoundedIcon />
                }
                sx={{
                  background: "#fff",
                  color: "#1769E0",
                  borderRadius: "13px",
                  px: 3,
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 900,
                  "&:hover": {
                    background: "#F8FAFC",
                  },
                }}
              >
                Get Started
              </Button>

              <Button
                onClick={() =>
                  navigate("/admin-login")
                }
                startIcon={
                  <AdminPanelSettingsRoundedIcon />
                }
                sx={{
                  color: "#fff",
                  border:
                    "1px solid rgba(255,255,255,0.22)",
                  borderRadius: "13px",
                  px: 3,
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 800,
                }}
              >
                Admin Portal
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Box
        sx={{
          background: "#06182D",
          color: "#fff",
          pt: 7,
          pb: 3,
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={5}
            sx={{ mb: 5 }}
          >
            <Grid item xs={12} md={5}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    borderRadius: "13px",
                    display: "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    background:
                      "linear-gradient(135deg, #2F80ED, #35C2E8)",
                  }}
                >
                  <ShieldRoundedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 900,
                    }}
                  >
                    SafeTour AI
                  </Typography>

                  <Typography
                    sx={{
                      color: "#6DD5FA",
                      fontSize: "0.6rem",
                      letterSpacing: 1.5,
                    }}
                  >
                    SMART TOURIST SAFETY
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.50)",
                  maxWidth: 430,
                  lineHeight: 1.8,
                  fontSize: "0.82rem",
                }}
              >
                A smart tourist safety platform connecting
                intelligent monitoring, GeoFencing, emergency
                response and safety analytics.
              </Typography>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography
                sx={{
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Platform
              </Typography>

              <Stack spacing={1}>
                {[
                  ["Safety", "features"],
                  ["How It Works", "how-it-works"],
                  ["About", "about"],
                  ["FAQ", "faq"],
                ].map(([label, id]) => (
                  <Typography
                    key={id}
                    onClick={() =>
                      scrollToSection(id)
                    }
                    sx={{
                      color:
                        "rgba(255,255,255,0.50)",
                      fontSize: "0.77rem",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#6DD5FA",
                      },
                    }}
                  >
                    {label}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            <Grid item xs={6} sm={3} md={2}>
              <Typography
                sx={{
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Access
              </Typography>

              <Stack spacing={1}>
                <Typography
                  onClick={() =>
                    navigate("/login")
                  }
                  sx={{
                    color:
                      "rgba(255,255,255,0.50)",
                    fontSize: "0.77rem",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#6DD5FA",
                    },
                  }}
                >
                  Tourist Sign In
                </Typography>

                <Typography
                  onClick={() =>
                    navigate("/register")
                  }
                  sx={{
                    color:
                      "rgba(255,255,255,0.50)",
                    fontSize: "0.77rem",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#6DD5FA",
                    },
                  }}
                >
                  Tourist Register
                </Typography>

                <Typography
                  onClick={() =>
                    navigate("/admin-login")
                  }
                  sx={{
                    color:
                      "rgba(255,255,255,0.50)",
                    fontSize: "0.77rem",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#6DD5FA",
                    },
                  }}
                >
                  Admin Portal
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Typography
                sx={{
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Safety Promise
              </Typography>

              <Stack spacing={1.3}>
                {[
                  "Safety-focused design",
                  "Continuous monitoring",
                  "Smart location awareness",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "#42E6A4",
                        fontSize: 17,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.52)",
                        fontSize: "0.75rem",
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
          </Grid>

          <Divider
            sx={{
              borderColor:
                "rgba(255,255,255,0.08)",
            }}
          />

          <Box
            sx={{
              pt: 3,
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                color:
                  "rgba(255,255,255,0.35)",
                fontSize: "0.68rem",
              }}
            >
              © 2026 SafeTour AI. Smart Tourist Safety
              Platform.
            </Typography>

            <Button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              endIcon={
                <ArrowUpwardRoundedIcon />
              }
              sx={{
                color:
                  "rgba(255,255,255,0.55)",
                textTransform: "none",
                fontSize: "0.7rem",
              }}
            >
              Back to top
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;