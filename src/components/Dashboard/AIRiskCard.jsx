import {
  Box,
  Typography,
  Chip,
  LinearProgress,
} from "@mui/material";

import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const riskData = [
  {
    area: "Lonavala",
    risk: 92,
    label: "Critical",
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
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        height: "100%",
        minHeight: 500,

        p: 2.5,

        borderRadius: "24px",

        background:
          "linear-gradient(145deg,#101B30 0%,#0D1728 55%,#15152F 100%)",

        border:
          "1px solid rgba(99,102,241,0.16)",

        boxShadow:
          "0 25px 60px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.035)",

        transition:
          "all .3s ease",

        "&:hover": {
          borderColor:
            "rgba(99,102,241,.28)",

          boxShadow:
            "0 30px 70px rgba(0,0,0,.45), 0 0 40px rgba(79,70,229,.06)",
        },

        "&::before": {
          content: '""',

          position: "absolute",

          width: 280,
          height: 280,

          top: -150,
          right: -80,

          borderRadius: "50%",

          background:
            "rgba(79,70,229,.16)",

          filter: "blur(80px)",

          pointerEvents: "none",
        },

        "&::after": {
          content: '""',

          position: "absolute",

          width: 200,
          height: 200,

          bottom: -130,
          left: -80,

          borderRadius: "50%",

          background:
            "rgba(37,99,235,.08)",

          filter: "blur(75px)",

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
          alignItems: "center",
          justifyContent: "space-between",

          mb: 2.2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          {/* AI ICON */}

          <Box
            sx={{
              width: 42,
              height: 42,

              borderRadius: "13px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "linear-gradient(135deg,#4F7BFF,#7C3AED)",

              color: "#fff",

              boxShadow:
                "0 8px 25px rgba(79,123,255,.28)",

              position: "relative",

              "&::after": {
                content: '""',

                position: "absolute",

                inset: -4,

                borderRadius: "16px",

                border:
                  "1px solid rgba(99,102,241,.15)",
              },
            }}
          >
            <PsychologyRoundedIcon
              sx={{ fontSize: 22 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 17,

                fontWeight: 800,

                lineHeight: 1.2,
              }}
            >
              AI Risk Intelligence
            </Typography>

            <Typography
              sx={{
                color: "#64748B",

                fontSize: 9.5,

                mt: 0.4,
              }}
            >
              Predictive safety analysis
            </Typography>
          </Box>
        </Box>

        {/* LIVE AI */}

        <Chip
          icon={
            <Box
              component="span"
              sx={{
                width: 6,
                height: 6,

                borderRadius: "50%",

                bgcolor: "#22C55E",

                boxShadow:
                  "0 0 8px #22C55E",
              }}
            />
          }
          label="LIVE AI"
          size="small"
          sx={{
            height: 24,

            color: "#4ADE80",

            bgcolor:
              "rgba(34,197,94,.06)",

            border:
              "1px solid rgba(34,197,94,.14)",

            fontSize: 8.5,

            fontWeight: 800,

            letterSpacing: 0.6,

            "& .MuiChip-icon": {
              ml: 1,
              mr: -0.3,
            },

            "& .MuiChip-label": {
              px: 1,
            },
          }}
        />
      </Box>

      {/* =====================================================
          TOP INTELLIGENCE STATS
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "grid",

          gridTemplateColumns:
            "1fr 1fr",

          gap: 1.2,

          mb: 2.2,
        }}
      >
        {/* HIGHEST RISK */}

        <Box
          sx={{
            p: 1.5,

            borderRadius: "16px",

            background:
              "linear-gradient(135deg,rgba(239,68,68,.08),rgba(239,68,68,.025))",

            border:
              "1px solid rgba(239,68,68,.14)",

            position: "relative",

            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",

              fontSize: 8,

              fontWeight: 800,

              letterSpacing: 0.8,

              textTransform: "uppercase",
            }}
          >
            Highest Risk
          </Typography>

          <Box
            sx={{
              display: "flex",

              alignItems: "baseline",

              gap: 0.7,

              mt: 0.4,
            }}
          >
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 25,

                fontWeight: 900,
              }}
            >
              92%
            </Typography>

            <Typography
              sx={{
                color: "#EF4444",

                fontSize: 8,

                fontWeight: 800,
              }}
            >
              Critical
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",

              right: -12,
              bottom: -15,

              width: 65,
              height: 65,

              borderRadius: "50%",

              border:
                "8px solid rgba(239,68,68,.05)",
            }}
          />
        </Box>

        {/* AI CONFIDENCE */}

        <Box
          sx={{
            p: 1.5,

            borderRadius: "16px",

            background:
              "linear-gradient(135deg,rgba(79,123,255,.09),rgba(99,102,241,.025))",

            border:
              "1px solid rgba(79,123,255,.14)",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",

              fontSize: 8,

              fontWeight: 800,

              letterSpacing: 0.8,

              textTransform: "uppercase",
            }}
          >
            AI Confidence
          </Typography>

          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              gap: 0.6,

              mt: 0.4,
            }}
          >
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 25,

                fontWeight: 900,
              }}
            >
              96%
            </Typography>

            <TrendingUpRoundedIcon
              sx={{
                color: "#22C55E",

                fontSize: 16,
              }}
            />
          </Box>

          <Typography
            sx={{
              color: "#64748B",

              fontSize: 8,
            }}
          >
            Model confidence
          </Typography>
        </Box>
      </Box>

      {/* =====================================================
          MONITORED AREAS HEADER
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          mb: 1.3,
        }}
      >
        <Typography
          sx={{
            color: "#64748B",

            fontSize: 8.5,

            fontWeight: 800,

            letterSpacing: 1,

            textTransform: "uppercase",
          }}
        >
          Monitored Risk Areas
        </Typography>

        <Typography
          sx={{
            color: "#475569",

            fontSize: 8,
          }}
        >
          3 locations
        </Typography>
      </Box>

      {/* =====================================================
          RISK AREAS
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",

          flexDirection: "column",

          gap: 1.35,
        }}
      >
        {riskData.map((item) => (
          <Box
            key={item.area}
            sx={{
              transition:
                "all .25s ease",

              "&:hover": {
                transform:
                  "translateX(3px)",
              },
            }}
          >
            {/* TOP */}

            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                justifyContent:
                  "space-between",

                mb: 0.65,
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
                    width: 6,
                    height: 6,

                    borderRadius: "50%",

                    bgcolor:
                      item.color,

                    boxShadow:
                      `0 0 8px ${item.color}`,
                  }}
                />

                <Typography
                  sx={{
                    color: "#E2E8F0",

                    fontSize: 10.5,

                    fontWeight: 700,
                  }}
                >
                  {item.area}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  gap: 0.7,
                }}
              >
                <Typography
                  sx={{
                    color: "#94A3B8",

                    fontSize: 9,

                    fontWeight: 700,
                  }}
                >
                  {item.risk}%
                </Typography>

                <Chip
                  label={item.label}
                  size="small"
                  sx={{
                    height: 18,

                    color: item.color,

                    bgcolor:
                      `${item.color}12`,

                    border:
                      `1px solid ${item.color}22`,

                    fontSize: 7.5,

                    fontWeight: 800,

                    "& .MuiChip-label": {
                      px: 0.8,
                    },
                  }}
                />
              </Box>
            </Box>

            {/* PROGRESS */}

            <LinearProgress
              variant="determinate"
              value={item.risk}
              sx={{
                height: 5,

                borderRadius: 10,

                bgcolor:
                  "rgba(255,255,255,.055)",

                overflow: "hidden",

                "& .MuiLinearProgress-bar": {
                  borderRadius: 10,

                  background:
                    `linear-gradient(90deg,${item.color},${item.color}AA)`,

                  boxShadow:
                    `0 0 12px ${item.color}55`,
                },
              }}
            />
          </Box>
        ))}
      </Box>

      {/* =====================================================
          AI RECOMMENDATION
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          mt: 2,

          p: 1.5,

          borderRadius: "16px",

          background:
            "linear-gradient(135deg,rgba(59,130,246,.08),rgba(99,102,241,.06))",

          border:
            "1px solid rgba(99,102,241,.14)",
        }}
      >
        <Box
          sx={{
            display: "flex",

            gap: 1,

            alignItems: "center",
          }}
        >
          {/* AI ICON */}

          <Box
            sx={{
              width: 34,
              height: 34,

              flexShrink: 0,

              borderRadius: "10px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "rgba(79,123,255,.12)",

              color: "#60A5FA",
            }}
          >
            <AutoAwesomeRoundedIcon
              sx={{ fontSize: 17 }}
            />
          </Box>

          {/* TEXT */}

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                color: "#93C5FD",

                fontSize: 9,

                fontWeight: 800,

                mb: 0.3,
              }}
            >
              AI RECOMMENDATION
            </Typography>

            <Typography
              sx={{
                color: "#64748B",

                fontSize: 8.5,

                lineHeight: 1.45,
              }}
            >
              Increase police patrol around
              Lonavala and Goa Beach during
              peak tourist hours.
            </Typography>
          </Box>

          <ArrowForwardRoundedIcon
            sx={{
              color: "#475569",

              fontSize: 16,
            }}
          />
        </Box>
      </Box>

      {/* =====================================================
          SYSTEM STATUS
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",

          alignItems: "center",

          justifyContent:
            "space-between",

          mt: 1.5,

          px: 0.5,
        }}
      >
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 0.7,
          }}
        >
          <SecurityRoundedIcon
            sx={{
              color: "#475569",

              fontSize: 13,
            }}
          />

          <Typography
            sx={{
              color: "#475569",

              fontSize: 8,
            }}
          >
            AI monitoring active
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 0.5,
          }}
        >
          <CheckCircleRoundedIcon
            sx={{
              color: "#22C55E",

              fontSize: 12,
            }}
          />

          <Typography
            sx={{
              color: "#22C55E",

              fontSize: 8,

              fontWeight: 700,
            }}
          >
            Model Online
          </Typography>
        </Box>
      </Box>

      {/* =====================================================
          BOTTOM GLOW
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          bottom: 0,

          left: "15%",
          right: "15%",

          height: 1,

          background:
            "linear-gradient(90deg,transparent,#6366F1,transparent)",

          opacity: 0.7,
        }}
      />
    </Box>
  );
};

export default AIRiskCard;