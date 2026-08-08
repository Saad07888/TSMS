import { Box, Card, Typography } from "@mui/material";

const stats = [
  {
    title: "Total SOS Alerts",
    value: "24",
    subtitle: "This Week",
    color: "#3B82F6",
    glow: "rgba(59, 130, 246, 0.20)",
    icon: "🚨",
  },
  {
    title: "Critical Alerts",
    value: "7",
    subtitle: "Immediate Action",
    color: "#EF4444",
    glow: "rgba(239, 68, 68, 0.20)",
    icon: "⚠️",
  },
  {
    title: "Active Alerts",
    value: "13",
    subtitle: "Currently In Progress",
    color: "#F59E0B",
    glow: "rgba(245, 158, 11, 0.20)",
    icon: "📡",
  },
  {
    title: "Resolved",
    value: "104",
    subtitle: "Successfully Resolved",
    color: "#22C55E",
    glow: "rgba(34, 197, 94, 0.20)",
    icon: "✅",
  },
];

const SOSStats = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          lg: "repeat(4, 1fr)",
        },
        gap: 2.5,
      }}
    >
      {stats.map((item) => (
        <Card
          key={item.title}
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "#111C2E",
            color: "#fff",
            borderRadius: 3,
            p: 2.5,
            minHeight: 155,

            border: `1px solid ${item.color}30`,

            boxShadow: `
              0 10px 30px rgba(0, 0, 0, 0.30),
              0 0 20px ${item.glow}
            `,

            transition: "all 0.3s ease",

            "&:hover": {
              transform: "translateY(-5px)",
              borderColor: `${item.color}70`,
              boxShadow: `
                0 15px 35px rgba(0, 0, 0, 0.40),
                0 0 30px ${item.glow}
              `,
            },

            "&::after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: "3px",
              background: item.color,
            },
          }}
        >
          {/* Background Glow */}
          <Box
            sx={{
              position: "absolute",
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: item.glow,
              filter: "blur(35px)",
              top: -60,
              right: -40,
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Information */}
            <Box>
              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: 13,
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: 36,
                  lineHeight: 1,
                  fontWeight: 700,
                  letterSpacing: "-1px",
                }}
              >
                {item.value}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 12,
                  mt: 1,
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>

            {/* Icon */}
            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: 2.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                fontSize: 24,

                background: item.glow,

                border: `1px solid ${item.color}45`,

                boxShadow: `0 0 20px ${item.glow}`,

                transition: "all 0.3s ease",

                "&:hover": {
                  transform: "scale(1.08)",
                },
              }}
            >
              {item.icon}
            </Box>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default SOSStats;