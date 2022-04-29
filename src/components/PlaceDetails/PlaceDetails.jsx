import React from 'react'

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip , Rating} from '@mui/material'

import { LocationOn } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'


import useStyles from './styles'

const PlaceDetails = ({place, selected, refProp }) => {
  const classes=useStyles()

  // To make the list scroll automatically
  if(selected) refProp?.current?.scrollIntoView({behavior:'smooth',block:'start'})
 
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>

        {/* For Rating */}
        <Box display="flex" justifyContent="space-between">
        <Rating  value={Number(place.rating)} readOnly />
          <Typography variant="subtitle1" gutterBottom>
            out of {place.num_reviews} reviews
          </Typography>
        </Box>

        {/* For price */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1"> Price</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.price_level}
          </Typography>
        </Box>

        {/* For Ranking */}
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1"> Ranking</Typography>
          <Typography variant="subtitle1" gutterBottom>
            {place.ranking}
          </Typography>
        </Box>

        {/* For Awards */}
        {place?.awards?.map((award) => (
          <Box
            my={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img src={award.images.small} alt={award.display_name} />

            <Typography variant="subtitle2" color="textSecondary">
              {" "}
              {award.display_name}{" "}
            </Typography>
          </Box>
        ))}

        {/* For Cuisines */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {/* Address  & Phone Number*/}
        {place?.address && (
          <Typography
            variant="subtitle2"
            gutterBottom
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOn /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            variant="subtitle2"
            gutterBottom
            color="textSecondary"
            className={classes.spacing}
          >
            <Phone /> {place.phone}
          </Typography>
        )}

        {/* TripAdvisor page and website */}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip Advisor
          </Button>

          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails