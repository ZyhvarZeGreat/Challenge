import React from 'react'
import { Grid, Stack, Box, Card, useTheme, useMediaQuery } from '@mui/material'
import { UilCircle, UilAngleUp, UilAngleDown } from '@iconscout/react-unicons'
import './Testimonials.css'
const Testimonials = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.down('lg'))
  const company_icon_data = [
    {
      icon: 'link'
    },
    {
      icon: 'link'
    },
    {
      icon: 'link'
    },
    {
      icon: 'link'
    },
    {
      icon: 'link'
    },
  ]
  return (
    <section className='Jadoo_Testimonials' style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:`${query ? "4rem":''}` }}>
      <Grid xs={11} item style={{ width: '100%', display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center' }} className='Jadoo_Testimonials_Container'>
        <Grid xs={12} minHeight='35rem' container width='100%' alignItems='center' justifyContent='center'>
          <Grid item sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} xs={12} lg={5} className='Jadoo_Testimonials_Text'>
            <Stack width='100%'  height='100%' className='Jadoo_Testimonials_Text_Header'>
              <Stack className='Jadoo_Testimonials_Text_Details' gap='1.3rem' alignItems={query ? 'center' : 'flex-start'} textAlign={query ? 'center' : 'flex-start'} justifyContent='center' height='15rem'>
                <p>Testimonials</p>
                <h1>What People Say <br /> About Us</h1>
              </Stack>


              <Stack justifyContent='center' gap='2rem' height='12rem' >
                <Box width='100%' className='Jadoo_Testimonial_Buttons_Container' display='flex' justifyContent={query ? 'center' : 'flex-start'} alignItem='center' gap='1.5rem'>
                  <button className=''>
                    <UilCircle height='14px' width='14px' />
                  </button>

                  <button className=''>
                    <UilCircle  height='14px' width='14px'/>
                  </button>

                  <button className=''>
                    <UilCircle height='14px' width='14px' />
                  </button>
                </Box>
              </Stack>
            </Stack>
          </Grid>

          <Grid item sx={{ width: '100%', height: "100%", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '2rem' }} className='Jadoo_Testimonials_Carousel' xs={12} lg={7}>

            <Stack height={query ? '' : '30rem'} className='Jadoo_Testimonials_Cards_Container' width='100%' alignItems={query ? 'center' : 'flex-end'} justifyContent='center' gap='2rem'>

              <Stack className='Jadoo_Testimonials_Cards_1' borderRadius='1rem'height={query ? '19rem':'17rem'} width={query ? '95%': '31.5rem'} alignItems='center' justifyContent='center' backgroundColor='white'>
                <Stack className='Jadoo_Testimonials_Cards_Container' justifyContent='center' gap='2rem' height='100%' width='90%'>
                  <img src='' alt='' />
                  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sunt, ratione iste aliquam placeat aperiam, impedit dolorum earum quasi animi sequi assumenda cupiditate iusto, illo ipsa? Aliquid qui possimus ipsam. </p>
                  <Stack gap='.6rem' >
                    <h3> Mike Taylor</h3>
                    <p> Lagos,Nigeria</p>
                  </Stack>
                </Stack>
              </Stack>

              <Stack className='Jadoo_Testimonials_Cards_2' borderRadius='1rem' height={query ? '19rem':'17rem'} width={query ? '95%' : '31.5rem'} alignItems='center' justifyContent='center' backgroundColor='white'>
                <Stack className='Jadoo_Testimonials_Cards_Container' justifyContent='center' gap='2rem' height='100%' width='90%'>
                  <img src='' alt='' />
                  <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur sunt, ratione iste aliquam placeat aperiam, impedit dolorum earum quasi animi sequi assumenda cupiditate iusto, illo ipsa? Aliquid qui possimus ipsam. </p>
                  <Stack gap='.6rem' >
                    <h3> Chris Wood</h3>
                    <p> Ventura,California</p>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>




            <Stack display={query ? 'none' : ''} height='14rem' gap='3rem' direction='column' alignItems='center' justifyContent='center'>
              <UilAngleUp />
              <UilAngleDown />
            </Stack>
          </Grid>
        </Grid>



        <Grid item sx={{ width: '100%', height: '10rem', backgroundColor: 'cadetblue', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} className='Jadoo_Testimonials_Carousel' xs={12}>
          {
            company_icon_data.map((icon) => {
              const { link } = icon;
              return (
                <Grid xs={12} md={4} lg={3} item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='Jadoo_Testimonials_Carousel_Icons'>
                  <img src={link} alt={link} />

                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
      
    </section>
  )
}

export default Testimonials