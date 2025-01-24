import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';

export const InputField = forwardRef((props, ref) => {
    const { type, placeholder, ...rest } = props;

    return (
        <TextField
            type={type}
            placeholder={placeholder}
            inputRef={ref}
            {...rest}
            variant="outlined"
            fullWidth
            sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                    borderRadius: '0', // Remove arredondamento
                },
            }}
        />
    );
});
