import { Box, Typography } from "@mui/material";

import MapRoundedIcon from "@mui/icons-material/MapRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const stats = [
  {
    title: "SAFETY ZONES",
    value: "3",
    subtitle: "Configured zones",
    icon: <MapRoundedIcon />,
    color: "#38BDF8",
    glow: "rgba(56,189,248,.18)",
  },
  {
    title: "ACTIVE ZONES",
    value: "3",
    subtitle: "Currently monitoring",
    icon: <ShieldRoundedIcon />,
    color: "#34D399",
    glow: "rgba(52,211,153,.18)",
  },
  {
    title: "TOURISTS",
    value: "273",
    subtitle: "Inside monitored zones",
    icon: <PeopleAltRoundedIcon />,
    color: "#818CF8",
    glow: "rgba(129,140,248,.18)",
  },
  {
    title: "HIGH RISK",
    value: "1",
    subtitle: "Needs attention",
    icon: <WarningAmberRoundedIcon />,
    color: "#FBBF24",
    glow: "rgba(251,191,36,.18)",
  },
];

const GeoFenceStats = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        },
        gap: 1.5,
        width: "100%",
      }}
    >
      {stats.map((item, index) => (
        <Box
          key={item.title}
          sx={{
            position: "relative",
            overflow: "hidden",

            minHeight: 118,
            p: 2,

            borderRadius: "18px",

            background: `
              linear-gradient(
                145deg,
                rgba(16,43,70,.95),
                rgba(8,27,46,.98)
              )
            `,

            border: "1px solid rgba(148,163,184,.10)",

            boxShadow: `
              0 12px 35px rgba(2,12,27,.25),
              inset 0 1px 0 rgba(255,255,255,.035)
            `,

            transition:
              "transform .3s ease, border-color .3s ease, box-shadow .3s ease",

            animation:
              `statAppear .45s ease ${index * 80}ms both`,

            "@keyframes statAppear": {
              from: {
                opacity: 0,
                transform: "translateY(10px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },

            "&:hover": {
              transform: "translateY(-4px)",

              borderColor: `${item.color}35`,

              boxShadow: `
                0 18px 40px rgba(2,12,27,.35),
                0 0 25px ${item.glow}
              `,
            },
          }}
        >
          {/* Decorative glow */}

          <Box
            sx={{
              position: "absolute",

              width: 130,
              height: 130,

              right: -55,
              top: -55,

              borderRadius: "50%",

              background: item.glow,

              filter: "blur(30px)",

              pointerEvents: "none",
            }}
          />

          {/* Bottom accent */}

          <Box
            sx={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,

              height: 2,

              background: `
                linear-gradient(
                  90deg,
                  transparent,
                  ${item.color},
                  transparent
                )
              `,

              opacity: 0.75,
            }}
          />

          {/* Top row */}

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#7692AA",
                  fontSize: 8,
                  fontWeight: 900,
                  letterSpacing: 1.2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  color: "#F8FAFC",
                  fontSize: 29,
                  lineHeight: 1,
                  fontWeight: 900,
                  mt: 1,
                  letterSpacing: "-.5px",
                }}
              >
                {item.value}
              </Typography>
            </Box>

            {/* Icon */}

            <Box
              sx={{
                width: 42,
                height: 42,

                borderRadius: "13px",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: item.color,

                background: `${item.color}10`,

                border: `1px solid ${item.color}22`,

                boxShadow:
                  `0 0 22px ${item.glow}`,

                "& svg": {
                  fontSize: 21,
                },
              }}
            >
              {item.icon}
            </Box>
          </Box>

          {/* Subtitle */}

          <Typography
            sx={{
              position: "relative",
              zIndex: 1,

              color: "#59758D",

              fontSize: 9,

              mt: 1.1,
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GeoFenceStats;