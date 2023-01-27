import React from 'react'
import { Grid,Stack,Box } from '@mui/material'
import './Home.css'
import  {Navbar} from '../Components/index'
import {Hero, Destinations, Bookings, Services, Testimonials, Call_to_action,} from '../Components/index'
const Home = () => {
  return (
    <Grid container className='App_Container' direction='column' gap='5rem'  alignItems='center' justifyContent='center' xs={11}>
      <Grid className='Home_Header' minHeight='50rem' gap='3rem' xs={12} container alignItems='center' justifyContent='center'>
      <Navbar />
      <Hero />
      </Grid>
      <Services />
      <Destinations />
      <Bookings />
      <Testimonials />
      <Call_to_action />
    </Grid>
  )
}

export default Home