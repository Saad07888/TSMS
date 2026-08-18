import { Box, Typography, Chip } from "@mui/material";

import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

const categories = [
  {
    name: "Medical",
    short: "MED",
    value: 35,
    incidents: 182,
    color: "#4F7BFF",
  },
  {
    name: "Accident",
    short: "ACC",
    value: 25,
    incidents: 130,
    color: "#EF4444",
  },
  {
    name: "Lost Tourist",
    short: "LOST",
    value: 20,
    incidents: 104,
    color: "#22C55E",
  },
  {
    name: "Crime",
    short: "CRIME",
    value: 10,
    incidents: 52,
    color: "#F59E0B",
  },
  {
    name: "Other",
    short: "OTHER",
    value: 10,
    incidents: 52,
    color: "#8B5CF6",
  },
];

const CategoryChart = () => {
  const total = categories.reduce(
    (sum, item) => sum + item.incidents,
    0
  );

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        height: "100%",
        minHeight: 500,

        p: 2.5,

        borderRadius: "24px",

        background:
          "linear-gradient(145deg,#0D192B 0%,#0A1424 55%,#11152D 100%)",

        border:
          "1px solid rgba(96,165,250,0.10)",

        boxShadow:
          "0 25px 60px rgba(0,0,0,.35)",

        "&::before": {
          content: '""',

          position: "absolute",

          width: 250,
          height: 250,

          top: -140,
          right: -80,

          borderRadius: "50%",

          background:
            "rgba(79,123,255,.12)",

          filter: "blur(80px)",

          pointerEvents: "none",
        },

        "&::after": {
          content: '""',

          position: "absolute",

          width: 220,
          height: 220,

          bottom: -140,
          left: -100,

          borderRadius: "50%",

          background:
            "rgba(139,92,246,.09)",

          filter: "blur(80px)",

          pointerEvents: "none",
        },
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          mb: 2.5,
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

              borderRadius: "12px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "linear-gradient(135deg,#2563EB,#6366F1)",

              boxShadow:
                "0 8px 25px rgba(59,130,246,.25)",

              color: "#fff",
            }}
          >
            <SecurityRoundedIcon
              sx={{ fontSize: 21 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",
                fontSize: 17,
                fontWeight: 800,
              }}
            >
              Safety Intelligence
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 10,
                mt: 0.3,
              }}
            >
              Incident distribution analysis
            </Typography>
          </Box>
        </Box>

        <Chip
          label="LIVE"
          size="small"
          sx={{
            height: 24,

            color: "#4ADE80",

            bgcolor:
              "rgba(34,197,94,.07)",

            border:
              "1px solid rgba(34,197,94,.13)",

            fontSize: 9,
            fontWeight: 800,

            "& .MuiChip-label": {
              px: 1,
            },
          }}
        />
      </Box>

      {/* =====================================================
          MAIN INTELLIGENCE AREA
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          alignItems: "center",

          gap: 2,

          mb: 2.5,
        }}
      >
        {/* RADIAL VISUAL */}

        <Box
          sx={{
            position: "relative",

            width: 175,
            height: 175,

            flexShrink: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* OUTER GLOW */}

          <Box
            sx={{
              position: "absolute",

              width: 175,
              height: 175,

              borderRadius: "50%",

              background:
                "conic-gradient(#4F7BFF 0deg 126deg,#EF4444 126deg 216deg,#22C55E 216deg 288deg,#F59E0B 288deg 324deg,#8B5CF6 324deg 360deg)",

              boxShadow:
                "0 0 35px rgba(79,123,255,.15)",

              transform:
                "rotate(-90deg)",
            }}
          />

          {/* DARK RING */}

          <Box
            sx={{
              position: "absolute",

              width: 143,
              height: 143,

              borderRadius: "50%",

              background: "#0A1424",

              border:
                "8px solid #0E1A2D",

              boxShadow:
                "inset 0 0 25px rgba(0,0,0,.6)",
            }}
          />

          {/* INNER GLOW */}

          <Box
            sx={{
              position: "absolute",

              width: 100,
              height: 100,

              borderRadius: "50%",

              background:
                "radial-gradient(circle,#172A4A 0%,#0B1628 70%)",

              border:
                "1px solid rgba(96,165,250,.12)",

              boxShadow:
                "0 0 30px rgba(59,130,246,.12)",
            }}
          />

          {/* CENTER */}

          <Box
            sx={{
              position: "relative",

              zIndex: 3,

              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: "#64748B",
                fontSize: 8,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Incidents
            </Typography>

            <Typography
              sx={{
                color: "#fff",

                fontSize: 29,

                fontWeight: 900,

                lineHeight: 1.1,

                mt: 0.2,
              }}
            >
              {total}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                gap: 0.3,

                mt: 0.5,
              }}
            >
              <TrendingUpRoundedIcon
                sx={{
                  color: "#22C55E",
                  fontSize: 12,
                }}
              />

              <Typography
                sx={{
                  color: "#22C55E",
                  fontSize: 9,
                  fontWeight: 800,
                }}
              >
                +18%
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* RIGHT SIDE SUMMARY */}

        <Box
          sx={{
            flex: 1,

            minWidth: 0,
          }}
        >
          <Typography
            sx={{
              color: "#64748B",

              fontSize: 9,

              textTransform: "uppercase",

              letterSpacing: 1,

              fontWeight: 800,
            }}
          >
            Dominant Risk
          </Typography>

          <Typography
            sx={{
              color: "#F8FAFC",

              fontSize: 20,

              fontWeight: 800,

              mt: 0.5,
            }}
          >
            Medical
          </Typography>

          <Typography
            sx={{
              color: "#64748B",

              fontSize: 10,

              lineHeight: 1.5,

              mt: 0.5,
            }}
          >
            Medical incidents currently represent
            the largest portion of emergency activity.
          </Typography>

          {/* PERCENT */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              gap: 1,

              mt: 1.8,
            }}
          >
            <Typography
              sx={{
                color: "#4F7BFF",

                fontSize: 28,

                fontWeight: 900,
              }}
            >
              35%
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 9,
              }}
            >
              of total
              <br />
              incidents
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          CATEGORY MATRIX
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "grid",

          gridTemplateColumns:
            "1fr 1fr",

          gap: 1,

          mb: 1.5,
        }}
      >
        {categories.map((item, index) => (
          <Box
            key={item.name}
            sx={{
              position: "relative",

              p: 1.2,

              borderRadius: "13px",

              background:
                "rgba(255,255,255,.025)",

              border:
                "1px solid rgba(255,255,255,.05)",

              transition:
                "all .25s ease",

              gridColumn:
                index === 4
                  ? "1 / -1"
                  : "auto",

              "&:hover": {
                transform:
                  "translateY(-2px)",

                background:
                  `${item.color}08`,

                borderColor:
                  `${item.color}25`,

                boxShadow:
                  `0 8px 25px ${item.color}10`,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",

                justifyContent:
                  "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                }}
              >
                <Box
                  sx={{
                    width: 7,
                    height: 7,

                    borderRadius: "50%",

                    bgcolor:
                      item.color,

                    boxShadow:
                      `0 0 8px ${item.color}`,
                  }}
                />

                <Typography
                  sx={{
                    color: "#CBD5E1",

                    fontSize: 10,

                    fontWeight: 700,
                  }}
                >
                  {item.name}
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#F8FAFC",

                  fontSize: 12,

                  fontWeight: 800,
                }}
              >
                {item.value}%
              </Typography>
            </Box>

            {/* MINI BAR */}

            <Box
              sx={{
                height: 3,

                mt: 1,

                borderRadius: 10,

                background:
                  "rgba(255,255,255,.05)",

                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width:
                    `${item.value}%`,

                  height: "100%",

                  borderRadius: 10,

                  background:
                    item.color,

                  boxShadow:
                    `0 0 8px ${item.color}55`,
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#475569",

                fontSize: 8,

                mt: 0.6,
              }}
            >
              {item.incidents} incidents
            </Typography>
          </Box>
        ))}
      </Box>

      {/* =====================================================
          AI INSIGHT
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",

          alignItems: "center",

          gap: 1,

          p: 1.3,

          borderRadius: "14px",

          background:
            "linear-gradient(90deg,rgba(59,130,246,.07),rgba(99,102,241,.04))",

          border:
            "1px solid rgba(99,102,241,.12)",
        }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,

            flexShrink: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            borderRadius: "9px",

            background:
              "linear-gradient(135deg,#2563EB,#6366F1)",

            boxShadow:
              "0 5px 15px rgba(59,130,246,.18)",
          }}
        >
          <AutoAwesomeRoundedIcon
            sx={{
              color: "#fff",
              fontSize: 16,
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              color: "#93C5FD",

              fontSize: 9,

              fontWeight: 800,

              letterSpacing: 0.5,
            }}
          >
            AI SAFETY INSIGHT
          </Typography>

          <Typography
            sx={{
              color: "#64748B",

              fontSize: 9,

              mt: 0.25,

              lineHeight: 1.4,
            }}
          >
            Medical emergencies are currently
            the dominant incident pattern.
          </Typography>
        </Box>
      </Box>

      {/* BOTTOM ACCENT */}

      <Box
        sx={{
          position: "absolute",

          bottom: 0,

          left: "15%",
          right: "15%",

          height: 1,

          background:
            "linear-gradient(90deg,transparent,#4F7BFF,transparent)",

          opacity: 0.7,
        }}
      />
    </Box>
  );
};

export default CategoryChart;