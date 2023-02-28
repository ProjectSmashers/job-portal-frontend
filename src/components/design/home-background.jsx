import { Box, Paper } from '@mui/material';
import React, { Component } from 'react'


class HomeBackground extends Component {
  render() {
    return (
      <Box
        display={'block'}
        position={'absolute'}
        zIndex={-1}
      >
        <Paper variant="outlined" >
          <img src="https://picsum.photos/1920/1080" alt='display' />
        </Paper>
      </Box>
    );
  }
}

export default HomeBackground;