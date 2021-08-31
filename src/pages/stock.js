import React from 'react';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import NavBar from '../components/navbar';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Additem from '../pages/additem';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor:'#42207A',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  editButton:{
    variant:"outlined" ,
    color:"primary"
  },
  deleteButton:{
    variant:"contained",
     color:"secondary"
  
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  
}))(TableRow);
function createData(stockID, stockCount, stockDate,ItemID, storeID,edit,remove) {
  return { stockID, stockCount, stockDate,ItemID, storeID,edit,remove };
}

const rows = [
  createData(0,34,54,1,2,<IconButton component={Link} to= "/AddStock" style={{color:'#42207A'}} className="editButton"><EditIcon/></IconButton>,<IconButton style={{color:'red'}} className="deleteButton" ><DeleteIcon/></IconButton>),
  //component={Link} to= "/Additem"
];

const useStyles = makeStyles((theme) => ({
  root: {
      //backgroundColor:'#C7F2F4',
      display: 'flex',
    },
  appBarSpacer: theme.mixins.toolbar,
  content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
  },
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  },
  paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      
    },
    fixedHeight: {
      height: 240,
    },
    table: {
      minWidth: 1000,
      
    },
    

}));

export default function Itemlist(){
  const classes = useStyles();
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return(
    
       <div className={classes.root}>
       <NavBar/>
       <div className="table" style={{position:'relative',top:'15vh',left:'3vw'}}>
       <TableContainer component={Paper}>
       <h2 style={{color:'#42207A' , textAlign: "center"}}>Stock</h2>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>Stock Id</StyledTableCell>
            <StyledTableCell align="right">Stock Count</StyledTableCell>
            <StyledTableCell align="right">Stock Date</StyledTableCell>
            <StyledTableCell align="right">Item ID</StyledTableCell>
            <StyledTableCell align="right">Store ID</StyledTableCell>
            <StyledTableCell>Edit</StyledTableCell>
            <StyledTableCell>Delete</StyledTableCell>
            
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row">
              {row.stockID}
            </StyledTableCell>
            <StyledTableCell align="right">{row.stockCount}</StyledTableCell>
            <StyledTableCell align="right">{row.stockDate}</StyledTableCell>
            <StyledTableCell align="right">{row.ItemID}</StyledTableCell>
            <StyledTableCell align="right">{row.storeID}</StyledTableCell>
            <StyledTableCell >{row.edit}</StyledTableCell>
            <StyledTableCell >{row.remove}</StyledTableCell>
            
            
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  <Button style={{position:'absolute',left:'85%'}} variant="contained" color="#42207A" component={Link} to= "/AddStock">
  Add Stock
</Button>
       </div>
       </div>
       );    
      }