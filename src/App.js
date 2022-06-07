import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home';
import AnotherPage from './components/AnotherPage/AnotherPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/Home" element = {<Home></Home>}></Route>
        <Route path = "/AnotherPage" element = {<AnotherPage></AnotherPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
