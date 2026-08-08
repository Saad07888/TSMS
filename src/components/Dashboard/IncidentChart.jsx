import { Box, Typography } from "@mui/material";

const data = [
  { day: "Mon", value: 90 },
  { day: "Tue", value: 150 },
  { day: "Wed", value: 95 },
  { day: "Thu", value: 175 },
  { day: "Fri", value: 135 },
  { day: "Sat", value: 165 },
  { day: "Sun", value: 105 },
];

const IncidentChart = () => {
  return (
    <Box
      sx={{
        bgcolor: "#111C2E",
        border: "1px solid rgba(255,255,255,.06)",
        borderRadius: 4,
        p: 3,
        boxShadow: "0 20px 45px rgba(0,0,0,.35)",
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          📊 Incident Analytics
        </Typography>

        <Box
          sx={{
            px: 2,
            py: .7,
            borderRadius: 2,
            bgcolor: "#18253D",
            color: "#94A3B8",
            fontSize: 13,
          }}
        >
          This Week
        </Box>
      </Box>

      {/* Chart Area */}

      <Box
        sx={{
          height: 320,
          bgcolor: "#0D172B",
          borderRadius: 4,
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-end",
          px: 4,
          py: 4,
        }}
      >
        {data.map((item) => (
          <Box
            key={item.day}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 30,
                height: item.value,
                borderRadius: 10,
                background:
                  "linear-gradient(180deg,#5EA2FF,#2563EB)",
                boxShadow:
                  "0 0 25px rgba(59,130,246,.45)",
                transition: ".3s",

                "&:hover": {
                  transform: "scaleY(1.08)",
                },
              }}
            />

            <Typography
              sx={{
                mt: 1.5,
                color: "#CBD5E1",
              }}
            >
              {item.day}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Footer */}

      <Box
        mt={3}
        display="flex"
        justifyContent="space-between"
      >
        <Typography color="#94A3B8">
          Weekly Incidents
        </Typography>

        <Typography
          color="#22C55E"
          fontWeight="bold"
        >
          ▲ +18%
        </Typography>
      </Box>
    </Box>
  );
};

export default IncidentChart;