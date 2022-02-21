import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardComponent from "./CardComponent";

import { HomeHeader } from "../../styles/app-styles";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HomeHeader>All Cards</HomeHeader>
      <Paper style={{maxHeight: "100vh", overflow: 'auto'}}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          style={{ overflow: "auto", maxHeight: "100%" }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <CardComponent />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
