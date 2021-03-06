import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';
import Animation from '../Animation/Animation';

const useStyles = makeStyles({
  root: {
    minHeight: 300,
    minWidth: 100,
    width: 300,
    margin: 'auto',
    marginBottom: 500,
  },
  img:{
    
    margin:0,
    width: '100%',
    borderRadius: 10
 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  footer: {
    height:1000
  },
  header: {
    height:50
  },
  card:{
    
    marginBottom: 10
  }
});

export default function Cards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <div className={classes.header}>

</div>

    <div class="animate__animated animate__jackInTheBox">
    <Card className={classes.card} >
        <CardContent>
         
          <Typography style={{fontWeight: 'bold'}} variant="body2" component="p">
            -Para ver el menu presione el boton de la camara 📷 que tiene abajo.
        
          </Typography>
        <Typography style={{fontWeight: 'bold'}} variant="body2" component="p">
            -También es posible verlo en pfd con el boton de la esquina inferior derecha.
   
          </Typography>
        
        </CardContent>
      </Card>
      <Card className={classes.card} >
        <CardContent>
          <Typography style={{fontWeight: 'bold'}} variant="body2" component="p">
          Luego escanee la siguiente imagen 🖼
          </Typography>
          <img className={classes.img} src="https://walle-api-madam-birras.herokuapp.com/index.png"></img>
        </CardContent>
      </Card>
    </div>
      
      <div className={classes.footer}>

      </div>
    </div>
  );
}