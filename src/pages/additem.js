import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/navbar';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PublishIcon from '@material-ui/icons/Publish';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
      '& > *': {
        margin: theme.spacing(1),
      }
    },
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '45ch',
  },
  appBarSpacer: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            height: '200vh',
            overflow: 'auto',
        },
        container: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(4),
            width:900,
          
            
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            overflow: 'auto',
            flexDirection: 'column',
            
          },
          fixedHeight: {
            height: 500,
            width:500,
          },
          input: {
            display: 'none',
          },
          button: {
            margin: theme.spacing(3),
            position:'relative'
          },
          fixedHeightPaper:{
            height:800
          },
          submit: {
            margin: theme.spacing(0, 1, 1),
          },
}));

export default function Additem() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
    <NavBar/>
<main className={classes.content}>
   <div className={classes.appBarSpacer} />
  
    <form className={classes.root} noValidate autoComplete="off">
    <Container minWidth="md" className={classes.container}>
        <Paper className={fixedHeightPaper}>
            <br></br>
            <h2 style={{color:'#42207A' , textAlign: "center"}}>Enter Item Details</h2>  
      <div className="paper" style={{position:'relative',top:'1vw', left:'2vw'}}>
        <TextField id="standard-read-only-input" label="Read Only" defaultValue="Item ID" InputProps={{readOnly: true,}} variant="outlined"/>
        <br></br>
        <TextField required id="outlined-required" label="Required" defaultValue="Item Name" variant="outlined" />
        <br></br>
        <TextField required id="outlined-required" label="Required" defaultValue="Store ID" variant="outlined"/>
        
        
       
       <br></br> <br></br> <br></br>
        <Button
              type="submit"
              variant="contained"
              style={{backgroundColor:"#42207A", color:"#ffffff"}}
              className={classes.submit}
            >
             Submit
            </Button>
      </div>
      
      
       
       
        
      </Paper>
      </Container>
    </form>
    
    </main>
      </div>
  );
}
