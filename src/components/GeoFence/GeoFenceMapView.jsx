import {
  Box,
  Typography,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

import {
  MapContainer,
  TileLayer,
  Circle,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";

import ZoomInRoundedIcon from "@mui/icons-material/ZoomInRounded";
import ZoomOutRoundedIcon from "@mui/icons-material/ZoomOutRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import NavigationRoundedIcon from "@mui/icons-material/NavigationRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";

import { useState } from "react";

import "leaflet/dist/leaflet.css";

/* =========================================================
   DEMO DATA
========================================================= */

const demoZones = [
  {
    id: "GZ-001",
    name: "Goa Beach",
    location: "North Goa",
    position: [15.4909, 73.8278],
    radius: 900,
    tourists: 128,
    risk: "Medium",
    color: "#38BDF8",
  },
  {
    id: "GZ-002",
    name: "Gateway of India",
    location: "Mumbai",
    position: [18.922, 72.8347],
    radius: 650,
    tourists: 84,
    risk: "Low",
    color: "#22C55E",
  },
  {
    id: "GZ-003",
    name: "Lonavala Tourist Zone",
    location: "Lonavala",
    position: [18.7546, 73.4062],
    radius: 1100,
    tourists: 61,
    risk: "High",
    color: "#F59E0B",
  },
];

const demoTourists = [
  {
    id: "T001",
    name: "Tourist 01",
    position: [18.92, 72.83],
  },
  {
    id: "T002",
    name: "Tourist 02",
    position: [18.76, 73.41],
  },
  {
    id: "T003",
    name: "Tourist 03",
    position: [18.75, 73.40],
  },
  {
    id: "T004",
    name: "Tourist 04",
    position: [19.01, 73.02],
  },
];

const demoSOS = [
  {
    id: "SOS-001",
    name: "Emergency Alert",
    position: [18.755, 73.405],
  },
];

/* =========================================================
   MAP CONTROLS
========================================================= */

const MapControls = () => {
  const map = useMap();

  const zoomIn = () => {
    map.zoomIn();
  };

  const zoomOut = () => {
    map.zoomOut();
  };

  const locate = () => {
    map.locate({
      setView: true,
      maxZoom: 13,
    });
  };

  return (
    <Box
      sx={{
        position: "absolute",
        right: 18,
        top: 82,
        zIndex: 1000,

        display: "flex",
        flexDirection: "column",

        p: 0.6,

        borderRadius: "14px",

        background: "rgba(7,24,42,.92)",

        backdropFilter: "blur(16px)",

        border:
          "1px solid rgba(56,189,248,.14)",

        boxShadow:
          "0 15px 40px rgba(0,0,0,.35)",
      }}
    >
      <Tooltip title="Zoom in" placement="left">
        <IconButton
          onClick={zoomIn}
          sx={{
            width: 38,
            height: 38,
            color: "#D7ECFA",
            borderRadius: "10px",

            "&:hover": {
              color: "#38BDF8",
              background:
                "rgba(56,189,248,.09)",
            },
          }}
        >
          <ZoomInRoundedIcon />
        </IconButton>
      </Tooltip>

      <Box
        sx={{
          height: 1,
          bgcolor:
            "rgba(255,255,255,.07)",
        }}
      />

      <Tooltip title="Zoom out" placement="left">
        <IconButton
          onClick={zoomOut}
          sx={{
            width: 38,
            height: 38,
            color: "#D7ECFA",
            borderRadius: "10px",

            "&:hover": {
              color: "#38BDF8",
              background:
                "rgba(56,189,248,.09)",
            },
          }}
        >
          <ZoomOutRoundedIcon />
        </IconButton>
      </Tooltip>

      <Box
        sx={{
          height: 1,
          bgcolor:
            "rgba(255,255,255,.07)",
        }}
      />

      <Tooltip
        title="My location"
        placement="left"
      >
        <IconButton
          onClick={locate}
          sx={{
            width: 38,
            height: 38,
            color: "#A5B4FC",
            borderRadius: "10px",

            "&:hover": {
              color: "#C7D2FE",
              background:
                "rgba(129,140,248,.10)",
            },
          }}
        >
          <MyLocationRoundedIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

/* =========================================================
   MAIN MAP
========================================================= */

const GeoFenceMapView = ({
  zones = demoZones,
  tourists = demoTourists,
  sosAlerts = demoSOS,

  selectedZone = demoZones[0],

  onSelectZone = () => {},
}) => {
  const [showZones, setShowZones] =
    useState(true);

  const [showTourists, setShowTourists] =
    useState(true);

  const [showSOS, setShowSOS] =
    useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        minHeight: 650,

        position: "relative",

        overflow: "hidden",

        borderRadius: "24px",

        background: "#071827",

        border:
          "1px solid rgba(56,189,248,.14)",

        boxShadow:
          "0 25px 70px rgba(2,12,27,.38)",
      }}
    >
      {/* =================================================
          MAP HEADER
      ================================================= */}

      <Box
        sx={{
          position: "absolute",

          top: 0,
          left: 0,
          right: 0,

          height: 80,

          zIndex: 1000,

          px: 2,

          display: "flex",
          alignItems: "center",
          justifyContent:
            "space-between",

          background:
            "linear-gradient(180deg,rgba(5,20,34,.98),rgba(5,20,34,.70),transparent)",

          pointerEvents: "none",
        }}
      >
        {/* Title */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.2,

            pointerEvents: "auto",
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
                "rgba(56,189,248,.10)",

              border:
                "1px solid rgba(56,189,248,.20)",

              boxShadow:
                "0 0 25px rgba(56,189,248,.10)",
            }}
          >
            <NavigationRoundedIcon />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",
                fontSize: 15,
                fontWeight: 900,
              }}
            >
              Live Safety Map
            </Typography>

            <Typography
              sx={{
                color: "#64829B",
                fontSize: 8,
                mt: 0.3,
              }}
            >
              Real-time tourist & GeoFence intelligence
            </Typography>
          </Box>
        </Box>

        {/* Network */}

        <Chip
          icon={
            <WifiRoundedIcon
              sx={{
                fontSize:
                  "14px !important",
              }}
            />
          }
          label="NETWORK LIVE"
          sx={{
            pointerEvents: "auto",

            height: 28,

            color: "#86EFAC",

            background:
              "rgba(34,197,94,.07)",

            border:
              "1px solid rgba(34,197,94,.18)",

            fontSize: 8,
            fontWeight: 900,

            "& .MuiChip-icon": {
              color: "#22C55E",
            },
          }}
        />
      </Box>

      {/* =================================================
          LEAFLET MAP
      ================================================= */}

      <MapContainer
        center={[18.75, 73.4]}
        zoom={7}
        zoomControl={false}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
          minHeight: 650,
          background: "#071827",
        }}
      >
        {/* Dark Navy Map */}

        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        <MapControls />

        {/* =================================================
            GEOFENCE ZONES
        ================================================= */}

        {showZones &&
          zones.map((zone) => {
            const selected =
              selectedZone?.id ===
              zone.id;

            return (
              <Circle
                key={zone.id}
                center={zone.position}
                radius={zone.radius}
                pathOptions={{
                  color: zone.color,

                  weight: selected
                    ? 3
                    : 2,

                  opacity: selected
                    ? 1
                    : 0.7,

                  fillColor:
                    zone.color,

                  fillOpacity: selected
                    ? 0.18
                    : 0.08,
                }}
                eventHandlers={{
                  click: () =>
                    onSelectZone(zone),
                }}
              >
                <Popup>
                  <Box
                    sx={{
                      minWidth: 170,
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: 900,
                      }}
                    >
                      {zone.name}
                    </Typography>

                    <Typography
                      fontSize={11}
                    >
                      {zone.location}
                    </Typography>

                    <Typography
                      fontSize={11}
                    >
                      👥 {zone.tourists} tourists
                    </Typography>

                    <Typography
                      fontSize={11}
                    >
                      Risk: {zone.risk}
                    </Typography>
                  </Box>
                </Popup>
              </Circle>
            );
          })}

        {/* =================================================
            TOURIST MARKERS
        ================================================= */}

        {showTourists &&
          tourists.map((tourist) => (
            <CircleMarker
              key={tourist.id}
              center={tourist.position}
              radius={7}
              pathOptions={{
                color: "#0284C7",
                fillColor: "#38BDF8",
                fillOpacity: 1,
                weight: 2,
              }}
            >
              <Popup>
                <Typography
                  fontWeight={800}
                  fontSize={13}
                >
                  {tourist.name}
                </Typography>

                <Typography
                  fontSize={11}
                >
                  Tourist ID:{" "}
                  {tourist.id}
                </Typography>

                <Typography
                  fontSize={11}
                >
                  Status: Online
                </Typography>
              </Popup>
            </CircleMarker>
          ))}

        {/* =================================================
            SOS MARKERS
        ================================================= */}

        {showSOS &&
          sosAlerts.map((alert) => (
            <CircleMarker
              key={alert.id}
              center={alert.position}
              radius={10}
              pathOptions={{
                color: "#FCA5A5",
                fillColor: "#EF4444",
                fillOpacity: 1,
                weight: 3,
              }}
            >
              <Popup>
                <Typography
                  fontWeight={900}
                  color="#DC2626"
                >
                  🚨 SOS ALERT
                </Typography>

                <Typography
                  fontSize={11}
                >
                  {alert.name}
                </Typography>

                <Typography
                  fontSize={11}
                >
                  Emergency location detected
                </Typography>
              </Popup>
            </CircleMarker>
          ))}
      </MapContainer>

      {/* =================================================
          SELECTED ZONE INTELLIGENCE
      ================================================= */}

      {selectedZone && (
        <Box
          sx={{
            position: "absolute",

            left: 18,
            top: 88,

            zIndex: 1000,

            width: {
              xs: 215,
              sm: 260,
            },

            p: 1.8,

            borderRadius: "17px",

            background:
              "linear-gradient(145deg,rgba(8,30,50,.96),rgba(6,21,36,.95))",

            backdropFilter:
              "blur(18px)",

            border:
              "1px solid rgba(56,189,248,.17)",

            boxShadow:
              "0 18px 45px rgba(0,0,0,.38)",

            animation:
              "zoneInfo .45s ease",

            "@keyframes zoneInfo": {
              from: {
                opacity: 0,
                transform:
                  "translateY(-8px)",
              },

              to: {
                opacity: 1,
                transform:
                  "translateY(0)",
              },
            },
          }}
        >
          <Typography
            sx={{
              color: "#59758D",
              fontSize: 7,
              fontWeight: 900,
              letterSpacing: 1.2,
            }}
          >
            SELECTED SAFETY ZONE
          </Typography>

          <Typography
            sx={{
              color: "#F8FAFC",
              fontSize: 18,
              fontWeight: 900,
              mt: 0.5,
            }}
          >
            {selectedZone.name}
          </Typography>

          <Typography
            sx={{
              color: "#66849B",
              fontSize: 9,
              mt: 0.2,
            }}
          >
            {selectedZone.location}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 0.7,
              mt: 1.2,
            }}
          >
            <Chip
              label={`${selectedZone.risk} Risk`}
              size="small"
              sx={{
                height: 23,

                color:
                  selectedZone.risk ===
                  "High"
                    ? "#F87171"
                    : selectedZone.risk ===
                      "Medium"
                    ? "#FBBF24"
                    : "#34D399",

                background:
                  "rgba(255,255,255,.035)",

                border:
                  "1px solid rgba(255,255,255,.08)",

                fontSize: 8,
                fontWeight: 800,
              }}
            />

            <Chip
              icon={
                <PeopleAltRoundedIcon
                  sx={{
                    fontSize:
                      "12px !important",
                  }}
                />
              }
              label={`${selectedZone.tourists} tourists`}
              size="small"
              sx={{
                height: 23,

                color: "#7DD3FC",

                background:
                  "rgba(56,189,248,.07)",

                border:
                  "1px solid rgba(56,189,248,.14)",

                fontSize: 8,
                fontWeight: 800,

                "& .MuiChip-icon": {
                  color: "#38BDF8",
                },
              }}
            />
          </Box>
        </Box>
      )}

      {/* =================================================
          MAP LAYERS
      ================================================= */}

      <Box
        sx={{
          position: "absolute",

          right: 18,
          top: 185,

          zIndex: 1000,

          p: 0.6,

          borderRadius: "14px",

          background:
            "rgba(7,24,42,.92)",

          backdropFilter:
            "blur(16px)",

          border:
            "1px solid rgba(56,189,248,.13)",

          boxShadow:
            "0 15px 35px rgba(0,0,0,.32)",
        }}
      >
        <Tooltip
          title="Toggle tourists"
          placement="left"
        >
          <IconButton
            onClick={() =>
              setShowTourists(
                !showTourists
              )
            }
            sx={{
              width: 39,
              height: 39,

              color: showTourists
                ? "#38BDF8"
                : "#526C82",

              background:
                showTourists
                  ? "rgba(56,189,248,.09)"
                  : "transparent",

              borderRadius: "10px",

              mb: 0.5,
            }}
          >
            <PeopleAltRoundedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip
          title="Toggle GeoFences"
          placement="left"
        >
          <IconButton
            onClick={() =>
              setShowZones(
                !showZones
              )
            }
            sx={{
              width: 39,
              height: 39,

              color: showZones
                ? "#34D399"
                : "#526C82",

              background:
                showZones
                  ? "rgba(34,197,94,.09)"
                  : "transparent",

              borderRadius: "10px",

              mb: 0.5,
            }}
          >
            <ShieldRoundedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip
          title="Toggle SOS alerts"
          placement="left"
        >
          <IconButton
            onClick={() =>
              setShowSOS(!showSOS)
            }
            sx={{
              width: 39,
              height: 39,

              color: showSOS
                ? "#F87171"
                : "#526C82",

              background:
                showSOS
                  ? "rgba(239,68,68,.09)"
                  : "transparent",

              borderRadius: "10px",
            }}
          >
            <WarningAmberRoundedIcon />
          </IconButton>
        </Tooltip>

        <Box
          sx={{
            height: 1,
            bgcolor:
              "rgba(255,255,255,.07)",
            my: 0.5,
          }}
        />

        <Tooltip
          title="Map layers"
          placement="left"
        >
          <IconButton
            sx={{
              width: 39,
              height: 39,

              color: "#94A3B8",

              borderRadius: "10px",

              "&:hover": {
                color: "#38BDF8",
                background:
                  "rgba(56,189,248,.08)",
              },
            }}
          >
            <LayersRoundedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* =================================================
          LIVE NETWORK CARD
      ================================================= */}

      <Box
        sx={{
          position: "absolute",

          right: 18,
          bottom: 78,

          zIndex: 1000,

          px: 1.5,
          py: 1,

          borderRadius: "13px",

          background:
            "rgba(7,24,42,.93)",

          backdropFilter:
            "blur(15px)",

          border:
            "1px solid rgba(34,197,94,.15)",

          display: "flex",
          alignItems: "center",
          gap: 1,

          boxShadow:
            "0 12px 30px rgba(0,0,0,.28)",
        }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,

            borderRadius: "50%",

            bgcolor: "#22C55E",

            boxShadow:
              "0 0 12px rgba(34,197,94,.8)",

            animation:
              "networkPulse 1.8s infinite",

            "@keyframes networkPulse": {
              "0%,100%": {
                opacity: 1,
              },
              "50%": {
                opacity: 0.35,
              },
            },
          }}
        />

        <Box>
          <Typography
            sx={{
              color: "#A7F3D0",
              fontSize: 8,
              fontWeight: 900,
            }}
          >
            LIVE MONITORING
          </Typography>

          <Typography
            sx={{
              color: "#59758D",
              fontSize: 7,
            }}
          >
            98.7% systems online
          </Typography>
        </Box>
      </Box>

      {/* =================================================
          MAP LEGEND
      ================================================= */}

      <Box
        sx={{
          position: "absolute",

          left: 18,
          bottom: 18,

          zIndex: 1000,

          p: 1.5,

          borderRadius: "15px",

          background:
            "rgba(7,24,42,.93)",

          backdropFilter:
            "blur(15px)",

          border:
            "1px solid rgba(148,163,184,.12)",

          boxShadow:
            "0 15px 35px rgba(0,0,0,.3)",
        }}
      >
        <Typography
          sx={{
            color: "#B5CAD9",
            fontSize: 8,
            fontWeight: 900,
            mb: 1,
            letterSpacing: ".6px",
          }}
        >
          MAP LEGEND
        </Typography>

        <Legend
          color="#22C55E"
          label="Safe Zone"
        />

        <Legend
          color="#F59E0B"
          label="Warning Zone"
        />

        <Legend
          color="#EF4444"
          label="SOS Alert"
        />

        <Legend
          color="#38BDF8"
          label="Tourist"
        />
      </Box>

      {/* =================================================
          BOTTOM STATUS
      ================================================= */}

      <Box
        sx={{
          position: "absolute",

          left: "50%",
          bottom: 18,

          transform:
            "translateX(-50%)",

          zIndex: 1000,

          display: {
            xs: "none",
            md: "flex",
          },

          alignItems: "center",

          gap: 0.7,

          px: 1.5,
          py: 0.8,

          borderRadius: "10px",

          color: "#58748C",

          background:
            "rgba(7,24,42,.82)",

          border:
            "1px solid rgba(148,163,184,.09)",

          fontSize: 8,
        }}
      >
        <ShieldRoundedIcon
          sx={{
            fontSize: 13,
            color: "#38BDF8",
          }}
        />

        Real-time safety monitoring enabled
      </Box>
    </Box>
  );
};

/* =========================================================
   LEGEND COMPONENT
========================================================= */

const Legend = ({ color, label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 0.8,
        mb: 0.65,

        "&:last-child": {
          mb: 0,
        },
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,

          borderRadius: "50%",

          bgcolor: color,

          boxShadow:
            `0 0 8px ${color}88`,
        }}
      />

      <Typography
        sx={{
          color: "#718BA1",
          fontSize: 8,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default GeoFenceMapView;