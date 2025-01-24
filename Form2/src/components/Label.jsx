import React from 'react';
import FormLabel from '@mui/material/FormLabel';

export function Label({ htmlFor, text, style }) {
    return (
        <FormLabel 
            htmlFor={htmlFor} 
            sx={{ 
                display: 'block', 
                fontSize: '0.875rem', // Equivalente ao text-sm no Tailwind 
                marginBottom: '0.25rem', // mb-1 no Tailwind
                ...style // Permite sobrescrever estilos via prop
            }}
        >
            {text}
        </FormLabel>
    );
}
