import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const AddTouristDialog = ({
  open,
  setOpen,
  newTourist,
  setNewTourist,
  onSave,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Add Tourist</DialogTitle>

      <DialogContent>

        <TextField
          fullWidth
          margin="normal"
          label="Tourist ID"
          value={newTourist.id}
          onChange={(e) =>
            setNewTourist({
              ...newTourist,
              id: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Tourist Name"
          value={newTourist.name}
          onChange={(e) =>
            setNewTourist({
              ...newTourist,
              name: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Country"
          value={newTourist.country}
          onChange={(e) =>
            setNewTourist({
              ...newTourist,
              country: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Current Location"
          value={newTourist.location}
          onChange={(e) =>
            setNewTourist({
              ...newTourist,
              location: e.target.value,
            })
          }
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          value={newTourist.status}
          onChange={(e) =>
            setNewTourist({
              ...newTourist,
              status: e.target.value,
            })
          }
        >
          <MenuItem value="Online">Online</MenuItem>
          <MenuItem value="Offline">Offline</MenuItem>
        </TextField>

        <TextField
          select
          fullWidth
          margin="normal"
          label="SOS Status"
          value={newTourist.sos}
          onChange={(e) =>
            setNewTourist({
              ...newTourist,
              sos: e.target.value,
            })
          }
        >
          <MenuItem value="Safe">Safe</MenuItem>
          <MenuItem value="Alert">Alert</MenuItem>
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

export default AddTouristDialog;