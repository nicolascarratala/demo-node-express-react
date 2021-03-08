import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Image from './index.png'; 

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
    width: '100%'
 
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
    borderRadius: 30,
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

    <div class="animate__animated animate__zoomInDown">
      <Card className={classes.card} >
        <CardContent>
          <Typography style={{fontWeight: 'bold', fontSize: 20}} variant="body2" component="p">
          ¿Como ver el menú?
          </Typography>
          <Typography style={{fontWeight: 'bold'}} variant="body2" component="p">
          1. Presione botón cámara mágica
          </Typography>
          <Typography style={{fontWeight: 'bold'}} variant="body2" component="p">
          2. Escanee la siguiente imagen 🖼
          </Typography>
          <img className={classes.img} src={Image}></img>
          <Typography style={{fontWeight: 'bold'}} variant="body2" component="p">
          PD: También es posible verlo en versión pdf
          </Typography>
        </CardContent>
      </Card>
    </div>
      
      <div className={classes.footer}>

      </div>
    </div>
  );
}