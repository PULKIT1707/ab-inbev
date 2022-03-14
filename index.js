import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import SignIn from './Components/SignIn'
import ProductCard from './Components/ProductCard';
import Footer from './Components/Footer';
import Reward from './Components/Reward';
import Work from './Components/Work';
import Banner from './Components/Banner';
import ProductsPanel from './Components/ProductsPanel';
import Navbar from './Components/Navbar';
import Menu from './Components/Menu';
import MenuIconButton from './Components/MenuIconButton';
import Deals from './Components/Deals';
import Modal from './Components/Modal';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <HomePage/>
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
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
