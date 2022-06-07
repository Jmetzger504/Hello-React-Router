import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>You just got meatballed!!!</h1>
    <Link to = "/">Okay, you can go home now!</Link>
  </div>
);

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
