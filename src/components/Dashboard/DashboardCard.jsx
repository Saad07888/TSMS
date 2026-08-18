import { Box, Card, Typography } from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";

const DashboardCard = ({
  title,
  value,
  color,
  icon,
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",

        minHeight: 170,

        p: 2.5,

        borderRadius: "22px",

        background:
          "linear-gradient(145deg, #111E32 0%, #0C1829 65%, #0A1423 100%)",

        border:
          "1px solid rgba(148,163,184,.08)",

        boxShadow:
          "0 20px 45px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.025)",

        transition:
          "transform .3s ease, box-shadow .3s ease, border-color .3s ease",

        cursor: "pointer",

        "&:hover": {
          transform: "translateY(-6px)",

          borderColor:
            `${color}35`,

          boxShadow:
            `0 28px 60px rgba(0,0,0,.38),
             0 0 35px ${color}12`,
        },

        /* =================================================
           LARGE BACKGROUND GLOW
        ================================================= */

        "&::before": {
          content: '""',

          position: "absolute",

          width: 190,
          height: 190,

          top: -110,
          right: -80,

          borderRadius: "50%",

          background:
            `${color}12`,

          filter: "blur(4px)",

          pointerEvents: "none",
        },

        /* =================================================
           BOTTOM LIGHT
        ================================================= */

        "&::after": {
          content: '""',

          position: "absolute",

          width: 150,
          height: 70,

          bottom: -60,
          left: "25%",

          borderRadius: "50%",

          background:
            `${color}10`,

          filter: "blur(25px)",

          pointerEvents: "none",
        },
      }}
    >
      {/* =====================================================
          TOP ROW
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",

          alignItems: "flex-start",

          justifyContent:
            "space-between",
        }}
      >
        {/* TITLE */}

        <Box>
          <Typography
            sx={{
              color: "#64748B",

              fontSize: 9,

              fontWeight: 800,

              letterSpacing: 1.1,

              textTransform:
                "uppercase",
            }}
          >
            {title}
          </Typography>

          {/* VALUE */}

          <Typography
            sx={{
              color: "#F8FAFC",

              fontSize: {
                xs: 31,
                md: 34,
              },

              fontWeight: 900,

              letterSpacing: "-1.4px",

              lineHeight: 1,

              mt: 1,

              textShadow:
                "0 4px 18px rgba(0,0,0,.35)",
            }}
          >
            {value}
          </Typography>
        </Box>

        {/* =================================================
            ICON CONTAINER
        ================================================= */}

        <Box
          sx={{
            position: "relative",

            width: 50,
            height: 50,

            borderRadius: "16px",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            background:
              `linear-gradient(
                145deg,
                ${color}18,
                ${color}08
              )`,

            border:
              `1px solid ${color}30`,

            color: color,

            boxShadow:
              `0 10px 28px ${color}15`,

            transition:
              "transform .3s ease",

            ".MuiCard-root:hover &": {
              transform:
                "scale(1.05)",
            },

            "&::before": {
              content: '""',

              position: "absolute",

              inset: 5,

              borderRadius: "12px",

              border:
                `1px solid ${color}12`,
            },

            "& svg": {
              position:
                "relative",

              zIndex: 1,

              fontSize: 24,

              filter:
                `drop-shadow(0 0 7px ${color}55)`,
            },
          }}
        >
          {icon}
        </Box>
      </Box>

      {/* =====================================================
          TREND ROW
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          display: "flex",

          alignItems: "center",

          gap: 1,

          mt: 2.2,
        }}
      >
        {/* Trend */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 0.35,

            px: 0.75,

            py: 0.4,

            borderRadius: "7px",

            bgcolor:
              "rgba(34,197,94,.07)",

            border:
              "1px solid rgba(34,197,94,.10)",
          }}
        >
          <TrendingUpRoundedIcon
            sx={{
              color: "#22C55E",

              fontSize: 13,
            }}
          />

          <Typography
            sx={{
              color: "#22C55E",

              fontSize: 9,

              fontWeight: 900,
            }}
          >
            12.8%
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#475569",

            fontSize: 9,
          }}
        >
          vs yesterday
        </Typography>
      </Box>

      {/* =====================================================
          MINI ACTIVITY GRAPH
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          right: 18,

          bottom: 38,

          height: 28,

          display: "flex",

          alignItems: "flex-end",

          gap: "3px",

          opacity: 0.75,
        }}
      >
        {[35, 48, 30, 65, 50, 75, 58, 82].map(
          (height, index) => (
            <Box
              key={index}
              sx={{
                width: 3,

                height: `${height}%`,

                minHeight: 5,

                borderRadius: "4px",

                background:
                  `linear-gradient(
                    180deg,
                    ${color},
                    ${color}35
                  )`,

                boxShadow:
                  `0 0 7px ${color}25`,
              }}
            />
          )
        )}
      </Box>

      {/* =====================================================
          BOTTOM STATUS
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          zIndex: 2,

          display: "flex",

          alignItems: "center",

          justifyContent:
            "space-between",

          mt: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 0.55,
          }}
        >
          {/* LIVE DOT */}

          <Box
            sx={{
              width: 5,
              height: 5,

              borderRadius: "50%",

              bgcolor: color,

              boxShadow:
                `0 0 8px ${color}`,
            }}
          />

          <Typography
            sx={{
              color: "#475569",

              fontSize: 8.5,
            }}
          >
            Live system data
          </Typography>
        </Box>

        {/* MORE */}

        <Box
          sx={{
            width: 25,
            height: 25,

            display: "flex",

            alignItems: "center",

            justifyContent:
              "center",

            borderRadius: "8px",

            color: "#475569",

            transition: ".2s",

            "&:hover": {
              color: "#94A3B8",

              bgcolor:
                "rgba(255,255,255,.04)",
            },
          }}
        >
          <MoreHorizRoundedIcon
            sx={{
              fontSize: 17,
            }}
          />
        </Box>
      </Box>

      {/* =====================================================
          PREMIUM BOTTOM ACCENT
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          left: 0,
          bottom: 0,

          width: "100%",

          height: 2,

          background:
            `linear-gradient(
              90deg,
              ${color},
              ${color}75,
              transparent
            )`,

          boxShadow:
            `0 0 12px ${color}35`,
        }}
      />
    </Card>
  );
};

export default DashboardCard;