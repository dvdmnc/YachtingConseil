'use client'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({price,year,engine,fuel,length,width,cabins,transmission,hours,secondhand}) {
    function createData(name, value) {
        return {name, value};
      }
      
      const rows = [
        createData('Année', year),
        createData('Motorisation', engine),
        createData('Carburant', fuel),
        createData('Longueur', length),
        createData('Largeur', width),
        createData('Cabines', cabins),
      ];

      {secondhand ? rows.splice(3, 0, createData('Transmission',transmission), createData('Heures',hours)) : null}

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
      <TableHead>
          <TableRow>
            <StyledTableCell align='center' colSpan={6}>{price}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.value}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
