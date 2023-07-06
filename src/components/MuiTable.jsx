import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from "@mui/material/Box";
import './MuiTable.css'
import { Typography } from '@mui/material';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function MuiTable() {
  

  return (
    <TableContainer component={Paper} sx={{backgroundColor:"#17212bd6",borderRadius:"10px",padding:' 2.5rem  2rem'}}>
      <Table sx={{ minWidth: 650,paddingTop:"1.2rem" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ minWidth:246,display:'flex',gap:3,padding:'0 0 0 2rem' }} >
           <Typography variant='subtitle1'> Collateral Assets </Typography>
            </TableCell>
            <TableCell sx={{ minWidth:210,width:{lg:'22.5%',md:'22.5%'}}} padding='none' align="left"><Typography variant='subtitle1'>Total Assets</Typography></TableCell>
            <TableCell sx={{ minWidth:120,width:{lg:'11%',md:'11%'}}}padding='none' align="left">
              <Typography variant='subtitle1'> Oracle Price </Typography>
              </TableCell>
            <TableCell sx={{ minWidth:120,width:{lg:'11%',md:'11%'}}}padding='none' align="left"><Typography variant='subtitle1'>Collateral Factor</Typography></TableCell>
            <TableCell sx={{ minWidth:120,width:{lg:'11%',md:'11%'}}}padding='none' align="left"><Typography variant='subtitle1'>Liquidation Factor</Typography></TableCell>
            <TableCell sx={{ minWidth:120,width:{lg:'11%',md:'11%'}}}padding='none' align="left"><Typography variant='subtitle1'>Liquidation Penalty</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell height="80px" component="th" scope="row" sx={{ display:'flex',gap:3,alignItems:'center',borderBottom:'none' }}>
                
                <Box sx={{position:'absolute'}}> 
                <Typography variant="h5" color="white" >ICON</Typography>
                 </Box>
                <Box  sx={{visibility:'hidden'}}>icon</Box>
              <div style={{display:"flex",alignItems:"center"}}><Typography variant='h4'>{row.name}</Typography></div>
              </TableCell>
              <TableCell  height="80px"padding='none' sx={{paddingRight:'2rem'}}  align="left" >
                <div style={{display:"flex",alignItems:"center"}}>
                  <Typography variant='h4'>$199.06M</Typography> 
                  </div>
                <div className='meter'>
                  <div className='meter-inner'></div> </div>
                </TableCell>
              <TableCell display="flex" alignitems="center"height="80px"padding='none' align="left">
              <Typography variant='h4'> {row.calories}</Typography>
               </TableCell>
              
              <TableCell  height="80px" padding='none' align="left"> <Typography variant='h4'>{row.carbs}</Typography> </TableCell>
              <TableCell  height="80px" padding='none' align="left"> <Typography variant='h4'>{row.protein}</Typography> </TableCell>
              <TableCell  height="80px" padding='none' align="left"> <Typography variant='h4'>{row.protein}</Typography> </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
