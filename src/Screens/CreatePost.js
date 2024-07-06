import React, { useState } from 'react';
import SelectMui from '../Components/SelectMui/SelectMui';
import  {markaOptions, colorOptions, cityOptions, banOptions} from '../utils/Data';
import "./CreatePost.css"
import Header from '../Components/Header/Header';
import Logo from '../Components/Logo/Logo';

function CreatePost() {
    
    
    return (
        <div>
            <div className='post-header'>
                <Logo />
            </div>
            <div className='post-subheader'>
                <h2 className='post-phone'>Siz +994508095655 nömrəsindən elan yerləşdirirsiz</h2>
            </div>

            <div className='post-grid'>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Model"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
                <div>
                    <SelectMui options={markaOptions} title="Marka"/>
                </div>
            </div>
            
        </div>
    );
};

export default CreatePost;
