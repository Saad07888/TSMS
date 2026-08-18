import { Box } from "@mui/material";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const SIDEBAR_WIDTH = 248;

const DashboardLayout = ({ children }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",

        background:
          "linear-gradient(180deg,#07111F 0%,#0B1424 100%)",

        color: "#fff",
      }}
    >
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <Sidebar />

      {/* =====================================================
          RIGHT SIDE
      ===================================================== */}

      <Box
        sx={{
          minHeight: "100vh",

          marginLeft: `${SIDEBAR_WIDTH}px`,

          width: `calc(100% - ${SIDEBAR_WIDTH}px)`,

          display: "flex",

          flexDirection: "column",

          position: "relative",
        }}
      >
        {/* =================================================
            NAVBAR
        ================================================= */}

        <Navbar />

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <Box
          component="main"
          sx={{
            flex: 1,

            width: "100%",

            boxSizing: "border-box",

            p: {
              xs: 2,
              md: 2.5,
              lg: 3,
            },

            background:
              "linear-gradient(180deg,#07111F 0%,#0B1424 100%)",

            minHeight:
              "calc(100vh - 64px)",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;