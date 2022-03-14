import logo from './logo.svg';
import './App.css';
import {Route, Router, Routes } from 'react-router-dom'
import Reward from './Components/Reward';
import Login from './Components/Login';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
    {/* <Routes> */}
      <Route path='/' component={<Navbar/>}/>
      <Route exact path='/login' component={<Login/>}/>
      <Route path='/RewardPage' component={<Reward/>}/>
      {/* <Navbar/> */}
    {/* <Menu/>
    <Banner/> */}
    {/* <Login /> */}
    {/* <SignIn/> */}
    {/* <Reward/>
    <Work/>
    <Deals/>
    <ProductsPanel type="display"/>
    <ProductsPanel type="fav"/>
    <Footer/> */}
    {/* </Routes> */}
    </Router>
    </>
  );
}

export default App;
