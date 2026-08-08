import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  Avatar,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TouristTable = ({
  tourists,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
            <TableCell>
  <b>Photo</b>
</TableCell>
          <TableCell><b>ID</b></TableCell>
        <TableCell><b>Name</b></TableCell>

<TableCell><b>Passport</b></TableCell>

<TableCell><b>Phone</b></TableCell>

<TableCell><b>Country</b></TableCell>
          <TableCell><b>Current Location</b></TableCell>
          <TableCell><b>Status</b></TableCell>
          <TableCell><b>SOS</b></TableCell>
          <TableCell align="center"><b>Action</b></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {tourists.map((tourist) => (
          <TableRow key={tourist.id} hover>
            <TableCell>
  <Avatar
    src={`https://i.pravatar.cc/150?u=${tourist.id}`}
    alt={tourist.name}
  />
</TableCell>
            <TableCell>{tourist.id}</TableCell>

          <TableCell>{tourist.name}</TableCell>

<TableCell>{tourist.passport}</TableCell>

<TableCell>{tourist.phone}</TableCell>

<TableCell>{tourist.country}</TableCell>
            <TableCell>{tourist.location}</TableCell>

            <TableCell>
              <Chip
                label={tourist.status}
                color={
                  tourist.status === "Online"
                    ? "success"
                    : "error"
                }
                size="small"
              />
            </TableCell>

            <TableCell>
              <Chip
                label={tourist.sos}
                color={
                  tourist.sos === "Safe"
                    ? "success"
                    : "warning"
                }
                size="small"
              />
            </TableCell>

            <TableCell align="center">
           <IconButton
  color="info"
  onClick={() => onView(tourist)}
>
  <VisibilityIcon />
</IconButton>

<IconButton
  color="primary"
  onClick={() => onEdit(tourist)}
>
  <EditIcon />
</IconButton>

<IconButton
  color="error"
  onClick={() => onDelete(tourist)}
>
  <DeleteIcon />
</IconButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TouristTable;