import {useMediaQuery,useTheme} from '@mui/material'

export const query =()=>{
    const theme = useTheme()
    const query = useMediaQuery(theme.breakpoints.up('md'))
    return query
}