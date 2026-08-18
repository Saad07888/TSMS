import {
  Card,
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
} from "@mui/material";

import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const sosData = [
  {
    id: "SOS-1024",
    place: "Gateway of India",
    time: "10:25 AM",
    status: "Active",
    severity: "Critical",
    color: "#EF4444",
  },
  {
    id: "SOS-1023",
    place: "Marine Drive",
    time: "10:18 AM",
    status: "Active",
    severity: "High",
    color: "#F97316",
  },
  {
    id: "SOS-1022",
    place: "Goa Beach",
    time: "10:10 AM",
    status: "Active",
    severity: "Medium",
    color: "#F59E0B",
  },
  {
    id: "SOS-1021",
    place: "Lonavala",
    time: "10:05 AM",
    status: "Active",
    severity: "High",
    color: "#F97316",
  },
];

const RecentSOSCard = () => {
  return (
    <Card
      elevation={0}
      sx={{
        position: "relative",
        overflow: "hidden",

        p: 2.5,

        height: "100%",

        background:
          "linear-gradient(145deg, #111D30 0%, #0B1728 100%)",

        border:
          "1px solid rgba(239,68,68,0.10)",

        borderRadius: 3,

        boxShadow:
          "0 18px 45px rgba(0,0,0,0.22)",

        transition:
          "border-color .3s ease, box-shadow .3s ease",

        "&:hover": {
          borderColor:
            "rgba(239,68,68,0.20)",

          boxShadow:
            "0 20px 50px rgba(0,0,0,0.28)",
        },
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          {/* ICON */}

          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: 2,

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              bgcolor:
                "rgba(239,68,68,0.09)",

              border:
                "1px solid rgba(239,68,68,0.16)",

              color: "#EF4444",
            }}
          >
            <WarningRoundedIcon
              sx={{ fontSize: 21 }}
            />
          </Box>

          {/* TITLE */}

          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#F8FAFC",
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                Recent SOS Alerts
              </Typography>

              <Box
                sx={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  bgcolor: "#EF4444",
                  boxShadow:
                    "0 0 9px #EF4444",
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#64748B",
                fontSize: 10,
                mt: 0.3,
              }}
            >
              Emergency activity requiring attention
            </Typography>
          </Box>
        </Box>

        {/* VIEW ALL */}

        <Button
          size="small"
          endIcon={
            <ArrowForwardRoundedIcon
              sx={{ fontSize: 14 }}
            />
          }
          sx={{
            minWidth: "auto",

            color: "#60A5FA",

            textTransform: "none",

            fontSize: 11,

            fontWeight: 700,

            px: 1,

            "&:hover": {
              bgcolor:
                "rgba(59,130,246,0.07)",
            },
          }}
        >
          View All
        </Button>
      </Box>

      {/* =====================================================
          ALERT LIST
      ===================================================== */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.8,
        }}
      >
        {sosData.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              position: "relative",

              display: "flex",
              alignItems: "center",

              gap: 1.4,

              p: 1.25,

              borderRadius: 2,

              background:
                "rgba(255,255,255,0.018)",

              border:
                "1px solid rgba(255,255,255,0.045)",

              transition:
                "all .25s ease",

              "&:hover": {
                background:
                  `${item.color}08`,

                borderColor:
                  `${item.color}25`,

                transform:
                  "translateX(3px)",
              },
            }}
          >
            {/* SEVERITY LINE */}

            <Box
              sx={{
                position: "absolute",

                left: 0,
                top: 9,
                bottom: 9,

                width: 2,

                borderRadius: 2,

                bgcolor: item.color,

                boxShadow:
                  `0 0 8px ${item.color}55`,
              }}
            />

            {/* AVATAR */}

            <Avatar
              sx={{
                width: 34,
                height: 34,

                ml: 0.5,

                bgcolor:
                  `${item.color}12`,

                color: item.color,

                border:
                  `1px solid ${item.color}22`,
              }}
            >
              <WarningRoundedIcon
                sx={{ fontSize: 17 }}
              />
            </Avatar>

            {/* MAIN INFO */}

            <Box
              sx={{
                flex: 1,
                minWidth: 0,
              }}
            >
              {/* ID + SEVERITY */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,

                  flexWrap: "wrap",
                }}
              >
                <Typography
                  sx={{
                    color: "#E2E8F0",
                    fontSize: 11,
                    fontWeight: 800,
                  }}
                >
                  {item.id}
                </Typography>

                <Chip
                  label={item.severity}
                  size="small"
                  sx={{
                    height: 18,

                    bgcolor:
                      `${item.color}10`,

                    color: item.color,

                    border:
                      `1px solid ${item.color}20`,

                    fontSize: 8,

                    fontWeight: 800,

                    "& .MuiChip-label": {
                      px: 0.7,
                    },
                  }}
                />
              </Box>

              {/* LOCATION */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.4,

                  mt: 0.5,
                }}
              >
                <LocationOnRoundedIcon
                  sx={{
                    fontSize: 12,
                    color: "#64748B",
                  }}
                />

                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: 10,
                  }}
                >
                  {item.place}
                </Typography>
              </Box>
            </Box>

            {/* TIME + STATUS */}

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: 0.5,
              }}
            >
              {/* TIME */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.35,
                }}
              >
                <AccessTimeRoundedIcon
                  sx={{
                    fontSize: 11,
                    color: "#64748B",
                  }}
                />

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 9,
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.time}
                </Typography>
              </Box>

              {/* STATUS */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",

                    bgcolor: "#22C55E",

                    boxShadow:
                      "0 0 6px #22C55E",
                  }}
                />

                <Typography
                  sx={{
                    color: "#22C55E",
                    fontSize: 9,
                    fontWeight: 800,
                  }}
                >
                  {item.status}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          mt: 1.5,
          p: 1.4,

          borderRadius: 2,

          background:
            "linear-gradient(90deg, rgba(239,68,68,0.07), rgba(239,68,68,0.025))",

          border:
            "1px solid rgba(239,68,68,0.10)",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#CBD5E1",
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            Active Emergency Status
          </Typography>

          <Typography
            sx={{
              color: "#64748B",
              fontSize: 9,
              mt: 0.3,
            }}
          >
            Police & AI monitoring active
          </Typography>
        </Box>

        {/* ACTIVE COUNT */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.7,

            px: 1.1,
            py: 0.6,

            borderRadius: 1.5,

            bgcolor:
              "rgba(239,68,68,0.09)",

            border:
              "1px solid rgba(239,68,68,0.15)",
          }}
        >
          <Typography
            sx={{
              color: "#EF4444",
              fontSize: 17,
              fontWeight: 800,
            }}
          >
            4
          </Typography>

          <Typography
            sx={{
              color: "#FCA5A5",
              fontSize: 9,
              fontWeight: 700,
            }}
          >
            ACTIVE
          </Typography>
        </Box>
      </Box>

      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <Box
        sx={{
          position: "absolute",

          width: 180,
          height: 180,

          right: -100,
          bottom: -100,

          borderRadius: "50%",

          background:
            "rgba(239,68,68,0.07)",

          filter: "blur(50px)",

          pointerEvents: "none",
        }}
      />
    </Card>
  );
};

export default RecentSOSCard;