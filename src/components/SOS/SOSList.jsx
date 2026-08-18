import { Box, Chip, Typography, Button } from "@mui/material";

const sosAlerts = [
  {
    id: "SOS-1024",
    tourist: "Rahul Sharma",
    location: "Goa Beach",
    severity: "Critical",
    time: "2 min ago",
    status: "TRIGGERED",
    color: "#EF4444",
  },
  {
    id: "SOS-1023",
    tourist: "Anjali Mehta",
    location: "Gateway of India",
    severity: "High",
    time: "5 min ago",
    status: "ACKNOWLEDGED",
    color: "#F97316",
  },
  {
    id: "SOS-1022",
    tourist: "John Doe",
    location: "Lonavala",
    severity: "Medium",
    time: "8 min ago",
    status: "ASSIGNED",
    color: "#F59E0B",
  },
];

const SOSList = () => {
  return (
    <Box
      sx={{
        background: "#0D192A",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 3,
        p: 2.5,
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#F8FAFC",
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            Active Emergencies
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: 12,
              mt: 0.5,
            }}
          >
            Live SOS alerts requiring attention
          </Typography>
        </Box>

        <Chip
          label="3 Active"
          size="small"
          sx={{
            bgcolor: "rgba(239,68,68,0.12)",
            color: "#EF4444",
            border: "1px solid rgba(239,68,68,0.25)",
            fontWeight: 700,
          }}
        />
      </Box>

      {/* SOS Alerts */}
      {sosAlerts.map((alert) => (
        <Box
          key={alert.id}
          sx={{
            p: 1.8,
            mb: 1.2,
            borderRadius: 2,
            background: "#111F32",
            border: "1px solid rgba(255,255,255,0.05)",
            transition: "0.25s",

            "&:hover": {
              background: "#14243A",
              transform: "translateX(4px)",
            },
          }}
        >
          {/* Top */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${alert.color}18`,
                  border: `1px solid ${alert.color}45`,
                  fontSize: 18,
                }}
              >
                🚨
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#F8FAFC",
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {alert.id}
                </Typography>

                <Typography
                  sx={{
                    color: "#CBD5E1",
                    fontSize: 13,
                  }}
                >
                  {alert.tourist}
                </Typography>
              </Box>
            </Box>

            <Chip
              label={alert.severity}
              size="small"
              sx={{
                bgcolor: `${alert.color}18`,
                color: alert.color,
                border: `1px solid ${alert.color}45`,
                fontWeight: 700,
              }}
            />
          </Box>

          {/* Location */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: 1.5,
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: 13 }}>
              📍
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 12,
              }}
            >
              {alert.location}
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 11,
                ml: "auto",
              }}
            >
              {alert.time}
            </Typography>
          </Box>

          {/* Bottom */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mt: 1.5,
            }}
          >
            <Typography
              sx={{
                color: "#64748B",
                fontSize: 10,
                fontWeight: 700,
              }}
            >
              STATUS:{" "}
              <span style={{ color: alert.color }}>
                {alert.status}
              </span>
            </Typography>

            <Button
              size="small"
              sx={{
                color: "#60A5FA",
                border: "1px solid rgba(96,165,250,0.2)",
                borderRadius: 1.5,
                fontSize: 10,
                textTransform: "none",
              }}
            >
              View
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SOSList;