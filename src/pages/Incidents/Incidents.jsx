import DashboardLayout from "../../layouts/DashboardLayout";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  Button,
} from "@mui/material";

const incidents = [
  {
    id: "INC001",
    tourist: "Rahul Sharma",
    location: "Goa Beach",
    severity: "High",
    officer: "Inspector Patil",
    status: "Open",
  },
  {
    id: "INC002",
    tourist: "John Smith",
    location: "Gateway of India",
    severity: "Medium",
    officer: "Officer Khan",
    status: "Investigating",
  },
  {
    id: "INC003",
    tourist: "Aisha Khan",
    location: "Lonavala",
    severity: "Low",
    officer: "Officer Desai",
    status: "Resolved",
  },
];

const Incidents = () => {
  return (
    <DashboardLayout>
      <Typography variant="h4" fontWeight="bold" mb={3}>
        Incident Management
      </Typography>

      <Paper sx={{ p: 3, borderRadius: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <TextField
            placeholder="Search Incident..."
            size="small"
            sx={{ width: 300 }}
          />

          <Button variant="contained">
            Export Report
          </Button>
        </Box>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>ID</b></TableCell>
              <TableCell><b>Tourist</b></TableCell>
              <TableCell><b>Location</b></TableCell>
              <TableCell><b>Severity</b></TableCell>
              <TableCell><b>Officer</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Action</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {incidents.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.tourist}</TableCell>
                <TableCell>{item.location}</TableCell>

                <TableCell>
                  <Chip
                    label={item.severity}
                    color={
                      item.severity === "High"
                        ? "error"
                        : item.severity === "Medium"
                        ? "warning"
                        : "success"
                    }
                  />
                </TableCell>

                <TableCell>{item.officer}</TableCell>

                <TableCell>
                  <Chip
                    label={item.status}
                    color={
                      item.status === "Resolved"
                        ? "success"
                        : item.status === "Investigating"
                        ? "warning"
                        : "error"
                    }
                  />
                </TableCell>

                <TableCell>
                  <Button size="small" variant="outlined">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </DashboardLayout>
  );
};

export default Incidents;