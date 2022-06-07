import React from 'react';
import PropTypes from 'prop-types';
import AnotherPage from '../AnotherPage/AnotherPage';
import { Link } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>Welcome Home!</h1>
    <Link to = "/AnotherPage">Let's go to another page!</Link>
  </div>
  
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
