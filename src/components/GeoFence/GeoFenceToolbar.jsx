import {
  Box,
  TextField,
  InputAdornment,
  Button,
  IconButton,
  Tooltip,
  Chip,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import LayersRoundedIcon from "@mui/icons-material/LayersRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import MyLocationRoundedIcon from "@mui/icons-material/MyLocationRounded";
import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

import { useState } from "react";

const GeoFenceToolbar = ({
  search = "",
  setSearch = () => {},
  onDrawZone = () => {},
  onCreateZone = () => {},
  onRefresh = () => {},
  onLocate = () => {},
  onLayerChange = () => {},
}) => {
  const [filterAnchor, setFilterAnchor] = useState(null);
  const [layerAnchor, setLayerAnchor] = useState(null);

  const [zoneFilter, setZoneFilter] =
    useState("All Zones");

  const [activeLayer, setActiveLayer] =
    useState("Safety Map");

  const filterOpen = Boolean(filterAnchor);
  const layerOpen = Boolean(layerAnchor);

  const handleFilter = (event) => {
    setFilterAnchor(event.currentTarget);
  };

  const handleLayer = (event) => {
    setLayerAnchor(event.currentTarget);
  };

  const selectFilter = (value) => {
    setZoneFilter(value);
    setFilterAnchor(null);
  };

  const selectLayer = (value) => {
    setActiveLayer(value);
    onLayerChange(value);
    setLayerAnchor(null);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",

        p: 1.25,

        borderRadius: "20px",

        background:
          "linear-gradient(145deg,#102B46 0%,#0B2138 55%,#081827 100%)",

        border:
          "1px solid rgba(56,189,248,.12)",

        boxShadow:
          "0 18px 50px rgba(2,12,27,.28), inset 0 1px 0 rgba(255,255,255,.04)",

        backdropFilter: "blur(18px)",

        display: "flex",
        alignItems: "center",
        gap: 1,

        flexWrap: {
          xs: "wrap",
          lg: "nowrap",
        },
      }}
    >
      {/* LEFT - SEARCH */}

      <TextField
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search zones, locations..."
        size="small"
        sx={{
          flex: 1,
          minWidth: {
            xs: "100%",
            sm: 230,
            lg: 280,
          },

          "& .MuiOutlinedInput-root": {
            height: 44,

            borderRadius: "13px",

            color: "#EAF6FF",

            background:
              "rgba(3,15,28,.35)",

            "& fieldset": {
              borderColor:
                "rgba(148,163,184,.12)",
            },

            "&:hover fieldset": {
              borderColor:
                "rgba(56,189,248,.3)",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#38BDF8",

              boxShadow:
                "0 0 0 3px rgba(56,189,248,.07)",
            },
          },

          "& input": {
            fontSize: 11,

            "&::placeholder": {
              color: "#607C94",
              opacity: 1,
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon
                sx={{
                  color: "#5F7D96",
                  fontSize: 19,
                }}
              />
            </InputAdornment>
          ),
        }}
      />

      {/* LIVE STATUS */}

      <Chip
        icon={
          <FiberManualRecordRoundedIcon
            sx={{
              fontSize:
                "10px !important",
              color:
                "#22C55E !important",
            }}
          />
        }
        label="LIVE"
        sx={{
          height: 38,

          borderRadius: "11px",

          color: "#86EFAC",

          background:
            "rgba(34,197,94,.07)",

          border:
            "1px solid rgba(34,197,94,.17)",

          fontSize: 9,
          fontWeight: 900,

          "& .MuiChip-icon": {
            marginLeft: "8px",
          },
        }}
      />

      {/* FILTER */}

      <Tooltip title="Filter zones">
        <Button
          onClick={handleFilter}
          endIcon={
            <FilterAltRoundedIcon
              sx={{ fontSize: 16 }}
            />
          }
          sx={{
            height: 42,

            minWidth: 120,

            px: 1.5,

            borderRadius: "12px",

            textTransform: "none",

            color: "#BBD1E2",

            background:
              "rgba(255,255,255,.035)",

            border:
              "1px solid rgba(148,163,184,.11)",

            fontSize: 10,
            fontWeight: 700,

            "&:hover": {
              color: "#7DD3FC",

              background:
                "rgba(56,189,248,.08)",

              borderColor:
                "rgba(56,189,248,.2)",
            },
          }}
        >
          {zoneFilter}
        </Button>
      </Tooltip>

      {/* FILTER MENU */}

      <Menu
        anchorEl={filterAnchor}
        open={filterOpen}
        onClose={() =>
          setFilterAnchor(null)
        }
        PaperProps={{
          sx: {
            mt: 1,

            minWidth: 180,

            borderRadius: "14px",

            background:
              "linear-gradient(145deg,#102B46,#081827)",

            border:
              "1px solid rgba(56,189,248,.15)",

            color: "#fff",

            boxShadow:
              "0 20px 50px rgba(0,0,0,.45)",

            "& .MuiMenuItem-root": {
              fontSize: 11,

              borderRadius: "9px",

              mx: 0.6,
              my: 0.3,

              "&:hover": {
                background:
                  "rgba(56,189,248,.08)",
              },
            },
          },
        }}
      >
        <MenuItem
          onClick={() =>
            selectFilter("All Zones")
          }
        >
          🌐 All Zones
        </MenuItem>

        <MenuItem
          onClick={() =>
            selectFilter("Safe Zones")
          }
        >
          🟢 Safe Zones
        </MenuItem>

        <MenuItem
          onClick={() =>
            selectFilter("Warning Zones")
          }
        >
          🟡 Warning Zones
        </MenuItem>

        <MenuItem
          onClick={() =>
            selectFilter("High Risk")
          }
        >
          🔴 High Risk
        </MenuItem>
      </Menu>

      {/* DRAW ZONE */}

      <Tooltip title="Draw a new zone directly on the map">
        <Button
          onClick={onDrawZone}
          startIcon={
            <AddLocationAltRoundedIcon
              sx={{ fontSize: 18 }}
            />
          }
          sx={{
            height: 42,

            px: 2,

            borderRadius: "12px",

            textTransform: "none",

            color: "#fff",

            fontSize: 10,
            fontWeight: 800,

            background:
              "linear-gradient(135deg,#2563EB,#0891B2)",

            boxShadow:
              "0 8px 25px rgba(37,99,235,.22)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#3478FF,#06A4C7)",

              transform:
                "translateY(-2px)",

              boxShadow:
                "0 12px 30px rgba(37,99,235,.35)",
            },

            transition: ".25s",
          }}
        >
          Draw Zone
        </Button>
      </Tooltip>

      {/* CREATE */}

      <Tooltip title="Create a GeoFence manually">
        <Button
          onClick={onCreateZone}
          sx={{
            height: 42,

            px: 1.8,

            borderRadius: "12px",

            textTransform: "none",

            color: "#67E8F9",

            fontSize: 10,
            fontWeight: 800,

            background:
              "rgba(56,189,248,.06)",

            border:
              "1px solid rgba(56,189,248,.18)",

            "&:hover": {
              background:
                "rgba(56,189,248,.12)",

              borderColor:
                "rgba(56,189,248,.35)",
            },
          }}
        >
          + Create
        </Button>
      </Tooltip>

      {/* LAYERS */}

      <Tooltip title="Map layers">
        <IconButton
          onClick={handleLayer}
          sx={{
            width: 42,
            height: 42,

            color: "#AFC4D6",

            background:
              "rgba(255,255,255,.035)",

            border:
              "1px solid rgba(148,163,184,.11)",

            borderRadius: "12px",

            "&:hover": {
              color: "#38BDF8",

              background:
                "rgba(56,189,248,.08)",
            },
          }}
        >
          <LayersRoundedIcon />
        </IconButton>
      </Tooltip>

      {/* LAYER MENU */}

      <Menu
        anchorEl={layerAnchor}
        open={layerOpen}
        onClose={() =>
          setLayerAnchor(null)
        }
        PaperProps={{
          sx: {
            mt: 1,

            minWidth: 190,

            borderRadius: "14px",

            background:
              "linear-gradient(145deg,#102B46,#081827)",

            border:
              "1px solid rgba(56,189,248,.15)",

            color: "#fff",

            boxShadow:
              "0 20px 50px rgba(0,0,0,.45)",

            "& .MuiMenuItem-root": {
              fontSize: 11,

              borderRadius: "9px",

              mx: 0.6,
              my: 0.3,

              "&:hover": {
                background:
                  "rgba(56,189,248,.08)",
              },
            },
          },
        }}
      >
        <MenuItem
          onClick={() =>
            selectLayer("Safety Map")
          }
        >
          🛡 Safety Map
        </MenuItem>

        <MenuItem
          onClick={() =>
            selectLayer("Tourists")
          }
        >
          👥 Tourist Movement
        </MenuItem>

        <MenuItem
          onClick={() =>
            selectLayer("SOS")
          }
        >
          🚨 SOS Alerts
        </MenuItem>

        <Divider
          sx={{
            borderColor:
              "rgba(255,255,255,.07)",
          }}
        />

        <MenuItem
          onClick={() =>
            selectLayer("Satellite")
          }
        >
          🛰 Satellite View
        </MenuItem>
      </Menu>

      {/* LOCATE */}

      <Tooltip title="Locate current position">
        <IconButton
          onClick={onLocate}
          sx={{
            width: 42,
            height: 42,

            color: "#A5B4FC",

            background:
              "rgba(129,140,248,.06)",

            border:
              "1px solid rgba(129,140,248,.12)",

            borderRadius: "12px",

            "&:hover": {
              color: "#C7D2FE",

              background:
                "rgba(129,140,248,.12)",
            },
          }}
        >
          <MyLocationRoundedIcon />
        </IconButton>
      </Tooltip>

      {/* REFRESH */}

      <Tooltip title="Refresh live data">
        <IconButton
          onClick={onRefresh}
          sx={{
            width: 42,
            height: 42,

            color: "#94A3B8",

            background:
              "rgba(255,255,255,.035)",

            border:
              "1px solid rgba(148,163,184,.11)",

            borderRadius: "12px",

            "&:hover": {
              color: "#38BDF8",

              background:
                "rgba(56,189,248,.08)",

              "& svg": {
                transform:
                  "rotate(180deg)",
              },
            },

            "& svg": {
              transition:
                "transform .45s ease",
            },
          }}
        >
          <RefreshRoundedIcon />
        </IconButton>
      </Tooltip>

      {/* SETTINGS */}

      <Tooltip title="GeoFence settings">
        <IconButton
          sx={{
            width: 42,
            height: 42,

            color: "#94A3B8",

            background:
              "rgba(255,255,255,.035)",

            border:
              "1px solid rgba(148,163,184,.11)",

            borderRadius: "12px",

            "&:hover": {
              color: "#C4B5FD",

              background:
                "rgba(139,92,246,.08)",
            },
          }}
        >
          <TuneRoundedIcon />
        </IconButton>
      </Tooltip>

      {/* CURRENT LAYER */}

      <Box
        sx={{
          display: {
            xs: "none",
            xl: "flex",
          },

          alignItems: "center",

          px: 1,

          color: "#58748C",

          fontSize: 8,

          fontWeight: 800,

          whiteSpace: "nowrap",
        }}
      >
        {activeLayer}
      </Box>
    </Box>
  );
};

export default GeoFenceToolbar;