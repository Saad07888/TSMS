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
        bgcolor: "#111827",
        borderRadius: 4,
        border: "1px solid rgba(255,255,255,.06)",
        boxShadow: "0 15px 35px rgba(0,0,0,.35)",
        p: 2.5,
      }}
    >
      {/* Header */}

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
            gap: 1.5,
          }}
        >
          <Typography
            color="#fff"
            fontSize={20}
            fontWeight="bold"
          >
            🛰 Live Tourist Monitoring
          </Typography>

          <Chip
            label="Live"
            size="small"
            sx={{
              bgcolor: "#16A34A",
              color: "#fff",
              fontWeight: "bold",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Select
            defaultValue="All Zones"
            size="small"
            sx={{
              minWidth: 150,
              bgcolor: "#1F2937",
              color: "#fff",

              ".MuiOutlinedInput-notchedOutline": {
                border: "none",
              },

              "& svg": {
                color: "#fff",
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
            sx={{
              bgcolor: "#1F2937",
              color: "#fff",
            }}
          >
            <RefreshRoundedIcon />
          </IconButton>

          <IconButton
            sx={{
              bgcolor: "#1F2937",
              color: "#fff",
            }}
          >
            <TuneRoundedIcon />
          </IconButton>
        </Box>
      </Box>

            {/* Map Container */}

      <Box
        sx={{
          height: 560,
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          bgcolor: "#0F172A",
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



          {/* Tourist Markers */}



          {tourists.map((tourist) => (

            <Marker

              key={tourist.id}

              position={tourist.position}

            >

              <Popup>

                <strong>{tourist.name}</strong>

                <br />

                Tourist

              </Popup>

            </Marker>

          ))}



          {/* SOS Markers */}



          {sosAlerts.map((alert) => (

            <Marker

              key={alert.id}

              position={alert.position}

            >

              <Popup>

                <strong>{alert.name}</strong>

              </Popup>

            </Marker>

          ))}



          {/* GeoFence */}



          <Circle

            center={[18.75, 73.4]}

            radius={25000}

            pathOptions={{

              color: "#3B82F6",

              fillColor: "#3B82F6",

              fillOpacity: 0.25,

            }}

          />

        </MapContainer>

        {/* Floating Stats */}

        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: 20,
            bgcolor: "rgba(17,24,39,.92)",
            backdropFilter: "blur(12px)",
            borderRadius: 3,
            border: "1px solid rgba(255,255,255,.08)",
            p: 2,
            minWidth: 180,
          }}
        >
          <Typography
            color="#94A3B8"
            fontSize={13}
          >
            Active Tourists
          </Typography>

          <Typography
            color="#fff"
            fontSize={30}
            fontWeight="bold"
          >
            1,245
          </Typography>

          <Typography
            color="#22C55E"
            fontSize={13}
          >
            ▲ +32 Today
          </Typography>
        </Box>

        {/* Live Status */}

        <Box
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            bgcolor: "rgba(17,24,39,.92)",
            borderRadius: 2,
            px: 2,
            py: 1,
          }}
        >
          <Typography
            color="#22C55E"
            fontWeight="bold"
            fontSize={13}
          >
            ● LIVE
          </Typography>
        </Box>

        {/* My Location Button */}

        <IconButton
          sx={{
            position: "absolute",
            bottom: 20,
            right: 20,
            bgcolor: "#111827",
            color: "#fff",

            "&:hover": {
              bgcolor: "#1F2937",
            },
          }}
        >
          <MyLocationRoundedIcon />
        </IconButton>

                {/* Legend */}

        <Box
          sx={{
            position: "absolute",
            left: 20,
            bottom: 20,
            bgcolor: "rgba(17,24,39,.94)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,.08)",
            borderRadius: 3,
            p: 2,
            minWidth: 190,
          }}
        >
          <Typography
            color="#fff"
            fontWeight="bold"
            mb={1.5}
          >
            Map Legend
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            gap={1}
          >
            <Typography color="#CBD5E1" fontSize={14}>
              🟢 Tourist
            </Typography>

            <Typography color="#CBD5E1" fontSize={14}>
              🔴 SOS Alert
            </Typography>

            <Typography color="#CBD5E1" fontSize={14}>
              🔵 GeoFence
            </Typography>

            <Typography color="#CBD5E1" fontSize={14}>
              🚔 Police Patrol
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LiveMapCard;