import React from 'react';
import { Box, Container } from '@mui/material';
import LoginLogo from './LoginLogo';
import LoginFormInputs from './LoginFormInputs';
import LoginButton from './LoginButton';

const LoginForm = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '350px',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
        }}
      >
        <LoginLogo />
        <LoginFormInputs />
        <LoginButton />
      </Box>
    </Container>
  );
};

export default LoginForm;
