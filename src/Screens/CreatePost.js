import React, { useEffect, useState } from 'react';
import SelectMui from '../Components/SelectMui/SelectMui';
import  {markaOptions, colorOptions, cityOptions, banOptions, optionsMap} from '../utils/Data';
import "./CreatePost.css"
import Header from '../Components/Header/Header';
import Logo from '../Components/Logo/Logo';
import { useSelector } from 'react-redux';

function CreatePost() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
    const post = useSelector((state) => state.post.value);

    return (
        <div>
            <div className='post-header'>
                <Logo />
            </div>
            <div className='post-subheader'>
                <h2 className='post-phone'>
                {screenWidth >= 550 ? "Siz +994508095655 nömrəsindən elan yerləşdirirsiz" : "Elan yerləşdir"}
                </h2>
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
