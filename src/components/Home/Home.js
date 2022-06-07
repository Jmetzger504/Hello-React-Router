import React from 'react';
import PropTypes from 'prop-types';
import AnotherPage from '../AnotherPage/AnotherPage';
import IndexRoute from '../IndexRoute/IndexRoute';
import { Link, Outlet } from 'react-router-dom';
const Home = () => (
  <div>
    <h1>Welcome Home!</h1>
    <nav>
    <Link to = "AnotherPage">Let's go to another page! I'm always rendered because most other pages are contained in the Home Component.</Link>
    <p>Go to localhost:3000/ParamPage/yourName to say hi!</p>
    <Link to = "/ParamPage/Julian">Or click this link if your name is already Julian!</Link>
    <p>Try typing a route that doesn't exist. You will be amazed!!</p>
    <Outlet></Outlet>
    
    </nav>
  </div>
  
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
