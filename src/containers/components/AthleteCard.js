import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../actions/athlete-actions";
import checkmark from "../../assets/icon-checkmark.svg";
import noPicture from "../../assets/noPicture.png"

/**
 * 
 * {
  handle: string // the social channel handle
  id: string // the social channel identifier
  name: string // the social channel name
  platform: string // the social channel's platform (Reddit, Facebook, or Instagram)
  platformId: string // the social channel identifier on its respective platform
  profileImage: string // the profile picture for the social channel
  subscriberCount: number // the number of followers/subscribers for the social channel
  url: string // the url for the social channel
  verified: bool // the verified status for the social channel
}
 */

export const AthleteCard = () => {
  // const [athletes, setAthletes] = useState()

  const dispatch = useDispatch();

  const athletes = useSelector((state) => state.allAthletes.athletes);

  useEffect(() => {
    dispatch(actions.getAthletes());
  }, [dispatch]);

  const renderedList = athletes?.map((athlete) => {
    const {
      name,
      profileImage,
      handle,
      platform,
      subscriberCount,
      url,
      verified,
    } = athlete;
   
    return (
      <div
        className="ui card link m-2"
        style={{ width: "325px", height: "120px" }}
      >
        <div className="ui grid">
          <div className="five wide column">
            <div style={{ zIndex: "9" }}>
              {platform === "Facebook" && (
                <div
                  style={{
                    backgroundColor: "#3B5998",
                    width: "5px",
                    height: "122px",
                    position: "absolute",
                    top: "9%",
                    right: "83.5%",
                    borderRadius: "5px",
                  }}
                ></div>
              )}
              {platform === "Reddit" && (
                <div
                  style={{
                    backgroundColor: "#FF4500",
                    width: "5px",
                    height: "122px",
                    position: "absolute",
                    top: "9%",
                    right: "83.5%",
                    borderRadius: "5px",
                  }}
                ></div>
              )}
              {platform === "Instagram" && (
                <div
                  style={{
                    backgroundColor: "#C13584",
                    width: "5px",
                    height: "122px",
                    position: "absolute",
                    top: "9%",
                    right: "83.5%",
                    borderRadius: "5px",
                  }}
                ></div>
              )}
            </div>
            <div className="image" style={{ height: "100px", width: "80px" }}>
              <div>
                <img
                  src={profileImage ? profileImage : noPicture}
                  style={{
                    minHeight: "80px",
                    maxHeight: "80px",
                    width: "80px",
                    borderRadius: "50%",
                    margin: "20px",
                  }}
                />
                <div
                  style={
                    verified
                      ? {
                          visibility: "visible",
                          height: "20px",
                          width: "20px",
                          backgroundColor: "white",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          position: "absolute",
                          top: "70%",
                          left: "85%",
                          boxShadow: "0px 0px 6px #cdcdcd",
                        }
                      : { visibility: "hidden" }
                  }
                >
                  <i class="check icon" style={{height: "10px",
                      width: "10px",
                      marginBottom: "10px", color: "#132640"}}></i>
                </div>
              </div>
            </div>
          </div>
          <div className="eleven wide column" style={{ marginTop: "7%" }}>
            <div className="content">
              {/* 
                 
                 1223

text-overflow:ellipsis; only works when the following are true:

The element's width must be constrained in px (pixels). Width in % (percentage) won't work.
The element must have overflow:hidden and white-space:nowrap set.
                 
                 */}
              <div
                style={{
                  fontWeight: "900",
                  fontSize: "1.1em",
                  color: "#132640",
                  maxWidth: "200px",
                  overflowY: "hidden",
                  overflowX: "hidden",
                  whiteSpace: "nowrap",
                  maxHeight: "20px",
                  textOverflow: "ellipsis",
                }}
              >
                {name}
              </div>
              <div style={{ color: "#808C96" }} className="description">
                @{handle}
              </div>
            </div>
            <div className="eleven wide column">
              <div className="grid" style={{ marginTop: "10px" }}>
                <div className="eleven wide column" style={{ display: "flex" }}>
                  <div style={{ width: "40%", float: "left", display: "flex" }}>
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "#ECEEEF",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {platform === "Facebook" && (
                          <i
                          className="facebook f icon small"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "3px",
                            color: "#3B5998"
                          }}
                        ></i>
                        )}
                          {platform === "Reddit" && (
                          <i
                            class="reddit icon inverted"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "3px",
                              color: "#FF4500"
                            }}
                          ></i>
                        )}
                        {platform === "Instagram" && (
                          <i
                            class="instagram icon"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              marginLeft: "3px",
                              color: "#C13584"
                            }}
                          ></i>
                        )}
                        
                      </div>
                    </div>
                    <div style={{fontWeight: "700", color: ""}}>{subscriberCount}</div>
                  </div>
                  <div
                    style={{
                      maxWidth: "125px",
                      float: "right",
                      display: "flex",
                      overflowY: "hidden",
                      overflowX: "hidden",
                      whiteSpace: "nowrap",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "5px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <i
                          className="linkify icon small"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginLeft: "3px",
                          }}
                        ></i>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "1.1em",
                        color: "#132640",
                        maxWidth: "200px",
                        overflowY: "hidden",
                        overflowX: "hidden",
                        whiteSpace: "nowrap",
                        maxHeight: "20px",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {url}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>{renderedList === undefined ? "Katrina is Awesome" : renderedList}</>
  );
};

AthleteCard.propTypes = {
  getAthletes: PropTypes.func,
};

export default AthleteCard;

/**
 * 
 * 
 *                  <div>
                        {platform === "Facebook" && (
                          <i
                            class="facebook f icon"
                            style={{ color: "#3B5998" }}
                          ></i>
                        )}
                        {platform === "Reddit" && (
                          <i
                            class="reddit icon inverted"
                            style={{ color: "#FF4500" }}
                          ></i>
                        )}
                        {platform === "Instagram" && (
                          <i
                            class="instagram icon"
                            style={{ color: "#C13584" }}
                          ></i>
                        )}
                      </div>
 */

/**
                       * 
                       * <div className="eleven wide column">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    height: "20px",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#cdcdcd",
                      borderRadius: "5px",
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "53%",
                      left: "5%",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        {platform === "Facebook" && (
                          <i
                            class="facebook f icon"
                            style={{ color: "#3B5998" }}
                          ></i>
                        )}
                        {platform === "Reddit" && (
                          <i
                            class="reddit icon inverted"
                            style={{ color: "#FF4500" }}
                          ></i>
                        )}
                        {platform === "Instagram" && (
                          <i
                            class="instagram icon"
                            style={{ color: "#C13584" }}
                          ></i>
                        )}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginLeft: "25px", width: "35%" }}>300K</div>
                </div>

                <div
                  style={{
                    width: "40%",
                    height: "20px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      borderRadius: "5px",
                      width: "24px",
                      height: "24px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "53%",
                      left: "45%",
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <i class="linkify icon"></i>
                      </div>

                      <div
                        style={{
                          marginLeft: "25px",
                          maxWidth: "30px",
                          overflowY: "hidden",
                          overflowX: "hidden",
                          whiteSpace: "nowrap",
                          maxHeight: "20px",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {url}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                       */
