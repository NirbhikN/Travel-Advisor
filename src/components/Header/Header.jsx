import React, { useState } from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles'

const Header = ({setCoordinates}) => {
  const classes=useStyles();

  const [autocomplete, setAutocomplete] = useState(null)

  const onLoad=(autoc)=>setAutocomplete(autoc)

  // For autocomplete suggestions
  const onPlaceChanged=()=>{
    const lat=autocomplete.getPlace().geometry.location.lat();
    const lng=autocomplete.getPlace().geometry.location.lng();

    setCoordinates({lat,lng})
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
    
    <AppBar position='static'>
    
      <Toolbar>

          <Typography 
            variant="h5"
            noWrap
            component="div"
            // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            sx={{ flexGrow: 1, display: { xs:'block' } }}
            
            // component='div'
          >
              TravelAdvisor
          </Typography>

          <Box display='flex'>
              
            <Typography 
              
              variant='h6'
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              
              // component='div'
            >
                  Explore new places
              </Typography>

              <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                  


            <InputBase 
              placeholder='Search...' 
              className={classes.inputBox}
              sx={{display: { xs:'block' } }}
            />

                    
                  </div>
              </Autocomplete>

          </Box>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header