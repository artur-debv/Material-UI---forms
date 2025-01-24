import React from 'react';
import Button from '@mui/material/Button';

export function CustomButton({ type, children }) {
    return (
        <Button
            type={type}
            variant="contained"
            sx={{
                width: '100%',
                py: 2,
                mt: 4,
                fontSize: '0.875rem',
                fontWeight: 400,
                borderRadius: '8px',
                backgroundColor: '#1976d2', // Cor de fundo padrão (azul Material UI)
                color: '#ffffff', // Cor do texto (branco)
                '&:hover': {
                    backgroundColor: '#1565c0', // Cor para o hover (azul mais escuro)
                },
            }}
        >
            {children}
        </Button>
    );
}
