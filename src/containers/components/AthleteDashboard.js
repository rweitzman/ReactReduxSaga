import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AthleteCard from "./AthleteCard";
import { HomeHeader } from "../../styles/app-styles";
const useStyles = styled((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  return (
    <div>
      <HomeHeader>All Cards</HomeHeader>
      <Grid container spacing={1}>
        
        <AthleteCard classes={classes} />
       
      </Grid>
    </div>
  );
}

