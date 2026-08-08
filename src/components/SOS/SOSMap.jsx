import { Box, Card, Typography, Chip } from "@mui/material";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const severityColor = {
  Critical: "#EF4444",
  High: "#F97316",
  Medium: "#F59E0B",
  Low: "#22C55E",
};

const sosAlerts = [
  {
    id: "SOS001",
    tourist: "Saad Patel",
    location: "Goa Beach",
    lat: 15.2993,
    lng: 74.124,
    severity: "Critical",
    status: "TRIGGERED",
  },
  {
    id: "SOS002",
    tourist: "Aquib Muulla",
    location: "Gateway of India",
    lat: 18.9218,
    lng: 72.8347,
    severity: "High",
    status: "ASSIGNED",
  },
  {
    id: "SOS003",
    tourist: "Rohit Sharma",
    location: "Lonavala",
    lat: 18.7546,
    lng: 73.4062,
    severity: "Medium",
    status: "RESPONDING",
  },
];

const SOSMap = () => {
  return (
    <Card
      sx={{
        bgcolor: "#111C2E",
        borderRadius: 4,
        border: "1px solid rgba(255,255,255,.06)",
        boxShadow: "0 15px 35px rgba(0,0,0,.35)",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 3,
          py: 2,
        }}
      >
        <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          🗺️ Live SOS Map
        </Typography>

        <Chip
          label="Live"
          size="small"
          sx={{
            bgcolor: "rgba(34,197,94,.15)",
            color: "#22C55E",
            fontWeight: "bold",
          }}
        />
      </Box>

      <Box sx={{ height: 420, width: "100%" }}>
        <MapContainer
          center={[19.076, 72.8777]}
          zoom={7}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          {sosAlerts.map((alert) => (
            <CircleMarker
              key={alert.id}
              center={[alert.lat, alert.lng]}
              radius={12}
              pathOptions={{
                color: severityColor[alert.severity],
                fillColor: severityColor[alert.severity],
                fillOpacity: 0.6,
              }}
            >
              <Popup>
                <strong>{alert.tourist}</strong>
                <br />
                {alert.location}
                <br />
                Severity: {alert.severity}
                <br />
                Status: {alert.status}
              </Popup>
            </CircleMarker>
          ))}
        </MapContainer>
      </Box>
    </Card>
  );
};

export default SOSMap;