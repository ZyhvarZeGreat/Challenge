import React from 'react'
import { Grid, Stack, Box, useMediaQuery, useTheme } from '@mui/material'
import { UilFacebook, UilInstagram, UilTwitter } from '@iconscout/react-unicons'
import './Footer.css'
import apple from '../assets/apple-logo.svg'
import playStore from '../assets/google-play.svg'
const Footer = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('sm'))
  const footer_details_data = [
    {
      heading: 'Company',
      subheading1: 'About',
      subheading2: 'Careers',
      subheading3: 'Mobile'
    },
    {
      heading: 'Contact',
      subheading1: 'Help/FAQ',
      subheading2: 'Press',
      subheading3: 'Affiliates'
    },
    {
      heading: 'More',
      subheading1: 'Airline Fees',
      subheading2: 'Airline',
      subheading3: 'Low Fare Tips'
    },
  ]
  return (
    <section style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', }} className='Jadoo_Footer'>
      <Grid container minHeight={'15rem'} height='100%' width='100%' direction='row' alignItems='center' gap={query ? '' : '2rem'} justifyContent='center' xs={11.5} className='Jadoo_Footer_Container'>
        <Grid item sx={{ display: 'flex', height: "7rem", flexDirection: 'column', textAlign: 'center', alignItems: `${query ? 'flex-end' : 'center'}`, justifyContent: 'center' }} sm={12} md={3} width='100%' className='Jadoo_Footer_Intro'>
          <Stack gap='1rem' height='100%' width={query ? '60%' : '90%'} alignItems={query ? 'flex-start' : 'center'} justifyContent={query ? 'flex-start' : 'center'} textAlign={query ? 'start' : 'center'} >
            <h1 id='footer_header'>Jadoo</h1>
            <p>Book Your trip in a minute ,<br /> get full control for much longer</p>
          </Stack>
        </Grid>



        <Grid width='100%' sx={{ display: 'flex', gap: '2rem', flexDirection: `${query ? 'row' : 'column'}`, alignItems: 'center', justifyContent: 'center' }} xs={12} sm={12} md={6} className='Jadoo_Footer_Details'>
          {
            footer_details_data.map((data) => {
              const { heading, subheading1, subheading2, subheading3 } = data;
              return (
                <Grid item sx={{ display: 'flex', alignItems: 'center', width: `${query ? '' : '100%'}`, justifyContent: 'center', flexDirection: 'column', gap: '.8rem' }}  sm={12} md={3} className='Jadoo_Footer_Details_Items'>
                  <h1>{heading}</h1>
                  <Stack className='Jadoo_Footer_Details_Body' textAlign='center' gap={query ? '.3rem' : '.9rem'}>
                    <p>{subheading1} </p>
                    <p>{subheading2} </p>
                    <p>{subheading3} </p>
                  </Stack>
                </Grid>
              )
            })
          }
        </Grid>


        <Grid container alignItems='center' gap='1rem' justifyContent='center' sm={12} md={3} className='Jadoo_Footer_Download_Section'>
          <Stack gap={query ?'1rem':'1.6rem'} alignItems='center' justifyContent='center' direction='row' width='100%'>
            <Box height='3rem' width='3rem' display='flex' alignItems='center' justifyContent='center' className='Jadoo_Footer_Download_Icon_Container'>
              <UilFacebook />
            </Box>
            <Box height='3rem' width='3rem' display='flex' alignItems='center' justifyContent='center' className='Jadoo_Footer_Download_Icon_Container Instagram'>
              <UilInstagram fill='#fff' />
            </Box>
            <Box height='3rem' width='3rem' display='flex' alignItems='center' justifyContent='center' className='Jadoo_Footer_Download_Icon_Container'>
              <UilTwitter />
            </Box>
          </Stack>

          <Stack direction='column' alignItems='center' justifyContent='center' gap='1rem' className='Jadoo_Footer_Download_Stores'>
            <h2>Discover Our App</h2>

            <Stack direction='row' gap='1rem' className='Jadoo_Footer_Download_Stores_Btn'>
              <Box gap='.3rem' className='Jadoo_Footer_Download_Stores_Btn_Container' height='2.5rem' width='8.5rem' display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                <img src={playStore} alt='Playstore' />
                <p>
                  Availaible on the <br />
                  <span>Apple Store</span>
                </p>
              </Box>

              <Box gap='.3rem' className='Jadoo_Footer_Download_Stores_Btn_Container' height='2.5rem' width='8.5rem' display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
                <img src={apple} alt='Playstore' />
                <p>
                  <span>Get it on </span> <br />
                  Google play
                </p>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default Footer