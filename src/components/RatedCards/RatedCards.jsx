import React from 'react'
import { Typography, Box } from '@mui/material';

import { Movie } from '..';
import useStyles from './styles';

const RatedCards = ({ title, data }) => {
    const classes = useStyles();

  return (
    <Box>
        <Typography gutterBottom variant="h5">
            Rated Movies
        </Typography>
        <Box display="flex" flexWrap="wrap" className={classes.container}>
            {data?.results?.map((movie, i) => (
                <Movie movie={movie} key={movie.id} i={i}/>
            ))}
        </Box>
    </Box>
  )
}

export default RatedCards