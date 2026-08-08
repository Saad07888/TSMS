import {

  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const AddGeoFenceDialog = ({
  open,
  setOpen,
  newZone,
  setNewZone,
  onSave,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Add GeoFence Zone</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="normal"
          label="Zone ID"
          value={newZone.id}
          onChange={(e) =>
            setNewZone({
              ...newZone,
              id: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Zone Name"
          value={newZone.name}
          onChange={(e) =>
            setNewZone({
              ...newZone,
              name: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Location"
          value={newZone.location}
          onChange={(e) =>
            setNewZone({
              ...newZone,
              location: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Radius (meters)"
          type="number"
          value={newZone.radius}
          onChange={(e) =>
            setNewZone({
              ...newZone,
              radius: e.target.value,
            })
          }
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          value={newZone.status}
          onChange={(e) =>
            setNewZone({
              ...newZone,
              status: e.target.value,
            })
          }
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </TextField>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>
          Cancel
        </Button>

     <Button
  variant="contained"
  onClick={onSave}
>
  Save
</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddGeoFenceDialog;