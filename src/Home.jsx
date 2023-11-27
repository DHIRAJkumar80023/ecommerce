import React from 'react'
import Navbar from './components/navbar/Navbar'
import Announcement from './components/announcement/Announcement'
import Slider from './components/slider/Slider'
import Categories from './components/categories/Categories'
import Products from './components/products/Products'
import NewSletter from './components/newsletter/NewsLetter'
import Footer from './components/footer/Footer'


const Home = () => {
  return (
    <>
    
  
    <Announcement/>
    <Navbar/>
    <Slider/>
    <Categories/>
    
    <Products/>
    <NewSletter/>
    <Footer/>
    
    </>
    
  )


}

export default Home
