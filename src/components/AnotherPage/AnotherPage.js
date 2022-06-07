import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AnotherPage = () => (
  <div>
    <h1>You did it!</h1>
    <Link to = "/Home">Let's go back to Home.</Link>
  </div>
);

AnotherPage.propTypes = {};

AnotherPage.defaultProps = {};

export default AnotherPage;
