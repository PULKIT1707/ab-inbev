import React from 'react'
import Login from './Login';
import Footer from './Footer';
import Reward from './Reward';
import Work from './Work';
import Banner from './Banner';
import ProductsPanel from './ProductsPanel';
import Navbar from './Navbar';
import Menu from './Menu';
import Deals from './Deals';

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Menu/>
      <Banner/>
      <Reward/>
      <Work/>
      <Deals/>
      <ProductsPanel type="display" title="Explore Categories"/>
      <ProductsPanel type="fav" title="Explore Products from these Brands"/>
      <ProductsPanel type="fav" title="Explore Brands"/>
      <Footer/>
    </>
  )
}

export default HomePage