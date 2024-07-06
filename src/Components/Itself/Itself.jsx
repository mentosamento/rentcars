

import React, { useState } from 'react';
import "./Itself.css"
import Selectbox from '../Selectbox/Selectbox';
import Typeable from '../Typeable/Typeable';
import Cashtype from '../Cashtype/Cashtype';
import Selectable from '../Selectable/Selectable';
import SearchButton from '../SearchButton/SearchButton';
import  {markaOptions, colorOptions, cityOptions, banOptions} from '../../utils/Data';



function Itself() {

    return(
        <div className='the-search-bar'>
            <h1 className='main-title'>Avtomibillərin icarəsi</h1>
            <div className='marka-box-container'>
                <div className='select-box'>
                  <Selectbox type="marka" options={markaOptions} title="Marka"/>
                </div>
                <div className='select-box'>
                  <Selectbox type="model" options={cityOptions} title="Model"/>
                </div>
                <div className='select-box'>
                  <Selectbox type="city" options={cityOptions} title="Şəhər"/>
                </div>
                <div className='select-box'>
                  <Typeable />
                </div>
                <div className='select-box'>
                  <Selectbox type="ban" options={banOptions} title="Ban növü"/>
                </div>
                <div className='select-box'>
                  <Cashtype />
                </div>
                <div className='select-box'>
                  <Selectbox type="color" options={colorOptions} title="Rəng"/>
                </div>
                <div className='select-box'>
                  <Selectable />
                </div>
                <div className='select-box'>
                  <SearchButton />
                </div>
                
                
            </div>
        </div>
    )
}
export default Itself;
