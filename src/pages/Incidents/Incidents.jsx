import {
  Box,
  Typography,
  Card,
  Button,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  Avatar,
  Drawer,
  Divider,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";
import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import LocalPoliceRoundedIcon from "@mui/icons-material/LocalPoliceRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";

import { useMemo, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

const incidentsData = [
  {
    id: "INC-1042",
    type: "Medical Emergency",
    category: "Medical",
    tourist: "Rahul Sharma",
    location: "Lonavala",
    severity: "Critical",
    officer: "Prakash Shah",
    status: "Responding",
    time: "2 min ago",
    response: "3 min",
    risk: 92,
    confidence: 96,
  },
  {
    id: "INC-1041",
    type: "Tourist Lost",
    category: "Lost Tourist",
    tourist: "John Wilson",
    location: "Goa Beach",
    severity: "High",
    officer: "Amit Khan",
    status: "Assigned",
    time: "8 min ago",
    response: "5 min",
    risk: 78,
    confidence: 91,
  },
  {
    id: "INC-1040",
    type: "Road Accident",
    category: "Accident",
    tourist: "Sara Khan",
    location: "Mumbai",
    severity: "Medium",
    officer: "Rohan Patil",
    status: "Investigating",
    time: "14 min ago",
    response: "6 min",
    risk: 64,
    confidence: 88,
  },
  {
    id: "INC-1039",
    type: "Suspicious Activity",
    category: "Crime",
    tourist: "Alex Brown",
    location: "Gateway of India",
    severity: "High",
    officer: "Vikas More",
    status: "Responding",
    time: "21 min ago",
    response: "4 min",
    risk: 84,
    confidence: 93,
  },
  {
    id: "INC-1038",
    type: "Minor Injury",
    category: "Medical",
    tourist: "Emily Davis",
    location: "Marine Drive",
    severity: "Low",
    officer: "Neha Joshi",
    status: "Resolved",
    time: "34 min ago",
    response: "8 min",
    risk: 32,
    confidence: 95,
  },
  {
    id: "INC-1037",
    type: "Lost Passport",
    category: "Other",
    tourist: "Daniel Lee",
    location: "Pune",
    severity: "Medium",
    officer: "Arjun Singh",
    status: "Resolved",
    time: "51 min ago",
    response: "7 min",
    risk: 45,
    confidence: 89,
  },
];

const stats = [
  {
    title: "Total Incidents",
    value: "520",
    change: "+12.8%",
    icon: <ShieldRoundedIcon />,
    color: "#3B82F6",
  },
  {
    title: "Active Incidents",
    value: "18",
    change: "+4.2%",
    icon: <WarningAmberRoundedIcon />,
    color: "#F97316",
  },
  {
    title: "Critical",
    value: "7",
    change: "+2 today",
    icon: <WarningAmberRoundedIcon />,
    color: "#EF4444",
  },
  {
    title: "Responding",
    value: "11",
    change: "Live",
    icon: <LocalPoliceRoundedIcon />,
    color: "#A855F7",
  },
  {
    title: "Resolved",
    value: "484",
    change: "93% rate",
    icon: <CheckCircleRoundedIcon />,
    color: "#22C55E",
  },
  {
    title: "Avg Response",
    value: "6.4m",
    change: "-18.5%",
    icon: <AccessTimeRoundedIcon />,
    color: "#06B6D4",
  },
];

const severityStyles = {
  Critical: {
    color: "#EF4444",
    bg: "rgba(239,68,68,.10)",
    border: "rgba(239,68,68,.20)",
  },
  High: {
    color: "#F97316",
    bg: "rgba(249,115,22,.10)",
    border: "rgba(249,115,22,.20)",
  },
  Medium: {
    color: "#F59E0B",
    bg: "rgba(245,158,11,.10)",
    border: "rgba(245,158,11,.20)",
  },
  Low: {
    color: "#22C55E",
    bg: "rgba(34,197,94,.10)",
    border: "rgba(34,197,94,.20)",
  },
};

const statusStyles = {
  Responding: {
    color: "#A855F7",
    bg: "rgba(168,85,247,.10)",
  },
  Assigned: {
    color: "#3B82F6",
    bg: "rgba(59,130,246,.10)",
  },
  Investigating: {
    color: "#F59E0B",
    bg: "rgba(245,158,11,.10)",
  },
  Resolved: {
    color: "#22C55E",
    bg: "rgba(34,197,94,.10)",
  },
};

const Incidents = () => {
  const [selectedIncident, setSelectedIncident] =
    useState(null);

  const [search, setSearch] = useState("");

  const [severityFilter, setSeverityFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  const filteredIncidents = useMemo(() => {
    return incidentsData.filter((incident) => {
      const matchesSearch =
        incident.id
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        incident.type
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        incident.tourist
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        incident.location
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesSeverity =
        severityFilter === "All" ||
        incident.severity === severityFilter;

      const matchesStatus =
        statusFilter === "All" ||
        incident.status === statusFilter;

      return (
        matchesSearch &&
        matchesSeverity &&
        matchesStatus
      );
    });
  }, [search, severityFilter, statusFilter]);

  return (
    <DashboardLayout>
      <Box
        sx={{
          maxWidth: 1800,
          mx: "auto",
        }}
      >
        {/* =====================================================
            HEADER
        ===================================================== */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: {
              xs: "flex-start",
              md: "center",
            },
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: 2,
            mb: 3,
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.2,
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
                  background:
                    "linear-gradient(135deg,#EF4444,#F97316)",
                  boxShadow:
                    "0 10px 30px rgba(239,68,68,.25)",
                }}
              >
                <WarningAmberRoundedIcon
                  sx={{
                    color: "#fff",
                    fontSize: 23,
                  }}
                />
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#F8FAFC",
                    fontSize: {
                      xs: 24,
                      md: 30,
                    },
                    fontWeight: 900,
                    letterSpacing: "-.8px",
                  }}
                >
                  Incident Command Center
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 12,
                    mt: 0.4,
                  }}
                >
                  Monitor, investigate and coordinate
                  tourist safety incidents
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Button
              startIcon={
                <FileDownloadRoundedIcon />
              }
              sx={{
                height: 42,
                px: 2,
                borderRadius: "12px",
                color: "#CBD5E1",
                bgcolor:
                  "rgba(255,255,255,.035)",
                border:
                  "1px solid rgba(148,163,184,.08)",
                textTransform: "none",
                fontWeight: 700,
                "&:hover": {
                  bgcolor:
                    "rgba(255,255,255,.07)",
                },
              }}
            >
              Export
            </Button>

            <Button
              startIcon={<AddRoundedIcon />}
              sx={{
                height: 42,
                px: 2,
                borderRadius: "12px",
                color: "#fff",
                background:
                  "linear-gradient(135deg,#2563EB,#4F46E5)",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,.22)",
                textTransform: "none",
                fontWeight: 800,
                "&:hover": {
                  background:
                    "linear-gradient(135deg,#1D4ED8,#4338CA)",
                },
              }}
            >
              Create Incident
            </Button>
          </Box>
        </Box>

        {/* =====================================================
            STATISTICS
        ===================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2,1fr)",
              md: "repeat(3,1fr)",
              xl: "repeat(6,1fr)",
            },
            gap: 1.5,
            mb: 2,
          }}
        >
          {stats.map((item) => (
            <Card
              key={item.title}
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: 2,
                minHeight: 125,
                borderRadius: "18px",
                bgcolor: "#0D1A2C",
                border:
                  "1px solid rgba(148,163,184,.07)",
                boxShadow:
                  "0 14px 35px rgba(0,0,0,.18)",
                transition: ".3s",
                "&:hover": {
                  transform:
                    "translateY(-3px)",
                  borderColor:
                    `${item.color}30`,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  right: -40,
                  top: -50,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  bgcolor:
                    `${item.color}0D`,
                  filter: "blur(5px)",
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  display: "flex",
                  justifyContent:
                    "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 9,
                      fontWeight: 800,
                      textTransform:
                        "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#F8FAFC",
                      fontSize: 28,
                      fontWeight: 900,
                      mt: 1,
                    }}
                  >
                    {item.value}
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        item.change.includes("-")
                          ? "#22C55E"
                          : item.change === "Live"
                          ? "#A855F7"
                          : "#64748B",
                      fontSize: 9,
                      fontWeight: 700,
                      mt: 0.5,
                    }}
                  >
                    {item.change}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "center",
                    color: item.color,
                    bgcolor:
                      `${item.color}10`,
                    border:
                      `1px solid ${item.color}20`,
                  }}
                >
                  {item.icon}
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "55%",
                  height: 2,
                  background:
                    `linear-gradient(90deg,${item.color},transparent)`,
                }}
              />
            </Card>
          ))}
        </Box>

        {/* =====================================================
            CRITICAL ALERT
        ===================================================== */}

        <Card
          elevation={0}
          sx={{
            mb: 2,
            p: 1.6,
            borderRadius: "16px",
            bgcolor:
              "linear-gradient(90deg,rgba(239,68,68,.08),rgba(249,115,22,.04))",
            background:
              "linear-gradient(90deg,rgba(239,68,68,.09),rgba(249,115,22,.035))",
            border:
              "1px solid rgba(239,68,68,.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
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
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor:
                  "rgba(239,68,68,.12)",
                color: "#EF4444",
              }}
            >
              <WarningAmberRoundedIcon />
            </Box>

            <Box>
              <Typography
                sx={{
                  color: "#F8FAFC",
                  fontWeight: 800,
                  fontSize: 13,
                }}
              >
                3 critical incidents require
                immediate attention
              </Typography>

              <Typography
                sx={{
                  color: "#64748B",
                  fontSize: 10,
                  mt: 0.3,
                }}
              >
                Emergency response teams have
                been notified.
              </Typography>
            </Box>
          </Box>

          <Button
            endIcon={
              <ArrowForwardRoundedIcon />
            }
            sx={{
              color: "#F87171",
              textTransform: "none",
              fontWeight: 800,
              fontSize: 11,
            }}
          >
            Review Critical
          </Button>
        </Card>

        {/* =====================================================
            MAIN OPERATIONAL AREA
        ===================================================== */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              xl: "1.7fr 1fr",
            },
            gap: 2,
            mb: 2,
          }}
        >
          {/* INCIDENT QUEUE */}

          <Card
            elevation={0}
            sx={{
              p: 2.2,
              borderRadius: "20px",
              bgcolor: "#0D1A2C",
              border:
                "1px solid rgba(148,163,184,.07)",
              boxShadow:
                "0 18px 45px rgba(0,0,0,.22)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#F8FAFC",
                    fontSize: 17,
                    fontWeight: 800,
                  }}
                >
                  Active Incident Queue
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 10,
                    mt: 0.3,
                  }}
                >
                  Priority incidents requiring
                  operational attention
                </Typography>
              </Box>

              <Chip
                label="18 Active"
                size="small"
                sx={{
                  color: "#F87171",
                  bgcolor:
                    "rgba(239,68,68,.08)",
                  border:
                    "1px solid rgba(239,68,68,.12)",
                  fontWeight: 800,
                  fontSize: 9,
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {incidentsData
                .filter(
                  (item) =>
                    item.status !==
                    "Resolved"
                )
                .slice(0, 4)
                .map((incident) => {
                  const severity =
                    severityStyles[
                      incident.severity
                    ];

                  const status =
                    statusStyles[
                      incident.status
                    ];

                  return (
                    <Box
                      key={incident.id}
                      onClick={() =>
                        setSelectedIncident(
                          incident
                        )
                      }
                      sx={{
                        p: 1.4,
                        borderRadius:
                          "13px",
                        bgcolor:
                          "rgba(255,255,255,.018)",
                        border:
                          "1px solid rgba(255,255,255,.045)",
                        cursor: "pointer",
                        transition: ".25s",
                        "&:hover": {
                          bgcolor:
                            "rgba(59,130,246,.05)",
                          borderColor:
                            "rgba(59,130,246,.16)",
                          transform:
                            "translateX(3px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: 1.2,
                            minWidth: 0,
                          }}
                        >
                          <Box
                            sx={{
                              width: 34,
                              height: 34,
                              borderRadius:
                                "10px",
                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              bgcolor:
                                severity.bg,
                              color:
                                severity.color,
                              flexShrink: 0,
                            }}
                          >
                            <WarningAmberRoundedIcon
                              sx={{
                                fontSize: 18,
                              }}
                            />
                          </Box>

                          <Box
                            sx={{
                              minWidth: 0,
                            }}
                          >
                            <Typography
                              sx={{
                                color:
                                  "#F8FAFC",
                                fontSize: 11,
                                fontWeight: 800,
                              }}
                            >
                              {
                                incident.type
                              }
                            </Typography>

                            <Typography
                              sx={{
                                color:
                                  "#64748B",
                                fontSize: 9,
                                mt: 0.3,
                              }}
                            >
                              {
                                incident.id
                              }{" "}
                              •{" "}
                              {
                                incident.location
                              }
                            </Typography>
                          </Box>
                        </Box>

                        <Chip
                          label={
                            incident.severity
                          }
                          size="small"
                          sx={{
                            height: 23,
                            color:
                              severity.color,
                            bgcolor:
                              severity.bg,
                            border:
                              `1px solid ${severity.border}`,
                            fontSize: 8,
                            fontWeight: 800,
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          mt: 1.2,
                          pt: 1,
                          borderTop:
                            "1px solid rgba(255,255,255,.04)",
                        }}
                      >
                        <Typography
                          sx={{
                            color:
                              "#64748B",
                            fontSize: 8.5,
                          }}
                        >
                          👤{" "}
                          {
                            incident.tourist
                          }
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              status.color,
                            fontSize: 8.5,
                            fontWeight: 800,
                          }}
                        >
                          ●{" "}
                          {
                            incident.status
                          }
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "#475569",
                            fontSize: 8.5,
                          }}
                        >
                          {
                            incident.time
                          }
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
            </Box>
          </Card>

          {/* =================================================
              AI INTELLIGENCE
          ================================================= */}

          <Card
            elevation={0}
            sx={{
              position: "relative",
              overflow: "hidden",
              p: 2.3,
              borderRadius: "20px",
              bgcolor: "#0D1A2C",
              border:
                "1px solid rgba(99,102,241,.12)",
              boxShadow:
                "0 18px 45px rgba(0,0,0,.22)",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: -70,
                top: -70,
                width: 180,
                height: 180,
                borderRadius: "50%",
                bgcolor:
                  "rgba(79,70,229,.09)",
                filter: "blur(45px)",
              }}
            />

            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 38,
                    height: 38,
                    borderRadius: "11px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent:
                      "center",
                    bgcolor:
                      "rgba(99,102,241,.10)",
                    color: "#818CF8",
                    border:
                      "1px solid rgba(99,102,241,.15)",
                  }}
                >
                  <PsychologyRoundedIcon />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      color: "#F8FAFC",
                      fontSize: 15,
                      fontWeight: 800,
                    }}
                  >
                    AI Incident Intelligence
                  </Typography>

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 9,
                      mt: 0.3,
                    }}
                  >
                    Live incident risk analysis
                  </Typography>
                </Box>
              </Box>

              <Chip
                label="AI LIVE"
                size="small"
                sx={{
                  color: "#818CF8",
                  bgcolor:
                    "rgba(99,102,241,.08)",
                  border:
                    "1px solid rgba(99,102,241,.12)",
                  fontSize: 8,
                  fontWeight: 900,
                }}
              />
            </Box>

            {/* Risk Score */}

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                p: 1.5,
                borderRadius: "14px",
                bgcolor:
                  "rgba(239,68,68,.05)",
                border:
                  "1px solid rgba(239,68,68,.10)",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 78,
                  height: 78,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                  background:
                    "conic-gradient(#EF4444 0% 92%,rgba(255,255,255,.06) 92% 100%)",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 62,
                    height: 62,
                    borderRadius: "50%",
                    bgcolor: "#0D1A2C",
                    display: "flex",
                    flexDirection:
                      "column",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#F87171",
                      fontSize: 19,
                      fontWeight: 900,
                    }}
                  >
                    92%
                  </Typography>

                  <Typography
                    sx={{
                      color: "#475569",
                      fontSize: 7,
                    }}
                  >
                    RISK
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: "#F8FAFC",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                >
                  High Risk Incident
                </Typography>

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 9,
                    lineHeight: 1.6,
                    mt: 0.5,
                  }}
                >
                  AI detected elevated
                  probability of escalation
                  based on location, category
                  and historical patterns.
                </Typography>
              </Box>
            </Box>

            {/* Risk Factors */}

            <Typography
              sx={{
                color: "#CBD5E1",
                fontSize: 10,
                fontWeight: 800,
                mb: 1.2,
              }}
            >
              Risk Factors
            </Typography>

            {[
              ["Crowd Density", 92],
              ["SOS Activity", 78],
              ["Previous Incidents", 71],
            ].map(([label, value]) => (
              <Box
                key={label}
                sx={{
                  mb: 1.3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    mb: 0.5,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 8.5,
                    }}
                  >
                    {label}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#94A3B8",
                      fontSize: 8.5,
                      fontWeight: 800,
                    }}
                  >
                    {value}%
                  </Typography>
                </Box>

                <Box
                  sx={{
                    height: 5,
                    borderRadius: 5,
                    bgcolor:
                      "rgba(255,255,255,.05)",
                  }}
                >
                  <Box
                    sx={{
                      width: `${value}%`,
                      height: "100%",
                      borderRadius: 5,
                      background:
                        "linear-gradient(90deg,#6366F1,#EF4444)",
                    }}
                  />
                </Box>
              </Box>
            ))}

            {/* Recommendation */}

            <Box
              sx={{
                mt: 2,
                p: 1.5,
                borderRadius: "13px",
                bgcolor:
                  "rgba(59,130,246,.06)",
                border:
                  "1px solid rgba(59,130,246,.10)",
              }}
            >
              <Typography
                sx={{
                  color: "#60A5FA",
                  fontSize: 9,
                  fontWeight: 900,
                  mb: 0.5,
                }}
              >
                AI RECOMMENDATION
              </Typography>

              <Typography
                sx={{
                  color: "#94A3B8",
                  fontSize: 9,
                  lineHeight: 1.6,
                }}
              >
                Dispatch the nearest medical
                response team and increase
                police coverage in the affected
                area.
              </Typography>
            </Box>
          </Card>
        </Box>

        {/* =====================================================
            FILTER BAR
        ===================================================== */}

        <Card
          elevation={0}
          sx={{
            p: 1.5,
            mb: 2,
            borderRadius: "16px",
            bgcolor: "#0D1A2C",
            border:
              "1px solid rgba(148,163,184,.07)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <TextField
  size="small"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Search incidents..."
  sx={{
    flex: 1,
    minWidth: 220,

    "& .MuiOutlinedInput-root": {
      height: 40,
      bgcolor: "rgba(15, 23, 42, 0.72)",
      borderRadius: "12px",
      color: "#F8FAFC",

      transition: "all .25s ease",

      "& fieldset": {
        borderColor: "rgba(148,163,184,.10)",
      },

      "&:hover fieldset": {
        borderColor: "rgba(96,165,250,.35)",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#3B82F6",
        boxShadow: "0 0 0 3px rgba(59,130,246,.10)",
      },

      "& input": {
        fontSize: 11,
        color: "#F8FAFC",
      },

      "& input::placeholder": {
        color: "#64748B",
        opacity: 1,
      },
    },
  }}
  slotProps={{
    input: {
      startAdornment: (
        <InputAdornment position="start">
          <SearchRoundedIcon
            sx={{
              color: "#64748B",
              fontSize: 18,
            }}
          />
        </InputAdornment>
      ),
    },
  }}
/>

            <Select
              size="small"
              value={severityFilter}
              onChange={(e) =>
                setSeverityFilter(
                  e.target.value
                )
              }
              sx={{
                minWidth: 120,
                height: 38,
                color: "#CBD5E1",
                bgcolor:
                  "rgba(255,255,255,.025)",
                borderRadius: "10px",
                fontSize: 11,
                ".MuiOutlinedInput-notchedOutline":
                  {
                    borderColor:
                      "rgba(148,163,184,.08)",
                  },
                "& svg": {
                  color: "#64748B",
                },
              }}
            >
              <MenuItem value="All">
                All Severity
              </MenuItem>
              <MenuItem value="Critical">
                Critical
              </MenuItem>
              <MenuItem value="High">
                High
              </MenuItem>
              <MenuItem value="Medium">
                Medium
              </MenuItem>
              <MenuItem value="Low">
                Low
              </MenuItem>
            </Select>

            <Select
              size="small"
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value
                )
              }
              sx={{
                minWidth: 125,
                height: 38,
                color: "#CBD5E1",
                bgcolor:
                  "rgba(255,255,255,.025)",
                borderRadius: "10px",
                fontSize: 11,
                ".MuiOutlinedInput-notchedOutline":
                  {
                    borderColor:
                      "rgba(148,163,184,.08)",
                  },
                "& svg": {
                  color: "#64748B",
                },
              }}
            >
              <MenuItem value="All">
                All Status
              </MenuItem>
              <MenuItem value="Responding">
                Responding
              </MenuItem>
              <MenuItem value="Assigned">
                Assigned
              </MenuItem>
              <MenuItem value="Investigating">
                Investigating
              </MenuItem>
              <MenuItem value="Resolved">
                Resolved
              </MenuItem>
            </Select>

            <Tooltip title="Refresh incidents">
              <IconButton
                sx={{
                  width: 38,
                  height: 38,
                  color: "#64748B",
                  borderRadius: "10px",
                  bgcolor:
                    "rgba(255,255,255,.025)",
                  border:
                    "1px solid rgba(148,163,184,.07)",
                  "&:hover": {
                    color: "#60A5FA",
                  },
                }}
              >
                <RefreshRoundedIcon
                  sx={{ fontSize: 18 }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Card>

        {/* =====================================================
            INCIDENT TABLE
        ===================================================== */}

        <Card
          elevation={0}
          sx={{
            overflow: "hidden",
            borderRadius: "20px",
            bgcolor: "#0D1A2C",
            border:
              "1px solid rgba(148,163,184,.07)",
            boxShadow:
              "0 18px 45px rgba(0,0,0,.22)",
          }}
        >
          {/* Table Header */}

          <Box
            sx={{
              px: 2.2,
              py: 1.8,
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
              borderBottom:
                "1px solid rgba(255,255,255,.05)",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#F8FAFC",
                  fontSize: 16,
                  fontWeight: 800,
                }}
              >
                Incident Records
              </Typography>

              <Typography
                sx={{
                  color: "#475569",
                  fontSize: 9,
                  mt: 0.3,
                }}
              >
                {filteredIncidents.length} incidents
                matching current filters
              </Typography>
            </Box>

            <Chip
              label="Live Monitoring"
              size="small"
              sx={{
                color: "#22C55E",
                bgcolor:
                  "rgba(34,197,94,.07)",
                border:
                  "1px solid rgba(34,197,94,.10)",
                fontSize: 8,
                fontWeight: 800,
              }}
            />
          </Box>

          {/* Column headings */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },
              gridTemplateColumns:
                "1.1fr 1.5fr 1.25fr 1fr .9fr 1.1fr .8fr .5fr",
              gap: 1,
              px: 2.2,
              py: 1.2,
              bgcolor:
                "rgba(255,255,255,.018)",
            }}
          >
            {[
              "Incident",
              "Tourist",
              "Location",
              "Severity",
              "Officer",
              "Status",
              "Time",
              "View",
            ].map((heading) => (
              <Typography
                key={heading}
                sx={{
                  color: "#475569",
                  fontSize: 8,
                  fontWeight: 900,
                  textTransform:
                    "uppercase",
                  letterSpacing: ".8px",
                }}
              >
                {heading}
              </Typography>
            ))}
          </Box>

          {/* Rows */}

          {filteredIncidents.map(
            (incident) => {
              const severity =
                severityStyles[
                  incident.severity
                ];

              const status =
                statusStyles[
                  incident.status
                ];

              return (
                <Box
                  key={incident.id}
                  sx={{
                    display: {
                      xs: "block",
                      md: "grid",
                    },

                    gridTemplateColumns:
                      "1.1fr 1.5fr 1.25fr 1fr .9fr 1.1fr .8fr .5fr",

                    gap: 1,

                    alignItems: "center",

                    px: 2.2,

                    py: 1.45,

                    borderTop:
                      "1px solid rgba(255,255,255,.04)",

                    transition: ".2s",

                    "&:hover": {
                      bgcolor:
                        "rgba(59,130,246,.035)",
                    },
                  }}
                >
                  {/* Incident */}

                  <Box>
                    <Typography
                      sx={{
                        color: "#60A5FA",
                        fontSize: 10,
                        fontWeight: 900,
                      }}
                    >
                      {incident.id}
                    </Typography>

                    <Typography
                      sx={{
                        color: "#F8FAFC",
                        fontSize: 10,
                        fontWeight: 700,
                        mt: 0.4,
                      }}
                    >
                      {incident.type}
                    </Typography>
                  </Box>

                  {/* Tourist */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.8,
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 27,
                        height: 27,
                        fontSize: 9,
                        bgcolor:
                          "#1E3A5F",
                        color: "#93C5FD",
                      }}
                    >
                      {incident.tourist
                        .charAt(0)}
                    </Avatar>

                    <Typography
                      sx={{
                        color:
                          "#CBD5E1",
                        fontSize: 9.5,
                      }}
                    >
                      {
                        incident.tourist
                      }
                    </Typography>
                  </Box>

                  {/* Location */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
                    }}
                  >
                    <LocationOnRoundedIcon
                      sx={{
                        color: "#64748B",
                        fontSize: 14,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "#94A3B8",
                        fontSize: 9.5,
                      }}
                    >
                      {
                        incident.location
                      }
                    </Typography>
                  </Box>

                  {/* Severity */}

                  <Chip
                    label={
                      incident.severity
                    }
                    size="small"
                    sx={{
                      width: "fit-content",
                      height: 23,
                      color:
                        severity.color,
                      bgcolor:
                        severity.bg,
                      border:
                        `1px solid ${severity.border}`,
                      fontSize: 8,
                      fontWeight: 900,
                    }}
                  />

                  {/* Officer */}

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 0.7,
                    }}
                  >
                    <LocalPoliceRoundedIcon
                      sx={{
                        color: "#64748B",
                        fontSize: 14,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "#94A3B8",
                        fontSize: 9,
                      }}
                    >
                      {
                        incident.officer
                      }
                    </Typography>
                  </Box>

                  {/* Status */}

                  <Typography
                    sx={{
                      color:
                        status.color,
                      fontSize: 9,
                      fontWeight: 800,
                    }}
                  >
                    ● {incident.status}
                  </Typography>

                  {/* Time */}

                  <Typography
                    sx={{
                      color: "#64748B",
                      fontSize: 9,
                    }}
                  >
                    {incident.time}
                  </Typography>

                  {/* View */}

                  <Tooltip title="Investigate incident">
                    <IconButton
                      onClick={() =>
                        setSelectedIncident(
                          incident
                        )
                      }
                      sx={{
                        width: 29,
                        height: 29,
                        color:
                          "#64748B",
                        bgcolor:
                          "rgba(255,255,255,.025)",
                        borderRadius:
                          "8px",
                        "&:hover": {
                          color:
                            "#60A5FA",
                          bgcolor:
                            "rgba(59,130,246,.08)",
                        },
                      }}
                    >
                      <ArrowForwardRoundedIcon
                        sx={{
                          fontSize: 16,
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              );
            }
          )}
        </Card>

        {/* =====================================================
            INVESTIGATION DRAWER
        ===================================================== */}

        <Drawer
          anchor="right"
          open={Boolean(
            selectedIncident
          )}
          onClose={() =>
            setSelectedIncident(null)
          }
          PaperProps={{
            sx: {
              width: {
                xs: "100%",
                sm: 430,
              },

              bgcolor: "#091525",

              color: "#fff",

              borderLeft:
                "1px solid rgba(148,163,184,.10)",

              boxShadow:
                "-25px 0 70px rgba(0,0,0,.45)",
            },
          }}
        >
          {selectedIncident && (
            <Box
              sx={{
                height: "100%",
                overflowY: "auto",
              }}
            >
              {/* Drawer Header */}

              <Box
                sx={{
                  p: 2.5,
                  background:
                    "linear-gradient(180deg,#0E2036,#091525)",
                  borderBottom:
                    "1px solid rgba(255,255,255,.06)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems:
                      "flex-start",
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color:
                          "#60A5FA",
                        fontSize: 10,
                        fontWeight: 900,
                      }}
                    >
                      {
                        selectedIncident.id
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#F8FAFC",
                        fontSize: 21,
                        fontWeight: 900,
                        mt: 0.5,
                      }}
                    >
                      {
                        selectedIncident.type
                      }
                    </Typography>

                    <Typography
                      sx={{
                        color:
                          "#64748B",
                        fontSize: 9,
                        mt: 0.5,
                      }}
                    >
                      Incident Investigation
                      Panel
                    </Typography>
                  </Box>

                  <IconButton
                    onClick={() =>
                      setSelectedIncident(
                        null
                      )
                    }
                    sx={{
                      color: "#64748B",
                      "&:hover": {
                        color: "#fff",
                      },
                    }}
                  >
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <Chip
                    label={
                      selectedIncident.severity
                    }
                    size="small"
                    sx={{
                      color:
                        severityStyles[
                          selectedIncident
                            .severity
                        ].color,
                      bgcolor:
                        severityStyles[
                          selectedIncident
                            .severity
                        ].bg,
                      fontWeight: 900,
                    }}
                  />

                  <Chip
                    label={
                      selectedIncident.status
                    }
                    size="small"
                    sx={{
                      color:
                        statusStyles[
                          selectedIncident
                            .status
                        ].color,
                      bgcolor:
                        statusStyles[
                          selectedIncident
                            .status
                        ].bg,
                      fontWeight: 900,
                    }}
                  />
                </Box>
              </Box>

              {/* Details */}

              <Box sx={{ p: 2.5 }}>
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 9,
                    fontWeight: 900,
                    letterSpacing: 1,
                    textTransform:
                      "uppercase",
                    mb: 1.5,
                  }}
                >
                  Incident Details
                </Typography>

                {[
                  [
                    "Tourist",
                    selectedIncident.tourist,
                  ],
                  [
                    "Location",
                    selectedIncident.location,
                  ],
                  [
                    "Category",
                    selectedIncident.category,
                  ],
                  [
                    "Assigned Officer",
                    selectedIncident.officer,
                  ],
                  [
                    "Response Time",
                    selectedIncident.response,
                  ],
                ].map(
                  ([label, value]) => (
                    <Box
                      key={label}
                      sx={{
                        display: "flex",
                        justifyContent:
                          "space-between",
                        py: 1.1,
                        borderBottom:
                          "1px solid rgba(255,255,255,.04)",
                      }}
                    >
                      <Typography
                        sx={{
                          color:
                            "#64748B",
                          fontSize: 10,
                        }}
                      >
                        {label}
                      </Typography>

                      <Typography
                        sx={{
                          color:
                            "#CBD5E1",
                          fontSize: 10,
                          fontWeight: 700,
                        }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  )
                )}

                {/* AI */}

                <Box
                  sx={{
                    mt: 2.5,
                    p: 1.8,
                    borderRadius:
                      "15px",
                    bgcolor:
                      "rgba(99,102,241,.06)",
                    border:
                      "1px solid rgba(99,102,241,.12)",
                  }}
                >
                  <Box
                    sx={{
                      display:
                        "flex",
                      alignItems:
                        "center",
                      gap: 0.8,
                      mb: 1,
                    }}
                  >
                    <PsychologyRoundedIcon
                      sx={{
                        color:
                          "#818CF8",
                        fontSize: 18,
                      }}
                    />

                    <Typography
                      sx={{
                        color:
                          "#F8FAFC",
                        fontSize: 11,
                        fontWeight: 900,
                      }}
                    >
                      AI Risk Analysis
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color:
                        "#64748B",
                      fontSize: 9,
                      mb: 1,
                    }}
                  >
                    Predicted incident
                    risk
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#F87171",
                      fontSize: 30,
                      fontWeight: 900,
                    }}
                  >
                    {
                      selectedIncident
                        .risk
                    }
                    %
                  </Typography>

                  <Typography
                    sx={{
                      color:
                        "#64748B",
                      fontSize: 9,
                      mt: 0.5,
                    }}
                  >
                    Confidence{" "}
                    {
                      selectedIncident
                        .confidence
                    }
                    %
                  </Typography>
                </Box>

                {/* Timeline */}

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 9,
                    fontWeight: 900,
                    letterSpacing: 1,
                    textTransform:
                      "uppercase",
                    mt: 2.8,
                    mb: 1.5,
                  }}
                >
                  Response Timeline
                </Typography>

                {[
                  [
                    "SOS / Incident Created",
                    "10:21 AM",
                  ],
                  [
                    "Alert Acknowledged",
                    "10:22 AM",
                  ],
                  [
                    "Officer Assigned",
                    "10:23 AM",
                  ],
                  [
                    "Response Started",
                    "10:25 AM",
                  ],
                ].map(
                  ([label, time], index) => (
                    <Box
                      key={label}
                      sx={{
                        display:
                          "flex",
                        gap: 1.2,
                        mb: 1.5,
                      }}
                    >
                      <Box
                        sx={{
                          display:
                            "flex",
                          flexDirection:
                            "column",
                          alignItems:
                            "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: 9,
                            height: 9,
                            borderRadius:
                              "50%",
                            bgcolor:
                              index ===
                              3
                                ? "#A855F7"
                                : "#3B82F6",
                            boxShadow:
                              "0 0 8px rgba(59,130,246,.4)",
                          }}
                        />

                        {index !==
                          3 && (
                          <Box
                            sx={{
                              width: 1,
                              height: 25,
                              bgcolor:
                                "rgba(255,255,255,.08)",
                            }}
                          />
                        )}
                      </Box>

                      <Box>
                        <Typography
                          sx={{
                            color:
                              "#CBD5E1",
                            fontSize: 9,
                            fontWeight: 700,
                          }}
                        >
                          {label}
                        </Typography>

                        <Typography
                          sx={{
                            color:
                              "#475569",
                            fontSize: 8,
                            mt: 0.3,
                          }}
                        >
                          {time}
                        </Typography>
                      </Box>
                    </Box>
                  )
                )}

                {/* Actions */}

                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 9,
                    fontWeight: 900,
                    letterSpacing: 1,
                    textTransform:
                      "uppercase",
                    mt: 2,
                    mb: 1.3,
                  }}
                >
                  Quick Actions
                </Typography>

                <Box
                  sx={{
                    display:
                      "grid",
                    gridTemplateColumns:
                      "1fr 1fr",
                    gap: 1,
                  }}
                >
                  <Button
                    startIcon={
                      <PhoneRoundedIcon />
                    }
                    sx={{
                      height: 40,
                      borderRadius:
                        "10px",
                      color:
                        "#60A5FA",
                      bgcolor:
                        "rgba(59,130,246,.07)",
                      textTransform:
                        "none",
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  >
                    Contact Tourist
                  </Button>

                  <Button
                    startIcon={
                      <LocalPoliceRoundedIcon />
                    }
                    sx={{
                      height: 40,
                      borderRadius:
                        "10px",
                      color:
                        "#A855F7",
                      bgcolor:
                        "rgba(168,85,247,.07)",
                      textTransform:
                        "none",
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  >
                    Contact Officer
                  </Button>

                  <Button
                    startIcon={
                      <LocationOnRoundedIcon />
                    }
                    sx={{
                      height: 40,
                      borderRadius:
                        "10px",
                      color:
                        "#22C55E",
                      bgcolor:
                        "rgba(34,197,94,.07)",
                      textTransform:
                        "none",
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  >
                    View Location
                  </Button>

                  <Button
                    sx={{
                      height: 40,
                      borderRadius:
                        "10px",
                      color:
                        "#F87171",
                      bgcolor:
                        "rgba(239,68,68,.07)",
                      textTransform:
                        "none",
                      fontSize: 10,
                      fontWeight: 800,
                    }}
                  >
                    Escalate
                  </Button>
                </Box>
              </Box>
            </Box>
          )}
        </Drawer>
      </Box>
    </DashboardLayout>
  );
};

export default Incidents;