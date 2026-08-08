import DeleteDialog from "../../components/Tourists/DeleteDialog";
import EditTouristDialog from "../../components/Tourists/EditTouristDialog";
import TouristProfile from "../../components/Tourists/TouristProfile";
import TouristTable from "../../components/Tourists/TouristTable";
import AddTouristDialog from "../../components/Tourists/AddTouristDialog";
import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Chip,
 
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const initialTourists = [
  {
    id: "T001",
    name: "Saad Patel",
      passport: "P1234567",
      phone: "+91 9876543210",
    country: "India",
    location: "Goa Beach",
    status: "Online",
    sos: "Safe",
  },
  {
    id: "T002",
    name: "Aquib Muulla",
      passport: "P1234567",
     phone: "+91 9876543210",
    country: "USA",
    location: "Gateway of India",
    status: "Offline",
    sos: "Alert",
  },
  {
    id: "T003",
    name: "Rohit Sharma",
     passport: "P1234567",
     phone: "+91 9876543210",
    country: "UAE",
    location: "Lonavala",
    status: "Online",
    sos: "Safe",
  },
{
    id: "T004",
    name: "Ameen",
      passport: "P1234567",
     phone: "+91 9876543210",
    country: "USA",
    location: "Gateway of India",
    status: "Offline",
    sos: "Alert",
  },

  {
    id: "T005",
    name: "Virat Kholi",
      passport: "P1234567",
     phone: "+91 9876543210",
    country: "USA",
    location: "Gateway of India",
    status: "Offline",
    sos: "Alert",
  },

];

const Tourists = () => {
  const [tourists, setTourists] = useState(initialTourists);

  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

const [selectedTourist, setSelectedTourist] = useState(null);
const [editOpen, setEditOpen] = useState(false);

const [editTourist, setEditTourist] = useState(null);

const [deleteOpen, setDeleteOpen] = useState(false);

const [deleteTourist, setDeleteTourist] = useState(null);

  const [newTourist, setNewTourist] = useState({
    id: "",
    name: "",
    country: "",
    location: "",
    status: "Online",
    sos: "Safe",
  });

  const filteredTourists = tourists.filter((tourist) =>
    tourist.id.toLowerCase().includes(search.toLowerCase()) ||
    tourist.name.toLowerCase().includes(search.toLowerCase()) ||
    tourist.country.toLowerCase().includes(search.toLowerCase()) ||
    tourist.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Tourist Management
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <TextField
            placeholder="Search Tourist..."
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1 }} />,
            }}
            sx={{ width: 320 }}
          />

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpen(true)}
          >
            Add Tourist
          </Button>
        </Box>
<TouristTable
  tourists={filteredTourists}
  onView={(tourist) => {
    setSelectedTourist(tourist);
    setProfileOpen(true);
  }}
  onEdit={(tourist) => {
    setEditTourist(tourist);
    setEditOpen(true);
  }}
  onDelete={(tourist) => {
    setDeleteTourist(tourist);
    setDeleteOpen(true);
  }}
/>

      </Paper>

    <AddTouristDialog
   
  open={open}
  setOpen={setOpen}
  newTourist={newTourist}
  setNewTourist={setNewTourist}
  onSave={() => {
    if (
      !newTourist.id ||
      !newTourist.name ||
      !newTourist.country ||
      !newTourist.location
    ) {
      alert("Please fill all fields");
      return;
    }

    setTourists([...tourists, newTourist]);

    setNewTourist({
      id: "",
      name: "",
      country: "",
      location: "",
      status: "Online",
      sos: "Safe",
    });

    setOpen(false);
  }}
/>

<TouristProfile
  open={profileOpen}
  setOpen={setProfileOpen}
  tourist={selectedTourist}
/>
<EditTouristDialog
  open={editOpen}
  setOpen={setEditOpen}
  editTourist={editTourist}
  setEditTourist={setEditTourist}
  onUpdate={() => {
    const updated = tourists.map((tourist) =>
      tourist.id === editTourist.id
        ? editTourist
        : tourist
    );

    setTourists(updated);
    setEditOpen(false);
  }}
/>

<DeleteDialog
  open={deleteOpen}
  setOpen={setDeleteOpen}
  onDelete={() => {
    const updatedTourists = tourists.filter(
      (tourist) => tourist.id !== deleteTourist.id
    );

    setTourists(updatedTourists);

    setDeleteOpen(false);

    setDeleteTourist(null);
  }}
/>
    </DashboardLayout>
  );
};

export default Tourists;