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
  LinearProgress,
  Chip,
  Stack,
  Divider,
  MenuItem,
  Alert,
} from "@mui/material";

import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import TravelExploreRoundedIcon from "@mui/icons-material/TravelExploreRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const Register = () => {
  const navigate = useNavigate();

  /* =========================================================
     STATE
  ========================================================= */

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  /* =========================================================
     COUNTRIES
  ========================================================= */

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Canada",
    "Australia",
    "Singapore",
    "Other",
  ];

  /* =========================================================
     HANDLE INPUT CHANGE
  ========================================================= */

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setError("");
  };

  /* =========================================================
     PASSWORD STRENGTH
  ========================================================= */

  const getPasswordStrength = () => {
    const password = formData.password;

    if (!password) {
      return {
        value: 0,
        label: "",
      };
    }

    let score = 0;

    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;

    let label = "Weak";

    if (score >= 75) {
      label = "Strong";
    } else if (score >= 50) {
      label = "Medium";
    }

    return {
      value: score,
      label,
    };
  };

  const passwordStrength =
    getPasswordStrength();

  /* =========================================================
     TOURIST REGISTRATION
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    /* =======================================================
       FRONTEND VALIDATION
    ======================================================= */

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError(
        "Please fill in all required fields."
      );
      return;
    }

    if (formData.password.length < 8) {
      setError(
        "Password must contain at least 8 characters."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError("Passwords do not match.");
      return;
    }

    if (!formData.terms) {
      setError(
        "Please accept the Terms and Privacy Policy."
      );
      return;
    }

    /* =======================================================
       START LOADING
    ======================================================= */

    setLoading(true);

    try {
      /* =====================================================
         SEND DATA TO BACKEND
      ===================================================== */

      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            fullName: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            country: formData.country.trim(),
            password: formData.password,
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
         HANDLE BACKEND ERROR
      ===================================================== */

      if (!response.ok || !data.success) {
        setError(
          data?.message ||
            "Unable to create your account."
        );

        return;
      }

      /* =====================================================
         SUCCESS
      ===================================================== */

      alert(
        "Account created successfully! Please sign in."
      );

      navigate("/login");
    } catch (error) {
      console.error(
        "Tourist registration error:",
        error
      );

      setError(
        "Unable to connect to SafeTour AI server. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <Box
      sx={{
        minHeight: "100vh",

        background:
          "linear-gradient(135deg, #06182D 0%, #0A2D50 45%, #EAF4FF 45%, #F7FBFF 100%)",

        py: {
          xs: 3,
          md: 5,
        },

        position: "relative",

        overflow: "hidden",
      }}
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          width: 420,
          height: 420,

          borderRadius: "50%",

          border:
            "1px solid rgba(53,194,232,0.12)",

          top: -180,
          left: -180,
        }}
      />

      <Box
        sx={{
          position: "absolute",

          width: 350,
          height: 350,

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(47,128,237,0.15), transparent 70%)",

          right: -100,
          bottom: -100,
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

            alignItems: "center",

            justifyContent: "space-between",

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
            startIcon={
              <ArrowBackRoundedIcon />
            }
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

            border:
              "1px solid rgba(255,255,255,0.7)",

            boxShadow:
              "0 35px 90px rgba(7,34,60,0.20)",
          }}
        >
          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "0.85fr 1.15fr",
              },
            }}
          >
            {/* =================================================
                LEFT VISUAL
            ================================================= */}

            <Box
              sx={{
                background:
                  "linear-gradient(145deg, #071A2F 0%, #0B365B 55%, #0B4A69 100%)",

                p: {
                  xs: 4,
                  md: 5,
                },

                minHeight: {
                  md: 680,
                },

                position: "relative",

                overflow: "hidden",
              }}
            >
              {/* =================================================
                  DECORATIVE CIRCLES
              ================================================= */}

              <Box
                sx={{
                  position: "absolute",

                  width: 330,
                  height: 330,

                  borderRadius: "50%",

                  border:
                    "1px solid rgba(109,213,250,0.15)",

                  right: -160,
                  top: 70,
                }}
              />

              <Box
                sx={{
                  position: "absolute",

                  width: 240,
                  height: 240,

                  borderRadius: "50%",

                  border:
                    "1px solid rgba(109,213,250,0.12)",

                  right: -115,
                  top: 115,
                }}
              />

              {/* =================================================
                  CHIP
              ================================================= */}

              <Chip
                icon={
                  <TravelExploreRoundedIcon
                    sx={{
                      color:
                        "#6DD5FA !important",
                    }}
                  />
                }
                label="TOURIST ACCOUNT"
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

              {/* =================================================
                  HERO
              ================================================= */}

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

                  maxWidth: 430,
                }}
              >
                Your journey.

                <Box
                  component="span"
                  sx={{
                    display: "block",

                    color: "#6DD5FA",
                  }}
                >
                  Your safety.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color:
                    "rgba(255,255,255,0.62)",

                  lineHeight: 1.8,

                  mt: 2,

                  maxWidth: 430,
                }}
              >
                Create your SafeTour profile and
                unlock intelligent safety features
                designed for modern travelers.
              </Typography>

              {/* =================================================
                  SAFETY VISUAL
              ================================================= */}

              <Box
                sx={{
                  mt: 5,

                  position: "relative",

                  height: 260,

                  borderRadius: "25px",

                  overflow: "hidden",

                  background:
                    "rgba(255,255,255,0.05)",

                  border:
                    "1px solid rgba(255,255,255,0.10)",
                }}
              >
                {/* Grid */}

                <Box
                  sx={{
                    position: "absolute",

                    inset: 0,

                    background:
                      "linear-gradient(90deg, rgba(109,213,250,0.06) 1px, transparent 1px), linear-gradient(rgba(109,213,250,0.06) 1px, transparent 1px)",

                    backgroundSize:
                      "45px 45px",
                  }}
                />

                {/* Safe Zone */}

                <Box
                  sx={{
                    position: "absolute",

                    width: 175,
                    height: 175,

                    borderRadius: "50%",

                    left: "24%",
                    top: "17%",

                    background:
                      "rgba(16,185,129,0.09)",

                    border:
                      "2px solid rgba(16,185,129,0.35)",
                  }}
                />

                {/* Location Marker */}

                <Box
                  sx={{
                    position: "absolute",

                    left: "47%",
                    top: "43%",
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
                        "0 0 0 12px rgba(53,194,232,0.12)",
                    }}
                  />
                </Box>

                {/* Status Card */}

                <Paper
                  elevation={0}
                  sx={{
                    position: "absolute",

                    left: 15,
                    bottom: 15,
                    right: 15,

                    p: 1.5,

                    borderRadius: "16px",

                    background:
                      "rgba(5,20,36,0.80)",

                    border:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1.2}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "#42E6A4",
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",

                          fontWeight: 800,

                          fontSize: "0.78rem",
                        }}
                      >
                        Safety monitoring ready
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "rgba(255,255,255,0.50)",

                          fontSize: "0.65rem",
                        }}
                      >
                        Your account can use safety
                        services
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>

              {/* =================================================
                  BENEFITS
              ================================================= */}

              <Stack
                spacing={1.5}
                sx={{
                  mt: 4,
                }}
              >
                {[
                  "Smart location safety",
                  "GeoFence alerts",
                  "Emergency SOS support",
                ].map((item) => (
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    key={item}
                  >
                    <CheckCircleRoundedIcon
                      sx={{
                        color: "#57D6A1",

                        fontSize: 19,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "rgba(255,255,255,0.70)",

                        fontSize: "0.82rem",
                      }}
                    >
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* =================================================
                RIGHT FORM
            ================================================= */}

            <Box
              sx={{
                p: {
                  xs: 3,
                  sm: 5,
                  md: 6,
                },
              }}
            >
              <Box
                sx={{
                  maxWidth: 560,

                  mx: "auto",
                }}
              >
                {/* =================================================
                    TITLE
                ================================================= */}

                <Typography
                  sx={{
                    fontWeight: 900,

                    color: "#0B1F36",

                    fontSize: {
                      xs: "2rem",
                      md: "2.45rem",
                    },
                  }}
                >
                  Create your account
                </Typography>

                <Typography
                  sx={{
                    color: "#718096",

                    mt: 1,

                    lineHeight: 1.6,
                  }}
                >
                  Join SafeTour AI and make your
                  next journey safer.
                </Typography>

                {/* =================================================
                    PROGRESS
                ================================================= */}

                <Box
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    gap: 1,

                    mt: 3,

                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      flex: 1,

                      height: 4,

                      borderRadius: 5,

                      background:
                        "linear-gradient(90deg, #1769E0, #35C2E8)",
                    }}
                  />

                  <Typography
                    sx={{
                      color: "#1769E0",

                      fontSize: "0.7rem",

                      fontWeight: 800,
                    }}
                  >
                    STEP 1 OF 2
                  </Typography>
                </Box>

                {/* =================================================
                    ERROR
                ================================================= */}

                {error && (
                  <Alert
                    severity="error"
                    onClose={() =>
                      setError("")
                    }
                    sx={{
                      mb: 2.5,

                      borderRadius: "12px",
                    }}
                  >
                    {error}
                  </Alert>
                )}

                {/* =================================================
                    FORM
                ================================================= */}

                <Box
                  component="form"
                  onSubmit={handleSubmit}
                >
                  {/* =================================================
                      FULL NAME
                  ================================================= */}

                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    disabled={loading}
                    sx={{
                      mb: 2,
                    }}
                  />

                  {/* =================================================
                      EMAIL
                  ================================================= */}

                  <TextField
                    fullWidth
                    required
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={loading}
                    sx={{
                      mb: 2,
                    }}
                  />

                  {/* =================================================
                      PHONE + COUNTRY
                  ================================================= */}

                  <Stack
                    direction={{
                      xs: "column",
                      sm: "row",
                    }}
                    spacing={2}
                    sx={{
                      mb: 2,
                    }}
                  >
                    <TextField
                      fullWidth
                      required
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 9876543210"
                      disabled={loading}
                    />

                    <TextField
                      select
                      required
                      fullWidth
                      label="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      {countries.map(
                        (country) => (
                          <MenuItem
                            key={country}
                            value={country}
                          >
                            {country}
                          </MenuItem>
                        )
                      )}
                    </TextField>
                  </Stack>

                  {/* =================================================
                      PASSWORD
                  ================================================= */}

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
                    placeholder="Create a strong password"
                    disabled={loading}
                    sx={{
                      mb: 1,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            type="button"
                            onClick={() =>
                              setShowPassword(
                                (prev) =>
                                  !prev
                              )
                            }
                            edge="end"
                            disabled={loading}
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

                  {/* =================================================
                      PASSWORD STRENGTH
                  ================================================= */}

                  {formData.password && (
                    <Box
                      sx={{
                        mb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",

                          justifyContent:
                            "space-between",

                          mb: 0.5,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize:
                              "0.68rem",

                            color: "#718096",
                          }}
                        >
                          Password strength
                        </Typography>

                        <Typography
                          sx={{
                            fontSize:
                              "0.68rem",

                            fontWeight: 800,

                            color:
                              passwordStrength.value >=
                              75
                                ? "#10B981"
                                : passwordStrength.value >=
                                  50
                                ? "#F59E0B"
                                : "#E53935",
                          }}
                        >
                          {
                            passwordStrength.label
                          }
                        </Typography>
                      </Box>

                      <LinearProgress
                        variant="determinate"
                        value={
                          passwordStrength.value
                        }
                        sx={{
                          height: 5,

                          borderRadius: 5,

                          background: "#E8EEF5",

                          "& .MuiLinearProgress-bar":
                            {
                              background:
                                passwordStrength.value >=
                                75
                                  ? "#10B981"
                                  : passwordStrength.value >=
                                    50
                                  ? "#F59E0B"
                                  : "#E53935",
                            },
                        }}
                      />
                    </Box>
                  )}

                  {/* =================================================
                      CONFIRM PASSWORD
                  ================================================= */}

                  <TextField
                    fullWidth
                    required
                    label="Confirm Password"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={
                      formData.confirmPassword
                    }
                    onChange={handleChange}
                    placeholder="Repeat your password"
                    disabled={loading}
                    sx={{
                      mb: 1,
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(
                                (prev) =>
                                  !prev
                              )
                            }
                            edge="end"
                            disabled={loading}
                          >
                            {showConfirmPassword ? (
                              <VisibilityOffRoundedIcon />
                            ) : (
                              <VisibilityRoundedIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  {/* =================================================
                      PASSWORD MATCH
                  ================================================= */}

                  {formData.confirmPassword &&
                    formData.password ===
                      formData.confirmPassword && (
                      <Stack
                        direction="row"
                        spacing={0.5}
                        alignItems="center"
                        sx={{
                          mb: 1,
                        }}
                      >
                        <CheckCircleRoundedIcon
                          sx={{
                            color: "#10B981",

                            fontSize: 17,
                          }}
                        />

                        <Typography
                          sx={{
                            color: "#10B981",

                            fontSize:
                              "0.7rem",

                            fontWeight: 700,
                          }}
                        >
                          Passwords match
                        </Typography>
                      </Stack>
                    )}

                  {/* =================================================
                      TERMS
                  ================================================= */}

                  <FormControlLabel
                    sx={{
                      alignItems:
                        "flex-start",

                      mt: 1,

                      mb: 2,
                    }}
                    control={
                      <Checkbox
                        name="terms"
                        checked={
                          formData.terms
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

                          fontSize:
                            "0.78rem",

                          lineHeight: 1.6,

                          pt: 1,
                        }}
                      >
                        I agree to the SafeTour
                        AI{" "}
                        <Box
                          component="span"
                          sx={{
                            color: "#1769E0",

                            fontWeight: 700,
                          }}
                        >
                          Terms of Service
                        </Box>{" "}
                        and{" "}
                        <Box
                          component="span"
                          sx={{
                            color: "#1769E0",

                            fontWeight: 700,
                          }}
                        >
                          Privacy Policy
                        </Box>
                        .
                      </Typography>
                    }
                  />

                  {/* =================================================
                      SUBMIT
                  ================================================= */}

                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    endIcon={
                      loading ? (
                        <Box
                          sx={{
                            width: 18,
                            height: 18,

                            border:
                              "2px solid rgba(255,255,255,0.45)",

                            borderTopColor:
                              "#fff",

                            borderRadius:
                              "50%",

                            animation:
                              "spin 0.8s linear infinite",

                            "@keyframes spin":
                              {
                                from: {
                                  transform:
                                    "rotate(0deg)",
                                },

                                to: {
                                  transform:
                                    "rotate(360deg)",
                                },
                              },
                          }}
                        />
                      ) : (
                        <ArrowForwardRoundedIcon />
                      )
                    }
                    sx={{
                      minHeight: 54,

                      borderRadius: "14px",

                      textTransform:
                        "none",

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
                      },

                      "&:disabled": {
                        color: "#fff",

                        background:
                          "linear-gradient(135deg, #7AA9E6, #75CFE2)",
                      },

                      transition:
                        "0.25s ease",
                    }}
                  >
                    {loading
                      ? "Creating Account..."
                      : "Create Tourist Account"}
                  </Button>
                </Box>

                {/* =================================================
                    LOGIN DIVIDER
                ================================================= */}

                <Divider
                  sx={{
                    my: 3,

                    color: "#CBD5E1",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#94A3B8",

                      fontSize: "0.7rem",
                    }}
                  >
                    ALREADY REGISTERED?
                  </Typography>
                </Divider>

                {/* =================================================
                    LOGIN BUTTON
                ================================================= */}

                <Button
                  fullWidth
                  onClick={() =>
                    navigate("/login")
                  }
                  disabled={loading}
                  variant="outlined"
                  sx={{
                    minHeight: 50,

                    borderRadius: "13px",

                    borderColor: "#D6E2EF",

                    color: "#1769E0",

                    textTransform:
                      "none",

                    fontWeight: 800,

                    "&:hover": {
                      borderColor:
                        "#1769E0",

                      background:
                        "#F4F8FF",
                    },
                  }}
                >
                  Sign In to SafeTour AI
                </Button>

                {/* =================================================
                    SECURITY / SAFETY
                ================================================= */}

                <Stack
                  direction="row"
                  justifyContent="center"
                  spacing={2.5}
                  sx={{
                    mt: 3,

                    flexWrap: "wrap",

                    rowGap: 1,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={0.6}
                    alignItems="center"
                  >
                    <SecurityRoundedIcon
                      sx={{
                        color: "#10B981",

                        fontSize: 16,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#718096",

                        fontSize:
                          "0.68rem",
                      }}
                    >
                      Secure account
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    spacing={0.6}
                    alignItems="center"
                  >
                    <LocationOnRoundedIcon
                      sx={{
                        color: "#1769E0",

                        fontSize: 16,
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#718096",

                        fontSize:
                          "0.68rem",
                      }}
                    >
                      Safety ready
                    </Typography>
                  </Stack>
                </Stack>
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
          SafeTour AI • Smart Tourist Safety Platform
        </Typography>
      </Container>
    </Box>
  );
};

export default Register;