import {
  Card,
  Box,
  Typography,
  LinearProgress,
  Chip,
} from "@mui/material";

import PsychologyIcon from "@mui/icons-material/Psychology";

const riskData = [
  {
    area: "Lonavala",
    risk: 92,
    label: "High Risk",
    color: "#EF4444",
  },
  {
    area: "Goa Beach",
    risk: 64,
    label: "Medium",
    color: "#F59E0B",
  },
  {
    area: "Gateway of India",
    risk: 18,
    label: "Safe",
    color: "#22C55E",
  },
];

const AIRiskCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",

        bgcolor: "#111C2E",

        borderRadius: 4,

        border: "1px solid rgba(255,255,255,.06)",

        boxShadow:
          "0 15px 35px rgba(0,0,0,.35)",

        p: 3,

        
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
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          🤖 AI Risk Prediction
        </Typography>


                <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            background:
              "linear-gradient(135deg,#3B82F6,#6366F1)",

            boxShadow:
              "0 0 35px rgba(59,130,246,.55)",

            animation: "pulse 2.5s infinite",
          }}
        >
          <PsychologyIcon
            sx={{
              color: "#fff",
              fontSize: 34,
            }}
          />
        </Box>
      </Box>

      <Typography
        sx={{
          color: "#94A3B8",
          fontSize: 13,
          mb: 3,
        }}
      >
        Live AI analysis of tourist safety based on
        crowd density, SOS alerts and GeoFence activity.
      </Typography>

      {riskData.map((item) => (
        <Box
          key={item.area}
          sx={{
            mb: 3,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography
              sx={{
                color: "#fff",
                fontWeight: 600,
              }}
            >
              {item.area}
            </Typography>

            <Chip
              label={item.label}
              size="small"
              sx={{
                bgcolor: `${item.color}20`,
                color: item.color,
                fontWeight: "bold",
              }}
            />
          </Box>

          <LinearProgress
            variant="determinate"
            value={item.risk}
            sx={{
              height: 10,
              borderRadius: 10,

              bgcolor: "rgba(255,255,255,.06)",

              "& .MuiLinearProgress-bar": {
                bgcolor: item.color,
                borderRadius: 10,
              },
            }}
          />

          <Typography
            sx={{
              color: "#64748B",
              mt: 0.8,
              fontSize: 12,
            }}
          >
            Risk Score : {item.risk}%
          </Typography>
        </Box>
      ))}

            {/* AI Summary */}
      <Box
        sx={{
          mt: 2,
          p: 2,
          borderRadius: 3,
          bgcolor: "rgba(59,130,246,.08)",
          border: "1px solid rgba(59,130,246,.18)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography
            sx={{
              color: "#fff",
              fontWeight: 700,
            }}
          >
            AI Confidence
          </Typography>

          <Typography
            sx={{
              color: "#22C55E",
              fontWeight: "bold",
              fontSize: 22,
            }}
          >
            96%
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: 13,
            lineHeight: 1.7,
          }}
        >
          AI predicts a higher probability of incidents in
          crowded tourist areas. Extra police patrol is
          recommended around Lonavala and Goa Beach during
          peak hours.
        </Typography>
      </Box>

      {/* Bottom Glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(59,130,246,.08)",
          filter: "blur(60px)",
        }}
      />
    </Card>
  );
};

export default AIRiskCard;