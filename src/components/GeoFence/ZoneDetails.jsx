import {
  Box,
  Typography,
  Chip,
  Divider,
  Button,
  LinearProgress,
  IconButton,
  Tooltip,
} from "@mui/material";

import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";

const ZoneDetails = ({
  zone,
  onEdit = () => {},
  onDelete = () => {},
  onFocus = () => {},
}) => {
  if (!zone) {
    return (
      <Box
        sx={{
          p: 3,
          borderRadius: "20px",
          background:
            "linear-gradient(145deg,#102B46,#081827)",
          border:
            "1px solid rgba(56,189,248,.12)",
          textAlign: "center",
        }}
      >
        <RadarRoundedIcon
          sx={{
            fontSize: 40,
            color: "#345B75",
            mb: 1,
          }}
        />

        <Typography
          sx={{
            color: "#7894AA",
            fontSize: 11,
            fontWeight: 700,
          }}
        >
          Select a GeoFence zone
        </Typography>

        <Typography
          sx={{
            color: "#4D687F",
            fontSize: 8,
            mt: 0.5,
          }}
        >
          Zone intelligence will appear here
        </Typography>
      </Box>
    );
  }

  const riskColor =
    zone.risk === "High"
      ? "#F87171"
      : zone.risk === "Medium"
      ? "#FBBF24"
      : "#34D399";

  const riskScore =
    zone.risk === "High"
      ? 82
      : zone.risk === "Medium"
      ? 61
      : 28;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        borderRadius: "22px",

        background:
          "linear-gradient(145deg,#102B46 0%,#0B2138 52%,#081827 100%)",

        border:
          "1px solid rgba(56,189,248,.13)",

        boxShadow:
          "0 20px 50px rgba(2,12,27,.30), inset 0 1px 0 rgba(255,255,255,.035)",
      }}
    >
      {/* Decorative glow */}

      <Box
        sx={{
          position: "absolute",
          width: 180,
          height: 180,
          right: -90,
          top: -90,

          borderRadius: "50%",

          background: `${riskColor}12`,

          filter: "blur(45px)",

          pointerEvents: "none",
        }}
      />

      {/* ===================================== */}
      {/* HEADER */}
      {/* ===================================== */}

      <Box
        sx={{
          p: 2,

          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",

          position: "relative",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1.1,
          }}
        >
          <Box
            sx={{
              width: 43,
              height: 43,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              borderRadius: "13px",

              color: "#38BDF8",

              background:
                "rgba(56,189,248,.09)",

              border:
                "1px solid rgba(56,189,248,.17)",
            }}
          >
            <LocationOnRoundedIcon />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",
                fontSize: 15,
                fontWeight: 900,
              }}
            >
              {zone.name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                mt: 0.35,
              }}
            >
              <NavigationRoundedIcon
                sx={{
                  color: "#54738C",
                  fontSize: 11,
                }}
              />

              <Typography
                sx={{
                  color: "#66839A",
                  fontSize: 8,
                }}
              >
                {zone.location || "Monitored area"}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 0.3,
          }}
        >
          <Tooltip title="Edit zone">
            <IconButton
              size="small"
              onClick={() => onEdit(zone)}
              sx={{
                color: "#7DD3FC",

                width: 31,
                height: 31,

                borderRadius: "9px",

                "&:hover": {
                  background:
                    "rgba(56,189,248,.08)",
                },
              }}
            >
              <EditRoundedIcon
                sx={{ fontSize: 16 }}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete zone">
            <IconButton
              size="small"
              onClick={() => onDelete(zone)}
              sx={{
                color: "#F87171",

                width: 31,
                height: 31,

                borderRadius: "9px",

                "&:hover": {
                  background:
                    "rgba(248,113,113,.08)",
                },
              }}
            >
              <DeleteOutlineRoundedIcon
                sx={{ fontSize: 17 }}
              />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor:
            "rgba(148,163,184,.07)",
        }}
      />

      {/* ===================================== */}
      {/* STATUS ROW */}
      {/* ===================================== */}

      <Box
        sx={{
          px: 2,
          py: 1.3,

          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Chip
          icon={
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                bgcolor: "#22C55E",
                boxShadow:
                  "0 0 8px rgba(34,197,94,.8)",
              }}
            />
          }
          label="MONITORING ACTIVE"
          size="small"
          sx={{
            height: 24,

            color: "#86EFAC",

            background:
              "rgba(34,197,94,.07)",

            border:
              "1px solid rgba(34,197,94,.15)",

            fontSize: 7,
            fontWeight: 900,

            "& .MuiChip-icon": {
              marginLeft: "8px",
            },
          }}
        />

        <Typography
          sx={{
            color: "#4F6B82",
            fontSize: 8,
          }}
        >
          ID: {zone.id}
        </Typography>
      </Box>

      {/* ===================================== */}
      {/* RISK SECTION */}
      {/* ===================================== */}

      <Box
        sx={{
          mx: 2,
          p: 1.6,

          borderRadius: "16px",

          background:
            "rgba(255,255,255,.025)",

          border:
            `1px solid ${riskColor}20`,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.8,
            }}
          >
            <WarningAmberRoundedIcon
              sx={{
                color: riskColor,
                fontSize: 18,
              }}
            />

            <Typography
              sx={{
                color: "#AFC5D6",
                fontSize: 9,
                fontWeight: 800,
              }}
            >
              SAFETY RISK
            </Typography>
          </Box>

          <Typography
            sx={{
              color: riskColor,
              fontSize: 13,
              fontWeight: 900,
            }}
          >
            {riskScore}/100
          </Typography>
        </Box>

        <LinearProgress
          variant="determinate"
          value={riskScore}
          sx={{
            mt: 1.3,

            height: 5,

            borderRadius: 5,

            background:
              "rgba(255,255,255,.06)",

            "& .MuiLinearProgress-bar": {
              borderRadius: 5,

              background:
                `linear-gradient(90deg,#38BDF8,${riskColor})`,
            },
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 0.9,
          }}
        >
          <Chip
            label={`${zone.risk} Risk`}
            size="small"
            sx={{
              height: 21,

              color: riskColor,

              background: `${riskColor}10`,

              border:
                `1px solid ${riskColor}20`,

              fontSize: 7,
              fontWeight: 900,
            }}
          />

          <Typography
            sx={{
              color: "#506C83",
              fontSize: 7,
            }}
          >
            AI assessment
          </Typography>
        </Box>
      </Box>

      {/* ===================================== */}
      {/* METRICS */}
      {/* ===================================== */}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns:
            "repeat(2,1fr)",

          gap: 1,

          px: 2,
          mt: 1.3,
        }}
      >
        <InfoCard
          icon={<PeopleAltRoundedIcon />}
          value={zone.tourists ?? 0}
          label="Tourists inside"
          color="#38BDF8"
        />

        <InfoCard
          icon={<SecurityRoundedIcon />}
          value={`${zone.radius ?? 0}m`}
          label="Safety radius"
          color="#34D399"
        />

        <InfoCard
          icon={<WarningAmberRoundedIcon />}
          value="03"
          label="Alerts today"
          color="#FBBF24"
        />

        <InfoCard
          icon={<AccessTimeRoundedIcon />}
          value="24/7"
          label="Monitoring"
          color="#818CF8"
        />
      </Box>

      {/* ===================================== */}
      {/* ACTIVITY */}
      {/* ===================================== */}

      <Box
        sx={{
          mx: 2,
          mt: 1.4,
        }}
      >
        <Typography
          sx={{
            color: "#7C98AE",
            fontSize: 8,
            fontWeight: 900,
            letterSpacing: 1,
            mb: 1,
          }}
        >
          ZONE ACTIVITY
        </Typography>

        <Activity
          time="10:42 AM"
          text="Tourist density increased"
          color="#38BDF8"
        />

        <Activity
          time="10:31 AM"
          text="Routine safety scan completed"
          color="#34D399"
        />

        <Activity
          time="09:58 AM"
          text="Patrol unit entered zone"
          color="#818CF8"
        />
      </Box>

      {/* ===================================== */}
      {/* ACTION */}
      {/* ===================================== */}

      <Box
        sx={{
          p: 2,
          mt: 0.4,

          display: "flex",
          gap: 1,
        }}
      >
        <Button
          fullWidth
          onClick={() => onFocus(zone)}
          startIcon={
            <NavigationRoundedIcon
              sx={{ fontSize: 15 }}
            />
          }
          sx={{
            height: 40,

            borderRadius: "11px",

            textTransform: "none",

            color: "#fff",

            fontSize: 9,
            fontWeight: 800,

            background:
              "linear-gradient(135deg,#2563EB,#0891B2)",

            boxShadow:
              "0 8px 20px rgba(37,99,235,.18)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#3478FF,#06A4C7)",

              transform:
                "translateY(-1px)",
            },

            transition: ".2s",
          }}
        >
          Focus on Map
        </Button>
      </Box>
    </Box>
  );
};

/* ========================================= */
/* INFO CARD */
/* ========================================= */

const InfoCard = ({
  icon,
  value,
  label,
  color,
}) => {
  return (
    <Box
      sx={{
        p: 1.1,

        borderRadius: "13px",

        background:
          "rgba(255,255,255,.025)",

        border:
          "1px solid rgba(148,163,184,.07)",

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
          color,

          mb: 0.7,

          "& svg": {
            fontSize: 16,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color: "#EAF6FF",
          fontSize: 14,
          fontWeight: 900,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          color: "#526E85",
          fontSize: 7,
          mt: 0.2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

/* ========================================= */
/* ACTIVITY */
/* ========================================= */

const Activity = ({
  time,
  text,
  color,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",

        gap: 1,

        py: 0.8,

        borderBottom:
          "1px solid rgba(148,163,184,.055)",

        "&:last-child": {
          borderBottom: "none",
        },
      }}
    >
      <Box
        sx={{
          width: 6,
          height: 6,

          flexShrink: 0,

          borderRadius: "50%",

          bgcolor: color,

          boxShadow:
            `0 0 8px ${color}88`,
        }}
      />

      <Typography
        sx={{
          color: "#536F86",
          fontSize: 7,
          width: 55,
          flexShrink: 0,
        }}
      >
        {time}
      </Typography>

      <Typography
        sx={{
          color: "#88A1B4",
          fontSize: 8,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default ZoneDetails;