import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logoJcsx from '../assets/logoJcsx.svg';

export const Header = () => {
    return (
        <AppBar 
            position="fixed" 
            sx={{ 
                backgroundColor: 'black', 
                boxShadow: 3, 
                zIndex: 1300, // Garante que fique no topo
                display: { xs: 'none', md: 'flex' }, // Oculta em telas menores que "md"
            }}
        >
            <Toolbar sx={{ justifyContent: 'center', alignItems: 'center', py: 1 }}>
                <Box
                    component="img"
                    src={logoJcsx}
                    alt="Logo JCSx"
                    sx={{ width: 60, height: 60 }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
