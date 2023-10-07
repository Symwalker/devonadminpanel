import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllcontactss, fetchAllemails } from '../../store/products';
import AdminNavbar from './adminNavbar';
const ShowContactinfo = () => {
  return (
    <>
    {/* <AdminNavbar/> */}
    <CustomizedTables />
    </>
  )
}

export default ShowContactinfo



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


function CustomizedTables() {
    const {contactdata } = useSelector((state)=> state.products) 
const dispatch = useDispatch()
useEffect(()=>{
    // dispatch(fetchAllcontactss())
    dispatch(fetchAllcontactss())
},[])

// function createData(name, email, message) {
//     return { name, email, message };
//   }
  
//   const rows = [
//     contactdata.map((con)=>{
//         createData(con.name, con.email, con.message)
//     })
//   ];


  return (
    <>
    {/* <AdminNavbar/> */}
    <TableContainer component={Paper} sx={{marginTop:5 ,width:{md:"70%", xs:"90%"},marginLeft:"auto", marginRight:"auto"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell sx={{fontSize:"20px"}}>Message</StyledTableCell>
            <StyledTableCell align="center" sx={{fontSize:"20px"}}>Email</StyledTableCell>
            <StyledTableCell align="right" sx={{fontSize:"20px"}}>Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {contactdata.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.message}
              </StyledTableCell>
              <StyledTableCell align="center">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
