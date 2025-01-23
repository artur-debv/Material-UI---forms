import React from 'react';
import { Box, TextField } from '@mui/material';

const LoginFormInputs = () => {
  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
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
            color: 'black', // Altera a cor do label para preto quando o campo é focado
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey', // Cor da borda quando não está focado
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black', // Cor da borda quando o campo está focado (clicado)
            },
          },
          '& .MuiInputLabel-root.Mui-required::after': {
            content: 'none', // Remove o asterisco
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
            color: 'black', // Altera a cor do label para preto quando o campo é focado
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey', // Cor da borda quando não está focado
            },
            '&.Mui-focused fieldset': {
              borderColor: 'black', // Cor da borda quando o campo está focado (clicado)
            },
          },
          '& .MuiInputLabel-root.Mui-required::after': {
            content: 'none', // Remove o asterisco
          },
        }}
      />
    </Box>
  );
};

export default LoginFormInputs;
