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
} from "@mui/material";

import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import KeyboardCommandKeyRoundedIcon from "@mui/icons-material/KeyboardCommandKeyRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#07111F",
        borderBottom: "1px solid rgba(255,255,255,.05)",
      }}
    >
      <Toolbar
        sx={{
          minHeight: 80,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Left */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton
            sx={{
              color: "#fff",
            }}
          >
            <MenuRoundedIcon />
          </IconButton>

          <Box>
            <Typography
              fontWeight="bold"
              fontSize={28}
              color="#fff"
            >
              Good Morning, Admin 👋
            </Typography>

            <Typography
              fontSize={14}
              color="#94A3B8"
            >
              Smart Tourist Safety Monitoring System
            </Typography>
          </Box>
        </Box>

        {/* Right */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            size="small"
            placeholder="Search anything..."
            sx={{
              width: 280,

              "& .MuiOutlinedInput-root": {
                bgcolor: "#111C2E",
                borderRadius: 3,
                color: "#fff",

                "& fieldset": {
                  borderColor: "transparent",
                },

                "&:hover fieldset": {
                  borderColor: "#2563EB",
                },

                "& input": {
                  color: "#fff",
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRoundedIcon
                    sx={{
                      color: "#94A3B8",
                    }}
                  />
                </InputAdornment>
              ),

              endAdornment: (
                <KeyboardCommandKeyRoundedIcon
                  sx={{
                    color: "#64748B",
                    fontSize: 18,
                  }}
                />
              ),
            }}
          />

          <IconButton sx={{ color: "#fff" }}>
            <Badge
              badgeContent={5}
              color="error"
            >
              <NotificationsNoneRoundedIcon />
            </Badge>
          </IconButton>

          <IconButton sx={{ color: "#fff" }}>
            <FullscreenRoundedIcon />

                             </IconButton>

          {/* Admin Profile */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              ml: 1,
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                width: 46,
                height: 46,
                bgcolor: "#2563EB",
                fontWeight: "bold",
              }}
            >
              A
            </Avatar>

            <Box>
              <Typography
                fontWeight="bold"
                color="#fff"
                lineHeight={1.2}
              >
                Admin
              </Typography>

              <Typography
                fontSize={12}
                color="#94A3B8"
              >
                Super Administrator
              </Typography>
            </Box>

            {/* Online Dot */}
            <Box
              sx={{
                width: 10,
                height: 10,
                bgcolor: "#22C55E",
                borderRadius: "50%",
                mx: 1,
              }}
            />

            <ExpandMoreRoundedIcon
              sx={{
                color: "#94A3B8",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
