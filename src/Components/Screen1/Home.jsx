import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Services from './Services'
import Testimonals from './Testimonals'
import AboutUs from './AboutUsSection'
import CarousalSection from './Carousal'

const Home = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50'>
   <Header />
   <CarousalSection />
   <AboutUs />
   <Services />
   <Testimonals />
   <Footer />
   </div>
  )
}

export default Home;