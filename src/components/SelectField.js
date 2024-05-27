import React, { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';


const SelectField = props => {
    const {label, options} = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                dispatch(handleDifficultyChange(e.target.value));
                break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            default:
                return;
        
        
            

        }
    };

    return (
        <Box mt={3} width="100%">
            <FormControl size='small' fullWidth sx={{
                    '& .MuiInputLabel-root': { color: 'white' }, // white label color
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': { borderColor: 'white' }, // white border color
                        '&:hover fieldset': { borderColor: 'white' }, // white border color on hover
                        '&.Mui-focused fieldset': { borderColor: 'white' }, // white border color when focused
                        '& .MuiSelect-icon': { color: 'white' }, // white icon color
                        color: 'white', // white font color
                    },
                }}>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
                </Select>
            </FormControl>

        </Box>
    )
}

export default SelectField;