import React from 'react'
import { Grid, Stack, Box, useTheme, useMediaQuery } from '@mui/material'
import { UilEnvelope } from '@iconscout/react-unicons'
import image from '../assets/plus_2.png'
import circle1 from '../assets/circle-1.png'
import circle2 from '../assets/circle-2.png'
import './Call_to_action.css'

const Call_to_action = () => {
  const theme = useTheme()
  const query = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <section style={{ height: `${query ? '25rem' : '18rem'}`, display: 'flex', marginBottom: '3rem', alignItems: 'center', justifyContent: 'center', width: '100%' }} className='Jadoo_Call_to_action'>
      <Grid xs={12} container height='100%' alignItems='center' justifyContent='center' className='Jadoo_Call_to_action_Container'>
        <Stack gap='1rem' width={query ? '90%' : '100%'} height='100%' alignItems='center' justifyContent='center' className='Jadoo_Call_to_action_Item'>
          <Stack height='60%' alignItems='center' justifyContent='center'>
            <h1>
              Subscribe to get information<br /> latest news and interesting offers about jadoo
            </h1>
          </Stack>

          <Stack direction={query ? 'row' : 'column'} alignItems={query ? 'flex-start' : 'center'} gap={query ? '2rem' : '1.2rem'} justifyContent='center' className='Jadoo_Call_To_Action_Form' >
            <Stack borderRadius='6px' className='Jadoo_Call_To_Action_Form_Container' width={query ? '25rem' : '15rem'} gap='1.1rem' backgroundColor='#fff' height='3.7rem' alignItems='center' justifyContent='center' direction='row'>
              <UilEnvelope height='30px' width='30px' fill='#979494' />
              <input type='email' placeholder='Your email' />
            </Stack>
            <button type='submit'>Subscribe</button>
          </Stack>
        </Stack>

        <Stack alignItems='center' justifyContent='space-between' direction='row' height='100%' width='90%' className='Jadoo_Call_to_action_overlay'>
          <Box className='Jadoo_Call_To_Action_Overlay_Image' height='100%' display='flex' alignItems='flex-end'>
            {query && <img src={circle1} alt='circle' />}
          </Box>
          <Box className='Jadoo_Call_To_Action_Overlay_Image' height='100%' display='flex' alignItems='flex-start'>
            {query && <img src={circle2} alt='circle' />}
          </Box>
        </Stack>
      </Grid>
      <Stack alignItems='flex-end' justifyContent='flex-end' className='Jadoo_Call_To_Action_Underlay' width='100%' height='30rem'  >
        <img src={image} alt='plus' />
      </Stack>
    </section>
  )
}

export default Call_to_action