import React from 'react';
// import Seat from './Seat';
import { useState } from 'react';
import './styles/Seat.css';
import { Box,  Typography } from '@mui/material';

// const seatNumbers = ['1', '2', '3', '4'];
const seatRows = ['F1', 'F2', 'F3'];
const vipRooms = ['VIP1', 'VIP2', 'VIP3', 'VIP4', 'VIP5'];

const GenerateSeats = (seatNumbers) => {
  const [reservations, setReservations] = useState({});
  const [vipReservations, setVipReservations] = useState({});

  const handleCheckboxChange = (event, isVip = false) => {
    const { value } = event.target;
    if (isVip) {
      setVipReservations((prevReservations) => {
        const updatedReservations = { ...prevReservations };
        if (!updatedReservations[value]) {
          updatedReservations[value] = 1;
        } else if (updatedReservations[value] < 3) {
          updatedReservations[value] += 1;
        } else {
          delete updatedReservations[value];
        }
        return updatedReservations;
      });
    } else {
      setReservations((prevReservations) => {
        const updatedReservations = { ...prevReservations };
        if (!updatedReservations[value]) {
          updatedReservations[value] = 1;
        } else if (updatedReservations[value] < 3) {
          updatedReservations[value] += 1;
        } else {
          delete updatedReservations[value];
        }
        return updatedReservations;
      });
    }
    
  };

  const getClassName = (value, isVip = false) => {
    const res = isVip ? vipReservations : reservations;
    if (res[value] === 1) {
      return isVip ? 'seats vip-seats one-person' : 'seats one-person';
    } else if (res[value] === 2) {
      return isVip ? 'seats vip-seats two-people' : 'seats two-people';
    } else if (res[value] === 3) {
      return isVip ? 'seats vip-seats three-people' : 'seats three-people';
    }
    return isVip ? 'seats vip-seats' : 'seats';
    
  };
  console.log(seatNumbers);
  

  return (
    <>
      <div className="row">
        <table className="w-full">
          <thead>
            <tr>
              <td></td>
              {seatNumbers.map((seatNumber) => (
                <td key={seatNumber}>{seatNumber}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {seatRows.map((row) => (
              <tr key={row}>
                <td>{row}</td>
                {seatNumbers.map((seatNumber) => (
                  <td key={`${row}${seatNumber}`}>
                    <input
                      type="checkbox"
                      className={getClassName(`${row}${seatNumber}`)}
                      value={`${row}${seatNumber}`}
                      onChange={(e) => handleCheckboxChange(e)}
                    />
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td>VIP</td>
              {vipRooms.map((vipRoom) => (
                <td key={vipRoom}>
                  <input
                    type="checkbox"
                    className={getClassName(vipRoom, true)}
                    value={vipRoom}
                    onChange={(e) => handleCheckboxChange(e, true)}
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

const SeatMatrix = () => {
  
  const seatNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // '' for the gap

  return (
    <div className="movie-complex">
      <Box >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 0, pb:1 }}>
          <Typography variant="h3 subtitle2">Orchid Hotel, Lonavala</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <span class="flex w-2 h-2 me-1 bg-[#4EC080] rounded-full"></span>

              <Typography sx={{ fontSize: 10 }}>Standard</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <span class="flex w-2 h-2 me-1 bg-[#817AF3] rounded-full"></span>

              <Typography sx={{ fontSize: 10 }}>VIP</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <span class="flex w-2 h-2 me-1 bg-[#f5f5f5] border  rounded-full"></span>

              <Typography sx={{ fontSize: 10 }}>Empty</Typography>
            </Box>
          </Box>
        </Box>
        <div className="" container spacing={4}>
          {GenerateSeats(seatNumbers)}
        </div>
      </Box>
    </div>
  );
};

export default SeatMatrix;
