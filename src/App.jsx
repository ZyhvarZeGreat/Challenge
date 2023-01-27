import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Box, Grid, Stack } from '@mui/material'
import image from './assets/Decore.svg'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Footer } from './Components/index'
import './App.css'

function App() {
  return (
    <Grid xs={11} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} item className="App">
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Stack height='100%' alignItems='flex-start' justifyContent='space-between' direction='row' width='100%' className='Jadoo_Header_Overlay'>
        <Box minHeight='20rem' width='15%' backgroundColor='azure' className='Jadoo_Header_Overlay_Blur'>
        </Box>

        <Box height='50rem' overflow='hidden' width='43rem' display='flex' justifyContent='center' alignItems='center' className='Jadoo_Header_Overlay_Image'>
          <img src={image} alt='' />
        </Box>
      </Stack>
      <Footer />
    </Grid>
  )
}

export default App
