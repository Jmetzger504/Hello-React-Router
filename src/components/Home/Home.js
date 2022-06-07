import React from 'react';
import PropTypes from 'prop-types';
import AnotherPage from '../AnotherPage/AnotherPage';
import IndexRoute from '../IndexRoute/IndexRoute';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';
const Home = () => {

  let navigate = useNavigate();
  const [name,setName] = useState('');

  const sayHi = () => {
    navigate('/ParamPage/'+ name);
  }

  const setTheName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  

  return (
  <div>
    <h1>Welcome Home!</h1>
    <nav>
    <Link to = "AnotherPage">Let's go to another page! I'm always rendered because most other pages are contained in the Home Component.</Link>
    <br/>
    <input type = 'text' onChange = {(event) => setTheName(event)}></input> Type your name in here and click the button below!<br/>
    <button onClick = { () => navigate('ParamPage/'+name)}>No, Click Me!</button><br/>
    
    
    <button><Link to={`/ParamPage/${name}`}>Click Me!!</Link></button><br/>
    <Link to = "/ParamPage/Julian">Or click this link if your name is already Julian!</Link>
    <p>Try typing a route that doesn't exist. You will be amazed!!</p>
    <Outlet></Outlet>
    
    </nav>
  </div>
  
  )
  
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
