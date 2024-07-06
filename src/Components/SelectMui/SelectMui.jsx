

import { Box, MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';


const useStyles = makeStyles({
    select: {
      '& .MuiSelect-select': { // Target the main select box
        textAlign: 'left',
      },
    },
  });

function SelectMui({options, title}) {
    const classes = useStyles();

    const [select, setSelect] = useState("");
    const handleChange = (e) => {
        setSelect(e.target.value);
        console.log(e.target.value);
    }
    

    
    return (
            <Box>
                <TextField
                    label={title}
                    select
                    value={select}
                    onChange={handleChange}
                    fullWidth
                    className={classes.select}
                    style={{ fontSize: '16px' }}
                >
                    {options.map((data) => (
                        <MenuItem key={data.value} value={data.value}>{data.label}</MenuItem>
                    ))}
                    
                </TextField>
            </Box>
        
    );
};

export default SelectMui;
