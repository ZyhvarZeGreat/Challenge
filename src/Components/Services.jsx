import React from 'react'
import { Grid, Box, Stack, useTheme, useMediaQuery } from '@mui/material'
import image from '../assets/plus.png'
import {Cards_Data} from '../Data/Cards_Data'
import './Services.css'
import Services_Cards from './Services_Cards'
const Services = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up("md"))
  const service_styles = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    gap:'2rem',
    height:`${query ? ' 40rem': ''}`,
  }

  const basic_styles = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
    gap:'2rem',
   
  }

  const cards = Cards_Data.map((card_data) => {
    return(
      <Services_Cards {...card_data} />
    )
  })
  return (
    <section style={service_styles} className='Jadoo_Services'>
      <Grid  xs={12} style={basic_styles} item className='Jadoo_Services_Container'>
<Stack height='10rem' gap='1rem' className='Jadoo_Services_Header' width='100%' textAlign='center' alignItems='center' justifyContent='center'>
  <h2 className='Jadoo_Services_Heading'>Category</h2>
  <h1 className='Jadoo_Services_subHeading'> we offer the best services</h1>
</Stack>

<Grid sx={{display:'flex' ,gap:`${query ? '0':'3rem'}`,flexDirection:'row',alignItems:'center' ,justifyContent:'space-between' ,width:'100%'}} container xs={11}  className='Jadoo_Services_Cards_Wrapper'>
{cards}
</Grid>


<Stack height='100%' width='100%' alignItems='flex-end' justifyContent='flex-start' className='Jadoo_Services_Overlay'>
<img src={image} alt='image'/>
</Stack>
      </Grid>
    </section>

  )
}

export default Services