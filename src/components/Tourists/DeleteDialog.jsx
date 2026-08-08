import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

const DeleteDialog = ({
  open,
  setOpen,
  onDelete,
}) => {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle>
        Delete Tourist
      </DialogTitle>

      <DialogContent>
        <Typography>
          Are you sure you want to delete this tourist?
        </Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)}>
          Cancel
        </Button>

        <Button
          color="error"
          variant="contained"
          onClick={onDelete}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;