import { useEffect, useMemo, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Polygon,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  IconButton,
  Chip,
  Tooltip,
  Divider,
  LinearProgress,
  InputAdornment,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";
import DrawRoundedIcon from "@mui/icons-material/DrawRounded";
import StopRoundedIcon from "@mui/icons-material/StopRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";
import MapRoundedIcon from "@mui/icons-material/MapRounded";

import DashboardLayout from "../../layouts/DashboardLayout";
import AddGeoFenceDialog from "../../components/GeoFence/AddGeoFenceDialog";

/* =========================================================
   INITIAL ZONES
========================================================= */

const INITIAL_ZONES = [
  {
    id: "GF001",
    name: "Goa Beach",
    location: "North Goa",
    tourists: 128,
    status: "Active",
    risk: "Medium",
    radius: 900,
    center: [15.4909, 73.8278],
    color: "#38BDF8",
  },
  {
    id: "GF002",
    name: "Gateway of India",
    location: "Mumbai",
    tourists: 84,
    status: "Active",
    risk: "Low",
    radius: 650,
    center: [18.922, 72.8347],
    color: "#34D399",
  },
  {
    id: "GF003",
    name: "Lonavala Tourist Zone",
    location: "Lonavala",
    tourists: 61,
    status: "Active",
    risk: "High",
    radius: 1100,
    center: [18.7546, 73.4062],
    color: "#FBBF24",
  },
];

/* =========================================================
   TOURISTS
========================================================= */

const TOURISTS = [
  {
    id: "T001",
    name: "Tourist A",
    position: [15.4915, 73.829],
  },
  {
    id: "T002",
    name: "Tourist B",
    position: [18.923, 72.8355],
  },
  {
    id: "T003",
    name: "Tourist C",
    position: [18.753, 73.407],
  },
  {
    id: "T004",
    name: "Tourist D",
    position: [19.075, 72.878],
  },
];

/* =========================================================
   SOS LOCATIONS
========================================================= */

const SOS_LOCATIONS = [
  {
    id: "SOS001",
    name: "Emergency Alert",
    position: [18.751, 73.403],
  },
];

/* =========================================================
   MAP FOCUS COMPONENT
========================================================= */

const MapFocus = ({ zone }) => {
  const map = useMap();

  useEffect(() => {
    if (!zone?.center) return;

    map.flyTo(zone.center, 13, {
      duration: 1.2,
    });
  }, [zone, map]);

  return null;
};

/* =========================================================
   DRAWING COMPONENT
========================================================= */

const DrawingHandler = ({
  drawing,
  setDrawPoints,
}) => {
  useMapEvents({
    click(event) {
      if (!drawing) return;

      setDrawPoints((previous) => [
        ...previous,
        [
          event.latlng.lat,
          event.latlng.lng,
        ],
      ]);
    },
  });

  return null;
};

/* =========================================================
   MAIN PAGE
========================================================= */

const GeoFence = () => {
  /* -------------------------------------------------------
     ZONES
  ------------------------------------------------------- */

  const [zones, setZones] = useState(() => {
    try {
      const saved = localStorage.getItem(
        "safefour_geo_zones"
      );

      return saved
        ? JSON.parse(saved)
        : INITIAL_ZONES;
    } catch {
      return INITIAL_ZONES;
    }
  });

  /* -------------------------------------------------------
     SELECTED ZONE
  ------------------------------------------------------- */

  const [selectedZone, setSelectedZone] =
    useState(INITIAL_ZONES[0]);

  /* -------------------------------------------------------
     SEARCH
  ------------------------------------------------------- */

  const [search, setSearch] = useState("");

  /* -------------------------------------------------------
     DRAWING
  ------------------------------------------------------- */

  const [drawing, setDrawing] =
    useState(false);

  const [drawPoints, setDrawPoints] =
    useState([]);

  /* -------------------------------------------------------
     SHOW ZONES
  ------------------------------------------------------- */

  const [showZones, setShowZones] =
    useState(true);

  /* -------------------------------------------------------
     REFRESH
  ------------------------------------------------------- */

  const [refreshing, setRefreshing] =
    useState(false);

  /* -------------------------------------------------------
     ADD DIALOG
  ------------------------------------------------------- */

  const [open, setOpen] =
    useState(false);

  /* -------------------------------------------------------
     NEW ZONE
  ------------------------------------------------------- */

  const [newZone, setNewZone] =
    useState({
      id: "",
      name: "",
      location: "",
      radius: "",
      status: "Active",
    });

  /* =======================================================
     SAVE ZONES
  ======================================================= */

  useEffect(() => {
    localStorage.setItem(
      "safefour_geo_zones",
      JSON.stringify(zones)
    );
  }, [zones]);

  /* =======================================================
     FILTERED ZONES
  ======================================================= */

  const filteredZones = useMemo(() => {
    const value =
      search.trim().toLowerCase();

    if (!value) return zones;

    return zones.filter((zone) =>
      `${zone.id} ${zone.name} ${zone.location}`
        .toLowerCase()
        .includes(value)
    );
  }, [zones, search]);

  /* =======================================================
     STATS
  ======================================================= */

  const totalTourists = zones.reduce(
    (sum, zone) =>
      sum + Number(zone.tourists || 0),
    0
  );

  const activeZones = zones.filter(
    (zone) =>
      zone.status === "Active"
  ).length;

  const highRiskZones = zones.filter(
    (zone) =>
      zone.risk === "High"
  ).length;

  /* =======================================================
     DRAW
  ======================================================= */

  const handleStartDrawing = () => {
    setDrawing(true);
    setDrawPoints([]);
  };

  const handleCancelDrawing = () => {
    setDrawing(false);
    setDrawPoints([]);
  };

  const handleFinishDrawing = () => {
    if (drawPoints.length < 3) {
      alert(
        "Please select at least 3 points on the map."
      );
      return;
    }

    const newZone = {
      id: `GF${String(
        zones.length + 1
      ).padStart(3, "0")}`,

      name: "Custom Safety Zone",

      location: "Custom Area",

      tourists: 0,

      status: "Active",

      risk: "Low",

      radius: 500,

      center: drawPoints[0],

      polygon: drawPoints,

      color: "#818CF8",
    };

    setZones((previous) => [
      ...previous,
      newZone,
    ]);

    setSelectedZone(newZone);

    setDrawing(false);
    setDrawPoints([]);
  };

  /* =======================================================
     ADD ZONE
  ======================================================= */

  const handleSaveZone = () => {
    if (
      !newZone.id ||
      !newZone.name ||
      !newZone.location ||
      !newZone.radius
    ) {
      alert(
        "Please fill all fields."
      );
      return;
    }

    const zone = {
      ...newZone,

      tourists: 0,

      risk: "Low",

      radius: Number(
        newZone.radius
      ),

      center: [
        19.076,
        72.8777,
      ],

      color: "#38BDF8",
    };

    setZones((previous) => [
      ...previous,
      zone,
    ]);

    setSelectedZone(zone);

    setNewZone({
      id: "",
      name: "",
      location: "",
      radius: "",
      status: "Active",
    });

    setOpen(false);
  };

  /* =======================================================
     DELETE
  ======================================================= */

  const handleDelete = (zone) => {
    const confirmed =
      window.confirm(
        `Delete ${zone.name}?`
      );

    if (!confirmed) return;

    const remaining =
      zones.filter(
        (item) =>
          item.id !== zone.id
      );

    setZones(remaining);

    setSelectedZone(
      remaining[0] || null
    );
  };

  /* =======================================================
     EDIT
  ======================================================= */

  const handleEdit = (zone) => {
    const name = window.prompt(
      "Enter new zone name",
      zone.name
    );

    if (!name) return;

    const updated =
      zones.map((item) =>
        item.id === zone.id
          ? {
              ...item,
              name,
            }
          : item
      );

    setZones(updated);

    setSelectedZone({
      ...zone,
      name,
    });
  };

  /* =======================================================
     REFRESH
  ======================================================= */

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  /* =======================================================
     LOCATE
  ======================================================= */

  const handleLocate = () => {
    if (!selectedZone) return;

    window.dispatchEvent(
      new CustomEvent(
        "geofence-focus-zone",
        {
          detail: selectedZone,
        }
      )
    );
  };

  /* =======================================================
     RISK
  ======================================================= */

  const getRiskColor = (risk) => {
    if (risk === "High")
      return "#F87171";

    if (risk === "Medium")
      return "#FBBF24";

    return "#34D399";
  };

  const selectedRisk =
    selectedZone?.risk || "Low";

  const selectedRiskScore =
    selectedRisk === "High"
      ? 84
      : selectedRisk === "Medium"
      ? 61
      : 27;

  /* =======================================================
     PAGE
  ======================================================= */

  return (
    <DashboardLayout>
      <Box
        sx={{
          minHeight: "100vh",

          mt: -3,
          mx: -3,

          px: {
            xs: 1.5,
            md: 2.5,
          },

          py: 2.5,

          background:
            "radial-gradient(circle at 85% 0%, rgba(37,99,235,.18), transparent 28%), radial-gradient(circle at 10% 40%, rgba(8,145,178,.07), transparent 25%), linear-gradient(135deg,#061423 0%,#081B30 50%,#061321 100%)",

          color: "#fff",
        }}
      >
        <Box
          sx={{
            maxWidth: 1800,
            mx: "auto",
          }}
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <Box
            sx={{
              display: "flex",
              alignItems: {
                xs: "flex-start",
                md: "center",
              },

              justifyContent:
                "space-between",

              gap: 2,

              mb: 2.5,

              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 54,
                  height: 54,

                  borderRadius: "17px",

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  background:
                    "linear-gradient(145deg,#2563EB,#0891B2)",

                  boxShadow:
                    "0 12px 35px rgba(37,99,235,.30)",

                  animation:
                    "floatIcon 4s ease-in-out infinite",

                  "@keyframes floatIcon": {
                    "0%,100%": {
                      transform:
                        "translateY(0)",
                    },
                    "50%": {
                      transform:
                        "translateY(-4px)",
                    },
                  },
                }}
              >
                <RadarRoundedIcon
                  sx={{
                    fontSize: 29,
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: 23,
                      md: 30,
                    },

                    fontWeight: 900,

                    letterSpacing:
                      "-1px",

                    color: "#F8FAFC",
                  }}
                >
                  Tourist Geo Intelligence
                </Typography>

                <Typography
                  sx={{
                    color: "#6C8AA3",
                    fontSize: 10,
                    mt: 0.4,
                  }}
                >
                  Real-time destination
                  safety & GeoFence
                  monitoring
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Chip
                label={
                  refreshing
                    ? "UPDATING"
                    : "● LIVE MONITORING"
                }
                sx={{
                  height: 35,

                  color: "#86EFAC",

                  background:
                    "rgba(34,197,94,.06)",

                  border:
                    "1px solid rgba(34,197,94,.16)",

                  fontSize: 8,
                  fontWeight: 900,
                }}
              />

              <Tooltip title="Refresh data">
                <IconButton
                  onClick={
                    handleRefresh
                  }
                  sx={{
                    width: 38,
                    height: 38,

                    color: "#8BA5B9",

                    border:
                      "1px solid rgba(148,163,184,.10)",

                    background:
                      "rgba(255,255,255,.025)",

                    borderRadius:
                      "11px",

                    "&:hover": {
                      color:
                        "#38BDF8",

                      background:
                        "rgba(56,189,248,.08)",
                    },
                  }}
                >
                  <RefreshRoundedIcon
                    sx={{
                      animation:
                        refreshing
                          ? "spin .8s linear infinite"
                          : "none",

                      "@keyframes spin": {
                        from: {
                          transform:
                            "rotate(0)",
                        },
                        to: {
                          transform:
                            "rotate(360deg)",
                        },
                      },
                    }}
                  />
                </IconButton>
              </Tooltip>

              <Button
                startIcon={
                  <AddRoundedIcon />
                }
                onClick={() =>
                  setOpen(true)
                }
                sx={{
                  height: 38,

                  px: 1.8,

                  borderRadius:
                    "11px",

                  textTransform:
                    "none",

                  color: "#fff",

                  fontSize: 9,
                  fontWeight: 900,

                  background:
                    "linear-gradient(135deg,#2563EB,#0891B2)",

                  boxShadow:
                    "0 10px 28px rgba(37,99,235,.20)",

                  "&:hover": {
                    background:
                      "linear-gradient(135deg,#3478FF,#06A4C7)",

                    transform:
                      "translateY(-1px)",
                  },

                  transition: ".2s",
                }}
              >
                Create Zone
              </Button>
            </Box>
          </Box>

          {/* =================================================
              KPI CARDS
          ================================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr 1fr",
                md: "repeat(4,1fr)",
              },

              gap: 1.4,
            }}
          >
            <KpiCard
              icon={<MapRoundedIcon />}
              label="Safety Zones"
              value={zones.length}
              detail="Configured zones"
              color="#38BDF8"
            />

            <KpiCard
              icon={<ShieldRoundedIcon />}
              label="Active Zones"
              value={activeZones}
              detail="Currently monitoring"
              color="#34D399"
            />

            <KpiCard
              icon={<PeopleAltRoundedIcon />}
              label="Tourists"
              value={totalTourists}
              detail="Inside monitored areas"
              color="#818CF8"
            />

            <KpiCard
              icon={
                <WarningAmberRoundedIcon />
              }
              label="High Risk"
              value={highRiskZones}
              detail="Needs attention"
              color="#FBBF24"
            />
          </Box>

          {/* =================================================
              MAIN COMMAND CENTER
          ================================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                lg: "300px minmax(0,1fr)",
                xl: "310px minmax(0,1fr) 320px",
              },

              gap: 1.5,

              mt: 1.5,
            }}
          >
            {/* =================================================
                LEFT ZONE SIDEBAR
            ================================================= */}

            <Paper
              elevation={0}
              sx={{
                p: 1.5,

                borderRadius: "20px",

                background:
                  "linear-gradient(160deg,rgba(15,39,64,.98),rgba(7,24,41,.98))",

                border:
                  "1px solid rgba(56,189,248,.10)",

                boxShadow:
                  "0 18px 50px rgba(0,0,0,.20)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  mb: 1.2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#F1F5F9",
                      fontSize: 12,
                      fontWeight: 900,
                    }}
                  >
                    Safety Zones
                  </Typography>

                  <Typography
                    sx={{
                      color: "#526F86",
                      fontSize: 8,
                      mt: 0.3,
                    }}
                  >
                    Live monitored
                    destinations
                  </Typography>
                </Box>

                <Chip
                  label={zones.length}
                  size="small"
                  sx={{
                    height: 22,

                    color: "#67E8F9",

                    background:
                      "rgba(56,189,248,.08)",

                    border:
                      "1px solid rgba(56,189,248,.13)",

                    fontSize: 8,
                    fontWeight: 900,
                  }}
                />
              </Box>

              <TextField
                fullWidth
                size="small"
                value={search}
                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }
                placeholder="Search zones..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchRoundedIcon
                        sx={{
                          fontSize: 17,
                          color:
                            "#58738A",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  mb: 1.4,

                  "& .MuiOutlinedInput-root":
                    {
                      height: 39,

                      borderRadius:
                        "11px",

                      color: "#E2E8F0",

                      background:
                        "rgba(255,255,255,.025)",

                      "& fieldset": {
                        borderColor:
                          "rgba(148,163,184,.10)",
                      },

                      "&:hover fieldset":
                        {
                          borderColor:
                            "rgba(56,189,248,.25)",
                        },

                      "&.Mui-focused fieldset":
                        {
                          borderColor:
                            "#2563EB",
                        },
                    },

                  "& input": {
                    fontSize: 9,
                  },

                  "& input::placeholder":
                    {
                      color:
                        "#536F85",
                      opacity: 1,
                    },
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  flexDirection:
                    "column",
                  gap: 0.8,
                }}
              >
                {filteredZones.map(
                  (zone) => {
                    const riskColor =
                      getRiskColor(
                        zone.risk
                      );

                    const selected =
                      selectedZone?.id ===
                      zone.id;

                    return (
                      <Box
                        key={zone.id}
                        onClick={() =>
                          setSelectedZone(
                            zone
                          )
                        }
                        sx={{
                          p: 1.2,

                          borderRadius:
                            "14px",

                          cursor:
                            "pointer",

                          background:
                            selected
                              ? "linear-gradient(135deg,rgba(37,99,235,.18),rgba(8,145,178,.08))"
                              : "rgba(255,255,255,.018)",

                          border:
                            selected
                              ? "1px solid rgba(56,189,248,.28)"
                              : "1px solid rgba(148,163,184,.06)",

                          transition:
                            ".25s",

                          "&:hover": {
                            transform:
                              "translateX(3px)",

                            background:
                              "rgba(56,189,248,.06)",

                            borderColor:
                              "rgba(56,189,248,.18)",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            gap: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 34,
                              height: 34,

                              flexShrink: 0,

                              borderRadius:
                                "10px",

                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",

                              color:
                                zone.color,

                              background:
                                `${zone.color}10`,
                            }}
                          >
                            <LocationOnRoundedIcon
                              sx={{
                                fontSize: 18,
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              minWidth: 0,
                              flex: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                color:
                                  "#EAF2F8",

                                fontSize: 10,

                                fontWeight:
                                  900,

                                overflow:
                                  "hidden",

                                textOverflow:
                                  "ellipsis",

                                whiteSpace:
                                  "nowrap",
                              }}
                            >
                              {zone.name}
                            </Typography>

                            <Typography
                              sx={{
                                color:
                                  "#526F86",

                                fontSize: 7,

                                mt: 0.3,
                              }}
                            >
                              {
                                zone.location
                              }{" "}
                              •{" "}
                              {
                                zone.tourists
                              }{" "}
                              tourists
                            </Typography>
                          </Box>

                          <Box
                            sx={{
                              width: 7,
                              height: 7,

                              borderRadius:
                                "50%",

                              bgcolor:
                                "#22C55E",

                              boxShadow:
                                "0 0 8px rgba(34,197,94,.7)",
                            }}
                          />
                        </Box>

                        <Box
                          sx={{
                            display:
                              "flex",
                            alignItems:
                              "center",
                            justifyContent:
                              "space-between",

                            mt: 1,
                          }}
                        >
                          <Chip
                            label={`${zone.risk} Risk`}
                            size="small"
                            sx={{
                              height: 19,

                              color:
                                riskColor,

                              background:
                                `${riskColor}10`,

                              border:
                                `1px solid ${riskColor}20`,

                              fontSize: 7,

                              fontWeight:
                                900,
                            }}
                          />

                          <Typography
                            sx={{
                              color:
                                "#4C687F",

                              fontSize: 7,
                            }}
                          >
                            {zone.radius}
                            m radius
                          </Typography>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Box>

              <Divider
                sx={{
                  my: 1.4,
                  borderColor:
                    "rgba(148,163,184,.07)",
                }}
              />

              <Button
                fullWidth
                startIcon={
                  drawing ? (
                    <StopRoundedIcon />
                  ) : (
                    <DrawRoundedIcon />
                  )
                }
                onClick={
                  drawing
                    ? handleCancelDrawing
                    : handleStartDrawing
                }
                sx={{
                  height: 40,

                  borderRadius:
                    "11px",

                  textTransform:
                    "none",

                  color: drawing
                    ? "#FCA5A5"
                    : "#A5B4FC",

                  background:
                    drawing
                      ? "rgba(248,113,113,.06)"
                      : "rgba(99,102,241,.07)",

                  border:
                    drawing
                      ? "1px solid rgba(248,113,113,.15)"
                      : "1px solid rgba(99,102,241,.15)",

                  fontSize: 8,
                  fontWeight: 900,

                  "&:hover": {
                    background:
                      drawing
                        ? "rgba(248,113,113,.10)"
                        : "rgba(99,102,241,.12)",
                  },
                }}
              >
                {drawing
                  ? "Cancel Drawing"
                  : "Draw Zone on Map"}
              </Button>
            </Paper>

            {/* =================================================
                MAP
            ================================================= */}

            <Paper
              elevation={0}
              sx={{
                position:
                  "relative",

                overflow:
                  "hidden",

                minHeight: {
                  xs: 500,
                  md: 620,
                },

                borderRadius:
                  "20px",

                background:
                  "#091B2E",

                border:
                  "1px solid rgba(56,189,248,.10)",

                boxShadow:
                  "0 20px 60px rgba(0,0,0,.24)",
              }}
            >
              {/* MAP HEADER */}

              <Box
                sx={{
                  position:
                    "absolute",

                  top: 0,
                  left: 0,
                  right: 0,

                  zIndex: 1000,

                  height: 58,

                  px: 1.8,

                  display:
                    "flex",

                  alignItems:
                    "center",

                  justifyContent:
                    "space-between",

                  background:
                    "linear-gradient(180deg,rgba(7,24,41,.97),rgba(7,24,41,.78))",

                  backdropFilter:
                    "blur(14px)",

                  borderBottom:
                    "1px solid rgba(148,163,184,.08)",
                }}
              >
                <Box
                  sx={{
                    display:
                      "flex",
                    alignItems:
                      "center",
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,

                      borderRadius:
                        "10px",

                      display:
                        "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",

                      color:
                        "#38BDF8",

                      background:
                        "rgba(56,189,248,.09)",
                    }}
                  >
                    <MapRoundedIcon
                      sx={{
                        fontSize: 18,
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color:
                          "#F8FAFC",

                        fontSize: 11,

                        fontWeight:
                          900,
                      }}
                    >
                      Live Safety Map
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#526F86",

                        fontSize: 7,
                      }}
                    >
                      Tourist movement &
                      GeoFence activity
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display:
                      "flex",
                    gap: 0.6,
                  }}
                >
                  <Tooltip
                    title={
                      showZones
                        ? "Hide zones"
                        : "Show zones"
                    }
                  >
                    <IconButton
                      onClick={() =>
                        setShowZones(
                          (value) =>
                            !value
                        )
                      }
                      sx={{
                        width: 32,
                        height: 32,

                        color:
                          showZones
                            ? "#38BDF8"
                            : "#64748B",

                        background:
                          "rgba(255,255,255,.025)",

                        border:
                          "1px solid rgba(148,163,184,.08)",

                        borderRadius:
                          "9px",
                      }}
                    >
                      {showZones ? (
                        <VisibilityRoundedIcon
                          sx={{
                            fontSize: 17,
                          }}
                        />
                      ) : (
                        <VisibilityOffRoundedIcon
                          sx={{
                            fontSize: 17,
                          }}
                        />
                      )}
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Locate selected zone">
                    <IconButton
                      onClick={
                        handleLocate
                      }
                      sx={{
                        width: 32,
                        height: 32,

                        color:
                          "#7DD3FC",

                        background:
                          "rgba(255,255,255,.025)",

                        border:
                          "1px solid rgba(148,163,184,.08)",

                        borderRadius:
                          "9px",
                      }}
                    >
                      <MyLocationRoundedIcon
                        sx={{
                          fontSize: 17,
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>

              {/* MAP */}

              <MapContainer
                center={[
                  19.076,
                  72.8777,
                ]}
                zoom={6}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "620px",
                }}
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <MapFocus
                  zone={
                    selectedZone
                  }
                />

                <DrawingHandler
                  drawing={drawing}
                  setDrawPoints={
                    setDrawPoints
                  }
                />

                {/* EXISTING ZONES */}

                {showZones &&
                  filteredZones.map(
                    (zone) => {
                      const isSelected =
                        selectedZone?.id ===
                        zone.id;

                      if (
                        zone.polygon
                      ) {
                        return (
                          <Polygon
                            key={zone.id}
                            positions={
                              zone.polygon
                            }
                            pathOptions={{
                              color:
                                isSelected
                                  ? "#38BDF8"
                                  : zone.color ||
                                    "#818CF8",

                              fillColor:
                                zone.color ||
                                "#818CF8",

                              fillOpacity:
                                isSelected
                                  ? 0.22
                                  : 0.12,

                              weight:
                                isSelected
                                  ? 4
                                  : 2,
                            }}
                            eventHandlers={{
                              click: () =>
                                setSelectedZone(
                                  zone
                                ),
                            }}
                          >
                            <Popup>
                              <strong>
                                {
                                  zone.name
                                }
                              </strong>
                              <br />
                              {
                                zone.location
                              }
                              <br />
                              {
                                zone.tourists
                              }{" "}
                              tourists
                            </Popup>
                          </Polygon>
                        );
                      }

                      return (
                        <Circle
                          key={zone.id}
                          center={
                            zone.center
                          }
                          radius={
                            zone.radius
                          }
                          pathOptions={{
                            color:
                              isSelected
                                ? "#38BDF8"
                                : zone.color ||
                                  "#38BDF8",

                            fillColor:
                              zone.color ||
                              "#38BDF8",

                            fillOpacity:
                              isSelected
                                ? 0.20
                                : 0.10,

                            weight:
                              isSelected
                                ? 4
                                : 2,
                          }}
                          eventHandlers={{
                            click: () =>
                              setSelectedZone(
                                zone
                              ),
                          }}
                        >
                          <Popup>
                            <strong>
                              {zone.name}
                            </strong>
                            <br />
                            {
                              zone.location
                            }
                            <br />
                            {
                              zone.tourists
                            }{" "}
                            tourists
                          </Popup>
                        </Circle>
                      );
                    }
                  )}

                {/* DRAWING PREVIEW */}

                {drawing &&
                  drawPoints.length >
                    0 && (
                    <Polygon
                      positions={
                        drawPoints
                      }
                      pathOptions={{
                        color:
                          "#818CF8",

                        fillColor:
                          "#6366F1",

                        fillOpacity:
                          0.20,

                        weight: 3,

                        dashArray:
                          "8 8",
                      }}
                    />
                  )}

                {/* TOURISTS */}

                {TOURISTS.map(
                  (tourist) => (
                    <CircleMarker
                      key={
                        tourist.id
                      }
                      center={
                        tourist.position
                      }
                      radius={6}
                      pathOptions={{
                        color:
                          "#38BDF8",
                        fillColor:
                          "#38BDF8",
                        fillOpacity: 1,
                        weight: 2,
                      }}
                    >
                      <Popup>
                        <strong>
                          Tourist
                        </strong>
                        <br />
                        {
                          tourist.name
                        }
                      </Popup>
                    </CircleMarker>
                  )
                )}

                {/* SOS */}

                {SOS_LOCATIONS.map(
                  (alert) => (
                    <CircleMarker
                      key={
                        alert.id
                      }
                      center={
                        alert.position
                      }
                      radius={8}
                      pathOptions={{
                        color:
                          "#F87171",
                        fillColor:
                          "#EF4444",
                        fillOpacity: 0.95,
                        weight: 3,
                      }}
                    >
                      <Popup>
                        <strong>
                          🚨 SOS Alert
                        </strong>
                        <br />
                        {
                          alert.name
                        }
                      </Popup>
                    </CircleMarker>
                  )
                )}
              </MapContainer>

              {/* SELECTED ZONE CARD */}

              {selectedZone && (
                <Box
                  sx={{
                    position:
                      "absolute",

                    left: 15,
                    top: 74,

                    zIndex: 900,

                    width: 245,

                    p: 1.4,

                    borderRadius:
                      "15px",

                    background:
                      "rgba(7,24,41,.88)",

                    backdropFilter:
                      "blur(15px)",

                    border:
                      "1px solid rgba(56,189,248,.15)",

                    boxShadow:
                      "0 16px 40px rgba(0,0,0,.22)",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        "#526F86",

                      fontSize: 7,

                      textTransform:
                        "uppercase",

                      fontWeight: 900,

                      letterSpacing: 1,
                    }}
                  >
                    Selected Zone
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#F8FAFC",

                      fontSize: 15,

                      fontWeight: 900,

                      mt: 0.4,
                    }}
                  >
                    {
                      selectedZone.name
                    }
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#648198",

                      fontSize: 8,

                      mt: 0.3,
                    }}
                  >
                    {
                      selectedZone.location
                    }
                  </Typography>

                  <Box
                    sx={{
                      display:
                        "flex",

                      gap: 0.6,

                      mt: 1,
                    }}
                  >
                    <Chip
                      label={
                        selectedZone.risk
                      }
                      size="small"
                      sx={{
                        height: 20,

                        color:
                          getRiskColor(
                            selectedZone.risk
                          ),

                        background:
                          `${getRiskColor(
                            selectedZone.risk
                          )}12`,

                        border:
                          `1px solid ${getRiskColor(
                            selectedZone.risk
                          )}22`,

                        fontSize: 7,

                        fontWeight:
                          900,
                      }}
                    />

                    <Chip
                      label={`${selectedZone.tourists} tourists`}
                      size="small"
                      sx={{
                        height: 20,

                        color:
                          "#67E8F9",

                        background:
                          "rgba(56,189,248,.08)",

                        fontSize: 7,

                        fontWeight:
                          900,
                      }}
                    />
                  </Box>
                </Box>
              )}

              {/* DRAWING MESSAGE */}

              {drawing && (
                <Box
                  sx={{
                    position:
                      "absolute",

                    bottom: 18,
                    left: "50%",

                    transform:
                      "translateX(-50%)",

                    zIndex: 1000,

                    px: 2,

                    py: 1.2,

                    borderRadius:
                      "13px",

                    background:
                      "rgba(49,46,129,.92)",

                    backdropFilter:
                      "blur(12px)",

                    border:
                      "1px solid rgba(129,140,248,.25)",

                    boxShadow:
                      "0 12px 35px rgba(0,0,0,.25)",

                    display:
                      "flex",

                    alignItems:
                      "center",

                    gap: 1.2,
                  }}
                >
                  <DrawRoundedIcon
                    sx={{
                      color:
                        "#A5B4FC",
                      fontSize: 18,
                    }}
                  />

                  <Box>
                    <Typography
                      sx={{
                        color:
                          "#fff",

                        fontSize: 8,

                        fontWeight:
                          900,
                      }}
                    >
                      DRAWING SAFETY ZONE
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#A5B4FC",

                        fontSize: 7,

                        mt: 0.2,
                      }}
                    >
                      Click points on
                      the map
                    </Typography>
                  </Box>

                  <Button
                    onClick={
                      handleFinishDrawing
                    }
                    disabled={
                      drawPoints.length <
                      3
                    }
                    size="small"
                    sx={{
                      ml: 1,

                      color: "#fff",

                      background:
                        "#6366F1",

                      textTransform:
                        "none",

                      borderRadius:
                        "8px",

                      fontSize: 7,

                      fontWeight:
                        900,
                    }}
                  >
                    Finish
                  </Button>
                </Box>
              )}

              {/* MAP LEGEND */}

              <Box
                sx={{
                  position:
                    "absolute",

                  bottom: 15,
                  left: 15,

                  zIndex: 900,

                  p: 1.2,

                  borderRadius:
                    "12px",

                  background:
                    "rgba(7,24,41,.88)",

                  backdropFilter:
                    "blur(12px)",

                  border:
                    "1px solid rgba(148,163,184,.09)",
                }}
              >
                <Typography
                  sx={{
                    color:
                      "#A7BDD0",

                    fontSize: 7,

                    fontWeight:
                      900,

                    mb: 0.8,
                  }}
                >
                  MAP LEGEND
                </Typography>

                <Legend
                  color="#34D399"
                  label="Safe Zone"
                />

                <Legend
                  color="#FBBF24"
                  label="Warning Zone"
                />

                <Legend
                  color="#F87171"
                  label="SOS / High Risk"
                />

                <Legend
                  color="#38BDF8"
                  label="Tourist"
                />
              </Box>
            </Paper>

            {/* =================================================
                RIGHT INTELLIGENCE
            ================================================= */}

            <Box
              sx={{
                display:
                  "flex",

                flexDirection:
                  "column",

                gap: 1.5,
              }}
            >
              {/* AI RISK */}

              <Paper
                elevation={0}
                sx={{
                  p: 1.8,

                  borderRadius:
                    "20px",

                  background:
                    "linear-gradient(145deg,#102B46,#081827)",

                  border:
                    "1px solid rgba(56,189,248,.13)",

                  boxShadow:
                    "0 18px 50px rgba(0,0,0,.20)",
                }}
              >
                <Box
                  sx={{
                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",

                    mb: 1.3,
                  }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: 0.9,
                    }}
                  >
                    <AutoAwesomeRoundedIcon
                      sx={{
                        color:
                          "#67E8F9",
                        fontSize: 19,
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color:
                            "#F8FAFC",

                          fontSize: 11,

                          fontWeight:
                            900,
                        }}
                      >
                        AI Risk Intelligence
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "#526F86",

                          fontSize: 7,
                        }}
                      >
                        Predictive safety
                        analysis
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label="AI"
                    size="small"
                    sx={{
                      height: 20,

                      color:
                        "#67E8F9",

                      background:
                        "rgba(56,189,248,.08)",

                      fontSize: 7,

                      fontWeight:
                        900,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    p: 1.5,

                    borderRadius:
                      "15px",

                    background:
                      "rgba(255,255,255,.025)",

                    border:
                      `1px solid ${getRiskColor(
                        selectedRisk
                      )}20`,
                  }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "space-between",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color:
                            "#526F86",

                          fontSize: 7,

                          fontWeight:
                            900,
                        }}
                      >
                        CURRENT RISK
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            getRiskColor(
                              selectedRisk
                            ),

                          fontSize: 36,

                          fontWeight:
                            900,

                          lineHeight:
                            1,

                          mt: 0.5,
                        }}
                      >
                        {
                          selectedRiskScore
                        }
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 65,
                        height: 65,

                        borderRadius:
                          "50%",

                        display:
                          "flex",

                        alignItems:
                          "center",

                        justifyContent:
                          "center",

                        background: `radial-gradient(circle,#102B46 54%,transparent 55%), conic-gradient(${getRiskColor(
                          selectedRisk
                        )} ${selectedRiskScore}%,rgba(255,255,255,.06) ${selectedRiskScore}%)`,

                        boxShadow:
                          `0 0 25px ${getRiskColor(
                            selectedRisk
                          )}20`,
                      }}
                    >
                      <Typography
                        sx={{
                          color:
                            "#DCEEFF",

                          fontSize: 9,

                          fontWeight:
                            900,
                        }}
                      >
                        /100
                      </Typography>
                    </Box>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={
                      selectedRiskScore
                    }
                    sx={{
                      mt: 1.3,

                      height: 5,

                      borderRadius:
                        5,

                      background:
                        "rgba(255,255,255,.06)",

                      "& .MuiLinearProgress-bar":
                        {
                          borderRadius:
                            5,

                          background:
                            `linear-gradient(90deg,#38BDF8,${getRiskColor(
                              selectedRisk
                            )})`,
                        },
                    }}
                  />

                  <Box
                    sx={{
                      display:
                        "flex",

                      justifyContent:
                        "space-between",

                      mt: 0.8,
                    }}
                  >
                    <Typography
                      sx={{
                        color:
                          getRiskColor(
                            selectedRisk
                          ),

                        fontSize: 7,

                        fontWeight:
                          900,
                      }}
                    >
                      {selectedRisk.toUpperCase()} RISK
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#526F86",

                        fontSize: 7,
                      }}
                    >
                      94% confidence
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    mt: 1.2,

                    p: 1.2,

                    borderRadius:
                      "12px",

                    background:
                      "rgba(56,189,248,.04)",

                    border:
                      "1px solid rgba(56,189,248,.08)",
                  }}
                >
                  <Typography
                    sx={{
                      color:
                        "#67E8F9",

                      fontSize: 7,

                      fontWeight:
                        900,

                      mb: 0.5,
                    }}
                  >
                    AI RECOMMENDATION
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#708BA0",

                      fontSize: 8,

                      lineHeight:
                        1.6,
                    }}
                  >
                    Tourist activity is
                    being monitored.
                    Maintain patrol
                    coverage and
                    review emergency
                    alerts in this
                    zone.
                  </Typography>
                </Box>
              </Paper>

              {/* SELECTED ZONE */}

              <Paper
                elevation={0}
                sx={{
                  p: 1.8,

                  borderRadius:
                    "20px",

                  background:
                    "linear-gradient(145deg,#102B46,#081827)",

                  border:
                    "1px solid rgba(56,189,248,.10)",
                }}
              >
                <Box
                  sx={{
                    display:
                      "flex",

                    alignItems:
                      "center",

                    justifyContent:
                      "space-between",

                    mb: 1.3,
                  }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",

                      alignItems:
                        "center",

                      gap: 0.8,
                    }}
                  >
                    <LocationOnRoundedIcon
                      sx={{
                        color:
                          "#38BDF8",
                        fontSize: 18,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "#F8FAFC",

                        fontSize: 11,

                        fontWeight:
                          900,
                      }}
                    >
                      Zone Details
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display:
                        "flex",
                      gap: 0.3,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() =>
                        handleEdit(
                          selectedZone
                        )
                      }
                      sx={{
                        color:
                          "#7DD3FC",
                      }}
                    >
                      <EditRoundedIcon
                        sx={{
                          fontSize: 16,
                        }}
                      />
                    </IconButton>

                    <IconButton
                      size="small"
                      onClick={() =>
                        handleDelete(
                          selectedZone
                        )
                      }
                      sx={{
                        color:
                          "#F87171",
                      }}
                    >
                      <DeleteOutlineRoundedIcon
                        sx={{
                          fontSize: 16,
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>

                {selectedZone ? (
                  <>
                    <Typography
                      sx={{
                        color:
                          "#F8FAFC",

                        fontSize: 17,

                        fontWeight:
                          900,
                      }}
                    >
                      {
                        selectedZone.name
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#58758C",

                        fontSize: 8,

                        mt: 0.4,
                      }}
                    >
                      {
                        selectedZone.location
                      }
                    </Typography>

                    <Box
                      sx={{
                        display:
                          "grid",

                        gridTemplateColumns:
                          "1fr 1fr",

                        gap: 1,

                        mt: 1.3,
                      }}
                    >
                      <MiniMetric
                        icon={
                          <PeopleAltRoundedIcon />
                        }
                        value={
                          selectedZone.tourists
                        }
                        label="Tourists"
                        color="#38BDF8"
                      />

                      <MiniMetric
                        icon={
                          <ShieldRoundedIcon />
                        }
                        value={`${selectedZone.radius}m`}
                        label="Radius"
                        color="#34D399"
                      />

                      <MiniMetric
                        icon={
                          <WarningAmberRoundedIcon />
                        }
                        value="03"
                        label="Alerts today"
                        color="#FBBF24"
                      />

                      <MiniMetric
                        icon={
                          <AccessTimeRoundedIcon />
                        }
                        value="24/7"
                        label="Monitoring"
                        color="#818CF8"
                      />
                    </Box>
                  </>
                ) : (
                  <Typography
                    sx={{
                      color:
                        "#536F86",

                      fontSize: 9,
                    }}
                  >
                    Select a zone to
                    view details.
                  </Typography>
                )}
              </Paper>

              {/* LIVE STATUS */}

              <Paper
                elevation={0}
                sx={{
                  p: 1.6,

                  borderRadius:
                    "18px",

                  background:
                    "rgba(10,31,51,.82)",

                  border:
                    "1px solid rgba(56,189,248,.08)",
                }}
              >
                <Box
                  sx={{
                    display:
                      "flex",

                    alignItems:
                      "center",

                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 34,
                      height: 34,

                      borderRadius:
                        "10px",

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      color:
                        "#34D399",

                      background:
                        "rgba(52,211,153,.07)",
                    }}
                  >
                    <ShieldRoundedIcon
                      sx={{
                        fontSize: 18,
                      }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color:
                          "#E2E8F0",

                        fontSize: 9,

                        fontWeight:
                          900,
                      }}
                    >
                      Safety System
                      Operational
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#526F86",

                        fontSize: 7,

                        mt: 0.2,
                      }}
                    >
                      All monitoring
                      services online
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      ml: "auto",

                      width: 8,
                      height: 8,

                      borderRadius:
                        "50%",

                      bgcolor:
                        "#22C55E",

                      boxShadow:
                        "0 0 10px rgba(34,197,94,.7)",
                    }}
                  />
                </Box>
              </Paper>
            </Box>
          </Box>

          {/* =================================================
              BOTTOM ANALYTICS
          ================================================= */}

          <Box
            sx={{
              display:
                "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(3,1fr)",
              },

              gap: 1.5,

              mt: 1.5,
            }}
          >
            <AnalyticsCard
              icon={
                <PeopleAltRoundedIcon />
              }
              title="Tourist Activity"
              value={
                selectedZone?.tourists ||
                0
              }
              detail="tourists currently inside selected zone"
              trend="+12.4%"
              color="#38BDF8"
            />

            <AnalyticsCard
              icon={
                <WarningAmberRoundedIcon />
              }
              title="Safety Alerts"
              value="03"
              detail="events detected today"
              trend="2 resolved"
              color="#FBBF24"
            />

            <AnalyticsCard
              icon={
                <AccessTimeRoundedIcon />
              }
              title="Response Time"
              value="01:42"
              detail="average emergency response"
              trend="System ready"
              color="#34D399"
            />
          </Box>

          {/* =================================================
              FOOTER
          ================================================= */}

          <Box
            sx={{
              mt: 1.5,

              display:
                "flex",

              alignItems:
                "center",

              justifyContent:
                "space-between",

              px: 1.5,
              py: 1,

              borderRadius:
                "12px",

              background:
                "rgba(7,24,41,.70)",

              border:
                "1px solid rgba(56,189,248,.06)",
            }}
          >
            <Typography
              sx={{
                color:
                  "#506C83",

                fontSize: 7,
              }}
            >
              SafeTour AI • GeoFence
              Intelligence
            </Typography>

            <Typography
              sx={{
                color:
                  "#405A70",

                fontSize: 7,
              }}
            >
              Last synchronized:
              just now
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =================================================
          ADD GEO FENCE
      ================================================= */}

      <AddGeoFenceDialog
        open={open}
        setOpen={setOpen}
        newZone={newZone}
        setNewZone={setNewZone}
        onSave={
          handleSaveZone
        }
      />
    </DashboardLayout>
  );
};

/* =========================================================
   KPI CARD
========================================================= */

const KpiCard = ({
  icon,
  label,
  value,
  detail,
  color,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.6,

        borderRadius:
          "17px",

        background:
          "linear-gradient(145deg,rgba(15,39,64,.95),rgba(8,25,42,.95))",

        border:
          "1px solid rgba(148,163,184,.08)",

        transition:
          ".25s",

        "&:hover": {
          transform:
            "translateY(-3px)",

          borderColor:
            `${color}35`,

          boxShadow:
            `0 15px 35px ${color}08`,
        },
      }}
    >
      <Box
        sx={{
          display:
            "flex",

          alignItems:
            "center",

          justifyContent:
            "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              color:
                "#58758C",

              fontSize: 7,

              fontWeight:
                900,

              letterSpacing:
                1,
            }}
          >
            {label.toUpperCase()}
          </Typography>

          <Typography
            sx={{
              color:
                "#F8FAFC",

              fontSize: 25,

              fontWeight:
                900,

              mt: 0.5,

              lineHeight:
                1,
            }}
          >
            {value}
          </Typography>

          <Typography
            sx={{
              color:
                "#4F6A80",

              fontSize: 7,

              mt: 0.6,
            }}
          >
            {detail}
          </Typography>
        </Box>

        <Box
          sx={{
            width: 42,
            height: 42,

            borderRadius:
              "12px",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color,

            background:
              `${color}0D`,
          }}
        >
          {icon}
        </Box>
      </Box>
    </Paper>
  );
};

/* =========================================================
   MINI METRIC
========================================================= */

const MiniMetric = ({
  icon,
  value,
  label,
  color,
}) => {
  return (
    <Box
      sx={{
        p: 1,

        borderRadius:
          "11px",

        background:
          "rgba(255,255,255,.025)",

        border:
          "1px solid rgba(148,163,184,.06)",
      }}
    >
      <Box
        sx={{
          color,

          mb: 0.5,

          "& svg": {
            fontSize: 15,
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        sx={{
          color:
            "#EAF6FF",

          fontSize: 13,

          fontWeight:
            900,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          color:
            "#4F6B82",

          fontSize: 7,

          mt: 0.2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

/* =========================================================
   ANALYTICS CARD
========================================================= */

const AnalyticsCard = ({
  icon,
  title,
  value,
  detail,
  trend,
  color,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1.7,

        borderRadius:
          "18px",

        background:
          "linear-gradient(145deg,rgba(15,39,64,.92),rgba(8,25,42,.92))",

        border:
          "1px solid rgba(148,163,184,.07)",

        transition:
          ".25s",

        "&:hover": {
          transform:
            "translateY(-3px)",

          borderColor:
            `${color}25`,
        },
      }}
    >
      <Box
        sx={{
          display:
            "flex",

          alignItems:
            "center",

          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,

            borderRadius:
              "10px",

            display:
              "flex",

            alignItems:
              "center",

            justifyContent:
              "center",

            color,

            background:
              `${color}0D`,
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            color:
              "#A9C0D2",

            fontSize: 9,

            fontWeight:
              900,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Typography
        sx={{
          color:
            "#F8FAFC",

          fontSize: 25,

          fontWeight:
            900,

          mt: 1.1,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          color:
            "#536F86",

          fontSize: 7,

          mt: 0.3,
        }}
      >
        {detail}
      </Typography>

      <Typography
        sx={{
          color,

          fontSize: 8,

          fontWeight:
            900,

          mt: 1,
        }}
      >
        ● {trend}
      </Typography>
    </Paper>
  );
};

/* =========================================================
   LEGEND
========================================================= */

const Legend = ({
  color,
  label,
}) => {
  return (
    <Box
      sx={{
        display:
          "flex",

        alignItems:
          "center",

        gap: 0.6,

        mb: 0.45,
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,

          borderRadius:
            "50%",

          bgcolor:
            color,

          boxShadow:
            `0 0 7px ${color}88`,
        }}
      />

      <Typography
        sx={{
          color:
            "#657F95",

          fontSize: 7,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default GeoFence;