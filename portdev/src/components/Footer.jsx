import * as React from 'react';
import '../app.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BlurOnSharpIcon from '@mui/icons-material/BlurOnSharp';
import ModalDialog from "./ModalDialog";
import ModalDialog2 from "./ModalDialog2";
import { RiWhatsappFill } from "react-icons/ri";
import { SiGithub, SiLinkedin  } from "react-icons/si";




const Footer = () => {



  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            > 
              <RiWhatsappFill className="iconW"/>
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            <SiGithub />
            </IconButton>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
                 <SiLinkedin className="iconL"/>
            </IconButton>        
      </Container>
    </AppBar>
  );
};
export default Footer;