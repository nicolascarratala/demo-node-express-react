import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';

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
    height:100
  },
  card:{
    
    minHeight: 300
  }
});

export default function Cards() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.root}>
      <div className={classes.header}>

</div>
      <Card className={classes.card}>
        <CardContent>
         
          <Typography variant="body2" component="p">
            Para ver el menu presione el boton de la camara 📷 que tiene abajo y luego escanee la siguiente imagen 🖼
          {/* <Button variant="contained" style={{borderRadius: 90, height: 60, width: 1}} color="secondary">
            <CameraEnhanceIcon/>
          </Button> */}
          </Typography>
          <img className={classes.img} src="http://localhost:3000/target"></img>
          {/* <Typography variant="body2" component="p">
            Luego escanee la siguiente imagen
            <img className={classes.img} src="http://localhost:3000/target"></img>
          </Typography>     */}

        <Typography variant="body2" component="p">
            
            También es posible verlo en pfd con el boton de la esquina inferior derecha 
          {/* <Button variant="contained" style={{borderRadius: 90, height: 60, width: 1}} color="secondary">
            <CameraEnhanceIcon/>
          </Button> */}
          </Typography>
        
        </CardContent>
      </Card>
      <div className={classes.footer}>

      </div>
    </div>
  );
}