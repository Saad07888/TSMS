import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";

const EditTouristDialog = ({
  open,
  setOpen,
  editTourist,
  setEditTourist,
  onUpdate,
}) => {
  if (!editTourist) return null;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Edit Tourist</DialogTitle>

      <DialogContent>

        <TextField
          fullWidth
          margin="normal"
          label="Tourist ID"
          value={editTourist.id}
          disabled
        />

        <TextField
          fullWidth
          margin="normal"
          label="Tourist Name"
          value={editTourist.name}
          onChange={(e) =>
            setEditTourist({
              ...editTourist,
              name: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Country"
          value={editTourist.country}
          onChange={(e) =>
            setEditTourist({
              ...editTourist,
              country: e.target.value,
            })
          }
        />

        <TextField
          fullWidth
          margin="normal"
          label="Current Location"
          value={editTourist.location}
          onChange={(e) =>
            setEditTourist({
              ...editTourist,
              location: e.target.value,
            })
          }
        />

        <TextField
          select
          fullWidth
          margin="normal"
          label="Status"
          value={editTourist.status}
          onChange={(e) =>
            setEditTourist({
              ...editTourist,
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
          value={editTourist.sos}
          onChange={(e) =>
            setEditTourist({
              ...editTourist,
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
          onClick={onUpdate}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTouristDialog;