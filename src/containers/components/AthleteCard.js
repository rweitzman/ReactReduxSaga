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
import Box from "@mui/material/Box";
import { CardActionArea } from "@mui/material";
import {
  CustomCard,
  RedditStripe,
  InstagramStripe,
  AndroidStripe,
  TwitterStripe,
  FacebookStripe,
  LogoBackground,
  LogoBox,
} from "../../styles/app-styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import RedditIcon from "@mui/icons-material/Reddit";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
import TwitterIcon from "@mui/icons-material/Twitter";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

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
    if (athleteInfo.legth !== 0) {
      athleteInfo.map((updatedItem) => {
        if (updatedItem.imageUrl) {
          updatedItem.imageUrl = convertedURL(updatedItem.imageUrl);
        }
      });
    }
    setUpdatesState(athleteInfo);
  }, [athleteInfo]);

  const customCardStyles = {
    borderRadius: "10px",
    minHeigth: "120px",
    maxHeigth: "120px",
  };

  const theme = createTheme({
    typography: {
      subtitle1: {
        fontWeight: 900,
        fontSize: "1.2em",
        maxWidth: "300px",
        overflowY: "hidden",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        maxHeight: "40px",
        textOverflow: "ellipsis",
      },
      body1: {
        fontWeight: 500,
        fontSize: ".9em",
        maxWidth: "300px",
        overflowY: "hidden",
        overflowX: "hidden",
        whiteSpace: "nowrap",
        maxHeight: "40px",
        textOverflow: "ellipsis",
      },
    },
  });

  const renderedList = updatedState?.map((athlete) => {
    const { id, title, hits, content, likes, categoryId, imageUrl } = athlete;

    return (
      <CustomCard>
        <Link to={`/allAthletes/${id}`}>
          <Card variant="outlined" key={id} style={{ customCardStyles }}>
            <CardActionArea>
              {categoryId === 1 && <RedditStripe />}
              {categoryId === 2 && <InstagramStripe />}
              {categoryId === 3 && <AndroidStripe />}
              {categoryId === 4 && <TwitterStripe />}
              {categoryId === 5 && <FacebookStripe />}
              <Box direction="row" style={{ display: "flex" }}>
                <Box style={{ width: "35%" }}>
                  <CardMedia
                    component="img"
                    height="80"
                    image={imageUrl}
                    alt="green iguana"
                    style={{
                      borderRadius: "50%",
                      width: "80px",
                      margin: "20px",
                    }}
                  />
                </Box>
                <Box style={{ width: "65%" }}>
                  <CardContent>
                    <ThemeProvider theme={theme}>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        color="text.primary"
                      >
                        {title}
                      </Typography>
                      <Typography color="text.secondary">{content}</Typography>
                    </ThemeProvider>
                    <Box direction="row" style={{ display: "flex" }}>
                      <Box
                        direction="row"
                        style={{ display: "flex", width: "50%" }}
                      >
                        <LogoBackground style={{ marginRight: "5px" }}>
                          <LogoBox>
                            {categoryId === 1 && (
                              <RedditIcon style={{ color: "red" }} />
                            )}
                            {categoryId === 2 && (
                              <InstagramIcon
                                style={{ color: "rgb(228, 64, 95)" }}
                              />
                            )}
                            {categoryId === 3 && (
                              <AndroidIcon style={{ color: "black" }} />
                            )}
                            {categoryId === 4 && (
                              <TwitterIcon
                                style={{ color: "rgb(72, 120, 189)" }}
                              />
                            )}
                            {categoryId === 5 && (
                              <FacebookIcon style={{ color: "blue" }} />
                            )}
                          </LogoBox>
                        </LogoBackground>
                        {likes}
                      </Box>
                      <Box
                        direction="row"
                        style={{ display: "flex", width: "50%" }}
                      >
                        <LogoBackground style={{ marginRight: "5px" }}>
                          <LogoBox>
                            <InsertLinkIcon />
                          </LogoBox>
                        </LogoBackground>
                        <Typography>{hits}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Box>
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
