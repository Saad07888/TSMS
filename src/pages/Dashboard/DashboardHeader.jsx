import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  TextField,
  InputAdornment,
} from "@mui/material";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function DashboardHeader() {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#fff",
        color: "#111827",
        borderRadius: 4,
        mb: 4,
        px: 2,
        border: "1px solid #E5E7EB",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 3,
          py: 1,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight={700}
          >
            Dashboard
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Smart Tourist Safety Monitoring System
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              width: 260,
              background: "#F9FAFB",
              borderRadius: 3,
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <IconButton>
            <Badge
              badgeContent={4}
              color="error"
            >
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </IconButton>

          <Avatar
            sx={{
              bgcolor: "#2563EB",
              width: 42,
              height: 42,
              cursor: "pointer",
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}