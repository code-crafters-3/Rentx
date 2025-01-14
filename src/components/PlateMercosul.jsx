import React from 'react';
import { Box, Typography } from '@mui/material';

export const PlateMercosul = ({ plate }) => {
  return (
    <Box
      sx={{
        /*   width: 340,
        height: 160, */
        border: '2px solid black',
        borderRadius: 2,
        backgroundColor: '#FFFFFF',
        position: 'relative',
        fontFamily: "'Arial', sans-serif"
        // maxWidth: 150
      }}
    >
      {/* Parte superior (Bandeira e Brasil) */}
      <Box
        sx={{
          /*   height: 40, */
          backgroundColor: '#003399', // Azul Mercosul
          color: '#FFFFFF',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px'
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 1
          }}
        >
          Brasil
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
          //marginTop: '10px'
        }}
      >
        <Typography
          sx={{
            fontSize: 30,
            // fontWeight: 'bold',
            fontFamily: 'FeEngschrift',
            color: '#000000',
            letterSpacing: 5
          }}
        >
          {plate}
        </Typography>
      </Box>
    </Box>
  );
};
