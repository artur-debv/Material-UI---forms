import React from 'react';
import { Box, TextField } from '@mui/material';

const LoginFormInputs = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        size="small"
        fullWidth
        required
        sx={{
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
          '& .MuiInputLabel-root.Mui-required::after': {
            content: 'none',
          },
        }}
      />
      <TextField
        label="Senha"
        type="password"
        variant="outlined"
        size="small"
        fullWidth
        required
        sx={{
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'black',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black',
            },
          },
        }}
      />
    </Box>
  );
};

export default LoginFormInputs;
