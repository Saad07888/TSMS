import {
  Box,
  Typography,
  Chip,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";

import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

const tourists = [
  {
    id: 1,
    name: "Rahul",
    position: [19.076, 72.8777],
  },
  {
    id: 2,
    name: "John",
    position: [18.5204, 73.8567],
  },
  {
    id: 3,
    name: "Alex",
    position: [18.922, 72.8347],
  },
  {
    id: 4,
    name: "Sara",
    position: [19.2183, 72.9781],
  },
];

const sosAlerts = [
  {
    id: 1,
    name: "SOS Alert",
    position: [18.75, 73.4],
  },
  {
    id: 2,
    name: "Emergency",
    position: [19.11, 72.89],
  },
];

const LiveMapCard = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",

        borderRadius: "24px",

        background:
          "linear-gradient(145deg,#0D1A2D 0%,#0A1526 100%)",

        border:
          "1px solid rgba(96,165,250,.14)",

        boxShadow:
          "0 25px 60px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.035)",

        p: 2,

        transition: ".3s ease",

        "&:hover": {
          borderColor:
            "rgba(96,165,250,.24)",

          boxShadow:
            "0 30px 70px rgba(0,0,0,.44)",
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

          px: 0.5,
          mb: 1.5,
        }}
      >
        {/* TITLE */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.1,
          }}
        >
          <Box
            sx={{
              width: 38,
              height: 38,

              borderRadius: "12px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              background:
                "linear-gradient(135deg,#2563EB,#3B82F6)",

              color: "#fff",

              boxShadow:
                "0 8px 25px rgba(37,99,235,.25)",
            }}
          >
            <PublicRoundedIcon
              sx={{ fontSize: 20 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 16,

                fontWeight: 800,

                lineHeight: 1.2,
              }}
            >
              Live Tourist Monitoring
            </Typography>

            <Typography
              sx={{
                color: "#64748B",

                fontSize: 9.5,

                mt: 0.35,
              }}
            >
              Real-time tourist location & safety monitoring
            </Typography>
          </Box>

          <Chip
            label="LIVE"
            size="small"
            sx={{
              height: 20,

              ml: 0.5,

              color: "#4ADE80",

              bgcolor:
                "rgba(34,197,94,.07)",

              border:
                "1px solid rgba(34,197,94,.14)",

              fontSize: 8,

              fontWeight: 900,

              "& .MuiChip-label": {
                px: 0.9,
              },
            }}
          />
        </Box>

        {/* CONTROLS */}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.7,
          }}
        >
          <Select
            defaultValue="All Zones"
            size="small"
            sx={{
              minWidth: 112,

              height: 34,

              bgcolor:
                "rgba(255,255,255,.035)",

              color: "#CBD5E1",

              borderRadius: "10px",

              fontSize: 10,

              ".MuiOutlinedInput-notchedOutline": {
                border:
                  "1px solid rgba(255,255,255,.06)",
              },

              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor:
                  "rgba(96,165,250,.25)",
              },

              "& svg": {
                color: "#64748B",
                fontSize: 17,
              },
            }}
          >
            <MenuItem value="All Zones">
              All Zones
            </MenuItem>

            <MenuItem value="High Risk">
              High Risk
            </MenuItem>

            <MenuItem value="Safe">
              Safe
            </MenuItem>
          </Select>

          <IconButton
            size="small"
            sx={{
              width: 34,
              height: 34,

              color: "#94A3B8",

              bgcolor:
                "rgba(255,255,255,.035)",

              border:
                "1px solid rgba(255,255,255,.06)",

              "&:hover": {
                bgcolor:
                  "rgba(59,130,246,.10)",

                color: "#60A5FA",
              },
            }}
          >
            <RefreshRoundedIcon
              sx={{ fontSize: 18 }}
            />
          </IconButton>

          <IconButton
            size="small"
            sx={{
              width: 34,
              height: 34,

              color: "#94A3B8",

              bgcolor:
                "rgba(255,255,255,.035)",

              border:
                "1px solid rgba(255,255,255,.06)",

              "&:hover": {
                bgcolor:
                  "rgba(59,130,246,.10)",

                color: "#60A5FA",
              },
            }}
          >
            <TuneRoundedIcon
              sx={{ fontSize: 18 }}
            />
          </IconButton>
        </Box>
      </Box>

      {/* =====================================================
          MAP
      ===================================================== */}

      <Box
        sx={{
          position: "relative",

          height: 400,

          borderRadius: "20px",

          overflow: "hidden",

          border:
            "1px solid rgba(255,255,255,.07)",

          bgcolor: "#0B1628",
        }}
      >
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={8}
          scrollWheelZoom={true}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* TOURIST MARKERS */}

          {tourists.map((tourist) => (
            <Marker
              key={tourist.id}
              position={tourist.position}
            >
              <Popup>
                <strong>
                  {tourist.name}
                </strong>

                <br />

                Tourist
              </Popup>
            </Marker>
          ))}

          {/* SOS MARKERS */}

          {sosAlerts.map((alert) => (
            <Marker
              key={alert.id}
              position={alert.position}
            >
              <Popup>
                <strong>
                  {alert.name}
                </strong>
              </Popup>
            </Marker>
          ))}

          {/* GEOFENCE */}

          <Circle
            center={[18.75, 73.4]}
            radius={25000}
            pathOptions={{
              color: "#3B82F6",
              fillColor: "#3B82F6",
              fillOpacity: 0.20,
            }}
          />
        </MapContainer>

        {/* =================================================
            ACTIVE TOURISTS FLOATING PANEL
        ================================================= */}

        <Box
          sx={{
            position: "absolute",

            top: 14,
            left: 14,

            zIndex: 500,

            minWidth: 150,

            p: 1.4,

            borderRadius: "14px",

            background:
              "rgba(8,18,32,.88)",

            backdropFilter:
              "blur(16px)",

            border:
              "1px solid rgba(255,255,255,.10)",

            boxShadow:
              "0 12px 30px rgba(0,0,0,.30)",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",

              fontSize: 8,

              fontWeight: 800,

              textTransform: "uppercase",

              letterSpacing: 0.8,
            }}
          >
            Active Tourists
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "baseline",
              gap: 0.7,
            }}
          >
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 27,

                fontWeight: 900,

                lineHeight: 1.1,

                mt: 0.3,
              }}
            >
              1,245
            </Typography>

            <Typography
              sx={{
                color: "#22C55E",

                fontSize: 8,

                fontWeight: 800,
              }}
            >
              ↑32 today
            </Typography>
          </Box>
        </Box>

        {/* =================================================
            NETWORK STATUS
        ================================================= */}

        <Box
          sx={{
            position: "absolute",

            top: 14,
            right: 14,

            zIndex: 500,

            display: "flex",

            alignItems: "center",

            gap: 0.7,

            px: 1.3,
            py: 0.8,

            borderRadius: "12px",

            background:
              "rgba(8,18,32,.88)",

            backdropFilter:
              "blur(16px)",

            border:
              "1px solid rgba(34,197,94,.12)",
          }}
        >
          <WifiRoundedIcon
            sx={{
              color: "#22C55E",

              fontSize: 14,
            }}
          />

          <Typography
            sx={{
              color: "#4ADE80",

              fontSize: 8,

              fontWeight: 900,

              letterSpacing: 0.5,
            }}
          >
            NETWORK LIVE
          </Typography>
        </Box>

        {/* =================================================
            SOS STATUS
        ================================================= */}

        <Box
          sx={{
            position: "absolute",

            top: 58,
            right: 14,

            zIndex: 500,

            display: "flex",

            alignItems: "center",

            gap: 0.7,

            px: 1.2,
            py: 0.7,

            borderRadius: "10px",

            background:
              "rgba(239,68,68,.14)",

            backdropFilter:
              "blur(12px)",

            border:
              "1px solid rgba(239,68,68,.20)",
          }}
        >
          <WarningAmberRoundedIcon
            sx={{
              color: "#EF4444",

              fontSize: 13,
            }}
          />

          <Typography
            sx={{
              color: "#FCA5A5",

              fontSize: 8,

              fontWeight: 800,
            }}
          >
            2 ACTIVE SOS
          </Typography>
        </Box>

        {/* =================================================
            MAP LEGEND
        ================================================= */}

        <Box
          sx={{
            position: "absolute",

            bottom: 14,
            left: 14,

            zIndex: 500,

            display: "flex",

            alignItems: "center",

            gap: 1.4,

            px: 1.4,
            py: 0.9,

            borderRadius: "11px",

            background:
              "rgba(8,18,32,.90)",

            backdropFilter:
              "blur(16px)",

            border:
              "1px solid rgba(255,255,255,.08)",
          }}
        >
          <Typography
            sx={{
              color: "#64748B",

              fontSize: 7.5,

              fontWeight: 800,

              letterSpacing: 0.6,
            }}
          >
            LEGEND
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,

                borderRadius: "50%",

                bgcolor: "#22C55E",
              }}
            />

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 8,
              }}
            >
              Tourist
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,

                borderRadius: "50%",

                bgcolor: "#EF4444",
              }}
            />

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 8,
              }}
            >
              SOS
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Box
              sx={{
                width: 6,
                height: 6,

                borderRadius: "50%",

                bgcolor: "#3B82F6",
              }}
            />

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 8,
              }}
            >
              GeoFence
            </Typography>
          </Box>
        </Box>

        {/* =================================================
            LOCATION BUTTON
        ================================================= */}

        <IconButton
          size="small"
          sx={{
            position: "absolute",

            bottom: 14,
            right: 14,

            zIndex: 500,

            width: 36,
            height: 36,

            color: "#CBD5E1",

            bgcolor:
              "rgba(8,18,32,.90)",

            backdropFilter:
              "blur(12px)",

            border:
              "1px solid rgba(255,255,255,.08)",

            boxShadow:
              "0 8px 20px rgba(0,0,0,.3)",

            "&:hover": {
              bgcolor:
                "#17263D",

              color: "#60A5FA",
            },
          }}
        >
          <MyLocationRoundedIcon
            sx={{ fontSize: 18 }}
          />
        </IconButton>
      </Box>

      {/* =====================================================
          BOTTOM LIVE METRICS
      ===================================================== */}

      <Box
        sx={{
          display: "grid",

          gridTemplateColumns:
            "repeat(3,1fr)",

          gap: 1,

          mt: 1.2,
        }}
      >
        {/* TOURISTS */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 1,

            p: 1.1,

            borderRadius: "13px",

            background:
              "rgba(34,197,94,.035)",

            border:
              "1px solid rgba(34,197,94,.08)",
          }}
        >
          <Box
            sx={{
              width: 29,
              height: 29,

              borderRadius: "9px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              bgcolor:
                "rgba(34,197,94,.08)",

              color: "#22C55E",
            }}
          >
            <PeopleAltRoundedIcon
              sx={{ fontSize: 15 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 12,

                fontWeight: 800,

                lineHeight: 1,
              }}
            >
              1,245
            </Typography>

            <Typography
              sx={{
                color: "#475569",

                fontSize: 7.5,

                mt: 0.4,
              }}
            >
              Active tourists
            </Typography>
          </Box>
        </Box>

        {/* SOS */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 1,

            p: 1.1,

            borderRadius: "13px",

            background:
              "rgba(239,68,68,.035)",

            border:
              "1px solid rgba(239,68,68,.08)",
          }}
        >
          <Box
            sx={{
              width: 29,
              height: 29,

              borderRadius: "9px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              bgcolor:
                "rgba(239,68,68,.08)",

              color: "#EF4444",
            }}
          >
            <WarningAmberRoundedIcon
              sx={{ fontSize: 15 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 12,

                fontWeight: 800,

                lineHeight: 1,
              }}
            >
              2
            </Typography>

            <Typography
              sx={{
                color: "#475569",

                fontSize: 7.5,

                mt: 0.4,
              }}
            >
              Active SOS
            </Typography>
          </Box>
        </Box>

        {/* GEOFENCE */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 1,

            p: 1.1,

            borderRadius: "13px",

            background:
              "rgba(59,130,246,.035)",

            border:
              "1px solid rgba(59,130,246,.08)",
          }}
        >
          <Box
            sx={{
              width: 29,
              height: 29,

              borderRadius: "9px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              bgcolor:
                "rgba(59,130,246,.08)",

              color: "#3B82F6",
            }}
          >
            <LocationOnRoundedIcon
              sx={{ fontSize: 15 }}
            />
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#F8FAFC",

                fontSize: 12,

                fontWeight: 800,

                lineHeight: 1,
              }}
            >
              35
            </Typography>

            <Typography
              sx={{
                color: "#475569",

                fontSize: 7.5,

                mt: 0.4,
              }}
            >
              Active GeoFences
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LiveMapCard;