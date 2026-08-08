import {
  Card,
  Box,
  Typography,
  Button,
  Avatar,
} from "@mui/material";

import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

const sosData = [
  {
    place: "Gateway of India",
    time: "10:25 AM",
    status: "Active",
  },
  {
    place: "Marine Drive",
    time: "10:18 AM",
    status: "Active",
  },
  {
    place: "Goa Beach",
    time: "10:10 AM",
    status: "Active",
  },
  {
    place: "Lonavala",
    time: "10:05 AM",
    status: "Active",
  },
];

const RecentSOSCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "#111C2E",
        borderRadius: 4,
        border: "1px solid rgba(255,255,255,.06)",
        boxShadow: "0 15px 35px rgba(0,0,0,.35)",
        p: 3,
        height: "100%",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          🚨 Recent SOS Alerts
        </Typography>

        <Button
          size="small"
          sx={{
            bgcolor: "#2563EB",
            color: "#fff",
            textTransform: "none",
            borderRadius: 2,

            "&:hover": {
              bgcolor: "#1D4ED8",
            },
          }}
        >
          View All
        </Button>
      </Box>

            {sosData.map((item) => (
        <Box
          key={item.place}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
            borderBottom:
              "1px solid rgba(255,255,255,.06)",
          }}
        >
          {/* Left Side */}

          <Box
            display="flex"
            alignItems="center"
            gap={2}
          >
            <Avatar
              sx={{
                bgcolor: "rgba(239,68,68,.15)",
                color: "#EF4444",
                width: 44,
                height: 44,
              }}
            >
              <WarningRoundedIcon />
            </Avatar>

            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 600,
                }}
              >
                {item.place}
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: 13,
                }}
              >
                {item.time}
              </Typography>
            </Box>
          </Box>

          {/* Status */}

          <Typography
            sx={{
              color: "#22C55E",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            ● {item.status}
          </Typography>
        </Box>
      ))}

            {/* Footer Summary */}
      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 3,
          bgcolor: "rgba(239,68,68,.08)",
          border: "1px solid rgba(239,68,68,.15)",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            mb: 1,
          }}
        >
          Active Emergency Status
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: 13,
            lineHeight: 1.7,
          }}
        >
          4 active SOS alerts are currently being monitored.
          Police and emergency teams have been notified and
          AI monitoring is tracking all affected locations in
          real time.
        </Typography>
      </Box>

      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: -70,
          right: -70,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(239,68,68,.10)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
    </Card>
  );
};

export default RecentSOSCard;