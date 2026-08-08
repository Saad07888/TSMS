import { Card, CardContent, Typography } from "@mui/material";

const SectionCard = ({ title, children }) => {
  return (
    <Card
      elevation={3}
      sx={{
        borderRadius: 3,
        height: "100%",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          fontWeight="bold"
          mb={2}
        >
          {title}
        </Typography>

        {children}
      </CardContent>
    </Card>
  );
};

export default SectionCard;