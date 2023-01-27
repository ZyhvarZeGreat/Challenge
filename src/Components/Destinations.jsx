import React from 'react'
import { Grid, Stack, Box, useMediaQuery, useTheme } from '@mui/material'
import millify from 'millify'
import image from '../assets/destination.png'
import { UilLocationArrow } from '@iconscout/react-unicons'
import './Destinations.css'
import { destination_cards_data } from '../Data/Destinations_Card_Data'
const Destinations = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up("md"))
  const Destination_Cards = destination_cards_data.map((card) => {
    const { image, location, price, desc,icon } = card
    return (
      <Grid key={location} height={query ? '23rem' : '24rem'} backgroundColor='#fff' item xs={12} sm={10} md={6} lg={3.2} className='Jadoo_Destinations_Card_Items'>
        <Stack className='Jadoo_Destinations_Card_Item_Image'  height='16rem' width='100%'>
          <img src={`./${image}`} alt='' />
        </Stack>

        <Stack gap='1rem' className='Jadoo_Destinations_Card_Item_Details' direction='column' alignItems='center' justifyContent='center' height='35%' width='100%'>
          <Stack className='Jadoo_Destinations_Card_Item_Details_Text' alignItems='center' justifyContent='space-between' direction='row' width='90%' >
            <p> {location} </p>
            <p>${millify(Number(price))}</p>
          </Stack>
          <Stack gap='1rem' direction='row' className='Jadoo_Destinations_Card_Item_Details_Desc' width='90%'>
            <img src={`./${icon}`}/>
            <p> {desc} </p>
          </Stack>
        </Stack>

      </Grid>
    )
  })
  return (
    <section style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='Jadoo_Destinations'>
      <Grid height='100%' gap='4rem' alignItems='center' justifyContent='center' container xs={12}>

        <Grid style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', justifyContent: 'center' ,textAlign:`${query ? 'start':'center'}` }} xs={12} className='Jadoo_Destinations_Header'>
          <h4> Top Selling </h4>
          <h1> Top Destinations </h1>
        </Grid>

        <Grid container sx={{ display: 'flex', gap: `${query ? '4rem' : '3rem'}`, alignItems: 'center', justifyContent: 'center' , flexDirection: 'row', width: '100%' }} xs={12} className='Jadoo_Destinations_Cards'>
          {Destination_Cards}

          <Stack className='Jadoo_Destinations_Overlay'alignItems='flex-end' justifyContent='center' height='100%'  width='100%'>
            <img src={image} alt='spring'/>
             </Stack>
        </Grid>
      </Grid>
    </section>
  )
}

export default Destinations