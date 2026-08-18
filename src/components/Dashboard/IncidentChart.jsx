import {
  Box,
  Typography,
  Chip,
} from "@mui/material";

import AssessmentRoundedIcon from "@mui/icons-material/AssessmentRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const data = [
  { day: "Mon", value: 90 },
  { day: "Tue", value: 150 },
  { day: "Wed", value: 95 },
  { day: "Thu", value: 175 },
  { day: "Fri", value: 135 },
  { day: "Sat", value: 165 },
  { day: "Sun", value: 105 },
];

const IncidentChart = () => {
  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  const highest = Math.max(
    ...data.map((item) => item.value)
  );

  const highestDay = data.find(
    (item) => item.value === highest
  );

  const average = Math.round(total / data.length);

  /*
   * Chart coordinates.
   * The SVG uses a 700 x 240 coordinate system.
   */
  const chartWidth = 700;
  const chartHeight = 240;

  const left = 20;
  const right = 20;
  const top = 25;
  const bottom = 35;

  const usableWidth =
    chartWidth - left - right;

  const usableHeight =
    chartHeight - top - bottom;

  const maxValue = 200;

  const points = data.map((item, index) => {
    const x =
      left +
      (index / (data.length - 1)) *
        usableWidth;

    const y =
      top +
      usableHeight -
      (item.value / maxValue) *
        usableHeight;

    return {
      ...item,
      x,
      y,
    };
  });

  const linePoints = points
    .map((point) => `${point.x},${point.y}`)
    .join(" ");

  const areaPoints = `
    ${left},${chartHeight - bottom}
    ${linePoints}
    ${chartWidth - right},${chartHeight - bottom}
  `;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        minHeight: 0,

        p: 2.5,

        borderRadius: "24px",

        background:
          "linear-gradient(135deg, rgba(17,28,46,0.98) 0%, rgba(10,20,36,0.98) 55%, rgba(17,24,45,0.98) 100%)",

        border:
          "1px solid rgba(148,163,184,0.10)",

        boxShadow:
          "0 20px 55px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.035)",

        "&::before": {
          content: '""',
          position: "absolute",

          width: 280,
          height: 180,

          top: -110,
          right: 80,

          background:
            "rgba(59,130,246,0.16)",

          filter: "blur(80px)",

          borderRadius: "50%",

          pointerEvents: "none",
        },

        "&::after": {
          content: '""',
          position: "absolute",

          width: 220,
          height: 160,

          bottom: -120,
          left: 80,

          background:
            "rgba(99,102,241,0.10)",

          filter: "blur(80px)",

          borderRadius: "50%",

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
            gap: 1.4,
          }}
        >
          <Box
            sx={{
              width: 42,
              height: 42,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "13px",

              background:
                "linear-gradient(135deg, #2563EB, #6366F1)",

              boxShadow:
                "0 8px 25px rgba(59,130,246,0.30)",

              color: "#fff",
            }}
          >
            <AssessmentRoundedIcon
              sx={{ fontSize: 22 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",
                fontSize: 17,
                fontWeight: 800,
                letterSpacing: "-0.2px",
              }}
            >
              Incident Analytics
            </Typography>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 10,
                mt: 0.3,
              }}
            >
              Real-time safety intelligence
            </Typography>
          </Box>
        </Box>

        <Chip
          label="THIS WEEK"
          size="small"
          sx={{
            height: 26,

            color: "#93C5FD",

            background:
              "rgba(59,130,246,0.08)",

            border:
              "1px solid rgba(59,130,246,0.16)",

            fontSize: 9,

            fontWeight: 800,

            letterSpacing: 0.6,

            "& .MuiChip-label": {
              px: 1.2,
            },
          }}
        />
      </Box>

      {/* =====================================================
          MAIN METRIC
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",

          mb: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 10,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 1,
              mb: 0.3,
            }}
          >
            Total Incidents
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.3,
            }}
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: 38,
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-1px",
              }}
            >
              {total}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.3,

                px: 0.8,
                py: 0.4,

                borderRadius: "8px",

                background:
                  "rgba(34,197,94,0.08)",

                border:
                  "1px solid rgba(34,197,94,0.13)",
              }}
            >
              <ArrowUpwardRoundedIcon
                sx={{
                  color: "#22C55E",
                  fontSize: 13,
                }}
              />

              <Typography
                sx={{
                  color: "#22C55E",
                  fontSize: 10,
                  fontWeight: 800,
                }}
              >
                18%
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: 10,
              mt: 0.7,
            }}
          >
            Compared with previous week
          </Typography>
        </Box>

        {/* PEAK */}

        <Box
          sx={{
            textAlign: "right",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",
              fontSize: 9,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: 0.8,
            }}
          >
            Peak Activity
          </Typography>

          <Typography
            sx={{
              color: "#60A5FA",
              fontSize: 20,
              fontWeight: 800,
              mt: 0.3,
            }}
          >
            {highestDay.day}
          </Typography>

          <Typography
            sx={{
              color: "#94A3B8",
              fontSize: 9,
            }}
          >
            {highest} incidents
          </Typography>
        </Box>
      </Box>

      {/* =====================================================
          CHART
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          height: {
            xs: 220,
            md: 245,
          },

          borderRadius: "18px",

          background:
            "linear-gradient(180deg, rgba(7,18,33,0.88), rgba(7,17,30,0.62))",

          border:
            "1px solid rgba(255,255,255,0.055)",

          overflow: "hidden",

          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.025)",
        }}
      >
        {/* Y AXIS LABELS */}

        <Box
          sx={{
            position: "absolute",
            left: 10,
            top: 15,
            bottom: 30,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            pointerEvents: "none",
          }}
        >
          {[200, 150, 100, 50, 0].map(
            (value) => (
              <Typography
                key={value}
                sx={{
                  color: "#334155",
                  fontSize: 8,
                }}
              >
                {value}
              </Typography>
            )
          )}
        </Box>

        {/* SVG GRAPH */}

        <Box
          sx={{
            position: "absolute",

            left: 30,
            right: 8,
            top: 0,
            bottom: 0,
          }}
        >
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="incidentArea"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity="0.30"
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity="0"
                />
              </linearGradient>

              <linearGradient
                id="incidentLine"
                x1="0"
                y1="0"
                x2="1"
                y2="0"
              >
                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                />

                <stop
                  offset="50%"
                  stopColor="#60A5FA"
                />

                <stop
                  offset="100%"
                  stopColor="#818CF8"
                />
              </linearGradient>

              <filter
                id="lineGlow"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feGaussianBlur
                  stdDeviation="4"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* GRID */}

            {[0, 1, 2, 3, 4].map(
              (index) => {
                const y =
                  top +
                  (index / 4) *
                    usableHeight;

                return (
                  <line
                    key={index}
                    x1={left}
                    y1={y}
                    x2={chartWidth - right}
                    y2={y}
                    stroke="rgba(148,163,184,0.07)"
                    strokeDasharray="4 7"
                  />
                );
              }
            )}

            {/* AREA */}

            <polygon
              points={areaPoints}
              fill="url(#incidentArea)"
            />

            {/* GLOW LINE */}

            <polyline
              points={linePoints}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="8"
              strokeOpacity="0.12"
              filter="url(#lineGlow)"
            />

            {/* MAIN LINE */}

            <polyline
              points={linePoints}
              fill="none"
              stroke="url(#incidentLine)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* POINTS */}

            {points.map((point) => {
              const isPeak =
                point.value === highest;

              return (
                <g key={point.day}>
                  {isPeak && (
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="10"
                      fill="#3B82F6"
                      opacity="0.15"
                    />
                  )}

                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isPeak ? 5 : 3.5}
                    fill="#0B1628"
                    stroke={
                      isPeak
                        ? "#60A5FA"
                        : "#3B82F6"
                    }
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </svg>

          {/* DAY LABELS */}

          <Box
            sx={{
              position: "absolute",

              left: 15,
              right: 10,
              bottom: 8,

              display: "flex",
              justifyContent:
                "space-between",

              px: 0.5,
            }}
          >
            {data.map((item) => (
              <Typography
                key={item.day}
                sx={{
                  color:
                    item.value === highest
                      ? "#CBD5E1"
                      : "#475569",

                  fontSize: 9,

                  fontWeight:
                    item.value === highest
                      ? 800
                      : 500,
                }}
              >
                {item.day}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          BOTTOM METRICS
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          zIndex: 2,

          display: "grid",
          gridTemplateColumns:
            "repeat(3, 1fr)",

          gap: 1.2,

          mt: 1.8,
        }}
      >
        <Box
          sx={{
            p: 1.2,

            borderRadius: "13px",

            background:
              "rgba(255,255,255,0.025)",

            border:
              "1px solid rgba(255,255,255,0.05)",
          }}
        >
          <Typography
            sx={{
              color: "#475569",
              fontSize: 8,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Average
          </Typography>

          <Typography
            sx={{
              color: "#CBD5E1",
              fontSize: 14,
              fontWeight: 800,
              mt: 0.3,
            }}
          >
            {average}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 1.2,

            borderRadius: "13px",

            background:
              "rgba(59,130,246,0.045)",

            border:
              "1px solid rgba(59,130,246,0.08)",
          }}
        >
          <Typography
            sx={{
              color: "#475569",
              fontSize: 8,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Peak
          </Typography>

          <Typography
            sx={{
              color: "#60A5FA",
              fontSize: 14,
              fontWeight: 800,
              mt: 0.3,
            }}
          >
            {highest}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 1.2,

            borderRadius: "13px",

            background:
              "rgba(34,197,94,0.04)",

            border:
              "1px solid rgba(34,197,94,0.08)",
          }}
        >
          <Typography
            sx={{
              color: "#475569",
              fontSize: 8,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Trend
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.4,
              mt: 0.3,
            }}
          >
            <TrendingUpRoundedIcon
              sx={{
                color: "#22C55E",
                fontSize: 14,
              }}
            />

            <Typography
              sx={{
                color: "#22C55E",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              +18%
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          BOTTOM LIGHT
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          left: "20%",
          right: "20%",
          bottom: 0,

          height: 1,

          background:
            "linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent)",

          zIndex: 3,
        }}
      />
    </Box>
  );
};

export default IncidentChart;