import * as React from 'react';
import '../app.css'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import js from '../assets/js.png';
import resp from '../assets/resp.png';
import {SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiMaterialui, SiGnubash, SiGit, SiGithub, SiFirebase, SiMarkdown, SiTailwindcss, SiNpm } from "react-icons/si";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

 function ModalDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="mD1">
      <Button  onClick={handleClickOpen}>
        <div className="divButton">
          Bío
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Acerca de mí
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Soy Jaziel Ramírez Desarrollador web, diseñador gráco y maestro, mi pasión es el desarrollo web y de software, la tecnología, el diseño y el arte.
          </Typography>
          <Typography gutterBottom>
            <th>Certificaciones</th>
            <tr>
            <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={resp}
      />
            <Link href="https://www.freecodecamp.org/certification/fcce547ef2c-7b28-481a-a68b-373601c9c7a5/responsive-web-design" target="_blank" underline="always"> 
            - Responsive Web Design
            </Link>
            </tr>
            <tr>
            <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={js}
      />
            <Link href="https://www.freecodecamp.org/certification/fcce547ef2c-7b28-481a-a68b-373601c9c7a5/javascript-algorithms-and-data-structures" target="_blank" underline="always"> 
            - JavaScript Algorithms and Data Structures
            </Link>
            </tr>
          </Typography>
          <Typography gutterBottom>
          Egresado de BootCamp Ajusco, desarrollador frerlance con proyectos individuales y colaborativos en GitHub.
          </Typography>
          <Link href="https://github.com/Jaz0King" target="_blank" underline="always"> 
            - Mi Perfil en Github
            </Link>
          <Typography gutterBottom>
            <th>TechSkills</th>
            <SiHtml5 />
            <SiCss3/>
            <SiJavascript />
            <SiReact/>
            <SiBootstrap />
            <SiMaterialui />
            <SiGnubash />
            <SiGit />
            <SiGithub />
            <SiFirebase/>
            <SiMarkdown />
            <SiTailwindcss />
            <SiNpm />
            <th>SoftSkills</th>
            <tr>* Comunicación acertiva</tr>
            <tr>* Pensamiento analítico</tr>
            <tr>* Trabajo en equipo</tr>
            <tr>* Reciliencia</tr>
            <tr>* Empatía</tr>
            <tr>* Autoaprendizaje</tr>
            <tr>* Creatividad</tr>
            <tr>* Enseñanza</tr>
          </Typography>
          
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default ModalDialog;
