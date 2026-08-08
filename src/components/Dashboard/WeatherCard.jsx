import {
  Card,
  Box,
  Typography,
} from "@mui/material";

import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

const WeatherCard = () => {
  return (
  <Card
  elevation={0}
  sx={{
    position: "relative",
    overflow: "hidden",
    bgcolor: "#111C2E",
    borderRadius: 4,
    border: "1px solid rgba(255,255,255,.06)",
    boxShadow: "0 15px 35px rgba(0,0,0,.35)",
    p: 3,
  }}
>
      {/* Header */}

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
          🌤 Weather
        </Typography>

        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: "50%",

            background:
              "linear-gradient(135deg,#F59E0B,#FBBF24)",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            boxShadow:
              "0 0 35px rgba(245,158,11,.55)",
          }}
        >
          <WbSunnyRoundedIcon
            sx={{
              color: "#fff",
              fontSize: 34,
            }}
          />
        </Box>
      </Box>

            {/* Temperature */}

      <Typography
        sx={{
          color: "#fff",
          fontSize: 52,
          fontWeight: "bold",
          lineHeight: 1,
        }}
      >
        31°
      </Typography>

      <Typography
        sx={{
          color: "#94A3B8",
          mb: 3,
          mt: 1,
        }}
      >
        Mumbai, Maharashtra
      </Typography>

      {/* Weather Details */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
        }}
      >
        {/* Humidity */}

        <Box
          sx={{
            bgcolor: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 3,
            p: 2,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 13,
            }}
          >
            Humidity
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            72%
          </Typography>
        </Box>

        {/* Wind */}

        <Box
          sx={{
            bgcolor: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 3,
            p: 2,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 13,
            }}
          >
            Wind
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            14 km/h
          </Typography>
        </Box>

        {/* Visibility */}

        <Box
          sx={{
            bgcolor: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 3,
            p: 2,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 13,
            }}
          >
            Visibility
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            8 km
          </Typography>
        </Box>

        {/* AQI */}

        <Box
          sx={{
            bgcolor: "rgba(255,255,255,.04)",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 3,
            p: 2,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 13,
            }}
          >
            Air Quality
          </Typography>

          <Typography
            sx={{
              color: "#22C55E",
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Good
          </Typography>
        </Box>
      </Box>

            {/* Weather Summary */}
      <Box
        sx={{
          mt: 3,
          p: 2,
          borderRadius: 3,
          bgcolor: "rgba(245,158,11,.08)",
          border: "1px solid rgba(245,158,11,.18)",
        }}
      >
        <Typography
          sx={{
            color: "#FBBF24",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Today's Forecast
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: 13,
            lineHeight: 1.7,
          }}
        >
          Sunny weather is expected throughout the day.
          Tourist conditions are favorable with good
          visibility and moderate wind speed.
        </Typography>
      </Box>

      {/* Background Glow */}
   
    </Card>
  );
};

export default WeatherCard;