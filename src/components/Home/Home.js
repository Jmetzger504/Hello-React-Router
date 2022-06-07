import React from 'react';
import PropTypes from 'prop-types';
import AnotherPage from '../AnotherPage/AnotherPage';
import IndexRoute from '../IndexRoute/IndexRoute';
import { Link, Outlet } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>Welcome Home!</h1>
    <nav>
    <Link to = "AnotherPage">Let's go to another page!</Link>
    <Outlet></Outlet>
    </nav>
  </div>
  
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
