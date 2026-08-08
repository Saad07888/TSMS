import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const GeoFenceTable = ({
  geoFences,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell><b>Zone ID</b></TableCell>
          <TableCell><b>Zone Name</b></TableCell>
          <TableCell><b>Radius</b></TableCell>
          <TableCell><b>Location</b></TableCell>
          <TableCell><b>Status</b></TableCell>
          <TableCell><b>Tourists</b></TableCell>
          <TableCell align="center"><b>Action</b></TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {geoFences.map((zone) => (
          <TableRow key={zone.id} hover>
            <TableCell>{zone.id}</TableCell>

            <TableCell>{zone.name}</TableCell>

            <TableCell>{zone.radius} m</TableCell>

            <TableCell>{zone.location}</TableCell>

            <TableCell>
              <Chip
                label={zone.status}
                color={
                  zone.status === "Active"
                    ? "success"
                    : "default"
                }
                size="small"
              />
            </TableCell>

            <TableCell>{zone.tourists}</TableCell>

            <TableCell align="center">
              <IconButton
                color="info"
                onClick={() => onView(zone)}
              >
                <VisibilityIcon />
              </IconButton>

              <IconButton
                color="primary"
                onClick={() => onEdit(zone)}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                onClick={() => onDelete(zone)}
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

export default GeoFenceTable;