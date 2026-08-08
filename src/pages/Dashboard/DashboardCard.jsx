import { Paper, Typography, Box } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const DashboardCard = ({
  title,
  value,
  icon,
  color,
  change = "+12%",
  subtitle = "Compared to yesterday",
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 4,
        p: 3,
    background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
        borderLeft: `6px solid ${color}`,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        transition: "all .3s ease",
        cursor: "pointer",
        "&::before": {
  content: '""',
  position: "absolute",
  width: 180,
  height: 180,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.12)",
  top: -70,
  right: -70,
},

        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Top Section */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
       <Typography
  variant="body2"
  sx={{ color: "rgba(255,255,255,0.8)" }}
  fontWeight={600}
>
  {title}
</Typography>
          <Typography
  variant="h4"
  fontWeight="bold"
  sx={{
    mt: 1,
    color: "#fff",
  }}
>
  {value}
</Typography>
        </Box>

        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            bgcolor: "rgba(255,255,255,0.18)",
backdropFilter: "blur(10px)",
border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            "& svg": {
              fontSize: 32,
            },
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
        >
          <TrendingUpIcon
            sx={{
              color: "#16A34A",
              fontSize: 18,
            }}
          />

          <Typography
            color="#16A34A"
            fontWeight="bold"
            fontSize={14}
          >
            {change}
          </Typography>
        </Box>

        <Typography
          variant="caption"
          color="text.secondary"
        >
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default DashboardCard;
