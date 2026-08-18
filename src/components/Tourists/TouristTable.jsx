import {
  Avatar,
  Box,
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import WifiRoundedIcon from "@mui/icons-material/WifiRounded";
import WifiOffRoundedIcon from "@mui/icons-material/WifiOffRounded";

const TouristTable = ({
  tourists,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <TableContainer
      sx={{
        width: "100%",
        overflowX: "auto",

        borderRadius: "18px",

        background:
          "linear-gradient(145deg, rgba(12,30,51,.92), rgba(9,24,42,.96))",

        border:
          "1px solid rgba(148,163,184,.10)",

        "&::-webkit-scrollbar": {
          height: 6,
        },

        "&::-webkit-scrollbar-track": {
          background: "rgba(255,255,255,.02)",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "rgba(96,165,250,.25)",
          borderRadius: 10,
        },
      }}
    >
      <Table
        sx={{
          minWidth: 1100,

          borderCollapse: "separate",
          borderSpacing: "0 5px",

          px: 1,
        }}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <TableHead>
          <TableRow>
            {[
              "TOURIST",
              "ID",
              "PASSPORT",
              "CONTACT",
              "COUNTRY",
              "CURRENT LOCATION",
              "STATUS",
              "SAFETY",
              "ACTION",
            ].map((heading) => (
              <TableCell
                key={heading}
                align={
                  heading === "ACTION"
                    ? "center"
                    : "left"
                }
                sx={{
                  borderBottom:
                    "1px solid rgba(148,163,184,.10)",

                  color: "#7187A1",

                  fontSize: 10,

                  fontWeight: 800,

                  letterSpacing: 1.1,

                  py: 1.8,

                  px: 1.5,

                  whiteSpace: "nowrap",
                }}
              >
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        {/* =====================================================
            BODY
        ===================================================== */}

        <TableBody>
          {tourists.map((tourist, index) => {
            const isOnline =
              tourist.status === "Online";

            const isSafe =
              tourist.sos === "Safe";

            return (
              <TableRow
                key={tourist.id}
                sx={{
                  position: "relative",

                  transition:
                    "all .28s ease",

                  "& td": {
                    borderBottom:
                      "1px solid rgba(148,163,184,.055)",

                    py: 1.7,

                    px: 1.5,

                    background:
                      "rgba(255,255,255,.012)",

                    transition:
                      "background .28s ease",
                  },

                  "& td:first-of-type": {
                    borderTopLeftRadius: 14,
                    borderBottomLeftRadius: 14,
                  },

                  "& td:last-of-type": {
                    borderTopRightRadius: 14,
                    borderBottomRightRadius: 14,
                  },

                  "&:hover td": {
                    background:
                      "linear-gradient(90deg, rgba(59,130,246,.08), rgba(99,102,241,.035))",
                  },

                  "&:hover": {
                    transform:
                      "translateY(-2px)",
                  },

                  "&:hover .tourist-avatar": {
                    transform:
                      "scale(1.08)",
                    boxShadow:
                      "0 0 22px rgba(59,130,246,.25)",
                  },
                }}
              >
                {/* =================================================
                    TOURIST
                ================================================= */}

                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    {/* Avatar */}

                    <Box
                      sx={{
                        position:
                          "relative",
                      }}
                    >
                      <Avatar
                        className="tourist-avatar"
                        src={`https://i.pravatar.cc/150?u=${tourist.id}`}
                        alt={tourist.name}
                        sx={{
                          width: 44,
                          height: 44,

                          border:
                            "2px solid rgba(96,165,250,.25)",

                          background:
                            "linear-gradient(135deg,#2563EB,#7C3AED)",

                          transition:
                            "all .3s ease",
                        }}
                      >
                        {tourist.name
                          ?.charAt(0)
                          .toUpperCase()}
                      </Avatar>

                      {/* Online indicator */}

                      <Box
                        sx={{
                          position:
                            "absolute",

                          right: -1,
                          bottom: 1,

                          width: 11,
                          height: 11,

                          borderRadius: "50%",

                          background:
                            isOnline
                              ? "#22C55E"
                              : "#64748B",

                          border:
                            "2px solid #10243B",

                          boxShadow:
                            isOnline
                              ? "0 0 10px rgba(34,197,94,.65)"
                              : "none",
                        }}
                      />
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          color: "#F8FAFC",

                          fontSize: 13,

                          fontWeight: 700,

                          lineHeight: 1.2,
                        }}
                      >
                        {tourist.name}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#647C98",

                          fontSize: 10,

                          mt: 0.5,
                        }}
                      >
                        Registered Tourist
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                {/* =================================================
                    ID
                ================================================= */}

                <TableCell>
                  <Box
                    sx={{
                      display: "inline-flex",

                      px: 1.1,
                      py: 0.55,

                      borderRadius: "8px",

                      background:
                        "rgba(59,130,246,.07)",

                      border:
                        "1px solid rgba(59,130,246,.14)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#93C5FD",

                        fontSize: 11,

                        fontWeight: 700,

                        letterSpacing: 0.5,
                      }}
                    >
                      {tourist.id}
                    </Typography>
                  </Box>
                </TableCell>

                {/* =================================================
                    PASSPORT
                ================================================= */}

                <TableCell>
                  <Typography
                    sx={{
                      color: "#CBD5E1",

                      fontSize: 12,

                      fontWeight: 600,
                    }}
                  >
                    {tourist.passport ||
                      "—"}
                  </Typography>
                </TableCell>

                {/* =================================================
                    CONTACT
                ================================================= */}

                <TableCell>
                  <Typography
                    sx={{
                      color: "#CBD5E1",

                      fontSize: 12,

                      whiteSpace:
                        "nowrap",
                    }}
                  >
                    {tourist.phone ||
                      "—"}
                  </Typography>
                </TableCell>

                {/* =================================================
                    COUNTRY
                ================================================= */}

                <TableCell>
                  <Box
                    sx={{
                      display: "flex",

                      alignItems:
                        "center",

                      gap: 0.8,
                    }}
                  >
                    <PublicRoundedIcon
                      sx={{
                        fontSize: 16,

                        color: "#60A5FA",
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "#CBD5E1",

                        fontSize: 12,

                        fontWeight: 600,
                      }}
                    >
                      {tourist.country}
                    </Typography>
                  </Box>
                </TableCell>

                {/* =================================================
                    LOCATION
                ================================================= */}

                <TableCell>
                  <Box
                    sx={{
                      display: "flex",

                      alignItems:
                        "center",

                      gap: 0.7,
                    }}
                  >
                    <LocationOnRoundedIcon
                      sx={{
                        fontSize: 17,

                        color: "#818CF8",
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          color:
                            "#E2E8F0",

                          fontSize: 12,

                          fontWeight: 600,

                          whiteSpace:
                            "nowrap",
                        }}
                      >
                        {tourist.location}
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "#647C98",

                          fontSize: 9,

                          mt: 0.2,
                        }}
                      >
                        Live location
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>

                {/* =================================================
                    STATUS
                ================================================= */}

                <TableCell>
                  <Chip
                    icon={
                      isOnline ? (
                        <WifiRoundedIcon
                          sx={{
                            fontSize:
                              "14px !important",
                          }}
                        />
                      ) : (
                        <WifiOffRoundedIcon
                          sx={{
                            fontSize:
                              "14px !important",
                          }}
                        />
                      )
                    }
                    label={
                      tourist.status
                    }
                    size="small"
                    sx={{
                      height: 27,

                      borderRadius:
                        "8px",

                      color: isOnline
                        ? "#6EE7B7"
                        : "#94A3B8",

                      background:
                        isOnline
                          ? "rgba(16,185,129,.09)"
                          : "rgba(100,116,139,.10)",

                      border: isOnline
                        ? "1px solid rgba(16,185,129,.18)"
                        : "1px solid rgba(100,116,139,.15)",

                      fontSize: 10,

                      fontWeight: 700,

                      "& .MuiChip-icon":
                        {
                          color:
                            isOnline
                              ? "#34D399"
                              : "#94A3B8",
                        },
                    }}
                  />
                </TableCell>

                {/* =================================================
                    SAFETY
                ================================================= */}

                <TableCell>
                  <Chip
                    icon={
                      isSafe ? (
                        <ShieldRoundedIcon
                          sx={{
                            fontSize:
                              "14px !important",
                          }}
                        />
                      ) : (
                        <WarningAmberRoundedIcon
                          sx={{
                            fontSize:
                              "14px !important",
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
                      height: 27,

                      borderRadius:
                        "8px",

                      color: isSafe
                        ? "#6EE7B7"
                        : "#FDA4AF",

                      background:
                        isSafe
                          ? "rgba(34,197,94,.08)"
                          : "rgba(244,63,94,.09)",

                      border: isSafe
                        ? "1px solid rgba(34,197,94,.18)"
                        : "1px solid rgba(244,63,94,.20)",

                      fontSize: 10,

                      fontWeight: 800,

                      "& .MuiChip-icon":
                        {
                          color:
                            isSafe
                              ? "#34D399"
                              : "#FB7185",
                        },
                    }}
                  />
                </TableCell>

                {/* =================================================
                    ACTIONS
                ================================================= */}

                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      gap: 0.4,
                    }}
                  >
                    <Tooltip title="View Profile">
                      <IconButton
                        onClick={() =>
                          onView(
                            tourist
                          )
                        }
                        sx={{
                          width: 34,
                          height: 34,

                          color: "#60A5FA",

                          background:
                            "rgba(59,130,246,.07)",

                          border:
                            "1px solid rgba(59,130,246,.10)",

                          "&:hover": {
                            color:
                              "#FFFFFF",

                            background:
                              "rgba(59,130,246,.20)",

                            transform:
                              "translateY(-2px)",

                            boxShadow:
                              "0 8px 18px rgba(59,130,246,.15)",
                          },

                          transition:
                            ".25s",
                        }}
                      >
                        <VisibilityRoundedIcon
                          sx={{
                            fontSize: 18,
                          }}
                        />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit Tourist">
                      <IconButton
                        onClick={() =>
                          onEdit(
                            tourist
                          )
                        }
                        sx={{
                          width: 34,
                          height: 34,

                          color: "#A5B4FC",

                          background:
                            "rgba(99,102,241,.07)",

                          border:
                            "1px solid rgba(99,102,241,.10)",

                          "&:hover": {
                            color:
                              "#FFFFFF",

                            background:
                              "rgba(99,102,241,.20)",

                            transform:
                              "translateY(-2px)",
                          },

                          transition:
                            ".25s",
                        }}
                      >
                        <EditRoundedIcon
                          sx={{
                            fontSize: 18,
                          }}
                        />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Delete Tourist">
                      <IconButton
                        onClick={() =>
                          onDelete(
                            tourist
                          )
                        }
                        sx={{
                          width: 34,
                          height: 34,

                          color: "#FB7185",

                          background:
                            "rgba(244,63,94,.06)",

                          border:
                            "1px solid rgba(244,63,94,.10)",

                          "&:hover": {
                            color:
                              "#FFFFFF",

                            background:
                              "rgba(244,63,94,.20)",

                            transform:
                              "translateY(-2px)",

                            boxShadow:
                              "0 8px 18px rgba(244,63,94,.12)",
                          },

                          transition:
                            ".25s",
                        }}
                      >
                        <DeleteRoundedIcon
                          sx={{
                            fontSize: 18,
                          }}
                        />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}

          {/* =====================================================
              EMPTY STATE
          ===================================================== */}

          {tourists.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={9}
                sx={{
                  border: "none",

                  py: 8,

                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    flexDirection:
                      "column",

                    alignItems:
                      "center",
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,

                      borderRadius:
                        "20px",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      background:
                        "rgba(59,130,246,.08)",

                      border:
                        "1px solid rgba(59,130,246,.15)",

                      mb: 2,
                    }}
                  >
                    <PeopleAltRoundedIcon
                      sx={{
                        fontSize: 30,

                        color:
                          "#60A5FA",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      color:
                        "#E2E8F0",

                      fontSize: 15,

                      fontWeight: 700,
                    }}
                  >
                    No tourists found
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#647C98",

                      fontSize: 11,

                      mt: 0.5,
                    }}
                  >
                    Try changing your
                    search or filter.
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TouristTable;