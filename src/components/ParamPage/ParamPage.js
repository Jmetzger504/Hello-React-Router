import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ParamPage = () => {
  let params = useParams();
  console.log(params.name);
  return (
  <div>
    <h1>Hello, {params.name}!</h1>
    <Link to = "/">Click here to go home</Link>
  </div>
  )
};

ParamPage.propTypes = {};

ParamPage.defaultProps = {};

export default ParamPage;
