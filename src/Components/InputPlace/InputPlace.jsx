import React from 'react';
import "./InputPlace.css"

function InputPlace({inputtitle, type}) {
    return (
        <div className='inputplace-container'>
            <input type={type} placeholder={inputtitle} className='inputplace-input'/>
        </div>
    );
}

export default InputPlace;