import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { handleAmountChange } from '../redux/actions';


const TextFieldComp = () => {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value));
    };

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size='small' sx={{
                    '& .MuiInputLabel-root': { color: 'white' }, // white label color
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'white' }, // white border color
                        '&:hover fieldset': { borderColor: 'white' }, // white border color on hover
                        '&.Mui-focused fieldset': { borderColor: 'white' }, // white border color when focused
                        '& .MuiSelect-icon': { color: 'white' }, // white icon color
                        color: 'white', // white font color
                    },
                }}>
                <TextField
                onChange={handleChange}
                variant="outlined"
                label="Amount of questions"
                type="number"
                size="small"
                />
            </FormControl>

        </Box>
    )
}

export default TextFieldComp;

