import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  Badge,
  InputBase,
  Tooltip,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

const DashboardHeader = () => {
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
        background:
          "linear-gradient(180deg, rgba(7,17,31,.96), rgba(7,17,31,.88))",

        backdropFilter: "blur(18px)",

        borderBottom:
          "1px solid rgba(148,163,184,.07)",

        boxShadow:
          "0 8px 30px rgba(0,0,0,.18)",

        color: "#fff",

        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          minHeight: "64px !important",

          px: {
            xs: 2,
            md: 2.5,
          },

          gap: 2,
        }}
      >
        {/* =================================================
            LEFT SECTION
        ================================================= */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            minWidth: 0,

            flex: 1,
          }}
        >
          {/* Menu Button */}

          <IconButton
            sx={{
              width: 38,
              height: 38,

              mr: 1.5,

              color: "#94A3B8",

              borderRadius: "11px",

              "&:hover": {
                color: "#fff",

                bgcolor:
                  "rgba(59,130,246,.10)",
              },
            }}
          >
            <MenuRoundedIcon
              sx={{ fontSize: 21 }}
            />
          </IconButton>

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
                  xs: 12,
                  md: 14,
                },

                fontWeight: 700,

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

                fontSize: 10.5,

                mt: 0.35,

                whiteSpace: "nowrap",
              }}
            >
              Smart Tourist Safety Monitoring System
            </Typography>
          </Box>
        </Box>

        {/* =================================================
            SEARCH
        ================================================= */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },

            alignItems: "center",

            width: {
              md: 230,
              lg: 280,
            },

            height: 38,

            px: 1.4,

            borderRadius: "12px",

            background:
              "rgba(15,27,45,.78)",

            border:
              "1px solid rgba(148,163,184,.07)",

            transition: ".25s",

            "&:focus-within": {
              borderColor:
                "rgba(59,130,246,.35)",

              boxShadow:
                "0 0 0 3px rgba(59,130,246,.06)",

              background:
                "rgba(15,27,45,.95)",
            },
          }}
        >
          <SearchRoundedIcon
            sx={{
              color: "#64748B",

              fontSize: 19,

              mr: 0.8,
            }}
          />

          <InputBase
            placeholder="Search anything..."
            sx={{
              flex: 1,

              color: "#E2E8F0",

              fontSize: 12,

              "& input::placeholder": {
                color: "#64748B",

                opacity: 1,
              },
            }}
          />
        </Box>

        {/* =================================================
            ACTIONS
        ================================================= */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 0.6,
          }}
        >
          {/* Notifications */}

          <Tooltip title="Notifications">
            <IconButton
              sx={{
                width: 38,
                height: 38,

                color: "#94A3B8",

                borderRadius: "11px",

                "&:hover": {
                  color: "#fff",

                  bgcolor:
                    "rgba(59,130,246,.09)",
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

                    fontWeight: 800,

                    bgcolor: "#EF4444",

                    color: "#fff",

                    border:
                      "2px solid #07111F",
                  },
                }}
              >
                <NotificationsNoneRoundedIcon
                  sx={{ fontSize: 21 }}
                />
              </Badge>
            </IconButton>
          </Tooltip>

          {/* Fullscreen */}

          <Tooltip title="Fullscreen">
            <IconButton
              onClick={handleFullscreen}
              sx={{
                width: 38,
                height: 38,

                color: "#94A3B8",

                borderRadius: "11px",

                display: {
                  xs: "none",
                  sm: "flex",
                },

                "&:hover": {
                  color: "#fff",

                  bgcolor:
                    "rgba(59,130,246,.09)",
                },
              }}
            >
              <FullscreenRoundedIcon
                sx={{ fontSize: 20 }}
              />
            </IconButton>
          </Tooltip>

          {/* Divider */}

          <Box
            sx={{
              width: 1,

              height: 28,

              bgcolor:
                "rgba(148,163,184,.10)",

              mx: 0.8,
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

              pl: 0.4,

              pr: 0.5,

              py: 0.4,

              borderRadius: "13px",

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
                  width: 38,
                  height: 38,

                  bgcolor:
                    "linear-gradient(135deg,#2563EB,#6366F1)",

                  background:
                    "linear-gradient(135deg,#2563EB,#6366F1)",

                  color: "#fff",

                  fontSize: 14,

                  fontWeight: 800,

                  boxShadow:
                    "0 6px 20px rgba(37,99,235,.25)",
                }}
              >
                A
              </Avatar>

              {/* Online dot */}

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
                    "2px solid #07111F",

                  boxShadow:
                    "0 0 8px rgba(34,197,94,.55)",
                }}
              />
            </Box>

            {/* User information */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                },

                minWidth: 105,
              }}
            >
              <Typography
                sx={{
                  color: "#F8FAFC",

                  fontSize: 12,

                  fontWeight: 700,

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
                }}
              >
                Super Administrator
              </Typography>
            </Box>

            <KeyboardArrowDownRoundedIcon
              sx={{
                color: "#64748B",

                fontSize: 19,

                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            />
          </Box>
        </Box>
      </Toolbar>

      {/* =====================================================
          BOTTOM SYSTEM LINE
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          left: 0,
          bottom: -1,

          width: "100%",

          height: 1,

          background:
            "linear-gradient(90deg, transparent 5%, rgba(59,130,246,.18) 35%, rgba(99,102,241,.22) 65%, transparent 95%)",

          pointerEvents: "none",
        }}
      />
    </AppBar>
  );
};

export default DashboardHeader;