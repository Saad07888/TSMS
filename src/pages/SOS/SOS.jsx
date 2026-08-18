import DashboardLayout from "../../layouts/DashboardLayout";
import { Box, Typography, Button, Chip } from "@mui/material";
import SOSStats from "../../components/SOS/SOSStats";
import SOSList from "../../components/SOS/SOSList";

const SOS = () => {
  return (
    <DashboardLayout>
      <Box
        sx={{
          minHeight: "100vh",
          p: { xs: 2, md: 3 },
          background: "#07111F",
          color: "#F8FAFC",
        }}
      >
        {/* ================= HEADER ================= */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            flexDirection: { xs: "column", md: "row" },
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
              <Typography
                sx={{
                  fontSize: { xs: 26, md: 32 },
                  fontWeight: 800,
                }}
              >
                🚨 SOS Command Center
              </Typography>

              <Chip
                label="LIVE"
                size="small"
                sx={{
                  bgcolor: "rgba(34,197,94,0.12)",
                  color: "#22C55E",
                  border: "1px solid rgba(34,197,94,0.3)",
                  fontWeight: 700,
                }}
              />
            </Box>

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 14,
                mt: 0.5,
              }}
            >
              Emergency operations and real-time incident response
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              px: 2,
              py: 1,
              borderRadius: 2,
              background: "#0D1A2B",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <Box
              sx={{
                width: 9,
                height: 9,
                borderRadius: "50%",
                bgcolor: "#22C55E",
                boxShadow: "0 0 12px rgba(34,197,94,0.8)",
              }}
            />

            <Typography
              sx={{
                color: "#CBD5E1",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Emergency System Online
            </Typography>
          </Box>
        </Box>

        {/* ================= SOS STATS ================= */}
        <Box sx={{ mb: 3 }}>
          <SOSStats />
        </Box>

        {/* ================= ACTIVE EMERGENCY ================= */}
        <Box
          sx={{
            mb: 3,
            p: { xs: 2, md: 2.5 },
            borderRadius: 3,
            background:
              "linear-gradient(135deg, rgba(127,29,29,0.30), rgba(17,28,46,0.95))",
            border: "1px solid rgba(239,68,68,0.35)",
            boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#FCA5A5",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Active Emergency
              </Typography>

              <Typography
                sx={{
                  fontSize: 22,
                  fontWeight: 700,
                  mt: 0.5,
                }}
              >
                SOS-1024
              </Typography>
            </Box>

            <Chip
              label="CRITICAL"
              sx={{
                bgcolor: "#EF4444",
                color: "#fff",
                fontWeight: 800,
              }}
            />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(3, 1fr)",
              },
              gap: 2,
            }}
          >
            <Box>
              <Typography sx={{ color: "#64748B", fontSize: 12 }}>
                Tourist
              </Typography>

              <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
                Rahul Sharma
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "#64748B", fontSize: 12 }}>
                Location
              </Typography>

              <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
                Goa Beach
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ color: "#64748B", fontSize: 12 }}>
                Triggered
              </Typography>

              <Typography sx={{ mt: 0.5, fontWeight: 600 }}>
                2 minutes ago
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,
              mt: 2.5,
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#EF4444",
                "&:hover": {
                  bgcolor: "#DC2626",
                },
                borderRadius: 2,
                px: 3,
                fontWeight: 700,
              }}
            >
              Acknowledge SOS
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "#F8FAFC",
                borderColor: "rgba(255,255,255,0.15)",
                borderRadius: 2,
                px: 3,
                "&:hover": {
                  borderColor: "#60A5FA",
                },
              }}
            >
              Assign Police
            </Button>

            <Button
              variant="outlined"
              sx={{
                color: "#94A3B8",
                borderColor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
              }}
            >
              View Details
            </Button>
          </Box>
        </Box>

        {/* ================= MAIN COMMAND CENTER ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "1.2fr 0.8fr",
            },
            gap: 2.5,
            mb: 3,
          }}
        >
          {/* REAL SOS LIST */}
          <SOSList />

          {/* RESPONSE CONTROL */}
          <Box
            sx={{
              background: "#0D192A",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 3,
              p: 2.5,
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Response Control
            </Typography>

            {[
              ["Current Status", "Awaiting Police", "#F59E0B"],
              ["Assigned Unit", "Police Unit 07", "#60A5FA"],
              ["Response Time", "05:32", "#A78BFA"],
              ["Operator", "Admin Control Room", "#22C55E"],
            ].map(([label, value, color]) => (
              <Box
                key={label}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  py: 1.5,
                  borderBottom:
                    "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <Typography
                  sx={{
                    color: "#64748B",
                    fontSize: 13,
                  }}
                >
                  {label}
                </Typography>

                <Typography
                  sx={{
                    color,
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {value}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= RESPONSE TIMELINE ================= */}
        <Box
          sx={{
            background: "#0D192A",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 3,
            p: 2.5,
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: 18,
              fontWeight: 700,
              mb: 3,
            }}
          >
            Response Timeline
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(5, 1fr)",
              },
              gap: 1,
            }}
          >
            {[
              ["01", "Triggered", "#EF4444"],
              ["02", "Acknowledged", "#F59E0B"],
              ["03", "Assigned", "#60A5FA"],
              ["04", "Responding", "#A78BFA"],
              ["05", "Resolved", "#22C55E"],
            ].map(([number, title, color]) => (
              <Box
                key={title}
                sx={{
                  textAlign: "center",
                  py: 1,
                }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    mx: "auto",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${color}18`,
                    border: `2px solid ${color}`,
                    color,
                    fontWeight: 800,
                    fontSize: 12,
                  }}
                >
                  {number}
                </Box>

                <Typography
                  sx={{
                    mt: 1,
                    fontSize: 12,
                    color: "#CBD5E1",
                    fontWeight: 600,
                  }}
                >
                  {title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ================= BOTTOM AREA ================= */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 2.5,
          }}
        >
          {/* AI */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(79,70,229,0.16), #0D192A)",
              border: "1px solid rgba(129,140,248,0.2)",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                mb: 1,
              }}
            >
              🤖 AI Response Intelligence
            </Typography>

            <Typography
              sx={{
                color: "#94A3B8",
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              High-risk emergency detected. AI recommends immediate police
              dispatch and continuous monitoring of the tourist location.
            </Typography>

            <Chip
              label="AI Confidence: 94%"
              sx={{
                mt: 2,
                bgcolor: "rgba(129,140,248,0.12)",
                color: "#A5B4FC",
                fontWeight: 700,
              }}
            />
          </Box>

          {/* ACTIONS */}
          <Box
            sx={{
              p: 2.5,
              borderRadius: 3,
              background: "#0D192A",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                mb: 2,
              }}
            >
              Emergency Actions
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 1.5,
              }}
            >
              {[
                ["🚓", "Assign Police"],
                ["📢", "Broadcast Alert"],
                ["📞", "Emergency Contact"],
                ["🔔", "Send Notification"],
              ].map(([icon, label]) => (
                <Button
                  key={label}
                  variant="outlined"
                  sx={{
                    minHeight: 60,
                    flexDirection: "column",
                    gap: 0.5,
                    color: "#CBD5E1",
                    borderColor: "rgba(255,255,255,0.08)",
                    borderRadius: 2,
                    textTransform: "none",
                    fontSize: 12,
                    "&:hover": {
                      color: "#fff",
                      borderColor: "#3B82F6",
                      bgcolor: "rgba(59,130,246,0.08)",
                    },
                  }}
                >
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  {label}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </DashboardLayout>
  );
};

export default SOS;