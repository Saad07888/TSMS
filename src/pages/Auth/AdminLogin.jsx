import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Chip,
  Stack,
  Divider,
  Alert,
  Snackbar,
  CircularProgress,
} from "@mui/material";

import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import LockRoundedIcon from "@mui/icons-material/LockRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

/* =========================================================
   API CONFIGURATION
========================================================= */

const API_BASE_URL = "http://localhost:5000";

/* =========================================================
   ADMIN LOGIN COMPONENT
========================================================= */

const AdminLogin = () => {
  const navigate = useNavigate();

  /* =======================================================
     STATE
  ======================================================= */

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  /* =======================================================
     HANDLE INPUT CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  /* =======================================================
     HANDLE LOGIN
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    /* -------------------------------------------------------
       CLEAR PREVIOUS MESSAGES
    ------------------------------------------------------- */

    setError("");
    setSuccessMessage("");

    /* -------------------------------------------------------
       BASIC VALIDATION
    ------------------------------------------------------- */

    const email = formData.email.trim();
    const password = formData.password;

    if (!email || !password) {
      setError(
        "Please enter your administrator email and password."
      );
      return;
    }

    if (!email.includes("@")) {
      setError(
        "Please enter a valid administrator email address."
      );
      return;
    }

    /* -------------------------------------------------------
       START LOADING
    ------------------------------------------------------- */

    setLoading(true);

    try {
      /* =====================================================
         CALL REAL BACKEND API
      ===================================================== */

      const response = await fetch(
        `${API_BASE_URL}/api/auth/admin/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      /* =====================================================
         READ RESPONSE
      ===================================================== */

      let data;

      try {
        data = await response.json();
      } catch {
        data = {
          success: false,
          message:
            "The server returned an invalid response.",
        };
      }

      /* =====================================================
         HANDLE API ERROR
      ===================================================== */

      if (!response.ok || !data.success) {
        setError(
          data?.message ||
            "Unable to sign in. Please check your credentials."
        );

        return;
      }

      /* =====================================================
         VERIFY TOKEN
      ===================================================== */

      if (!data.token) {
        setError(
          "Login succeeded but the authentication token was not received."
        );

        return;
      }

      /* =====================================================
         STORE AUTHENTICATION DATA
      ===================================================== */

      const storage = formData.remember
        ? localStorage
        : sessionStorage;

      storage.setItem("adminToken", data.token);

      storage.setItem(
        "admin",
        JSON.stringify(data.admin || {})
      );

      storage.setItem(
        "isAdminLoggedIn",
        "true"
      );

      /*
        Keep this for compatibility with your existing
        Dashboard authentication logic if it checks it.
      */

      storage.setItem(
        "isLoggedIn",
        "true"
      );

      /* =====================================================
         SUCCESS MESSAGE
      ===================================================== */

      setSuccessMessage(
        `Welcome back${
          data.admin?.name
            ? `, ${data.admin.name}`
            : ""
        }!`
      );

      setSnackbarOpen(true);

      /* =====================================================
         REDIRECT TO DASHBOARD
      ===================================================== */

      setTimeout(() => {
        navigate("/dashboard");
      }, 650);
    } catch (error) {
      console.error(
        "Admin login request failed:",
        error
      );

      /* =====================================================
         NETWORK ERROR
      ===================================================== */

      setError(
        "Unable to connect to the SafeTour AI server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     HANDLE SNACKBAR CLOSE
  ========================================================= */

  const handleSnackbarClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <Box
      sx={{
        minHeight: "100vh",

        background:
          "linear-gradient(135deg, #06182D 0%, #0A2D50 48%, #EAF4FF 48%, #F7FBFF 100%)",

        display: "flex",

        alignItems: "center",

        py: {
          xs: 3,
          md: 5,
        },

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          width: 430,
          height: 430,

          borderRadius: "50%",

          border:
            "1px solid rgba(53,194,232,0.12)",

          top: -200,
          left: -180,

          pointerEvents: "none",
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: 350,
          height: 350,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(47,128,237,0.14), transparent 70%)",

          right: -100,
          bottom: -100,

          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* ===================================================
            TOP BAR
        =================================================== */}

        <Box
          sx={{
            display: "flex",

            justifyContent: "space-between",

            alignItems: "center",

            mb: {
              xs: 3,
              md: 4,
            },
          }}
        >
          {/* =================================================
              LOGO
          ================================================= */}

          <Box
            onClick={() => navigate("/")}
            sx={{
              display: "flex",

              alignItems: "center",

              gap: 1.2,

              cursor: "pointer",

              userSelect: "none",
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
                  "0 10px 30px rgba(47,128,237,0.28)",
              }}
            >
              <ShieldRoundedIcon
                sx={{
                  color: "#fff",
                  fontSize: 25,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#fff",

                  fontWeight: 900,

                  lineHeight: 1,
                }}
              >
                SafeTour
              </Typography>

              <Typography
                sx={{
                  color: "#6DD5FA",

                  fontSize: "0.62rem",

                  fontWeight: 800,

                  letterSpacing: 1.6,

                  mt: 0.5,
                }}
              >
                AI SAFETY
              </Typography>
            </Box>
          </Box>

          {/* =================================================
              BACK HOME
          ================================================= */}

          <Button
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => navigate("/")}
            disabled={loading}
            sx={{
              color: "#fff",

              textTransform: "none",

              fontWeight: 700,

              borderRadius: "12px",

              "&:hover": {
                background:
                  "rgba(255,255,255,0.08)",
              },
            }}
          >
            Back to Home
          </Button>
        </Box>

        {/* ===================================================
            MAIN CARD
        =================================================== */}

        <Paper
          elevation={0}
          sx={{
            borderRadius: "30px",

            overflow: "hidden",

            background: "#fff",

            boxShadow:
              "0 35px 90px rgba(7,34,60,0.20)",

            border:
              "1px solid rgba(255,255,255,0.7)",
          }}
        >
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
            }}
          >
            {/* =================================================
                LEFT ADMIN VISUAL
            ================================================= */}

            <Box
              sx={{
                minHeight: {
                  md: 650,
                },

                p: {
                  xs: 4,
                  md: 5,
                },

                background:
                  "linear-gradient(145deg, #06182D 0%, #0A3154 55%, #0B4A69 100%)",

                position: "relative",

                overflow: "hidden",
              }}
            >
              {/* ===============================================
                  DECORATIVE CIRCLES
              =============================================== */}

              <Box
                sx={{
                  position: "absolute",

                  width: 350,
                  height: 350,

                  borderRadius: "50%",

                  border:
                    "1px solid rgba(109,213,250,0.13)",

                  right: -180,
                  top: 50,

                  pointerEvents: "none",
                }}
              />

              <Box
                sx={{
                  position: "absolute",

                  width: 250,
                  height: 250,

                  borderRadius: "50%",

                  border:
                    "1px solid rgba(109,213,250,0.10)",

                  right: -130,
                  top: 100,

                  pointerEvents: "none",
                }}
              />

              {/* ===============================================
                  ADMIN CHIP
              =============================================== */}

              <Chip
                icon={
                  <AdminPanelSettingsRoundedIcon
                    sx={{
                      color:
                        "#6DD5FA !important",
                    }}
                  />
                }
                label="ADMIN CONTROL CENTER"
                sx={{
                  color: "#B9EFFF",

                  background:
                    "rgba(53,194,232,0.10)",

                  border:
                    "1px solid rgba(109,213,250,0.18)",

                  fontWeight: 800,

                  letterSpacing: 0.8,
                }}
              />

              {/* ===============================================
                  HERO TITLE
              =============================================== */}

              <Typography
                sx={{
                  color: "#fff",

                  fontWeight: 900,

                  fontSize: {
                    xs: "2.2rem",
                    md: "2.8rem",
                  },

                  lineHeight: 1.08,

                  mt: 3,

                  maxWidth: 450,
                }}
              >
                Protect more.

                <Box
                  component="span"
                  sx={{
                    display: "block",

                    color: "#6DD5FA",
                  }}
                >
                  Monitor smarter.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.62)",

                  lineHeight: 1.8,

                  mt: 2,

                  maxWidth: 450,
                }}
              >
                Access the SafeTour AI administration
                center to monitor tourists, GeoFences,
                incidents, SOS alerts and safety reports.
              </Typography>

              {/* ===============================================
                  DASHBOARD PREVIEW
              =============================================== */}

              <Box
                sx={{
                  mt: 5,

                  p: 2,

                  borderRadius: "24px",

                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {/* =============================================
                    PREVIEW HEADER
                ============================================= */}

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: "#fff",

                        fontWeight: 800,

                        fontSize: "0.85rem",
                      }}
                    >
                      Safety Command Center
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.45)",

                        fontSize: "0.65rem",
                      }}
                    >
                      Live system overview
                    </Typography>
                  </Box>

                  <Chip
                    size="small"
                    icon={
                      <Box
                        sx={{
                          width: 7,
                          height: 7,

                          borderRadius: "50%",

                          background: "#42E6A4",
                        }}
                      />
                    }
                    label="ONLINE"
                    sx={{
                      color: "#A9FFD7",

                      background:
                        "rgba(16,185,129,0.10)",

                      fontSize: "0.58rem",

                      fontWeight: 800,
                    }}
                  />
                </Stack>

                {/* =============================================
                    DASHBOARD CARDS
                ============================================= */}

                <Stack spacing={1.2}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 1.5,

                      borderRadius: "15px",

                      background:
                        "rgba(255,255,255,0.07)",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1.2}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,

                          borderRadius: "11px",

                          display: "flex",

                          alignItems: "center",

                          justifyContent: "center",

                          background:
                            "rgba(47,128,237,0.18)",

                          color: "#6DD5FA",
                        }}
                      >
                        <DashboardRoundedIcon />
                      </Box>

                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{
                            color: "#fff",

                            fontWeight: 800,

                            fontSize: "0.75rem",
                          }}
                        >
                          Tourist Monitoring
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.45)",

                            fontSize: "0.62rem",
                          }}
                        >
                          Active monitoring enabled
                        </Typography>
                      </Box>

                      <Typography
                        sx={{
                          color: "#6DD5FA",

                          fontWeight: 900,

                          fontSize: "0.8rem",
                        }}
                      >
                        LIVE
                      </Typography>
                    </Stack>
                  </Paper>

                  <Paper
                    elevation={0}
                    sx={{
                      p: 1.5,

                      borderRadius: "15px",

                      background:
                        "rgba(255,255,255,0.07)",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1.2}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,

                          borderRadius: "11px",

                          display: "flex",

                          alignItems: "center",

                          justifyContent: "center",

                          background:
                            "rgba(16,185,129,0.13)",

                          color: "#42E6A4",
                        }}
                      >
                        <SecurityRoundedIcon />
                      </Box>

                      <Box sx={{ flexGrow: 1 }}>
                        <Typography
                          sx={{
                            color: "#fff",

                            fontWeight: 800,

                            fontSize: "0.75rem",
                          }}
                        >
                          Safety Status
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "rgba(255,255,255,0.45)",

                            fontSize: "0.62rem",
                          }}
                        >
                          All systems operational
                        </Typography>
                      </Box>

                      <CheckCircleRoundedIcon
                        sx={{
                          color: "#42E6A4",

                          fontSize: 20,
                        }}
                      />
                    </Stack>
                  </Paper>
                </Stack>
              </Box>

              {/* ===============================================
                  ADMIN CAPABILITIES
              =============================================== */}

              <Stack
                spacing={1.3}
                sx={{ mt: 4 }}
              >
                {[
                  "Tourist management",
                  "GeoFence monitoring",
                  "SOS & incident response",
                ].map((item) => (
                  <Stack
                    key={item}
                    direction="row"
                    spacing={1}
                    alignItems="center"
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "#57D6A1",

                        fontSize: 18,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.68)",

                        fontSize: "0.8rem",
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* =================================================
                RIGHT LOGIN FORM
            ================================================= */}

            <Box
              sx={{
                p: {
                  xs: 3,
                  sm: 5,
                  md: 6,
                },

                display: "flex",

                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",

                  maxWidth: 500,

                  mx: "auto",
                }}
              >
                {/* =============================================
                    HEADING
                ============================================= */}

                <Box sx={{ mb: 4 }}>
                  <Chip
                    icon={
                      <LockRoundedIcon
                        sx={{
                          fontSize:
                            "16px !important",
                        }}
                      />
                    }
                    label="AUTHORIZED ACCESS"
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
                        xs: "2rem",
                        md: "2.5rem",
                      },

                      lineHeight: 1.1,
                    }}
                  >
                    Admin Sign In
                  </Typography>

                  <Typography
                    sx={{
                      color: "#718096",

                      mt: 1,

                      lineHeight: 1.6,
                    }}
                  >
                    Sign in to access the SafeTour AI
                    control center.
                  </Typography>
                </Box>

                {/* =============================================
                    ERROR
                ============================================= */}

                {error && (
                  <Alert
                    severity="error"
                    onClose={() => setError("")}
                    sx={{
                      mb: 2.5,

                      borderRadius: "12px",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                {/* =============================================
                    LOGIN FORM
                ============================================= */}

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                >
                  {/* ===========================================
                      EMAIL
                  =========================================== */}

                  <TextField
                    fullWidth
                    required
                    label="Administrator Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="admin@safetour.ai"
                    autoComplete="email"
                    disabled={loading}
                    sx={{
                      mb: 2,

                      "& .MuiOutlinedInput-root": {
                        borderRadius: "13px",

                        background: "#FCFDFF",

                        "&:hover fieldset": {
                          borderColor: "#1769E0",
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: "#1769E0",
                          borderWidth: 2,
                        },
                      },

                      "& .MuiInputLabel-root.Mui-focused":
                        {
                          color: "#1769E0",
                        },
                    }}
                  />

                  {/* ===========================================
                      PASSWORD
                  =========================================== */}

                  <TextField
                    fullWidth
                    required
                    label="Password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    disabled={loading}
                    sx={{
                      mb: 1,

                      "& .MuiOutlinedInput-root": {
                        borderRadius: "13px",

                        background: "#FCFDFF",

                        "&:hover fieldset": {
                          borderColor: "#1769E0",
                        },

                        "&.Mui-focused fieldset": {
                          borderColor: "#1769E0",
                          borderWidth: 2,
                        },
                      },

                      "& .MuiInputLabel-root.Mui-focused":
                        {
                          color: "#1769E0",
                        },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            type="button"
                            aria-label={
                              showPassword
                                ? "Hide password"
                                : "Show password"
                            }
                            onClick={() =>
                              setShowPassword(
                                (prev) => !prev
                              )
                            }
                            disabled={loading}
                            edge="end"
                            sx={{
                              color: "#64748B",

                              "&:hover": {
                                color: "#1769E0",

                                background:
                                  "rgba(23,105,224,0.06)",
                              },
                            }}
                          >
                            {showPassword ? (
                              <VisibilityOffRoundedIcon />
                            ) : (
                              <VisibilityRoundedIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* =============================================
                      REMEMBER + FORGOT
                  ============================================= */}

                  <Box
                    sx={{
                      display: "flex",

                      justifyContent:
                        "space-between",

                      alignItems: "center",

                      mb: 3,

                      gap: 1,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="remember"
                          checked={
                            formData.remember
                          }
                          onChange={handleChange}
                          disabled={loading}
                          sx={{
                            color: "#B8C5D3",

                            "&.Mui-checked": {
                              color: "#1769E0",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{
                            color: "#64748B",

                            fontSize: "0.78rem",
                          }}
                        >
                          Remember me
                        </Typography>
                      }
                    />

                    <Button
                      type="button"
                      disabled={loading}
                      onClick={() => {
                        setError(
                          "Password recovery is not connected yet. We will implement secure admin password recovery after the core authentication flow is complete."
                        );
                      }}
                      sx={{
                        color: "#1769E0",

                        textTransform: "none",

                        fontWeight: 700,

                        fontSize: "0.78rem",

                        px: 0,

                        minWidth: "auto",
                      }}
                    >
                      Forgot password?
                    </Button>
                  </Box>

                  {/* =============================================
                      LOGIN BUTTON
                  ============================================= */}

                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    endIcon={
                      loading ? (
                        <CircularProgress
                          size={19}
                          thickness={5}
                          sx={{
                            color: "#fff",
                          }}
                        />
                      ) : (
                        <ArrowForwardRoundedIcon />
                      )
                    }
                    sx={{
                      minHeight: 55,

                      borderRadius: "14px",

                      textTransform: "none",

                      fontWeight: 900,

                      fontSize: "0.95rem",

                      background:
                        "linear-gradient(135deg, #1769E0, #35C2E8)",

                      boxShadow:
                        "0 12px 30px rgba(23,105,224,0.22)",

                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #1257BF, #00A8C7)",

                        transform:
                          "translateY(-2px)",

                        boxShadow:
                          "0 16px 34px rgba(23,105,224,0.28)",
                      },

                      "&:disabled": {
                        background:
                          "linear-gradient(135deg, #8DB7ED, #8DD9E9)",

                        color: "#fff",
                      },

                      transition:
                        "transform .25s ease, box-shadow .25s ease",
                    }}
                  >
                    {loading
                      ? "Authenticating..."
                      : "Secure Admin Login"}
                  </Button>
                </Box>

                {/* =============================================
                    DIVIDER
                ============================================= */}

                <Divider sx={{ my: 3 }}>
                  <Typography
                    sx={{
                      color: "#94A3B8",

                      fontSize: "0.68rem",

                      fontWeight: 700,
                    }}
                  >
                    SAFE TOUR AI
                  </Typography>
                </Divider>

                {/* =============================================
                    SECURITY NOTICE
                ============================================= */}

                <Paper
                  elevation={0}
                  sx={{
                    p: 2,

                    borderRadius: "15px",

                    background: "#F5F9FF",

                    border:
                      "1px solid #E0EAF5",
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.2}
                    alignItems="flex-start"
                  >
                    <SecurityRoundedIcon
                      sx={{
                        color: "#1769E0",

                        fontSize: 21,

                        mt: 0.2,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color: "#0B1F36",

                          fontWeight: 800,

                          fontSize: "0.8rem",
                        }}
                      >
                        Authorized personnel only
                      </Typography>

                      <Typography
                        sx={{
                          color: "#718096",

                          fontSize: "0.7rem",

                          lineHeight: 1.6,

                          mt: 0.4,
                        }}
                      >
                        Administrator access is restricted
                        to authorized SafeTour AI personnel.
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>

                {/* =============================================
                    SECURITY WARNING
                ============================================= */}

                <Stack
                  direction="row"
                  spacing={0.7}
                  alignItems="center"
                  justifyContent="center"
                  sx={{ mt: 3 }}
                >
                  <WarningAmberRoundedIcon
                    sx={{
                      color: "#F59E0B",

                      fontSize: 16,
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#94A3B8",

                      fontSize: "0.67rem",

                      textAlign: "center",
                    }}
                  >
                    Never share your administrator credentials.
                  </Typography>
                </Stack>

                {/* =============================================
                    TOURIST LOGIN
                ============================================= */}

                <Box
                  sx={{
                    textAlign: "center",

                    mt: 3,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#718096",

                      fontSize: "0.78rem",
                    }}
                  >
                    Are you a tourist?
                  </Typography>

                  <Button
                    disabled={loading}
                    onClick={() =>
                      navigate("/login")
                    }
                    sx={{
                      color: "#1769E0",

                      textTransform: "none",

                      fontWeight: 800,

                      fontSize: "0.78rem",

                      ml: 0.5,
                    }}
                  >
                    Tourist Sign In
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <Typography
          sx={{
            textAlign: "center",

            color: {
              xs: "rgba(255,255,255,0.65)",
              md: "#64748B",
            },

            fontSize: "0.7rem",

            mt: 3,
          }}
        >
          SafeTour AI • Secure Administration Portal
        </Typography>
      </Container>

      {/* =====================================================
          SUCCESS SNACKBAR
      ===================================================== */}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1800}
        onClose={handleSnackbarClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          variant="filled"
          sx={{
            width: "100%",

            borderRadius: "14px",

            fontWeight: 700,

            boxShadow:
              "0 12px 35px rgba(0,0,0,0.18)",
          }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AdminLogin;