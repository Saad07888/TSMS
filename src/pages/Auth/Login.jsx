import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
    const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = () => {
  if (
    email === "admin@safetour.com" &&
    password === "123456"
  ) {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  } else {
    alert("Invalid Email or Password");
  }
};
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#07111F",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Box
        sx={{
          width: 1100,
          height: 650,
          bgcolor: "#111C2E",
          borderRadius: 5,
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          boxShadow: "0 20px 60px rgba(0,0,0,.45)",
        }}
      >
        {/* Left Side */}
       <Box
  sx={{
    position: "relative",
    bgcolor: "#0B1424",
    color: "#fff",
    p: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  }}
>
  {/* Background Glow */}
  <Box
    sx={{
      position: "absolute",
      top: -120,
      left: -120,
      width: 320,
      height: 320,
      borderRadius: "50%",
      background: "rgba(37,99,235,.18)",
      filter: "blur(80px)",
    }}
  />

  <Typography
    variant="h2"
    fontWeight="bold"
    mb={2}
  >
    🛡 SafeTour AI
  </Typography>

  <Typography
    sx={{
      color: "#94A3B8",
      fontSize: 20,
      mb: 5,
      lineHeight: 1.7,
    }}
  >
    Smart Tourist Safety Monitoring &
    Incident Response System powered by
    AI, Geo-Fencing and Blockchain
    Digital ID.
  </Typography>

  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2.5,
    }}
  >
    <Typography color="#E2E8F0">
      ✅ Live Tourist Monitoring
    </Typography>

    <Typography color="#E2E8F0">
      ✅ AI Risk Prediction
    </Typography>

    <Typography color="#E2E8F0">
      ✅ SOS Emergency Response
    </Typography>

    <Typography color="#E2E8F0">
      ✅ GeoFence Protection
    </Typography>

    <Typography color="#E2E8F0">
      ✅ Blockchain Digital Identity
    </Typography>
  </Box>
</Box>

        {/* Right Side */}
       <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    p: 6,
  }}
>
  <Box sx={{ width: "100%", maxWidth: 420 }}>
<Typography
  variant="h4"
  fontWeight="bold"
  sx={{
    color: "#FFFFFF",
    mb: 1,
  }}
>
      Welcome Back 👋
    </Typography>

    <Typography
      color="#94A3B8"
      mb={4}
    >
      Sign in to continue
    </Typography>

    <TextField
      fullWidth
      label="Email"
      variant="outlined"
      margin="normal"
      value={email}
onChange={(e) => setEmail(e.target.value)}
InputLabelProps={{
  shrink: true,
}}
      sx={{
  "& .MuiInputLabel-root": {
    color: "#94A3B8",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#3B82F6",
  },

  "& .MuiOutlinedInput-root": {
    color: "#fff",

    "& fieldset": {
      borderColor: "#334155",
    },

    "&:hover fieldset": {
      borderColor: "#475569",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#3B82F6",
    },
  },
}}
      sx={{
        input: { color: "white" },
        "& fieldset": {
          borderColor: "#334155",
        },
      }}
    />

    <TextField
      fullWidth
      label="Password"
      type={showPassword ? "text" : "password"}
      margin="normal"
      value={password}
onChange={(e) => setPassword(e.target.value)}
      InputLabelProps={{
        style: { color: "#94A3B8" },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        input: { color: "white" },
        "& fieldset": {
          borderColor: "#334155",
        },
      }}
    />

    <FormControlLabel
      control={<Checkbox />}
      label="Remember Me"
      sx={{
        color: "#CBD5E1",
        mt: 1,
      }}
    />

    <Button
      fullWidth
      variant="contained"
      size="large"
      onClick={handleLogin}
      sx={{
        mt: 3,
        py: 1.6,
        borderRadius: 3,
        fontWeight: "bold",
        textTransform: "none",
        fontSize: 18,
      }}
    >
      Login
    </Button>

  </Box>
</Box>
      </Box>
    </Box>
  );
};

export default Login;
