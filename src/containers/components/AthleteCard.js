import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../actions/athlete-actions";
import { Link } from "react-router-dom";
// If athlete doesn't have a picture, show this placeholder
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { CardActionArea } from "@mui/material";
import { CustomCard } from "../../styles/app-styles";

export const AthleteCard = () => {
  const [updatedState, setUpdatesState] = useState([]);
  const [athleteInfo, setAthleteInfo] = useState([]);
  const dispatch = useDispatch();

  //Pull all athletes
  const athletes = useSelector((state) => state.allAthletes.athletes);

  useEffect(() => {
    dispatch(actions.getAthletes());
  }, [dispatch]);

  // Hook to set athletes to new state to be able to change as needed
  useEffect(() => {
    if (athletes !== undefined) {
      setAthleteInfo(athletes);
    }
    return athleteInfo;
  }, [athletes]);

  // Hook to check to see if athlete has a subscriber count and call function to convert subscriber count format
  useEffect(() => {
    if (athleteInfo[0]?.imageUrl !== undefined) {
      console.log("athleteInfo[0]?.imageUrl", athleteInfo[0]?.imageUrl);
      convertedURL(athleteInfo[0].imageUrl);
    }
  }, [athleteInfo[0]?.imageUrl]);

  // make a utility function to adjust picture url so it can be displayed

  const convertedURL = (imageUrl) => {
    let restVar = imageUrl;
    restVar = restVar.replace("i.", "");
    console.log("restVar", restVar);
    return restVar;
  };

  // Hook to  set upadated array info into a new state to render it to the user
  useEffect(() => {
    // change this is be the uopate url with the utiltity function
    if (athleteInfo.legth !== 0) {
      athleteInfo.map((updatedItem) => {
        if (updatedItem.imageUrl) {
          updatedItem.imageUrl = convertedURL(updatedItem.imageUrl);
        }
      });
    }
    setUpdatesState(athleteInfo);
  }, [athleteInfo]);

  const renderedList = updatedState?.map((athlete) => {
    const { id, title, userId, content, likes, hits, categoryId, imageUrl } =
      athlete;

    return (
      <CustomCard>
        <Link to={`/allAthletes/${id}`}>
          <Card
            sx={{
              borderRadius: "10px",
              minHeigth: "120px",
              maxHeigth: "120px",
            }}
            key={id}
          >
            <CardActionArea>
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  // height="60"
                  image={imageUrl}
                  alt="green iguana"
                  style={{
                    width: "80px",
                    // height: "auto",
                    marginTop: "30px",
                    marginBottom: "30px",
                  }}
                />
              </div>

              <CardContent
                style={{
                  backgroundColor: "#FAFAFA",
                  borderTop: "1px solid #E3E7EC",
                }}
              >
                <Box style={{ display: "flex", flexDirection: "row" }}>
                  <Box style={{ padding: "5px" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{
                        fontWeight: "900",
                        fontSize: "1.1em",
                        color: "#132640",
                        maxWidth: "280px",
                        overflowY: "hidden",
                        overflowX: "hidden",
                        whiteSpace: "nowrap",
                        maxHeight: "20px",
                        textOverflow: "ellipsis",
                        border: "1px solid black"
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {userId}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </CustomCard>
    );
  });

  return (
    <>
      {renderedList === undefined
        ? "Hold on just a moment, please!"
        : renderedList}
    </>
  );
};

AthleteCard.propTypes = {
  getAthletes: PropTypes.func,
};

export default AthleteCard;

