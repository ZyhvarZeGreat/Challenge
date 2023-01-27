import React from 'react'
import { Grid,Stack, Box,useMediaQuery,useTheme } from '@mui/material'
import {UilBars} from '@iconscout/react-unicons'
import './Navbar.css'
import { link_data } from '../Data/Links_Data'
import { Link as MainLink } from 'react-router-dom'
import { Link as Scroll_Link } from 'react-scroll'
import Logo from '../assets/Logo.svg'
const Navbar = () => {

  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up("md"))
  const linkStyle = {
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', gap: '3rem'
  }
  const imageStyle = {
    display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '3rem'
  }
  return (
    <Grid xs={12} minHeight='6rem'  backgroundColor='blue' className='Jadoo_Navbar' container>
      <Grid style={imageStyle} className='Jadoo_Navbar_Logo_Container' xs={6} md={3} item >
        <img className='Jadoo_Navbar_Logo' src={Logo} alt='Jadoo_Logo' />
      </Grid>
     { query ? <Grid style={linkStyle} className='Jadoo_Navbar_Links' xs={6} md={8.5} item >
        {link_data.map((item) => {
          return (
            <Scroll_Link  to={`${item.to}`}  spy ={true} smooth={true} offset={100} duration={500}  className='Jadoo_Navbar_Link' key={item.to}>
              {item.link}
            </Scroll_Link>
          )
        })}

        <Box display='flex'  flexDirection='row' alignItems='center' justifyContent='center' gap='1.7rem' height='100%' backgroundColor='green' width='20rem'>
          <MainLink className='Jadoo_Login_Button' to='/'>
            Login
          </MainLink>
          <MainLink className='Jadoo_SignUp_Button' to='/'>
            Sign Up
          </MainLink>

          <select className='Jadoo_Language_Select'>
            <option>
              EN
            </option>
          </select>
        </Box>
      </Grid>: <Grid container  alignItems='center' justifyContent='flex-end'xs={6}> 
      <Stack width='80%' alignItems='center' justifyContent='center'>
      <UilBars/>
      </Stack>
      </Grid> }
    </Grid>
  )
}

export default Navbar