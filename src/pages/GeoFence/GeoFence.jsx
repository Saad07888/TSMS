import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import AddGeoFenceDialog from "../../components/GeoFence/AddGeoFenceDialog";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  Button,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import AddIcon from "@mui/icons-material/Add";



const GeoFence = () => {

    const [zones, setZones] = useState([
  {
    id: "GF001",
    name: "Goa Beach",
    tourists: 25,
    status: "Active",
    location: "Goa",
    radius: 500,
  },
  {
    id: "GF002",
    name: "Gateway of India",
    tourists: 18,
    status: "Active",
    location: "Mumbai",
    radius: 1000,
  },
  {
    id: "GF003",
    name: "Lonavala",
    tourists: 9,
    status: "Inactive",
    location: "Lonavala",
    radius: 750,
  },
]);

const [open, setOpen] = useState(false);

const [newZone, setNewZone] = useState({
  id: "",
  name: "",
  location: "",
  radius: "",
  status: "Active",
  tourists: 0,
});


const [selectedZone, setSelectedZone] = useState(zones[0]);
  return (
    <DashboardLayout>
      {/* Page Title */}
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        🛰 GeoFence Control Center
      </Typography>

      {/* Top Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: 3,
          mb: 3,
        }}
      >
       {/* Left Panel */}

<Paper
  elevation={3}
  sx={{
    p: 3,
    borderRadius: 3,
    minHeight: 500,
  }}
>
  <Typography
    variant="h6"
    fontWeight="bold"
    mb={2}
  >
    📍 GeoFence Zones
  </Typography>

  <Divider sx={{ mb: 2 }} />

  <List>
    {zones.map((zone) => (
   <ListItemButton
  key={zone.id}
  onClick={() => setSelectedZone(zone)}
  sx={{
    borderRadius: 2,
    mb: 1,
    transition: "0.3s",
    "&:hover": {
      bgcolor: "#F5F7FB",
    },
    bgcolor:
      selectedZone?.id === zone.id
        ? "#E3F2FD"
        : "transparent",
  }}
>
        <ListItemIcon>
          <PlaceIcon color="primary" />
        </ListItemIcon>

        <ListItemText
          primary={zone.name}
          secondary={`${zone.tourists} Tourists`}
        />

        <Chip
          label={zone.status}
          color={
            zone.status === "Active"
              ? "success"
              : "default"
          }
          size="small"
        />
      </ListItemButton>
    ))}
  </List>
<Button
  fullWidth
  variant="contained"
  startIcon={<AddIcon />}
  sx={{ mt: 2 }}
  onClick={() => setOpen(true)}
>
  Create New Zone
</Button>
</Paper>


       {/* Live Statistics */}

<Paper
  elevation={3}
  sx={{
    p: 3,
    borderRadius: 3,
    minHeight: 500,
  }}
>
  <Typography
    variant="h6"
    fontWeight="bold"
    mb={3}
  >
    📊 Live Statistics
  </Typography>

<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
    },
    gap: 2,
  }}
>
  <Paper
    sx={{
      p: 2,
      borderRadius: 3,
      bgcolor: "#E8F5E9",
    }}
  >
    <Typography color="success.main">
      🟢 Active Zones
    </Typography>

    <Typography
      variant="h4"
      fontWeight="bold"
    >
      12
    </Typography>
  </Paper>

  <Paper
    sx={{
      p: 2,
      borderRadius: 3,
      bgcolor: "#E3F2FD",
    }}
  >
    <Typography color="primary">
      👥 Tourists
    </Typography>

    <Typography
      variant="h4"
      fontWeight="bold"
    >
      1245
    </Typography>
  </Paper>

  <Paper
    sx={{
      p: 2,
      borderRadius: 3,
      bgcolor: "#FFF3E0",
    }}
  >
    <Typography color="warning.main">
      🚨 Violations
    </Typography>

    <Typography
      variant="h4"
      fontWeight="bold"
    >
      18
    </Typography>
  </Paper>

  <Paper
    sx={{
      p: 2,
      borderRadius: 3,
      bgcolor: "#FCE4EC",
    }}
  >
    <Typography color="error">
      ⚠ High Risk Areas
    </Typography>

    <Typography
      variant="h4"
      fontWeight="bold"
    >
      3
    </Typography>
  </Paper>
</Box>

</Paper>
      </Box>

      {/* Interactive Map */}

<Paper
  elevation={3}
  sx={{
    borderRadius: 4,
    overflow: "hidden",
    mb: 3,
  }}
>

  {/* Header */}

  <Box
    sx={{
      p: 2.5,
      bgcolor: "#1565C0",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
    >
      🌍 Live GeoFence Map
    </Typography>

    <Typography>
      Last Updated : Just Now
    </Typography>
  </Box>

  {/* Map Area */}

  <Box
    sx={{
      height: 550,
      bgcolor: "#E8F4FD",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
<MapContainer
  center={[19.076, 72.8777]} // Mumbai
  zoom={13}
  style={{
    height: "100%",
    width: "100%",
  }}
>
  <TileLayer
    attribution="&copy; OpenStreetMap contributors"
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[19.076, 72.8777]}>
  <Popup>Mumbai</Popup>
</Marker>

<Circle
  center={[19.076, 72.8777]}
  radius={500}
  pathOptions={{
    color: "red",
    fillColor: "red",
    fillOpacity: 0.2,
  }}
/>
</MapContainer>
{/* Floating Status Cards */}

<Box
  sx={{
    position: "absolute",
    top: 20,
    left: 20,
    bgcolor: "#fff",
    borderRadius: 3,
    p: 2,
    boxShadow: 3,
    minWidth: 220,
  }}
>
<Typography fontWeight="bold">
  {selectedZone.name}
</Typography>

  <Typography variant="h4" color="primary">
    1,245
  </Typography>
</Box>

<Box
  sx={{
    position: "absolute",
    top: 20,
    right: 20,
    bgcolor: "#fff",
    borderRadius: 3,
    p: 2,
    boxShadow: 3,
    minWidth: 220,
  }}
>
  <Typography fontWeight="bold">
    🚨 Active SOS
  </Typography>

  <Typography variant="h4" color="error">
    18
  </Typography>
</Box>

<Box
  sx={{
    position: "absolute",
    bottom: 20,
    left: 20,
    bgcolor: "#fff",
    borderRadius: 3,
    p: 2,
    boxShadow: 3,
    minWidth: 220,
  }}
>
  <Typography fontWeight="bold">
    🚓 Police Units
  </Typography>

  <Typography variant="h4" color="warning.main">
    22
  </Typography>
</Box>

<Box
  sx={{
    position: "absolute",
    bottom: 20,
    right: 20,
    bgcolor: "#fff",
    borderRadius: 3,
    p: 2,
    boxShadow: 3,
    minWidth: 220,
  }}
>
  <Typography fontWeight="bold">
    🔵 GeoFences
  </Typography>

  <Typography variant="h4" color="success.main">
    12
  </Typography>
</Box>

  </Box>

</Paper>

<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "1fr 1fr 1fr",
    },
    gap: 3,
    mb: 3,
  }}
>

  {/* AI Alerts */}

  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      mb={2}
    >
      🤖 AI Alerts
    </Typography>

    <Box
  sx={{
    bgcolor: "#FEE2E2",
    p: 2,
    borderRadius: 2,
    mb: 2,
  }}
>
 <Typography fontWeight="bold">
  {selectedZone.name}
</Typography>

  <Typography variant="body2">
    Risk Level : 95%
  </Typography>
</Box>

<Box
  sx={{
    bgcolor: "#FEF3C7",
    p: 2,
    borderRadius: 2,
  }}
>
  <Typography fontWeight="bold">
    AI Recommendation
  </Typography>

  <Typography variant="body2">
    Increase Police Patrol
  </Typography>
</Box>

  </Paper>

  {/* Zone Details */}

  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      mb={2}
    >
      📍 Zone Details
    </Typography>

   <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
  }}
>
  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography color="text.secondary">
      Zone Name
    </Typography>
<Typography fontWeight="bold">
  {selectedZone.name}
</Typography>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography color="text.secondary">
      Radius
    </Typography>

    <Typography fontWeight="bold">
  {selectedZone.radius} m
</Typography>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography color="text.secondary">
      Tourists
    </Typography>
<Typography fontWeight="bold">
  {selectedZone.tourists}
</Typography>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography color="text.secondary">
      Status
    </Typography>

    <Chip
  label={selectedZone.status}
  color={
    selectedZone.status === "Active"
      ? "success"
      : "default"
  }
  size="small"
/>
  </Box>

  <Box
    sx={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Typography color="text.secondary">
      Last Updated
    </Typography>

    <Typography fontWeight="bold">
      Just Now
    </Typography>
  </Box>
</Box>
  </Paper>

  {/* Recent Activity */}

  <Paper
    sx={{
      p: 3,
      borderRadius: 3,
    }}
  >
    <Typography
      variant="h6"
      fontWeight="bold"
      mb={2}
    >
      📜 Recent Activity
    </Typography>
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
  }}
>
  <Box
    sx={{
      p: 2,
      bgcolor: "#F9FAFB",
      borderRadius: 2,
      borderLeft: "4px solid #2563EB",
    }}
  >
    <Typography fontWeight="bold">
      10:30 AM
    </Typography>

    <Typography variant="body2">
      Rahul entered Goa Beach GeoFence
    </Typography>
  </Box>

  <Box
    sx={{
      p: 2,
      bgcolor: "#FEF2F2",
      borderRadius: 2,
      borderLeft: "4px solid #EF4444",
    }}
  >
    <Typography fontWeight="bold">
      10:42 AM
    </Typography>

    <Typography variant="body2">
      🚨 SOS triggered at Goa Beach
    </Typography>
  </Box>

  <Box
    sx={{
      p: 2,
      bgcolor: "#F0FDF4",
      borderRadius: 2,
      borderLeft: "4px solid #16A34A",
    }}
  >
    <Typography fontWeight="bold">
      10:45 AM
    </Typography>

    <Typography variant="body2">
      🚓 Police Unit dispatched
    </Typography>
  </Box>

  <Box
    sx={{
      p: 2,
      bgcolor: "#EFF6FF",
      borderRadius: 2,
      borderLeft: "4px solid #3B82F6",
    }}
  >
    <Typography fontWeight="bold">
      11:00 AM
    </Typography>

    <Typography variant="body2">
      GeoFence updated successfully
    </Typography>
  </Box>
</Box>

  </Paper>

</Box>

{/* Bottom Toolbar */}
<Paper
  elevation={3}
  sx={{
    p: 2,
    borderRadius: 3,
  }}
>
  <Typography>Bottom Toolbar</Typography>
</Paper>
<AddGeoFenceDialog
  open={open}
  setOpen={setOpen}
  newZone={newZone}
  setNewZone={setNewZone}
  onSave={() => {
    if (
      !newZone.id ||
      !newZone.name ||
      !newZone.location ||
      !newZone.radius
    ) {
      alert("Please fill all fields");
      return;
    }

    setZones([...zones, newZone]);

    setNewZone({
      id: "",
      name: "",
      location: "",
      radius: "",
      status: "Active",
      tourists: 0,
    });

    setOpen(false);
  }}
/>
</DashboardLayout>

  );
};

export default GeoFence;