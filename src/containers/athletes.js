import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { actions } from "../actions/athlete-actions";

export const Athletes = () => {
  const dispatch = useDispatch();
  dispatch(actions.getAthletes());

  return null;
};

Athletes.propTypes = {
  getAthletes: PropTypes.func,
};

export default Athletes;
