import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Box,
  Typography,
  Chip,
  Divider,
} from "@mui/material";

const TouristProfile = ({
  open,
  setOpen,
  tourist,
}) => {
  if (!tourist) return null;

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        👤 Tourist Profile
      </DialogTitle>

      <DialogContent>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={3}
        >
          <Avatar
            src={`https://i.pravatar.cc/150?u=${tourist.id}`}
            sx={{
              width: 100,
              height: 100,
              mb: 2,
            }}
          />

          <Typography
            variant="h5"
            fontWeight="bold"
          >
            {tourist.name}
          </Typography>

          <Typography color="text.secondary">
            {tourist.country}
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography fontWeight="bold">
            Tourist ID
          </Typography>

          <Typography>
            {tourist.id}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography fontWeight="bold">
            Passport
          </Typography>

          <Typography>
            {tourist.passport || "-"}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography fontWeight="bold">
            Phone
          </Typography>

          <Typography>
            {tourist.phone || "-"}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography fontWeight="bold">
            Current Location
          </Typography>

          <Typography>
            {tourist.location}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
        >
          <Typography fontWeight="bold">
            Status
          </Typography>

          <Chip
            label={tourist.status}
            color={
              tourist.status === "Online"
                ? "success"
                : "error"
            }
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
        >
          <Typography fontWeight="bold">
            SOS Status
          </Typography>

          <Chip
            label={tourist.sos}
            color={
              tourist.sos === "Safe"
                ? "success"
                : "warning"
            }
          />
        </Box>

      </DialogContent>

      <DialogActions>
        <Button
          onClick={() => setOpen(false)}
          variant="contained"
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TouristProfile;