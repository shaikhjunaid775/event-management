import React from 'react'
import {useState} from "react"
import {  Box } from '@mui/material';
import MovieContext from './contexts/MovieContext'
// import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
// import PriceCalculator from "./components/PriceCalculator"

import './app.css'

function SeatSelection() {

   
  return (
    <div>
        <Box>
				{/* <SeatAvailability /> */}
				{/* <PriceCalculator /> */}
        </Box>
    </div>
  )
}

export default SeatSelection