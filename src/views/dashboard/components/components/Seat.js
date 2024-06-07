import React, { useContext } from 'react';
import MovieContext from '../contexts/MovieContext';

import './styles/Seat.css';
import { Box, Grid, Typography } from '@mui/material';

const Seat = (props) => {
  const { seatno, seatColor } = props;
  const seatNumber = seatno;
  const seatStatus = seatColor || 'seat-grey';
  const { movies, changeState } = useContext(MovieContext);

  const isSeatSelected = movies.seatNumbers.includes(seatNumber);

  const seatClickHandler = (event, seatNumber) => {
    event.stopPropagation();

    const newMovieSeats = isSeatSelected
      ? movies.seatNumbers.filter((seat) => seat !== seatNumber)
      : [...movies.seatNumbers, seatNumber];

    const newTotalSeats = isSeatSelected ? movies.totalSeats - 1 : movies.totalSeats + 1;

    changeState({
      ...movies,
      seatNumbers: newMovieSeats,
      totalSeats: newTotalSeats,
    });
    console.log(seatNumber);
  };

  return (
    <>
      
      <Grid
        className={`seat seat-${seatNumber} ${seatStatus} ${isSeatSelected ? 'seat-selected' : ''}`}
        onClick={(event) => seatClickHandler(event, seatNumber)}
        style={{ border: isSeatSelected ? '2px solid #007c36' : '2px solid transparent' }}
      >
        {seatNumber}
      </Grid>
    </>
  );
};

export default Seat;
