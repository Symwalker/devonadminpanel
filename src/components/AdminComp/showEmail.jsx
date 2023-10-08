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
import { fetchAllemails } from '../../store/products';
import AdminNavbar from './adminNavbar';
import { useNavigate } from 'react-router-dom';
const ShowEmails = () => {
  
  return (
    <>
    {/* <AdminNavbar/> */}
    <CustomizedTables />
    </>
  )
}

export default ShowEmails



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
function createData(Emails) {
    
    return { Emails };
  }

function CustomizedTables() {
    const { emails} = useSelector((state)=> state.products) 
const dispatch = useDispatch()
useEffect(()=>{
    // dispatch(fetchAllcontactss())
    dispatch(fetchAllemails())
},[])



  return (
    <>
    {/* <AdminNavbar /> */}
    <TableContainer component={Paper} sx={{marginTop:5 ,width:{md:"70%", xs:"90%"},marginLeft:"auto", marginRight:"auto"}}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{textAlign:{md:"center", xs:"start"}, fontSize:"25px"}}>Emails</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {emails.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.email}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
