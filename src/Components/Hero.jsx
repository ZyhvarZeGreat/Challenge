import React from 'react'
import {Grid,Box,Stack,useTheme,useMediaQuery} from '@mui/material'
import  Hero_Image from '../assets/Hero.png'
import { UilPlay } from '@iconscout/react-unicons'
// import  Hero_Image_2 from '../assets/Hero_2.png'
import './Hero.css'
const Hero = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up("md"))
  return (
    <Grid xs={12} container className=''  alignItems='center' justifyContent='center'>
<Grid  md={12} lg={6} alignItems='center' justifyContent='flex-end' item sx={{display:'flex',alignItems:`${query ? 'center':'flex-end'}`, flexDirection:'column' ,justifyContent:'center'}}  className='Jadoo_Hero_Text'>
<Stack gap='3rem' className='Jadoo_Hero_Text' height='100%' width={query ? '95%':'90%'} direction='column' alignItems='flex-start' justifyContent='center'>
<h2>best destinations around the world</h2>
<h1>Travel, <span>enjoy</span> <br/> and live a new <br/> and full life</h1>
<p> Built Wicket longer admire do barton vanity itself do in it.<br/> Preferred to sportsmen it engrossed listening.<br/> Park gate sell they west hard for the.</p>
</Stack>

<Stack  width={query ? '95%':'90%'} height='10rem' gap='2rem' className='Jadoo_Hero_btn_container' direction='row' alignItems='center' justifyContent='flex-start'>
  <button className="hero_text_btn"> Find Out More</button>
  <button className="hero_text_play_btn"><UilPlay/></button>
  <p> Play Demo</p>
</Stack>
</Grid>

<Grid  sx={{display:'flex',alignItems:'center',justifyContent:'center' ,height:` ${query ? "45rem":""}`}} className='Jadoo_Hero_Image'item  xs={12} md={6}>
<img src={Hero_Image} alt=''/>
</Grid>
      </Grid>
  )
}

export default Hero