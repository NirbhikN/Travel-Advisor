import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import useStyles from './styles'

const Header = () => {
  const classes=useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
    
    <AppBar position='static'>
      {/* <Toolbar className={classes.toolbar}> */}
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

              {/* <Autocomplete> */}
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
              {/* </Autocomplete> */}

          </Box>
      </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header