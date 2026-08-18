import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  IconButton,
  Chip,
  Divider,
  Switch,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import RadarRoundedIcon from "@mui/icons-material/RadarRounded";

const AddGeoFenceDialog = ({
  open,
  setOpen,
  newZone,
  setNewZone,
  onSave,
}) => {
  const updateField = (field, value) => {
    setNewZone({
      ...newZone,
      [field]: value,
    });
  };

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "26px",
          overflow: "hidden",
          background: "#F8FBFF",
          border: "1px solid rgba(148,163,184,.18)",
          boxShadow:
            "0 35px 100px rgba(15,23,42,.25)",
        },
      }}
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <Box
        sx={{
          position: "relative",
          px: 3,
          py: 2.5,
          background:
            "linear-gradient(135deg,#EAF8FF 0%,#F5F3FF 100%)",
          borderBottom:
            "1px solid rgba(148,163,184,.16)",
        }}
      >
        {/* Decorative glow */}

        <Box
          sx={{
            position: "absolute",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "rgba(14,165,233,.12)",
            filter: "blur(55px)",
            right: -70,
            top: -100,
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1.5,
              alignItems: "center",
            }}
          >
            {/* Icon */}

            <Box
              sx={{
                width: 52,
                height: 52,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                background:
                  "linear-gradient(135deg,#0EA5E9,#2563EB)",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,.22)",
              }}
            >
              <ShieldRoundedIcon
                sx={{ fontSize: 29 }}
              />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#16324F",
                  fontSize: 21,
                  fontWeight: 900,
                  letterSpacing: "-.3px",
                }}
              >
                Create Safety Zone
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 11,
                  mt: 0.4,
                }}
              >
                Configure a protected tourist
                monitoring area
              </Typography>
            </Box>
          </Box>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: "#64748B",
              background: "rgba(255,255,255,.7)",

              "&:hover": {
                background: "#fff",
                color: "#EF4444",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>

        {/* Live indicator */}

        <Box
          sx={{
            display: "flex",
            gap: 1,
            mt: 2,
          }}
        >
          <Chip
            icon={
              <RadarRoundedIcon
                sx={{
                  fontSize: "15px !important",
                }}
              />
            }
            label="Live Monitoring"
            size="small"
            sx={{
              height: 27,
              borderRadius: "9px",
              background: "#ECFDF5",
              color: "#047857",
              border:
                "1px solid #A7F3D0",
              fontWeight: 800,
              fontSize: 9,
            }}
          />

          <Chip
            label="Tourist Safety"
            size="small"
            sx={{
              height: 27,
              borderRadius: "9px",
              background: "#EFF6FF",
              color: "#2563EB",
              border:
                "1px solid #BFDBFE",
              fontWeight: 800,
              fontSize: 9,
            }}
          />
        </Box>
      </Box>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <DialogContent
        sx={{
          p: 3,
          background: "#F8FBFF",
        }}
      >
        {/* =================================================
            SECTION 1
        ================================================= */}

        <SectionHeader
          icon={<LocationOnRoundedIcon />}
          title="Zone Information"
          subtitle="Basic details about the protected area"
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 2,
            mt: 2,
          }}
        >
          <PremiumField
            label="Zone ID"
            placeholder="Example: GF004"
            value={newZone.id || ""}
            onChange={(e) =>
              updateField(
                "id",
                e.target.value
              )
            }
          />

          <PremiumField
            label="Zone Name"
            placeholder="Example: Marine Drive"
            value={newZone.name || ""}
            onChange={(e) =>
              updateField(
                "name",
                e.target.value
              )
            }
          />

          <PremiumField
            label="Location"
            placeholder="Example: Mumbai"
            value={newZone.location || ""}
            onChange={(e) =>
              updateField(
                "location",
                e.target.value
              )
            }
          />

          <PremiumField
            label="Radius"
            placeholder="Example: 1000"
            type="number"
            value={newZone.radius || ""}
            onChange={(e) =>
              updateField(
                "radius",
                e.target.value
              )
            }
            InputProps={{
              endAdornment: (
                <Typography
                  sx={{
                    color: "#94A3B8",
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  meters
                </Typography>
              ),
            }}
          />
        </Box>

        <Divider
          sx={{
            my: 3,
            borderColor: "#E8EEF5",
          }}
        />

        {/* =================================================
            SECTION 2
        ================================================= */}

        <SectionHeader
          icon={<SecurityRoundedIcon />}
          title="Safety Configuration"
          subtitle="Define how this zone should behave"
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },
            gap: 2,
            mt: 2,
          }}
        >
          {/* STATUS */}

          <Box>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 800,
                color: "#475569",
                mb: 0.8,
              }}
            >
              ZONE STATUS
            </Typography>

            <TextField
              select
              fullWidth
              size="small"
              value={
                newZone.status ||
                "Active"
              }
              onChange={(e) =>
                updateField(
                  "status",
                  e.target.value
                )
              }
              sx={fieldStyle}
            >
              <MenuItem value="Active">
                🟢 Active
              </MenuItem>

              <MenuItem value="Inactive">
                ⚪ Inactive
              </MenuItem>
            </TextField>
          </Box>

          {/* RISK */}

          <Box>
            <Typography
              sx={{
                fontSize: 10,
                fontWeight: 800,
                color: "#475569",
                mb: 0.8,
              }}
            >
              RISK LEVEL
            </Typography>

            <TextField
              select
              fullWidth
              size="small"
              value={
                newZone.risk ||
                "Low"
              }
              onChange={(e) =>
                updateField(
                  "risk",
                  e.target.value
                )
              }
              sx={fieldStyle}
            >
              <MenuItem value="Low">
                🟢 Low Risk
              </MenuItem>

              <MenuItem value="Medium">
                🟡 Medium Risk
              </MenuItem>

              <MenuItem value="High">
                🔴 High Risk
              </MenuItem>
            </TextField>
          </Box>
        </Box>

        {/* =================================================
            MONITORING OPTIONS
        ================================================= */}

        <Typography
          sx={{
            mt: 3,
            mb: 1.2,
            fontSize: 10,
            fontWeight: 800,
            color: "#475569",
            letterSpacing: ".5px",
          }}
        >
          MONITORING FEATURES
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3,1fr)",
            },
            gap: 1.5,
          }}
        >
          <FeatureToggle
            icon={<SmartToyRoundedIcon />}
            title="AI Monitoring"
            subtitle="Risk prediction"
            checked={
              newZone.aiMonitoring ??
              true
            }
            onChange={(value) =>
              updateField(
                "aiMonitoring",
                value
              )
            }
            color="#6366F1"
          />

          <FeatureToggle
            icon={<GroupsRoundedIcon />}
            title="Tourist Tracking"
            subtitle="Live movement"
            checked={
              newZone.touristTracking ??
              true
            }
            onChange={(value) =>
              updateField(
                "touristTracking",
                value
              )
            }
            color="#0EA5E9"
          />

          <FeatureToggle
            icon={<ShieldRoundedIcon />}
            title="SOS Monitoring"
            subtitle="Emergency alerts"
            checked={
              newZone.sosMonitoring ??
              true
            }
            onChange={(value) =>
              updateField(
                "sosMonitoring",
                value
              )
            }
            color="#EF4444"
          />
        </Box>

        {/* =================================================
            PREVIEW
        ================================================= */}

        <Box
          sx={{
            mt: 3,
            p: 2,
            borderRadius: "17px",

            background:
              "linear-gradient(135deg,#F0F9FF,#F5F3FF)",

            border:
              "1px solid #DDEAF7",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: 8,
                  fontWeight: 800,
                  letterSpacing: 1,
                }}
              >
                ZONE PREVIEW
              </Typography>

              <Typography
                sx={{
                  color: "#16324F",
                  fontSize: 16,
                  fontWeight: 900,
                  mt: 0.5,
                }}
              >
                {newZone.name ||
                  "Your Tourist Zone"}
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 10,
                  mt: 0.3,
                }}
              >
                {newZone.location ||
                  "Location not selected"}
                {" • "}
                {newZone.radius ||
                  0}
                m radius
              </Typography>
            </Box>

            <Box
              sx={{
                width: 55,
                height: 55,
                borderRadius: "50%",

                border:
                  "3px solid rgba(14,165,233,.35)",

                background:
                  "rgba(14,165,233,.08)",

                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                color: "#0EA5E9",
              }}
            >
              <LocationOnRoundedIcon />
            </Box>
          </Box>
        </Box>
      </DialogContent>

      {/* =====================================================
          ACTIONS
      ===================================================== */}

      <Box
        sx={{
          px: 3,
          py: 2,

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          borderTop:
            "1px solid #E8EEF5",

          background: "#fff",
        }}
      >
        <Button
          onClick={() => setOpen(false)}
          sx={{
            color: "#64748B",
            textTransform: "none",
            fontWeight: 700,
            borderRadius: "11px",
            px: 2,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          startIcon={
            <ShieldRoundedIcon />
          }
          onClick={onSave}
          sx={{
            minWidth: 155,
            height: 44,

            borderRadius: "12px",

            textTransform: "none",

            fontWeight: 850,

            background:
              "linear-gradient(135deg,#0EA5E9,#2563EB)",

            boxShadow:
              "0 10px 25px rgba(37,99,235,.20)",

            "&:hover": {
              background:
                "linear-gradient(135deg,#0284C7,#1D4ED8)",

              transform:
                "translateY(-2px)",

              boxShadow:
                "0 14px 30px rgba(37,99,235,.28)",
            },

            transition: ".25s",
          }}
        >
          Create Safety Zone
        </Button>
      </Box>
    </Dialog>
  );
};

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = ({
  icon,
  title,
  subtitle,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.2,
      }}
    >
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: "10px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          bgcolor: "#EFF8FF",
          color: "#0284C7",
        }}
      >
        {icon}
      </Box>

      <Box>
        <Typography
          sx={{
            color: "#16324F",
            fontSize: 13,
            fontWeight: 850,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: 9,
            mt: 0.2,
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

/* =========================================================
   PREMIUM FIELD
========================================================= */

const PremiumField = ({
  label,
  ...props
}) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: 10,
          fontWeight: 800,
          color: "#475569",
          mb: 0.8,
        }}
      >
        {label}
      </Typography>

      <TextField
        fullWidth
        size="small"
        {...props}
        sx={fieldStyle}
      />
    </Box>
  );
};

/* =========================================================
   FEATURE TOGGLE
========================================================= */

const FeatureToggle = ({
  icon,
  title,
  subtitle,
  checked,
  onChange,
  color,
}) => {
  return (
    <Box
      sx={{
        p: 1.4,

        borderRadius: "14px",

        background: "#FFFFFF",

        border:
          "1px solid #E7EDF4",

        display: "flex",

        alignItems: "center",

        gap: 1,

        transition: ".25s",

        "&:hover": {
          transform:
            "translateY(-2px)",

          borderColor:
            `${color}55`,

          boxShadow:
            `0 8px 22px ${color}12`,
        },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,

          borderRadius: "11px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          color,

          bgcolor:
            `${color}10`,
        }}
      >
        {icon}
      </Box>

      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            color: "#16324F",
            fontSize: 10,
            fontWeight: 850,
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#94A3B8",
            fontSize: 8,
          }}
        >
          {subtitle}
        </Typography>
      </Box>

      <Switch
        size="small"
        checked={checked}
        onChange={(e) =>
          onChange(e.target.checked)
        }
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color,
          },

          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
            {
              backgroundColor: color,
            },
        }}
      />
    </Box>
  );
};

/* =========================================================
   FIELD STYLE
========================================================= */

const fieldStyle = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",

    background: "#FFFFFF",

    fontSize: 12,

    "& fieldset": {
      borderColor: "#E2E8F0",
    },

    "&:hover fieldset": {
      borderColor: "#BAE6FD",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#38BDF8",

      borderWidth: 1,
    },
  },

  "& input": {
    color: "#16324F",

    fontWeight: 600,

    fontSize: 12,
  },
};

export default AddGeoFenceDialog;