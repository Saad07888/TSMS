import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";

const TouristProfile = ({
  open,
  setOpen,
  tourist,
}) => {
  if (!tourist) return null;

  const isOnline = tourist.status === "Online";
  const isSafe = tourist.sos === "Safe";

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

          background:
            "linear-gradient(145deg,#132B47,#0B1D32)",

          border:
            "1px solid rgba(148,163,184,.15)",

          boxShadow:
            "0 35px 90px rgba(0,0,0,.55)",

          color: "#fff",
        },
      }}
    >
      {/* ================= HEADER ================= */}

      <Box
        sx={{
          position: "relative",

          px: 3,
          py: 2,

          background:
            "linear-gradient(90deg,rgba(37,99,235,.18),rgba(124,58,237,.12))",

          borderBottom:
            "1px solid rgba(148,163,184,.10)",
        }}
      >
        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 800,
              }}
            >
              Tourist Profile
            </Typography>

            <Typography
              sx={{
                color: "#7187A1",
                fontSize: 11,
                mt: 0.3,
              }}
            >
              Tourist intelligence & safety
              information
            </Typography>
          </Box>

          <IconButton
            onClick={() => setOpen(false)}
            sx={{
              color: "#94A3B8",

              background:
                "rgba(255,255,255,.04)",

              "&:hover": {
                color: "#fff",
                background:
                  "rgba(255,255,255,.09)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>
        </Box>
      </Box>

      <DialogContent
        sx={{
          p: 3,
        }}
      >
        {/* ================= PROFILE HERO ================= */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",

            gap: 2.5,

            mb: 3,

            flexWrap: "wrap",
          }}
        >
          {/* PHOTO */}

          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: 110,
                height: 110,

                padding: "3px",

                borderRadius: "30px",

                background:
                  "linear-gradient(135deg,#3B82F6,#8B5CF6,#06B6D4)",

                boxShadow:
                  "0 0 35px rgba(59,130,246,.25)",
              }}
            >
              <Box
                component="img"
                src={
                  tourist.photo ||
                  `https://i.pravatar.cc/300?u=${tourist.id}`
                }
                alt={tourist.name}
                sx={{
                  width: "100%",
                  height: "100%",

                  objectFit: "cover",

                  borderRadius: "27px",

                  display: "block",
                }}
              />
            </Box>

            {/* ONLINE DOT */}

            <Box
              sx={{
                position: "absolute",

                right: 4,
                bottom: 5,

                width: 18,
                height: 18,

                borderRadius: "50%",

                background:
                  isOnline
                    ? "#22C55E"
                    : "#64748B",

                border:
                  "3px solid #132B47",

                boxShadow:
                  isOnline
                    ? "0 0 14px rgba(34,197,94,.7)"
                    : "none",
              }}
            />
          </Box>

          {/* NAME */}

          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontSize: 27,

                fontWeight: 800,

                color: "#F8FAFC",
              }}
            >
              {tourist.name}
            </Typography>

            <Typography
              sx={{
                color: "#7187A1",

                fontSize: 13,

                mt: 0.4,
              }}
            >
              Tourist ID • {tourist.id}
            </Typography>

            <Box
              sx={{
                display: "flex",

                gap: 1,

                mt: 1.5,

                flexWrap: "wrap",
              }}
            >
              <Chip
                icon={
                  <WifiRoundedIcon
                    sx={{
                      fontSize:
                        "15px !important",
                    }}
                  />
                }
                label={tourist.status}
                size="small"
                sx={{
                  color: isOnline
                    ? "#6EE7B7"
                    : "#CBD5E1",

                  background:
                    isOnline
                      ? "rgba(34,197,94,.09)"
                      : "rgba(100,116,139,.10)",

                  border:
                    "1px solid rgba(148,163,184,.12)",

                  fontWeight: 700,
                }}
              />

              <Chip
                icon={
                  isSafe ? (
                    <ShieldRoundedIcon
                      sx={{
                        fontSize:
                          "15px !important",
                      }}
                    />
                  ) : (
                    <WarningAmberRoundedIcon
                      sx={{
                        fontSize:
                          "15px !important",
                      }}
                    />
                  )
                }
                label={
                  isSafe
                    ? "Safe"
                    : "SOS Alert"
                }
                size="small"
                sx={{
                  color: isSafe
                    ? "#6EE7B7"
                    : "#FDA4AF",

                  background:
                    isSafe
                      ? "rgba(34,197,94,.09)"
                      : "rgba(244,63,94,.10)",

                  border:
                    "1px solid rgba(148,163,184,.12)",

                  fontWeight: 700,
                }}
              />
            </Box>
          </Box>
        </Box>

        <Divider
          sx={{
            borderColor:
              "rgba(148,163,184,.10)",

            mb: 3,
          }}
        />

        {/* ================= INFORMATION ================= */}

        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
            },

            gap: 1.5,
          }}
        >
          {/* COUNTRY */}

          <InfoCard
            icon={<PublicRoundedIcon />}
            title="Country"
            value={tourist.country}
            color="#60A5FA"
          />

          {/* PHONE */}

          <InfoCard
            icon={<PhoneRoundedIcon />}
            title="Phone"
            value={
              tourist.phone || "Not available"
            }
            color="#34D399"
          />

          {/* PASSPORT */}

          <InfoCard
            icon={<BadgeRoundedIcon />}
            title="Passport"
            value={
              tourist.passport || "Not available"
            }
            color="#A78BFA"
          />

          {/* LOCATION */}

          <InfoCard
            icon={<LocationOnRoundedIcon />}
            title="Current Location"
            value={tourist.location}
            color="#F59E0B"
          />
        </Box>

        {/* ================= SAFETY PANEL ================= */}

        <Box
          sx={{
            mt: 2,

            p: 2.5,

            borderRadius: "18px",

            background:
              isSafe
                ? "linear-gradient(135deg,rgba(16,185,129,.08),rgba(6,78,59,.10))"
                : "linear-gradient(135deg,rgba(244,63,94,.10),rgba(127,29,29,.10))",

            border: isSafe
              ? "1px solid rgba(34,197,94,.15)"
              : "1px solid rgba(244,63,94,.20)",
          }}
        >
          <Box
            sx={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems: "center",
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
                  width: 42,
                  height: 42,

                  borderRadius: "13px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  color: isSafe
                    ? "#34D399"
                    : "#FB7185",

                  background: isSafe
                    ? "rgba(34,197,94,.10)"
                    : "rgba(244,63,94,.10)",
                }}
              >
                {isSafe ? (
                  <ShieldRoundedIcon />
                ) : (
                  <WarningAmberRoundedIcon />
                )}
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#FFFFFF",

                    fontWeight: 700,

                    fontSize: 14,
                  }}
                >
                  Safety Status
                </Typography>

                <Typography
                  sx={{
                    color: "#7187A1",

                    fontSize: 10,

                    mt: 0.3,
                  }}
                >
                  Real-time safety monitoring
                </Typography>
              </Box>
            </Box>

            <Typography
              sx={{
                color: isSafe
                  ? "#34D399"
                  : "#FB7185",

                fontSize: 16,

                fontWeight: 800,
              }}
            >
              {isSafe
                ? "SAFE"
                : "ALERT"}
            </Typography>
          </Box>
        </Box>

        {/* ================= LIVE LOCATION ================= */}

        <Box
          sx={{
            mt: 2,

            height: 130,

            borderRadius: "18px",

            overflow: "hidden",

            position: "relative",

            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(59,130,246,.18),
                transparent 35%
              ),
              linear-gradient(
                135deg,
                #102A46,
                #0B1D32
              )
            `,

            border:
              "1px solid rgba(96,165,250,.12)",
          }}
        >
          <Box
            sx={{
              position: "absolute",

              top: 15,
              left: 18,

              display: "flex",

              alignItems: "center",

              gap: 0.7,
            }}
          >
            <LocationOnRoundedIcon
              sx={{
                color: "#60A5FA",

                fontSize: 18,
              }}
            />

            <Typography
              sx={{
                color: "#CBD5E1",

                fontSize: 12,

                fontWeight: 700,
              }}
            >
              Live Location
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",

              left: "50%",
              top: "58%",

              transform:
                "translate(-50%,-50%)",

              width: 42,
              height: 42,

              borderRadius: "50%",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              background:
                "rgba(59,130,246,.15)",

              border:
                "1px solid rgba(96,165,250,.35)",

              animation:
                "locationPulse 2.5s infinite",

              "@keyframes locationPulse": {
                "0%": {
                  boxShadow:
                    "0 0 0 0 rgba(59,130,246,.35)",
                },

                "70%": {
                  boxShadow:
                    "0 0 0 22px rgba(59,130,246,0)",
                },

                "100%": {
                  boxShadow:
                    "0 0 0 0 rgba(59,130,246,0)",
                },
              },
            }}
          >
            <LocationOnRoundedIcon
              sx={{
                color: "#60A5FA",
              }}
            />
          </Box>

          <Typography
            sx={{
              position: "absolute",

              bottom: 13,
              left: 18,

              color: "#7187A1",

              fontSize: 10,
            }}
          >
            {tourist.location}
          </Typography>

          <Typography
            sx={{
              position: "absolute",

              bottom: 13,
              right: 18,

              color: "#34D399",

              fontSize: 10,

              fontWeight: 700,
            }}
          >
            ● Location Active
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

/* =========================================
   INFORMATION CARD
========================================= */

const InfoCard = ({
  icon,
  title,
  value,
  color,
}) => {
  return (
    <Box
      sx={{
        p: 1.8,

        borderRadius: "16px",

        background:
          "rgba(255,255,255,.025)",

        border:
          "1px solid rgba(148,163,184,.09)",

        transition: ".25s",

        "&:hover": {
          transform:
            "translateY(-3px)",

          background:
            "rgba(255,255,255,.045)",

          borderColor:
            `${color}30`,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",

          alignItems: "center",

          gap: 1.2,
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

            background: `${color}10`,

            "& svg": {
              fontSize: 19,
            },
          }}
        >
          {icon}
        </Box>

        <Box>
          <Typography
            sx={{
              color: "#647C98",

              fontSize: 9,

              fontWeight: 700,

              textTransform:
                "uppercase",

              letterSpacing: 0.7,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: "#E2E8F0",

              fontSize: 12,

              fontWeight: 700,

              mt: 0.3,
            }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TouristProfile;