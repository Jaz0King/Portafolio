import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import trivia from '../assets/trivia.png';
import cypher from '../assets/cypher.png';
import mexflix from '../assets/mexflix.png';
import memory from '../assets/memory.png';
import dash from '../assets/dash.png';
import visitors from '../assets/visitors.png';

 function CardM() {
  return (
    <>
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={trivia}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Trivia 2.0 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Trivia de los pehores expresidentes que ha tenido méxico. Bsado en la obra contemporanea del celebre caricaturista RIUS.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://jaz0king.github.io/Trivia-Proyect/Trivia2.html" target="_blank" underline="always"> 
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
        image={cypher}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cifrador
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Cifrador de mensajes tipo Cesar Cypher.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Para entrar necesario introducir Usuario: "usuario" Contraseña: "123".
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://albertoouu.github.io/03_SecurityCypher-/src/index.html" target="_blank" underline="always"> 
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
        image={mexflix}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mexflix
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Buscador de películas
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Consume una APi gratuita que muetra todo tipo de películas relacionadas, también tiene diferentes secciones de recomendación y puedes ver toda la información de la película como reparto, año de estreno, duración, etc.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://jaz0king.github.io/Mexflix/src/index.html#pelis-animaci%C3%B3n" target="_blank" underline="always"> 
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
        image={memory}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          MemoryCard Game
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Juego de memoria o Memorama
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Por el 20 aniversario de la creación del ánime japones y wl juego de cartas Yu-gi-oh.
          Juego de 2 jugadores, solo nececitan introducir sus nombres.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://jaz0king.github.io/Memory_Game/src/index.html" target="_blank" underline="always"> 
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
        image={dash}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Students Data Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aplicación que muestra los datos de los alumnos de las 3 doferentes cedes de una esceula de bootcam.
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Para entrar es necesario introducir la ID: Directora y la Contraseña: 123.
         Intenta introducir una contraseña o id incorrectos.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://jaz0king.github.io/06_Students_data-analitics/src/login.html" target="_blank" underline="always"> 
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
        image={visitors}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Registro de Visitantes 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Aplicación que permite el registro de los visitantes a una torre de oficinas de trabajo.
          Los visitantes o trabajadores checkin y checkout gurdando sus datos, hora de visita y fotografía qu es capurada al momento de su registro.
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Para entrar como administrador es necesario introducir id: admin y la contraseña: 123.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
        <Link href="https://jaz0king.github.io/06_Students_data-analitics/src/login.html" target="_blank" underline="always"> 
          Ver
          </Link>
        </Button>
      </CardActions>
    </Card>
    </div>
    </>
  );
}

export default CardM;