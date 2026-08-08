
import {
  Paper,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Chip,
  Button,
  Divider,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import PlaceIcon from "@mui/icons-material/Place";

const zones = [
  {
    id: "GF001",
    name: "Goa Beach",
    status: "Active",
  },
  {
    id: "GF002",
    name: "Gateway of India",
    status: "Active",
  },
  {
    id: "GF003",
    name: "Lonavala",
    status: "Inactive",
  },
  {
    id: "GF004",
    name: "Marine Drive",
    status: "Active",
  },
];

const GeoFenceSidebar = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderRadius: 3,
        height: "100%",
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
            sx={{
              borderRadius: 2,
              mb: 1,
            }}
          >
            <ListItemIcon>
              <PlaceIcon color="primary" />
            </ListItemIcon>

            <ListItemText
              primary={zone.name}
              secondary={zone.id}
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
        sx={{
          mt: 2,
          borderRadius: 2,
        }}
      >
        Create New Zone
      </Button>
    </Paper>
  );
};

export default GeoFenceSidebar;
