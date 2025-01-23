import React from 'react';
import { Button } from '@mui/material';

const LoginButton = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        ':hover': {
          backgroundColor: '#333',
        },
        marginTop: '10px',
        textTransform: 'none',
      }}
      fullWidth
    >
      Login
    </Button>
  );
};

export default LoginButton;
