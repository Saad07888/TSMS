import { Paper, Box, Typography, Button } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function WelcomeCard() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mb: 4,
        borderRadius: 5,
        background:
          "linear-gradient(135deg,#2563EB 0%,#4F46E5 50%,#7C3AED 100%)",
        color: "white",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            <WavingHandIcon sx={{ mr: 1 }} />
            Welcome Back, Admin
          </Typography>

          <Typography
            sx={{
              opacity: 0.9,
              mb: 2,
            }}
          >
            Smart Tourist Safety Monitoring &
            Incident Response System
          </Typography>

          <Typography
            sx={{
              opacity: 0.85,
            }}
          >
            {today}
          </Typography>
        </Box>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            bgcolor: "white",
            color: "#2563EB",
            px: 3,
            py: 1.2,
            borderRadius: 3,
            fontWeight: 700,
            "&:hover": {
              bgcolor: "#F3F4F6",
            },
          }}
        >
          View Reports
        </Button>
      </Box>
    </Paper>
  );
}