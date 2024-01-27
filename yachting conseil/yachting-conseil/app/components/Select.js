'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({title, elements, setter}) {
  const [choice, setChoice] = React.useState('');

  const handleChange = (event) => {
    setChoice(event.target.value);
    setter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: '20%', backgroundColor: 'white' }}>
      <FormControl fullWidth>
        <InputLabel shrink={false} id="label">{title}</InputLabel>
        <Select
          labelId="label"
          id="select"
          value={choice}
          label={title}
          onChange={handleChange}
        >
        {elements.map((element, index) => {
          return <MenuItem key={index} value={element}>{element}</MenuItem>
        })}
        </Select>
      </FormControl>
    </Box>
  );
}