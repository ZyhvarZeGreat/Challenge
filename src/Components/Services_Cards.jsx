import React from 'react'
import './Services_Cards.css'
// import query from '../hooks/query'
import { Grid,Box,Stack } from '@mui/material'
const Services_Cards = (props) => {
    
    return (
        <Grid backgroundColor='#fff' alignItems='center' justifyContent='center' item xs={12} md={3}  lg={2.7} container height='21rem'className='Jadoo_Services_Cards'>
        <Stack height='100%' gap='2rem' textAlign='center' width='90%' direction='column' alignItems='center' justifyContent='center' className='Jadoo_Services_Card_Container'>
            <Box width='8rem'  display='flex'alignItems='center' justifyContent='center' className='Jadoo_Services_Card_Icon'>
                <img className='icon' src={`../${props.icon}`} alt='icon'/>
                <Box width='4rem' height='4rem' className='Jadoo_Services_Card_Underlay'>
                </Box>
            </Box>
            <Stack gap='1rem' alignItems={'center'}justifyContent='center' className='Jadoo_Services_Card_Text' width='100%'>
                <h2>{props.title}</h2>
                <p>{props.subTitle}</p>
            </Stack>
        </Stack>
        </Grid>
    )
}

export default Services_Cards