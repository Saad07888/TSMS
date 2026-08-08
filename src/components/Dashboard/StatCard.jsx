import { Box, Paper, Typography } from "@mui/material";

const stats = [
  {
    title: "Total Tourists",
    value: 1250,
    color: "#1976d2",
    icon: "👥",
  },
  {
    title: "Active Tourists",
    value: 1086,
    color: "#2e7d32",
    icon: "🟢",
  },
  {
    title: "SOS Alerts",
    value: 14,
    color: "#d32f2f",
    icon: "🚨",
  },
  {
    title: "Incidents",
    value: 9,
    color: "#ed6c02",
    icon: "⚠️",
  },
];

export default function StatsCards() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        },
        gap: 3,
      }}
    >
      {stats.map((card) => (
        <Paper
          key={card.title}
          elevation={4}
          sx={{
            p: 3,
            borderRadius: 4,
            transition: "0.3s",
            cursor: "pointer",
            "&:hover": {
              transform: "translateY(-6px)",
            },
          }}
        >
          <Typography fontSize={40}>
            {card.icon}
          </Typography>

          <Typography
            variant="h4"
            fontWeight="bold"
            color={card.color}
          >
            {card.value}
          </Typography>

          <Typography color="text.secondary">
            {card.title}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
}