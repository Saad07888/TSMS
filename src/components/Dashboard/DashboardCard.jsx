import { Card, Box, Typography } from "@mui/material";

const DashboardCard = ({ title, value, color, icon }) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",

        background: "#111C2E",

        border: "1px solid rgba(255,255,255,.06)",

        borderRadius: 4,

        p: 3,

        transition: ".35s",

        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(0,0,0,.45)",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: `${color}20`,
          top: -80,
          right: -80,
        },
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: 14,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 42,
              mt: 1,
            }}
          >
            {value}
          </Typography>

                  </Box>

        {/* Icon */}
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "20px",
            background: `${color}25`,
            border: `1px solid ${color}50`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: color,
            boxShadow: `0 0 30px ${color}40`,

            "& svg": {
              fontSize: 34,
            },
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          mt: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#22C55E",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          ▲ +12.8%
        </Typography>

        <Typography
          sx={{
            color: "#64748B",
            fontSize: 13,
          }}
        >
          Compared to yesterday
        </Typography>
      </Box>

      {/* Glow Line */}
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: 3,
          background: `linear-gradient(90deg, ${color}, transparent)`,
        }}
      />
    </Card>
  );
};

export default DashboardCard;