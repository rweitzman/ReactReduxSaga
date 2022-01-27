import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../actions/athlete-actions";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import checkmark from "../assets/icon-checkmark.svg"
import icon from "../assets/Einstein.jpeg";

export const Athletes = () => {
  const dispatch = useDispatch();

  const athletes = useSelector((state) => state.allAthletes.athletes);

  useEffect(() => {
    dispatch(actions.getAthletes());
  }, [dispatch]);

  const renderedList = athletes?.map((athlete) => {
    const { name } = athlete;
    return (
      <Card sx={{ display: 'flex', width: "320px", margin: "2%", marginLeft: "3%", marginTop: "4%"}}>
      <div style={{backgroundColor: "blue", height: "100%", width: "3px", borderRadius: "6px", paddingLeft: "0 !important"}}>
      </div>
        <CardMedia
      component="img"
      sx={{ width: 80, height: 80}}
      image={icon}
      alt="Athlete Photo"
      style={{borderRadius: "50%"}}
    />
    <CardMedia 
    component="img"
    sx={{ width: 17, height: 17}}
    image={checkmark}
    alt="Athlete Photo"
    style={{marginTop: "26%", marginLeft: "-7%", borderRadius: "50%", backgroundColor: "white", boxShadow: "0px 0px 6px grey"}}
    />

    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5" style={{color: "#132640"}}>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div" style={{color: "#808C96"}}>
          @{name}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', pl: 1, pb: 1, overflow: 'hidden', px: 3 }}>
        <Typography  color="text.secondary" xs={6} variant="subtitle 2" component="div" >
          <div style={{backhgroundColor: "grey"}}>
          <i className="icon pencil" style={{color: "#435369"}}></i>
          {name}
          </div>
          
          </Typography>
          <Typography  color="text.secondary" xs={6} variant="subtitle 2" component="div">
          <i className="icon pencil"></i>
          {name}
          </Typography>
      </Box>
    </Box>
  
  </Card>
    );
  });

  return <>{renderedList === undefined ? "Robin is Awesome" : renderedList}</>;
};

Athletes.propTypes = {
  getAthletes: PropTypes.func,
};

export default Athletes;