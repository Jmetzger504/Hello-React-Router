import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home/Home';
import AnotherPage from './components/AnotherPage/AnotherPage'
import IndexRoute from './components/IndexRoute/IndexRoute'
import ParamPage from './components/ParamPage/ParamPage'
import NotFound from './components/NotFound/NotFound'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home></Home>}>
          <Route index element = {<IndexRoute/>}/>
          <Route path = "AnotherPage" element = {<AnotherPage></AnotherPage>}></Route>
        </Route>
        <Route path = "/ParamPage/:name" element = {<ParamPage/>}/>
        <Route path = "*" element = {<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
