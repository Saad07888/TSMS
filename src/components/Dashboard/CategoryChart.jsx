

import { Box, Typography } from "@mui/material";

const categories = [
  {
    name: "Medical",
    color: "#4F7BFF",
    value: "35%",
  },
  {
    name: "Accident",
    color: "#EF4444",
    value: "25%",
  },
  {
    name: "Lost",
    color: "#22C55E",
    value: "20%",
  },
  {
    name: "Crime",
    color: "#F59E0B",
    value: "10%",
  },
  {
    name: "Other",
    color: "#8B5CF6",
    value: "10%",
  },
];

const CategoryChart = () => {
  return (
   <Box
  sx={{
    position: "relative",
    overflow: "hidden",

    bgcolor: "#111C2E",

    borderRadius: 5,

    p: 3,

    border: "1px solid rgba(255,255,255,.08)",

    boxShadow: "0 25px 60px rgba(0,0,0,.45)",

    transition: ".35s",

    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 30px 70px rgba(0,0,0,.55)",
    },
  }}
>
<Box
  sx={{
    position: "absolute",
    top: -80,
    right: -80,

    width: 220,
    height: 220,

    borderRadius: "50%",

    background: "rgba(79,123,255,.12)",

    filter: "blur(90px)",
  }}
/>

      <Typography
        sx={{
          color: "#fff",
          fontWeight: 700,
          fontSize: 22,
          mb: 3,
        }}
      >
        📊 Incident Categories
      </Typography>

      {/* Donut */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 4,
        }}
      >
        <Box
          sx={{
            width: 170,
            height: 170,
            borderRadius: "50%",
            background:
              "conic-gradient(#4F7BFF 0% 35%, #EF4444 35% 60%, #22C55E 60% 80%, #F59E0B 80% 90%, #8B5CF6 90% 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 95,
              height: 95,
              borderRadius: "50%",
              bgcolor: "#111C2E",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              color="#fff"
              fontWeight="bold"
              fontSize={30}
            >
              520
            </Typography>

            <Typography
              color="#94A3B8"
              fontSize={13}
            >
              Total
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Legend */}
      {categories.map((item) => (
        <Box
          key={item.name}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: item.color,
              }}
            />

            <Typography color="#CBD5E1">
              {item.name}
            </Typography>
          </Box>

          <Typography
            color="#fff"
            fontWeight="bold"
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CategoryChart;

