import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Badge,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import KeyboardCommandKeyRoundedIcon from "@mui/icons-material/KeyboardCommandKeyRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const Navbar = () => {
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(7,17,31,.88)",

        backdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(148,163,184,.07)",

        boxShadow:
          "0 8px 35px rgba(0,0,0,.16)",

        color: "#fff",

        zIndex: 1000,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "72px !important",

          px: {
            xs: 2,
            sm: 2.5,
            lg: 3,
          },

          gap: 2,
        }}
      >
        {/* =====================================================
            LEFT SECTION
        ===================================================== */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            flex: 1,

            minWidth: 0,
          }}
        >
          {/* Menu */}

          <Tooltip title="Menu">
            <IconButton
              size="small"
              sx={{
                width: 38,
                height: 38,

                mr: 1.5,

                borderRadius: "11px",

                color: "#94A3B8",

                border:
                  "1px solid rgba(255,255,255,.05)",

                bgcolor:
                  "rgba(255,255,255,.025)",

                "&:hover": {
                  color: "#60A5FA",

                  bgcolor:
                    "rgba(59,130,246,.08)",

                  borderColor:
                    "rgba(59,130,246,.15)",
                },
              }}
            >
              <MenuRoundedIcon
                sx={{
                  fontSize: 20,
                }}
              />
            </IconButton>
          </Tooltip>

          {/* Greeting */}

          <Box
            sx={{
              minWidth: 0,
            }}
          >
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: {
                  xs: 15,
                  md: 17,
                  lg: 18,
                },

                fontWeight: 800,

                letterSpacing: "-.35px",

                lineHeight: 1.2,

                whiteSpace: "nowrap",

                overflow: "hidden",

                textOverflow: "ellipsis",
              }}
            >
              Good Morning, Admin 👋
            </Typography>

            <Typography
              sx={{
                color: "#64748B",

                fontSize: 11,

                mt: 0.45,

                letterSpacing: ".1px",

                whiteSpace: "nowrap",

                overflow: "hidden",

                textOverflow: "ellipsis",
              }}
            >
              Smart Tourist Safety Monitoring System
            </Typography>
          </Box>
        </Box>

        {/* =====================================================
            RIGHT SECTION
        ===================================================== */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: {
              xs: 0.5,
              sm: 0.8,
              md: 1,
            },
          }}
        >
          {/* =================================================
              SEARCH
          ================================================= */}

          <TextField
            size="small"
            placeholder="Search anything..."
            sx={{
              width: {
                xs: 0,
                sm: 190,
                md: 240,
                lg: 285,
              },

              display: {
                xs: "none",
                sm: "block",
              },

              "& .MuiOutlinedInput-root": {
                height: 40,

                bgcolor:
                  "rgba(15,27,45,.75)",

                borderRadius: "13px",

                color: "#fff",

                transition: ".25s",

                "& fieldset": {
                  border:
                    "1px solid rgba(148,163,184,.07)",
                },

                "&:hover fieldset": {
                  borderColor:
                    "rgba(59,130,246,.20)",
                },

                "&.Mui-focused fieldset": {
                  borderColor:
                    "rgba(59,130,246,.45)",
                },

                "&.Mui-focused": {
                  boxShadow:
                    "0 0 0 3px rgba(59,130,246,.06)",

                  bgcolor:
                    "rgba(15,27,45,.95)",
                },

                "& input": {
                  color: "#E2E8F0",

                  fontSize: 12,

                  "&::placeholder": {
                    color: "#64748B",

                    opacity: 1,
                  },
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon
                    sx={{
                      color: "#64748B",

                      fontSize: 19,
                    }}
                  />
                </InputAdornment>
              ),

              endAdornment: (
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
                    },

                    alignItems: "center",

                    justifyContent: "center",

                    width: 24,
                    height: 22,

                    borderRadius: "6px",

                    bgcolor:
                      "rgba(255,255,255,.045)",

                    border:
                      "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  <KeyboardCommandKeyRoundedIcon
                    sx={{
                      color: "#475569",

                      fontSize: 14,
                    }}
                  />
                </Box>
              ),
            }}
          />

          {/* =================================================
              NOTIFICATION
          ================================================= */}

          <Tooltip title="Notifications">
            <IconButton
              sx={{
                width: 40,
                height: 40,

                borderRadius: "12px",

                color: "#94A3B8",

                border:
                  "1px solid rgba(255,255,255,.05)",

                bgcolor:
                  "rgba(255,255,255,.025)",

                "&:hover": {
                  color: "#F8FAFC",

                  bgcolor:
                    "rgba(59,130,246,.08)",

                  borderColor:
                    "rgba(59,130,246,.14)",
                },
              }}
            >
              <Badge
                badgeContent={5}
                sx={{
                  "& .MuiBadge-badge": {
                    minWidth: 17,
                    height: 17,

                    px: 0.4,

                    fontSize: 9,

                    fontWeight: 900,

                    bgcolor: "#EF4444",

                    color: "#fff",

                    border:
                      "2px solid #07111F",

                    boxShadow:
                      "0 0 10px rgba(239,68,68,.35)",
                  },
                }}
              >
                <NotificationsNoneRoundedIcon
                  sx={{
                    fontSize: 21,
                  }}
                />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* =================================================
              FULLSCREEN
          ================================================= */}

          <Tooltip title="Fullscreen">
            <IconButton
              onClick={handleFullscreen}
              sx={{
                width: 40,
                height: 40,

                borderRadius: "12px",

                color: "#94A3B8",

                border:
                  "1px solid rgba(255,255,255,.05)",

                bgcolor:
                  "rgba(255,255,255,.025)",

                display: {
                  xs: "none",
                  sm: "flex",
                },

                "&:hover": {
                  color: "#60A5FA",

                  bgcolor:
                    "rgba(59,130,246,.08)",

                  borderColor:
                    "rgba(59,130,246,.14)",
                },
              }}
            >
              <FullscreenRoundedIcon
                sx={{
                  fontSize: 20,
                }}
              />
            </IconButton>
          </Tooltip>

          {/* Divider */}

          <Box
            sx={{
              width: "1px",

              height: 30,

              bgcolor:
                "rgba(148,163,184,.09)",

              mx: {
                xs: 0.3,
                sm: 0.7,
              },
            }}
          />

          {/* =================================================
              ADMIN PROFILE
          ================================================= */}

          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: 1,

              px: 0.7,
              py: 0.5,

              borderRadius: "14px",

              cursor: "pointer",

              transition: ".25s",

              "&:hover": {
                bgcolor:
                  "rgba(255,255,255,.035)",
              },
            }}
          >
            {/* Avatar */}

            <Box
              sx={{
                position: "relative",
              }}
            >
              <Avatar
                sx={{
                  width: 40,
                  height: 40,

                  background:
                    "linear-gradient(135deg,#2563EB,#6366F1)",

                  color: "#fff",

                  fontSize: 14,

                  fontWeight: 900,

                  border:
                    "1px solid rgba(96,165,250,.25)",

                  boxShadow:
                    "0 7px 22px rgba(37,99,235,.28)",
                }}
              >
                A
              </Avatar>

              {/* Online */}

              <Box
                sx={{
                  position: "absolute",

                  right: -1,
                  bottom: 0,

                  width: 10,
                  height: 10,

                  borderRadius: "50%",

                  bgcolor: "#22C55E",

                  border:
                    "2px solid #07111F",

                  boxShadow:
                    "0 0 8px rgba(34,197,94,.55)",
                }}
              />
            </Box>

            {/* User info */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },

                minWidth: 112,
              }}
            >
              <Typography
                sx={{
                  color: "#F8FAFC",

                  fontSize: 12,

                  fontWeight: 800,

                  lineHeight: 1.2,
                }}
              >
                Admin
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",

                  fontSize: 9.5,

                  mt: 0.35,

                  whiteSpace: "nowrap",
                }}
              >
                Super Administrator
              </Typography>
            </Box>

            <ExpandMoreRoundedIcon
              sx={{
                color: "#64748B",

                fontSize: 19,

                display: {
                  xs: "none",
                  sm: "block",
                },

                transition: ".25s",
              }}
            />
          </Box>
        </Box>
      </Toolbar>

      {/* =====================================================
          PREMIUM BOTTOM GLOW
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          left: 0,
          bottom: 0,

          width: "100%",

          height: "1px",

          background:
            "linear-gradient(90deg,transparent 0%,rgba(59,130,246,.08) 20%,rgba(59,130,246,.28) 50%,rgba(99,102,241,.10) 80%,transparent 100%)",

          pointerEvents: "none",
        }}
      />
    </AppBar>
  );
};

export default Navbar;