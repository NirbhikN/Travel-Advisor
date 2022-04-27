import React, { useState } from 'react'
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, FormLabel, FormHelperText } from '@mui/material'



import useStyles from './styles'

const List = () => {
  const classes=useStyles();
  const [type, setType] = useState('restaurants')
  const [rating, setRating] = useState('')

  return (
    <div className={classes.container} >
      <Typography variant="h4" > Restaurants, Hotels & Attractions around you</Typography>

      <FormControl className={classes.formControl} sx={{ m: 1, minWidth: 120 }}>   
        <InputLabel>Type</InputLabel>       
        <Select label='Type' value={type} onChange={(e)=>setType(e.target.value)} >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
      </FormControl>

      <FormControl className={classes.formControl} sx={{ m: 1, minWidth: 120 }}> 
      <InputLabel>Rating</InputLabel>         
          <Select label='Rating' value={rating} onChange={(e)=>setRating(e.target.value)} >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
          </Select>
      </FormControl>

      


    </div>
  )
}

export default List