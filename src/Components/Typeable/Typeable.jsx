












import React, { useEffect, useState } from 'react';
import "./Typeable.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {changeMarka, changeMaxPrice, changeMinPrice, changeModel, changeCity, changeMinYear, changeMaxYear, changeBan, changeColor, changeOwnerType}  from '../../features/search';

function Typeable() {

    const [value, setValue] = useState(''); // Initialize with a string for better handling
    const [maxValue, setMaxValue] = useState(''); // Initialize with a string for better handling
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleKeyDown = (event) => {
        const key = event.key;
      
        // Allow only numbers 0-9 and Backspace
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
    
        if (allowedKeys.includes(key)) {
          // Update state only if allowed key is pressed
          setValue((prevValue) => {
            if (key === 'Backspace') {
              // Handle Backspace: delete last character (except for initial 0)
              return prevValue.slice(0, -1); // Slicing for deletion
            } else {
              // Prevent leading zeros (except for initial 0)
              if (key !== '0' || prevValue !== '0') {
                return prevValue + key;
              }
              return prevValue; // Maintain initial 0
            }
          });
        } else {
          // Prevent default behavior for disallowed keys (optional: visual cue)
          event.preventDefault();
        }
        

        
      };

      useEffect(() => {
        


        dispatch(changeMaxYear( ( maxValue == "" ) ? "1000000000" : maxValue) )
      }, [maxValue])

      useEffect(() => {
        
        dispatch(changeMinYear( ( value  == "" ) ? "0" : value) )
      }, [value])


      const MaxhandleKeyDown = (event) => {
        const key = event.key;
    
        // Allow only numbers 0-9 and Backspace
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'Backspace'];
    
        if (allowedKeys.includes(key)) {
          // Update state only if allowed key is pressed
          setMaxValue((prevMaxValue) => {
            if (key === 'Backspace') {
              // Handle Backspace: delete last character (except for initial 0)
              return prevMaxValue.slice(0, -1); // Slicing for deletion
            } else {
              // Prevent leading zeros (except for initial 0)
              if (key !== '0' || prevMaxValue !== '0') {
                return prevMaxValue + key;
              }
              return prevMaxValue; // Maintain initial 0
            }
          });
        } else {
          // Prevent default behavior for disallowed keys (optional: visual cue)
          event.preventDefault();
        }


      };



    return (
        <div className='counters-container'>
            <div className='max-container count-container'>
                <input className='inputs' value={value} placeholder='Minimum il' type='text' onKeyDown={handleKeyDown} />
            </div>
            <div className='min-container count-container'>
                <input className='inputs' value={maxValue} placeholder='Maximum il' type='text' onKeyDown={MaxhandleKeyDown}/>
            </div>
        </div>
    );
}

export default Typeable;
