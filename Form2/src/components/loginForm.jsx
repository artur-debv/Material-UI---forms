import React from 'react';
import { Box, AppBar, Toolbar, TextField, Button, Paper, Typography } from '@mui/material';
import logoJcsx from '../assets/logoJcsx.svg';

export function LoginForm() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        paddingTop: { xs: '96px', md: '64px' },
        backgroundColor: '#f0f0f0',
      }}
    >
      {/* Header fixo no topo */}
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <img src={logoJcsx} alt="Logo JCSx" style={{ height: 40 }} />
        </Toolbar>
      </AppBar>

      <Paper
        elevation={3}
        sx={{
          maxWidth: 360,
          width: '100%',
          overflow: 'hidden',
          borderRadius: 2,
          marginTop: 3,
          bgcolor: 'white',
        }}
      >
        {/* Logo para telas menores */}
        <Box
          sx={{
            position: 'relative',
            height: 120,
            bgcolor: '#1976d2',
            display: { xs: 'block', md: 'none' },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              opacity: 0.1,
              backgroundImage: 'radial-gradient(circle at 1px 1px, gray 1px, transparent 0)',
              backgroundSize: '12px 12px',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <img src={logoJcsx} alt="Logo" style={{ height: 60 }} />
          </Box>
        </Box>

        <Box sx={{ padding: 3 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              marginBottom: 2,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333',
            }}
          >
            Login
          </Typography>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ padding: '10px', textTransform: 'none', fontWeight: 'bold' }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Paper>
    </Box>
  );
}
