import { Box } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        background:
"linear-gradient(180deg,#07111F 0%,#0B1424 100%)",
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
   <Box
  sx={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
  }}
>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
       <Box
  component="main"
  sx={{
    flex: 1,
    p: 3,
    background:
"linear-gradient(180deg,#07111F,#0B1424)",
  }}
>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;