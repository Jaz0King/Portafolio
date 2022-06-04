import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Reglamento from "../assets/CV.pdf";

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

 function ModalDialog4() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    display: "block",
    margin: "auto",
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
        <div className="divButton">
          C.V.
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Curriculum Vitae
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
              
          <a target="_blanck" href={Reglamento}>
                <IconButton color="primary">
                  Abrir Documento
                  
                </IconButton>
              </a>
              <div>
            <object data={Reglamento} style={style} label="pdf">
            </object>
            </div>
          </Typography>
          <Typography gutterBottom>
              Si no puedes ver el pdf abrelo en una ventana nueva, tamién es interactivo.
          </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default ModalDialog4;