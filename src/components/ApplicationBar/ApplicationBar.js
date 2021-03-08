import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 1,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
    backgroundColor: "black"
  },
  grow: {
    flexGrow: 1,
  }
}));

export default function ApplicationBar({title, visible}) {
  const classes = useStyles();

  return (
    <React.Fragment >
      <CssBaseline />
      { visible ? (
          <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            {title}
          </Typography>
        
        </Paper>
      ) : (<></>) }
    
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar >
       
          <a class="animate__animated animate__jackInTheBox" style={{
             position: 'absolute',
             zIndex: 1,
             top: -40,
             left: 30,
             right: 0,
             margin: '0',
             backgroundColor:'white'
          }}  target="_blank" href="https://walle-api-madam-birras.herokuapp.com/ar.html">
            <Fab style={{backgroundColor: "#ffd500", width: 80, height:80}}>
              <CameraEnhanceIcon style={{fontSize:50}}/>
            </Fab>
          </a>
          <a class="animate__animated animate__jackInTheBox" href="https://walle-api-madam-birras.herokuapp.com/ar.html">
          <IconButton color="inherit">
          <CameraEnhanceIcon style={{backgroundColor: 'yellow',borderRadius: 90 , fontSize:50, color: 'black', padding: 10}}/>
          </IconButton>
          </a>
          <a style={{backgroundColor:'blue'}} class="animate__animated animate__jackInTheBox" href="https://walle-api-madam-birras.herokuapp.com/menu.pdf">
          <IconButton color="inherit">
            <PictureAsPdfIcon style={{backgroundColor: 'white',borderRadius: 90 , fontSize:50, color: 'black', padding: 10}}/>
          </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}