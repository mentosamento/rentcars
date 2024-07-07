

import { Box, MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeMarka, changeMaxPrice, changeMinPrice, changeModel, changeCity, changeMinYear, changeMaxYear, changeBan, changeColor, changeOwnerType} from '../../features/post';
import { optionsMap } from '../../utils/Data';


const useStyles = makeStyles({
    select: {
      '& .MuiSelect-select': { // Target the main select box
        textAlign: 'left',
      },
    },
  });

function SelectMui({options, title}) {
    const post = useSelector((state) => state.post.value);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [select, setSelect] = useState("");
    const handleChange = (e) => {
        setSelect(e.target.value);
        
        // eslint-disable-next-line default-case
        switch (title) {
            case "Marka":
                dispatch(changeMarka( e.target.value) );
                break;
            case "Model":
                dispatch(changeModel( e.target.value) );
                break;
            case "Şəhər":
                dispatch(changeCity(  e.target.value) );
                break;
        }
    }
    function optionAssign() {
        if (title == "Model") {
            if (post.marka == "none") {
                return [];
            }
            else {
                return optionsMap[post.marka];
            }
        } else {
            return options;
        }
    }
    useEffect(() => {
        dispatch(changeModel("none") );
    }, [post.marka])

    
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
                    {optionAssign().map((data) => (
                        <MenuItem key={data.value} value={data.value}>{data.label}</MenuItem>
                    ))}
                    
                </TextField>
            </Box>
        
    );
};

export default SelectMui;
