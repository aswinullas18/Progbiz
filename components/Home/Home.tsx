import React from 'react'
import Hero from './Hero/Hero'
import Proj from './Proj/Proj'
import Carousel from './Carousel-Logos/Carousel'
import Working from './Working/Working'
import Portfolio from './Portfolio/Portfolio'
import Benefits from './Benefits/Benefits'
import Services from './Services/Services'
import Pricing from './Pricing/Pricing'
import Insights from './Insights/Insights'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'

const Home = () => {
  return <div className='overflow-hidden'>
    <Hero/>
    <Proj/>
    <Carousel/>
    <Working/>
    <Portfolio/>
    <Benefits/>
    <Services/>
    <Pricing/>
    <Insights/>
    <Testimonials/>
    <Footer/>
  </div>
}

export default Home
