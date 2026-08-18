import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Chip,
  IconButton,
  Button,
  Tooltip,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

import { useMemo, useState } from "react";

const demoZones = [
  {
    id: "GZ-001",
    name: "Goa Beach",
    location: "North Goa",
    tourists: 128,
    radius: 900,
    risk: "Medium",
    status: "Active",
  },
  {
    id: "GZ-002",
    name: "Gateway of India",
    location: "Mumbai",
    tourists: 84,
    radius: 650,
    risk: "Low",
    status: "Active",
  },
  {
    id: "GZ-003",
    name: "Lonavala Tourist Zone",
    location: "Lonavala",
    tourists: 61,
    radius: 1100,
    risk: "High",
    status: "Active",
  },
];

const GeoFenceSidebar = ({
  zones = demoZones,
  selectedZone = null,
  onSelectZone = () => {},
  onEditZone = () => {},
  onDeleteZone = () => {},
  onAddZone = () => {},
}) => {
  const [search, setSearch] = useState("");

  const filteredZones = useMemo(() => {
    return zones.filter((zone) =>
      `${zone.name} ${zone.location} ${zone.id}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [zones, search]);

  const getRiskColor = (risk) => {
    if (risk === "High") return "#F87171";
    if (risk === "Medium") return "#FBBF24";
    return "#34D399";
  };

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 620,

        display: "flex",
        flexDirection: "column",

        overflow: "hidden",

        borderRadius: "22px",

        background:
          "linear-gradient(160deg,#102B46 0%,#0B2138 48%,#081827 100%)",

        border:
          "1px solid rgba(56,189,248,.13)",

        boxShadow:
          "0 22px 55px rgba(2,12,27,.32), inset 0 1px 0 rgba(255,255,255,.035)",
      }}
    >
      {/* ========================================= */}
      {/* HEADER */}
      {/* ========================================= */}

      <Box
        sx={{
          p: 2.2,

          borderBottom:
            "1px solid rgba(148,163,184,.08)",

          background:
            "linear-gradient(135deg,rgba(37,99,235,.12),rgba(56,189,248,.025))",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1.7,
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
                width: 42,
                height: 42,

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                borderRadius: "13px",

                color: "#38BDF8",

                background:
                  "linear-gradient(145deg,rgba(56,189,248,.17),rgba(37,99,235,.07))",

                border:
                  "1px solid rgba(56,189,248,.20)",

                boxShadow:
                  "0 0 25px rgba(56,189,248,.08)",
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
                Tourist Zones
              </Typography>

              <Typography
                sx={{
                  color: "#63819A",
                  fontSize: 9,
                  mt: 0.3,
                }}
              >
                Live GeoFence monitoring
              </Typography>
            </Box>
          </Box>

          <Chip
            label={`${zones.length} ACTIVE`}
            size="small"
            sx={{
              height: 23,

              color: "#67E8F9",

              background:
                "rgba(34,211,238,.07)",

              border:
                "1px solid rgba(34,211,238,.17)",

              fontSize: 8,
              fontWeight: 900,
            }}
          />
        </Box>

        {/* Search */}

        <TextField
          fullWidth
          size="small"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search zones or locations..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRoundedIcon
                  sx={{
                    color: "#587790",
                    fontSize: 19,
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: 42,

              borderRadius: "12px",

              background:
                "rgba(2,12,27,.28)",

              color: "#EAF6FF",

              "& fieldset": {
                borderColor:
                  "rgba(148,163,184,.11)",
              },

              "&:hover fieldset": {
                borderColor:
                  "rgba(56,189,248,.25)",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#38BDF8",

                boxShadow:
                  "0 0 0 3px rgba(56,189,248,.06)",
              },
            },

            "& input": {
              fontSize: 10,

              "&::placeholder": {
                color: "#58738B",
                opacity: 1,
              },
            },
          }}
        />
      </Box>

      {/* ========================================= */}
      {/* ZONE LIST */}
      {/* ========================================= */}

      <Box
        sx={{
          flex: 1,

          overflowY: "auto",

          p: 1.5,

          "&::-webkit-scrollbar": {
            width: 4,
          },

          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },

          "&::-webkit-scrollbar-thumb": {
            background:
              "rgba(56,189,248,.18)",
            borderRadius: 10,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            px: 0.5,
            mb: 1.1,
          }}
        >
          <Typography
            sx={{
              color: "#7692AA",
              fontSize: 8,
              fontWeight: 900,
              letterSpacing: 1.1,
            }}
          >
            MONITORED AREAS
          </Typography>

          <Typography
            sx={{
              color: "#38BDF8",
              fontSize: 8,
              fontWeight: 800,
            }}
          >
            {filteredZones.length} zones
          </Typography>
        </Box>

        {filteredZones.map((zone, index) => {
          const selected =
            selectedZone?.id === zone.id;

          const riskColor =
            getRiskColor(zone.risk);

          return (
            <Box
              key={zone.id}
              onClick={() =>
                onSelectZone(zone)
              }
              sx={{
                position: "relative",

                overflow: "hidden",

                p: 1.5,
                mb: 1.15,

                borderRadius: "16px",

                cursor: "pointer",

                background: selected
                  ? "linear-gradient(135deg,rgba(37,99,235,.18),rgba(56,189,248,.055))"
                  : "rgba(255,255,255,.025)",

                border: selected
                  ? "1px solid rgba(56,189,248,.32)"
                  : "1px solid rgba(148,163,184,.075)",

                boxShadow: selected
                  ? "0 12px 30px rgba(37,99,235,.12)"
                  : "none",

                animation:
                  `zoneEnter .4s ease ${index * 70}ms both`,

                transition:
                  "all .25s ease",

                "@keyframes zoneEnter": {
                  from: {
                    opacity: 0,
                    transform: "translateX(-8px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateX(0)",
                  },
                },

                "&:hover": {
                  transform:
                    "translateX(3px)",

                  background:
                    "rgba(56,189,248,.055)",

                  borderColor:
                    "rgba(56,189,248,.20)",
                },
              }}
            >
              {/* Selected indicator */}

              {selected && (
                <Box
                  sx={{
                    position: "absolute",

                    left: 0,
                    top: 10,
                    bottom: 10,

                    width: 3,

                    borderRadius: 4,

                    background:
                      "linear-gradient(#38BDF8,#2563EB)",

                    boxShadow:
                      "0 0 12px rgba(56,189,248,.65)",
                  }}
                />
              )}

              {/* Zone header */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent:
                    "space-between",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      borderRadius: "10px",

                      color: "#38BDF8",

                      background:
                        "rgba(56,189,248,.08)",

                      border:
                        "1px solid rgba(56,189,248,.13)",
                    }}
                  >
                    <LocationOnRoundedIcon
                      sx={{ fontSize: 18 }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: "#EAF6FF",
                        fontSize: 11,
                        fontWeight: 800,
                      }}
                    >
                      {zone.name}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#55738C",
                        fontSize: 8,
                        mt: 0.25,
                      }}
                    >
                      {zone.location} •{" "}
                      {zone.id}
                    </Typography>
                  </Box>
                </Box>

                {/* Online dot */}

                <Box
                  sx={{
                    width: 7,
                    height: 7,

                    mt: 0.5,

                    borderRadius: "50%",

                    background:
                      zone.status === "Active"
                        ? "#22C55E"
                        : "#64748B",

                    boxShadow:
                      zone.status === "Active"
                        ? "0 0 10px rgba(34,197,94,.7)"
                        : "none",
                  }}
                />
              </Box>

              {/* Risk + Radius */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "space-between",

                  mt: 1.3,
                }}
              >
                <Chip
                  label={`${zone.risk} Risk`}
                  size="small"
                  sx={{
                    height: 21,

                    color: riskColor,

                    background:
                      `${riskColor}10`,

                    border:
                      `1px solid ${riskColor}20`,

                    fontSize: 8,
                    fontWeight: 800,
                  }}
                />

                <Typography
                  sx={{
                    color: "#59748B",
                    fontSize: 8,
                  }}
                >
                  Radius {zone.radius}m
                </Typography>
              </Box>

              {/* Bottom information */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  mt: 1.2,
                  pt: 1.1,

                  borderTop:
                    "1px solid rgba(148,163,184,.065)",
                }}
              >
                <PeopleAltRoundedIcon
                  sx={{
                    color: "#6C899F",
                    fontSize: 14,
                    mr: 0.5,
                  }}
                />

                <Typography
                  sx={{
                    color: "#B4C9D9",
                    fontSize: 9,
                    fontWeight: 800,
                  }}
                >
                  {zone.tourists}
                </Typography>

                <Typography
                  sx={{
                    color: "#526E85",
                    fontSize: 8,
                    ml: 0.4,
                  }}
                >
                  tourists inside
                </Typography>

                <Box sx={{ flex: 1 }} />

                <Tooltip title="Edit zone">
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      onEditZone(zone);
                    }}
                    sx={{
                      width: 27,
                      height: 27,

                      color: "#7DD3FC",

                      borderRadius: "8px",

                      "&:hover": {
                        background:
                          "rgba(56,189,248,.09)",
                      },
                    }}
                  >
                    <EditRoundedIcon
                      sx={{ fontSize: 14 }}
                    />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete zone">
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteZone(zone);
                    }}
                    sx={{
                      width: 27,
                      height: 27,

                      color: "#F87171",

                      borderRadius: "8px",

                      "&:hover": {
                        background:
                          "rgba(248,113,113,.09)",
                      },
                    }}
                  >
                    <DeleteOutlineRoundedIcon
                      sx={{ fontSize: 15 }}
                    />
                  </IconButton>
                </Tooltip>

                <KeyboardArrowRightRoundedIcon
                  sx={{
                    ml: 0.2,

                    fontSize: 18,

                    color: selected
                      ? "#38BDF8"
                      : "#3E5970",
                  }}
                />
              </Box>
            </Box>
          );
        })}

        {/* No result */}

        {filteredZones.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 7,
              px: 2,
            }}
          >
            <SearchRoundedIcon
              sx={{
                color: "#34536B",
                fontSize: 40,
              }}
            />

            <Typography
              sx={{
                color: "#7894AA",
                fontSize: 10,
                mt: 1,
              }}
            >
              No zones found
            </Typography>

            <Typography
              sx={{
                color: "#4D687F",
                fontSize: 8,
                mt: 0.5,
              }}
            >
              Try a different zone or location
            </Typography>
          </Box>
        )}
      </Box>

      {/* ========================================= */}
      {/* FOOTER */}
      {/* ========================================= */}

      <Box
        sx={{
          p: 1.6,

          borderTop:
            "1px solid rgba(148,163,184,.08)",

          background:
            "linear-gradient(180deg,rgba(8,24,40,.7),rgba(5,18,31,.96))",
        }}
      >
        <Button
          fullWidth
          onClick={onAddZone}
          startIcon={
            <AddLocationAltRoundedIcon
              sx={{ fontSize: 17 }}
            />
          }
          sx={{
            height: 42,

            borderRadius: "12px",

            color: "#fff",

            textTransform: "none",

            fontSize: 10,
            fontWeight: 800,

            background:
              "linear-gradient(135deg,#2563EB,#0891B2)",

            boxShadow:
              "0 10px 25px rgba(37,99,235,.20)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#3478FF,#06A4C7)",

              transform:
                "translateY(-2px)",

              boxShadow:
                "0 14px 30px rgba(37,99,235,.30)",
            },

            transition: ".25s",
          }}
        >
          Create New GeoFence
        </Button>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.6,

            mt: 1.1,
          }}
        >
          <ShieldRoundedIcon
            sx={{
              color: "#34D399",
              fontSize: 12,
            }}
          />

          <Typography
            sx={{
              color: "#526F87",
              fontSize: 8,
            }}
          >
            GeoFence monitoring active
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default GeoFenceSidebar;