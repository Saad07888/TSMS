import { useMemo, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";

import DeleteDialog from "../../components/Tourists/DeleteDialog";
import EditTouristDialog from "../../components/Tourists/EditTouristDialog";
import TouristProfile from "../../components/Tourists/TouristProfile";
import TouristTable from "../../components/Tourists/TouristTable";
import AddTouristDialog from "../../components/Tourists/AddTouristDialog";

import {
  Box,
  Typography,
  Paper,
  Button,
  Chip,
  IconButton,
} from "@mui/material";

import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import WifiOffRoundedIcon from "@mui/icons-material/WifiOffRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

const initialTourists = [
  {
    id: "T001",
    name: "Saad Patel",
    passport: "P1234567",
    phone: "+91 9876543210",
    country: "India",
    location: "Goa Beach",
    status: "Online",
    sos: "Safe",
  },
  {
    id: "T002",
    name: "Aquib Muulla",
    passport: "P1234567",
    phone: "+91 9876543210",
    country: "USA",
    location: "Gateway of India",
    status: "Offline",
    sos: "Alert",
  },
  {
    id: "T003",
    name: "Rohit Sharma",
    passport: "P1234567",
    phone: "+91 9876543210",
    country: "UAE",
    location: "Lonavala",
    status: "Online",
    sos: "Safe",
  },
  {
    id: "T004",
    name: "Ameen",
    passport: "P1234567",
    phone: "+91 9876543210",
    country: "USA",
    location: "Gateway of India",
    status: "Offline",
    sos: "Alert",
  },
  {
    id: "T005",
    name: "Virat Kholi",
    passport: "P1234567",
    phone: "+91 9876543210",
    country: "USA",
    location: "Gateway of India",
    status: "Offline",
    sos: "Alert",
  },
];

const Tourists = () => {
  const [tourists, setTourists] = useState(initialTourists);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [addOpen, setAddOpen] = useState(false);

  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedTourist, setSelectedTourist] = useState(null);

  const [editOpen, setEditOpen] = useState(false);
  const [editTourist, setEditTourist] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTourist, setDeleteTourist] = useState(null);

  const [newTourist, setNewTourist] = useState({
    id: "",
    name: "",
    country: "",
    location: "",
    status: "Online",
    sos: "Safe",
  });

  /* ==============================
     STATISTICS
  ============================== */

  const total = tourists.length;

  const online = tourists.filter(
    (tourist) => tourist.status === "Online"
  ).length;

  const offline = tourists.filter(
    (tourist) => tourist.status === "Offline"
  ).length;

  const alerts = tourists.filter(
    (tourist) => tourist.sos === "Alert"
  ).length;

  const safe = tourists.filter(
    (tourist) => tourist.sos === "Safe"
  ).length;

  /* ==============================
     FILTER + SEARCH
  ============================== */

  const filteredTourists = useMemo(() => {
    const query = search.toLowerCase().trim();

    return tourists.filter((tourist) => {
      const matchesSearch =
        tourist.name.toLowerCase().includes(query) ||
        tourist.id.toLowerCase().includes(query) ||
        tourist.country.toLowerCase().includes(query) ||
        tourist.location.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      if (filter === "Online") {
        return tourist.status === "Online";
      }

      if (filter === "Offline") {
        return tourist.status === "Offline";
      }

      if (filter === "Safe") {
        return tourist.sos === "Safe";
      }

      if (filter === "SOS Alert") {
        return tourist.sos === "Alert";
      }

      return true;
    });
  }, [tourists, search, filter]);

  /* ==============================
     ADD
  ============================== */

  const handleAdd = () => {
    if (
      !newTourist.id ||
      !newTourist.name ||
      !newTourist.country ||
      !newTourist.location
    ) {
      alert("Please fill all fields");
      return;
    }

    setTourists((previous) => [
      ...previous,
      newTourist,
    ]);

    setNewTourist({
      id: "",
      name: "",
      country: "",
      location: "",
      status: "Online",
      sos: "Safe",
    });

    setAddOpen(false);
  };

  /* ==============================
     EDIT
  ============================== */

  const handleEdit = () => {
    if (!editTourist) return;

    setTourists((previous) =>
      previous.map((tourist) =>
        tourist.id === editTourist.id
          ? editTourist
          : tourist
      )
    );

    setEditOpen(false);
    setEditTourist(null);
  };

  /* ==============================
     DELETE
  ============================== */

  const handleDelete = () => {
    if (!deleteTourist) return;

    setTourists((previous) =>
      previous.filter(
        (tourist) =>
          tourist.id !== deleteTourist.id
      )
    );

    setDeleteOpen(false);
    setDeleteTourist(null);
  };

  /* ==============================
     STAT CARD
  ============================== */

  const StatCard = ({
    title,
    value,
    description,
    icon,
    color,
  }) => {
    return (
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",

          minHeight: 138,

          p: 2.5,

          borderRadius: "20px",

          background: `
            linear-gradient(
              145deg,
              rgba(25,48,78,.96),
              rgba(18,38,63,.96)
            )
          `,

          border:
            "1px solid rgba(148,163,184,.14)",

          boxShadow:
            "0 18px 45px rgba(0,0,0,.20)",

          transition:
            "transform .3s ease, box-shadow .3s ease",

          "&:hover": {
            transform: "translateY(-6px)",

            boxShadow: `
              0 25px 55px rgba(0,0,0,.28),
              0 0 35px ${color}18
            `,
          },

          "&::before": {
            content: '""',

            position: "absolute",

            width: 180,
            height: 180,

            borderRadius: "50%",

            top: -120,
            right: -70,

            background: `${color}15`,

            filter: "blur(25px)",

            animation:
              "cardGlow 6s ease-in-out infinite",
          },

          "@keyframes cardGlow": {
            "0%,100%": {
              transform: "translate(0,0)",
            },
            "50%": {
              transform: "translate(-15px,12px)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,

            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#8298B2",
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: 1.3,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontSize: 34,
                fontWeight: 800,

                mt: 1,

                lineHeight: 1,
              }}
            >
              {value}
            </Typography>

            <Typography
              sx={{
                color: "#7187A1",
                fontSize: 11,

                mt: 1,
              }}
            >
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 50,
              height: 50,

              borderRadius: "16px",

              display: "flex",
              alignItems: "center",
              justifyContent: "center",

              color,

              background: `${color}12`,

              border: `1px solid ${color}30`,

              boxShadow:
                `0 0 25px ${color}16`,

              transition: ".3s",

              "& svg": {
                fontSize: 25,
              },

              "&:hover": {
                transform:
                  "scale(1.1) rotate(-5deg)",
              },
            }}
          >
            {icon}
          </Box>
        </Box>

        <Box
          sx={{
            position: "absolute",

            left: 0,
            right: 0,
            bottom: 0,

            height: 2,

            background: `
              linear-gradient(
                90deg,
                ${color},
                transparent
              )
            `,
          }}
        />
      </Paper>
    );
  };

  return (
    <DashboardLayout>
      <Box
        sx={{
          position: "relative",

          minHeight:
            "calc(100vh - 80px)",

          overflow: "hidden",

          background: `
            radial-gradient(
              circle at 5% 5%,
              rgba(59,130,246,.13),
              transparent 25%
            ),
            radial-gradient(
              circle at 90% 10%,
              rgba(139,92,246,.12),
              transparent 25%
            ),
            radial-gradient(
              circle at 75% 90%,
              rgba(14,165,233,.08),
              transparent 25%
            ),
            linear-gradient(
              135deg,
              #0D1B2E 0%,
              #122641 50%,
              #0E2037 100%
            )
          `,

          p: {
            xs: 1.5,
            md: 3,
          },

          "&::before": {
            content: '""',

            position: "absolute",

            width: 450,
            height: 450,

            borderRadius: "50%",

            top: -250,
            left: "30%",

            background:
              "rgba(59,130,246,.07)",

            filter: "blur(100px)",

            animation:
              "ambientOne 12s ease-in-out infinite",

            pointerEvents: "none",
          },

          "&::after": {
            content: '""',

            position: "absolute",

            width: 400,
            height: 400,

            borderRadius: "50%",

            bottom: -250,
            right: "15%",

            background:
              "rgba(139,92,246,.07)",

            filter: "blur(100px)",

            animation:
              "ambientTwo 15s ease-in-out infinite",

            pointerEvents: "none",
          },

          "@keyframes ambientOne": {
            "0%,100%": {
              transform: "translate(0,0)",
            },

            "50%": {
              transform:
                "translate(120px,70px)",
            },
          },

          "@keyframes ambientTwo": {
            "0%,100%": {
              transform: "translate(0,0)",
            },

            "50%": {
              transform:
                "translate(-100px,-60px)",
            },
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,

            maxWidth: 1600,

            mx: "auto",
          }}
        >
          {/* =================================
              HEADER
          ================================= */}

          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",

              gap: 2,

              mb: 3,

              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                gap: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,

                  borderRadius: "16px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: "#FFFFFF",

                  background:
                    "linear-gradient(135deg,#3B82F6,#7C3AED)",

                  boxShadow:
                    "0 12px 30px rgba(59,130,246,.28)",

                  animation:
                    "headerIcon 4s ease-in-out infinite",

                  "@keyframes headerIcon": {
                    "0%,100%": {
                      transform: "translateY(0)",
                    },

                    "50%": {
                      transform:
                        "translateY(-4px)",
                    },
                  },
                }}
              >
                <PeopleAltRoundedIcon />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",

                    fontSize: {
                      xs: 26,
                      md: 32,
                    },

                    fontWeight: 800,

                    lineHeight: 1.1,

                    letterSpacing: -0.8,
                  }}
                >
                  Tourist Management
                </Typography>

                <Typography
                  sx={{
                    color: "#8EA3BD",

                    fontSize: 13,

                    mt: 0.5,
                  }}
                >
                  Monitor tourist activity,
                  safety and locations
                </Typography>
              </Box>
            </Box>

            <Button
              startIcon={
                <AddRoundedIcon />
              }
              onClick={() =>
                setAddOpen(true)
              }
              sx={{
                height: 46,

                px: 2.5,

                borderRadius: "13px",

                color: "#FFFFFF",

                fontWeight: 700,

                textTransform: "none",

                background:
                  "linear-gradient(135deg,#3B82F6,#6366F1)",

                boxShadow:
                  "0 12px 30px rgba(59,130,246,.25)",

                transition: ".3s",

                "&:hover": {
                  transform:
                    "translateY(-3px)",

                  background:
                    "linear-gradient(135deg,#60A5FA,#8B5CF6)",

                  boxShadow:
                    "0 18px 35px rgba(99,102,241,.35)",
                },
              }}
            >
              Add Tourist
            </Button>
          </Box>

          {/* =================================
              STATISTICS
          ================================= */}

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",

                sm: "1fr 1fr",

                lg: "repeat(4,1fr)",
              },

              gap: 2,

              mb: 3,
            }}
          >
            <StatCard
              title="TOTAL TOURISTS"
              value={total}
              description="Registered tourists"
              color="#60A5FA"
              icon={
                <PeopleAltRoundedIcon />
              }
            />

            <StatCard
              title="ONLINE NOW"
              value={online}
              description="Currently active"
              color="#34D399"
              icon={
                <WifiRoundedIcon />
              }
            />

            <StatCard
              title="OFFLINE"
              value={offline}
              description="Currently unavailable"
              color="#A5B4FC"
              icon={
                <WifiOffRoundedIcon />
              }
            />

            <StatCard
              title="SOS ALERTS"
              value={alerts}
              description={`${safe} currently safe`}
              color="#FB7185"
              icon={
                <WarningAmberRoundedIcon />
              }
            />
          </Box>

          {/* =================================
              MAIN PANEL
          ================================= */}

          <Paper
            elevation={0}
            sx={{
              p: {
                xs: 1.5,
                md: 2.5,
              },

              borderRadius: "22px",

              background:
                "linear-gradient(145deg,rgba(22,45,73,.94),rgba(15,34,57,.96))",

              border:
                "1px solid rgba(148,163,184,.13)",

              boxShadow:
                "0 25px 65px rgba(0,0,0,.22)",

              backdropFilter:
                "blur(18px)",
            }}
          >
            {/* PANEL HEADER */}

            <Box
              sx={{
                display: "flex",

                justifyContent:
                  "space-between",

                alignItems: "center",

                gap: 2,

                mb: 2.5,

                flexWrap: "wrap",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",

                    fontWeight: 800,

                    fontSize: 18,
                  }}
                >
                  Tourist Intelligence
                </Typography>

                <Typography
                  sx={{
                    color: "#7187A1",

                    fontSize: 11,

                    mt: 0.5,
                  }}
                >
                  Live overview of registered
                  tourists
                </Typography>
              </Box>

              <Chip
                icon={
                  <ShieldRoundedIcon
                    sx={{
                      fontSize: 16,
                    }}
                  />
                }
                label="Safety Monitoring Active"
                sx={{
                  color: "#6EE7B7",

                  background:
                    "rgba(16,185,129,.08)",

                  border:
                    "1px solid rgba(16,185,129,.18)",

                  fontSize: 11,

                  fontWeight: 700,
                }}
              />
            </Box>

            {/* =================================
                SEARCH TOOLBAR
            ================================= */}

            <Box
              sx={{
                display: "flex",

                gap: 1,

                mb: 2,

                flexWrap: "wrap",
              }}
            >
              {/* SEARCH */}

              <Box
                sx={{
                  flex: 1,

                  minWidth: 250,

                  height: 46,

                  display: "flex",

                  alignItems: "center",

                  px: 1.5,

                  borderRadius: "13px",

                  background:
                    "rgba(7,20,36,.55)",

                  border:
                    "1px solid rgba(148,163,184,.13)",

                  transition:
                    "all .25s ease",

                  "&:focus-within": {
                    borderColor:
                      "rgba(96,165,250,.55)",

                    boxShadow:
                      "0 0 0 3px rgba(59,130,246,.08)",
                  },
                }}
              >
                <SearchRoundedIcon
                  sx={{
                    color: "#7187A1",

                    fontSize: 20,

                    mr: 1,
                  }}
                />

                <Box
                  component="input"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search tourist, ID, country or location..."
                  sx={{
                    width: "100%",

                    border: 0,

                    outline: 0,

                    background:
                      "transparent",

                    color: "#FFFFFF",

                    fontSize: 12,

                    fontFamily:
                      "inherit",

                    "&::placeholder": {
                      color: "#64748B",

                      opacity: 1,
                    },
                  }}
                />
              </Box>

              <Button
                startIcon={
                  <TuneRoundedIcon />
                }
                sx={{
                  height: 46,

                  px: 2,

                  borderRadius: "13px",

                  color: "#CBD5E1",

                  textTransform:
                    "none",

                  border:
                    "1px solid rgba(148,163,184,.13)",

                  background:
                    "rgba(255,255,255,.035)",

                  "&:hover": {
                    color: "#FFFFFF",

                    background:
                      "rgba(59,130,246,.10)",
                  },
                }}
              >
                Filters
              </Button>

              <IconButton
                onClick={() => {
                  setSearch("");
                  setFilter("All");
                }}
                sx={{
                  width: 46,
                  height: 46,

                  borderRadius: "13px",

                  color: "#94A3B8",

                  border:
                    "1px solid rgba(148,163,184,.13)",

                  background:
                    "rgba(255,255,255,.025)",

                  "&:hover": {
                    color: "#FFFFFF",

                    background:
                      "rgba(255,255,255,.06)",
                  },
                }}
              >
                <RefreshRoundedIcon />
              </IconButton>
            </Box>

            {/* =================================
                FILTER CHIPS
            ================================= */}

            <Box
              sx={{
                display: "flex",

                gap: 1,

                mb: 2.5,

                overflowX: "auto",

                pb: 0.5,
              }}
            >
              {[
                ["All", total],
                ["Online", online],
                ["Offline", offline],
                ["Safe", safe],
                ["SOS Alert", alerts],
              ].map(
                ([label, count]) => {
                  const active =
                    filter === label;

                  return (
                    <Chip
                      key={label}
                      clickable
                      onClick={() =>
                        setFilter(label)
                      }
                      label={`${label}  ${count}`}
                      sx={{
                        height: 34,

                        borderRadius:
                          "10px",

                        color: active
                          ? "#FFFFFF"
                          : "#8EA3BD",

                        background:
                          active
                            ? "linear-gradient(135deg,#2563EB,#6366F1)"
                            : "rgba(255,255,255,.035)",

                        border:
                          active
                            ? "1px solid rgba(96,165,250,.30)"
                            : "1px solid rgba(148,163,184,.09)",

                        fontSize: 11,

                        fontWeight: 700,

                        transition: ".25s",

                        "&:hover": {
                          transform:
                            "translateY(-2px)",

                          color:
                            "#FFFFFF",
                        },
                      }}
                    />
                  );
                }
              )}
            </Box>

            {/* =================================
                TABLE
            ================================= */}

            <TouristTable
              tourists={
                filteredTourists
              }
              onView={(tourist) => {
                setSelectedTourist(
                  tourist
                );

                setProfileOpen(true);
              }}
              onEdit={(tourist) => {
                setEditTourist(
                  tourist
                );

                setEditOpen(true);
              }}
              onDelete={(tourist) => {
                setDeleteTourist(
                  tourist
                );

                setDeleteOpen(true);
              }}
            />
          </Paper>
        </Box>
      </Box>

      {/* =================================
          DIALOGS
      ================================= */}

      <AddTouristDialog
        open={addOpen}
        setOpen={setAddOpen}
        newTourist={newTourist}
        setNewTourist={setNewTourist}
        onSave={handleAdd}
      />

      <EditTouristDialog
        open={editOpen}
        setOpen={setEditOpen}
        editTourist={editTourist}
        setEditTourist={
          setEditTourist
        }
        onUpdate={handleEdit}
      />

      <DeleteDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onDelete={handleDelete}
      />

      {selectedTourist && (
        <TouristProfile
          open={profileOpen}
          setOpen={setProfileOpen}
          tourist={selectedTourist}
        />
      )}
    </DashboardLayout>
  );
};

export default Tourists;