import React, { useState } from 'react';
import SelectMui from '../Components/SelectMui/SelectMui';
import  {markaOptions, colorOptions, cityOptions, banOptions, optionsMap} from '../utils/Data';
import "./CreatePost.css"
import Header from '../Components/Header/Header';
import Logo from '../Components/Logo/Logo';
import { useSelector } from 'react-redux';

function CreatePost() {
    
    const post = useSelector((state) => state.post.value);

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
                    <SelectMui options={cityOptions} title="Şəhər"/>
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
                <h1>{post.marka}</h1>
                <h1>{post.model}</h1>
                <h1>{post.city}</h1>
            </div>
            
        </div>
    );
};

export default CreatePost;
