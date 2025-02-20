/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';

import { useGetActorsDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import  useStyles from './styles';
import { MovieList, Pagination } from '../';

const Actors = () => {
  const { id } = useParams ();
  const history = useHistory();
  const classes = useStyles();
  const [page, setPage] = useState(1);

  const { data, error, isFetching } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
console.log('movies: ', movies)
  if (isFetching) {
      return (
        <Box display="flex" justifyContent="center" >
          <CircularProgress size="4rem" />
        </Box>
      );
    }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Button startIcon={<ArrowBack />} onClick={()=> history.goBack()} color='primary'>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.name}
            style={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
          <Typography variant='h2' gutterBottom>{data?.name}</Typography>
          <Typography variant='h5' gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant='body1' allign='justify' paragraph gutterBottom>
            {data?.biography || 'Sorry! no Biography yet...'}
          </Typography>
          <Box marginTop='2rem' display='flex' justifyContent='space-around'>
            <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data.imdb_id}/`}>
              IMDB
            </Button>
            <Button startIcon={<ArrowBack />} onClick={()=> history.goBack()} color='primary'>
               Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin='2rem 0'>
        <Typography variant='h2' align='center' gutterBottom>Movies</Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination currentPage={page} totalPages={movies?.total_pages} setPage={setPage}/>
      </Box>
    </>
  )
}

export default Actors