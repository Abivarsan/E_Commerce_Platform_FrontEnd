import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@mui/material";
  
  export default function AlertBox({ open, title, message, onClose, onAgree }) {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '8px',
            padding: '20px',
            backgroundColor: '#fff',
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            color: '#f06321',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              color: '#333', // Dark text for better readability
              textAlign: 'center',
            }}
          >
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center', // Center buttons
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              color: '#f06321',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#f0a34a',
              },
            }}
          >
            No
          </Button>
          <Button
            onClick={onAgree}
            autoFocus
            sx={{
              color: '#fff',
              backgroundColor: '#f06321',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#d05b1c',
              },
            }}
          >
            Yes, Sure
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
  