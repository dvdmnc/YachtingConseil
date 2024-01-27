import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function DescriptionBox({title, description}) {
  return (
    <Box className='description-box'>
        <Typography sx={{borderBottom: '1px solid grey'}}><strong>{title}</strong></Typography>
        <Box>
            <Typography>{description}</Typography>
        </Box>
    </Box>
  )
}

export default DescriptionBox