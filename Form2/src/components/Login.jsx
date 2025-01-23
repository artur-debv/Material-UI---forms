import React from 'react';
import { Container, Box, TextField, Button, Typography, AppBar, Toolbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Login = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {!isMobile && (
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6" component="div">
                                JSCX
                            </Typography>
                        </Toolbar>
                    </AppBar>
                )}

                {isMobile && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img src="logo.png" alt="Logo JSCX" style={{ width: '50%', marginBottom: '16px' }} />
                    </Box>
                )}
                
                <Typography component="h1" variant="h5" sx={{ marginTop: 2 }}>
                    Login
                </Typography>

                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default Login;
