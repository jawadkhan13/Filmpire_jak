/* eslint-disable no-unused-vars */
import React from "react";
import { Typography, Grid, Grow, Tooltip, Rating } from "@mui/material";
import { Link } from "react-router-dom";

import useStyles from "./styles";

const Movie = ({ movie, i }) => {
  const classes = useStyles();
  console.log(movie, i);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link to={`/movie/${movie.id}`} className={classes.links}>
          <img
            className={classes.image}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://www.filmurray.com/200/300`
            }
            alt={movie.title}
          />
          <Typography className={classes.title} variant="h5">
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average} / 10`}>
            <div>
              <Rating value={movie.vote_average / 2} readOnly precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
