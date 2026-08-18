import {
  Box,
  Typography,
  Chip,
  Button,
  LinearProgress,
  IconButton,
  Tooltip,
} from "@mui/material";

import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";

import { useState } from "react";

const AIRiskPanel = ({
  zoneName = "Goa Beach",
  riskScore = 72,
  touristCount = 128,
  onRefresh = () => {},
  onViewDetails = () => {},
}) => {
  const [analyzing, setAnalyzing] =
    useState(false);

  const handleAnalyze = () => {
    setAnalyzing(true);

    setTimeout(() => {
      setAnalyzing(false);
    }, 1200);
  };

  const getRisk = () => {
    if (riskScore >= 75) {
      return {
        label: "HIGH RISK",
        color: "#F87171",
        glow: "rgba(248,113,113,.18)",
      };
    }

    if (riskScore >= 50) {
      return {
        label: "MODERATE RISK",
        color: "#FBBF24",
        glow: "rgba(251,191,36,.18)",
      };
    }

    return {
      label: "LOW RISK",
      color: "#34D399",
      glow: "rgba(52,211,153,.18)",
    };
  };

  const risk = getRisk();

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        width: "100%",

        borderRadius: "22px",

        background:
          "linear-gradient(145deg,#102B46 0%,#0B2138 50%,#081827 100%)",

        border:
          "1px solid rgba(56,189,248,.13)",

        boxShadow:
          "0 22px 55px rgba(2,12,27,.32), inset 0 1px 0 rgba(255,255,255,.035)",

        color: "#EAF6FF",
      }}
    >
      {/* Decorative AI glow */}

      <Box
        sx={{
          position: "absolute",

          width: 230,
          height: 230,

          right: -100,
          top: -100,

          borderRadius: "50%",

          background:
            "rgba(56,189,248,.10)",

          filter: "blur(65px)",

          pointerEvents: "none",
        }}
      />

      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <Box
        sx={{
          p: 2,

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          borderBottom:
            "1px solid rgba(148,163,184,.08)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.1,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "12px",

              color: "#67E8F9",

              background:
                "linear-gradient(145deg,rgba(56,189,248,.17),rgba(37,99,235,.08))",

              border:
                "1px solid rgba(56,189,248,.20)",

              boxShadow:
                "0 0 24px rgba(56,189,248,.08)",
            }}
          >
            <AutoAwesomeRoundedIcon />
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.8,
              }}
            >
              <Typography
                sx={{
                  color: "#F8FAFC",
                  fontSize: 14,
                  fontWeight: 900,
                }}
              >
                AI Risk Intelligence
              </Typography>

              <Chip
                label="AI"
                size="small"
                sx={{
                  height: 18,

                  color: "#67E8F9",

                  background:
                    "rgba(56,189,248,.08)",

                  border:
                    "1px solid rgba(56,189,248,.15)",

                  fontSize: 7,
                  fontWeight: 900,
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#607D96",
                fontSize: 8,
                mt: 0.3,
              }}
            >
              Predictive tourist safety analysis
            </Typography>
          </Box>
        </Box>

        <Tooltip title="Refresh AI analysis">
          <IconButton
            onClick={onRefresh}
            sx={{
              width: 34,
              height: 34,

              color: "#7D98AD",

              borderRadius: "10px",

              "&:hover": {
                color: "#38BDF8",
                background:
                  "rgba(56,189,248,.08)",
              },
            }}
          >
            <RefreshRoundedIcon
              sx={{ fontSize: 19 }}
            />
          </IconButton>
        </Tooltip>
      </Box>

      {/* ========================================= */}
      {/* ZONE */}
      {/* ========================================= */}

      <Box
        sx={{
          px: 2,
          pt: 1.7,
        }}
      >
        <Typography
          sx={{
            color: "#58758D",
            fontSize: 8,
            fontWeight: 900,
            letterSpacing: 1,
          }}
        >
          CURRENTLY ANALYZING
        </Typography>

        <Typography
          sx={{
            color: "#F8FAFC",
            fontSize: 18,
            fontWeight: 900,
            mt: 0.4,
          }}
        >
          {zoneName}
        </Typography>
      </Box>

      {/* ========================================= */}
      {/* RISK SCORE */}
      {/* ========================================= */}

      <Box
        sx={{
          mx: 2,
          mt: 1.7,
          p: 1.8,

          borderRadius: "17px",

          background:
            "rgba(255,255,255,.025)",

          border:
            `1px solid ${risk.color}22`,

          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",

            width: 150,
            height: 150,

            right: -70,
            top: -70,

            borderRadius: "50%",

            background: risk.glow,

            filter: "blur(35px)",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            position: "relative",
            zIndex: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#607C94",
                fontSize: 8,
                fontWeight: 800,
              }}
            >
              AI RISK SCORE
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                gap: 0.5,
                mt: 0.4,
              }}
            >
              <Typography
                sx={{
                  color: risk.color,
                  fontSize: 39,
                  lineHeight: 1,
                  fontWeight: 900,
                }}
              >
                {riskScore}
              </Typography>

              <Typography
                sx={{
                  color: "#526F87",
                  fontSize: 11,
                }}
              >
                /100
              </Typography>
            </Box>
          </Box>

          {/* Circular visual */}

          <Box
            sx={{
              width: 68,
              height: 68,

              borderRadius: "50%",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background: `
                radial-gradient(
                  circle,
                  #0B2138 52%,
                  transparent 54%
                ),
                conic-gradient(
                  ${risk.color} ${riskScore}%,
                  rgba(255,255,255,.06) ${riskScore}%
                )
              `,

              boxShadow:
                `0 0 25px ${risk.glow}`,
            }}
          >
            <Typography
              sx={{
                color: "#DCEEFF",
                fontSize: 10,
                fontWeight: 900,
              }}
            >
              {riskScore}%
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            mt: 1.5,
            position: "relative",
            zIndex: 1,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={riskScore}
            sx={{
              height: 6,

              borderRadius: 5,

              background:
                "rgba(255,255,255,.06)",

              "& .MuiLinearProgress-bar": {
                borderRadius: 5,

                background:
                  `linear-gradient(90deg,#38BDF8,${risk.color})`,
              },
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",

            mt: 1.1,
          }}
        >
          <Chip
            label={risk.label}
            size="small"
            sx={{
              height: 23,

              color: risk.color,

              background:
                `${risk.color}10`,

              border:
                `1px solid ${risk.color}25`,

              fontSize: 8,
              fontWeight: 900,
            }}
          />

          <Typography
            sx={{
              color: "#526F87",
              fontSize: 8,
            }}
          >
            Confidence 94%
          </Typography>
        </Box>
      </Box>

      {/* ========================================= */}
      {/* QUICK METRICS */}
      {/* ========================================= */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2,1fr)",

          gap: 1,

          px: 2,
          mt: 1.2,
        }}
      >
        <Metric
          icon={<PeopleAltRoundedIcon />}
          value={touristCount}
          label="Tourists"
          color="#38BDF8"
        />

        <Metric
          icon={<WarningAmberRoundedIcon />}
          value="07"
          label="Active alerts"
          color="#FBBF24"
        />

        <Metric
          icon={<TrendingUpRoundedIcon />}
          value="+18%"
          label="Risk trend"
          color="#F87171"
        />

        <Metric
          icon={<SecurityRoundedIcon />}
          value="98%"
          label="Safety coverage"
          color="#34D399"
        />
      </Box>

      {/* ========================================= */}
      {/* AI INSIGHT */}
      {/* ========================================= */}

      <Box
        sx={{
          mx: 2,
          mt: 1.4,
          p: 1.5,

          borderRadius: "15px",

          background:
            "linear-gradient(135deg,rgba(56,189,248,.065),rgba(37,99,235,.035))",

          border:
            "1px solid rgba(56,189,248,.12)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.7,
            mb: 0.8,
          }}
        >
          <PsychologyRoundedIcon
            sx={{
              color: "#67E8F9",
              fontSize: 17,
            }}
          />

          <Typography
            sx={{
              color: "#9DDDF5",
              fontSize: 9,
              fontWeight: 900,
            }}
          >
            AI RECOMMENDATION
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "#7894AA",
            fontSize: 9,
            lineHeight: 1.6,
          }}
        >
          Tourist density is increasing in the
          monitored area. AI recommends
          increasing patrol coverage and
          monitoring high-traffic locations.
        </Typography>
      </Box>

      {/* ========================================= */}
      {/* ACTIONS */}
      {/* ========================================= */}

      <Box
        sx={{
          display: "flex",
          gap: 1,

          p: 2,
        }}
      >
        <Button
          fullWidth
          onClick={handleAnalyze}
          startIcon={
            <AutoAwesomeRoundedIcon
              sx={{ fontSize: 16 }}
            />
          }
          disabled={analyzing}
          sx={{
            height: 40,

            borderRadius: "11px",

            color: "#fff",

            textTransform: "none",

            fontSize: 9,
            fontWeight: 800,

            background:
              "linear-gradient(135deg,#2563EB,#0891B2)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#3478FF,#06A4C7)",

              transform:
                "translateY(-1px)",
            },

            transition: ".2s",
          }}
        >
          {analyzing
            ? "Analyzing..."
            : "Run AI Analysis"}
        </Button>

        <Button
          onClick={onViewDetails}
          endIcon={
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 15 }}
            />
          }
          sx={{
            minWidth: 110,

            height: 40,

            borderRadius: "11px",

            color: "#7DD3FC",

            textTransform: "none",

            fontSize: 9,
            fontWeight: 800,

            background:
              "rgba(56,189,248,.055)",

            border:
              "1px solid rgba(56,189,248,.14)",

            "&:hover": {
              background:
                "rgba(56,189,248,.10)",
            },
          }}
        >
          Details
        </Button>
      </Box>
    </Box>
  );
};

/* ========================================= */
/* METRIC COMPONENT */
/* ========================================= */

const Metric = ({
  icon,
  value,
  label,
  color,
}) => {
  return (
    <Box
      sx={{
        p: 1.15,

        borderRadius: "13px",

        background:
          "rgba(255,255,255,.025)",

        border:
          "1px solid rgba(148,163,184,.07)",

        display: "flex",
        alignItems: "center",
        gap: 0.8,

        transition: ".25s",

        "&:hover": {
          transform:
            "translateY(-2px)",

          borderColor:
            `${color}25`,
        },
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,

          borderRadius: "9px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color,

          background:
            `${color}0D`,

          "& svg": {
            fontSize: 16,
          },
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#EAF6FF",
            fontSize: 12,
            fontWeight: 900,
            lineHeight: 1,
          }}
        >
          {value}
        </Typography>

        <Typography
          sx={{
            color: "#536F87",
            fontSize: 7,
            mt: 0.4,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default AIRiskPanel;