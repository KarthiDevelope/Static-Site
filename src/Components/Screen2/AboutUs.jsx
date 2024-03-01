import React from 'react'
import Header from '../Screen1/Header'
import Footer from '../Screen1/Footer'
import Testimonals from '../Screen1/Testimonals'
import Banner from './Banner'
import Services from '../Screen1/Services'
import Member from './Member'

const AboutUsScreen = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50'>
    <Header />
    <Banner />
    <Services />
    <Member />
    <Testimonals />
    <Footer />
    
    </ div>
  )
}

export default AboutUsScreen;