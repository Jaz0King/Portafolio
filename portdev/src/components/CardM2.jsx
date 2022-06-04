import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import cross from '../assets/cross.png';
import port from '../assets/port.png';

 function CardM2() {
  return (
    <>
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={cross}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cross FT Ajusco 
        </Typography>
        <Typography variant="body2" color="text.secondary">
            La primer aplicación web con React y también la primer aplicación como desarrollador freelance.
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Esta aplicación permite al admnistrador tener un control de las fechas de corte de los pagos, ingresos, cantidad de usuarios, estadisiticas y una red social.
            Cuenta con tres flujos diferentes, la página principal, el administrador y el usuario.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Puedes visitar la página, para poder ingresar a la red social es necesari ser miembro, ¡inscribete!
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://crossftajusco.github.io/" target="_blank" underline="always"> 
          Ver
          </Link>
        </Button>
      </CardActions>
    </Card>
    </div>
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={port}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Portafolio
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Portafolio de trabajo utilizando la libreria Three.js para la creación de una escena interactiva en 3D.
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Vista interactiva de una escena espacial.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://jaz0king.github.io/Portafolio/" target="_blank" underline="always"> 
          Ver
          </Link>
        </Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}

export default CardM2;