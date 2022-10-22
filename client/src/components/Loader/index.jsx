import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
    <Box
      sx={{
        display: 'block ',
        width: '100px',
        height: '100px',
        margin: '2rem auto',
      }}
    >
      <CircularProgress size={75} />
    </Box>
  );
}
