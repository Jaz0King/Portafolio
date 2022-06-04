import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

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

 function ModalDialog5() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button  onClick={handleClickOpen}>
        <div className="divButton">
          Contacto
        </div>
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Contacto
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <tr>
            <th>Whatsapp:</th>
            <td>52-5576703061</td>
            </tr>
          </Typography>
          <Typography gutterBottom>
          <tr>
            <th>Email:</th>
            <td>linzerking@gmail.com</td>
            </tr>
            </Typography>
            <Typography gutterBottom>
          <tr>
            <th>Linkedin:</th>
            <td>https://www.linkedin.com/in/jaziel-ram%C3%ADrez-34a277217/</td>
            </tr>
            </Typography>
            <Typography gutterBottom>
          <tr>
            <th>Facebook:</th>
            <td>https://www.facebook.com/jazo.ramirez.9</td>
            </tr>
            </Typography>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}

export default ModalDialog5;