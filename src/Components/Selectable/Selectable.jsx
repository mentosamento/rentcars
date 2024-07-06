


import React, { useEffect, useState } from 'react';
import "./Selectable.css";
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {changeMarka, changeModel, changeCity, changeMinYear, changeMaxYear, changeBan, changeColor, changeOwnerType}  from '../../features/search';


function Selectable() {
    const location = useLocation();
    const navigate = useNavigate();

    const [currently, setCurrently] = useState("all")
    const dispatch = useDispatch();
    function Allset() {
        setCurrently("all");

        dispatch(changeOwnerType("all") )
    }

    function Salonset() {
        setCurrently("salon");
        dispatch(changeOwnerType("salon") )

    }
    useEffect(() => {
        if (currently == "all") {
            dispatch(changeOwnerType("all") )
        }
        else {
            dispatch(changeOwnerType("salon") )
        }
    }, [currently])
    return (
        <div className='main-selectable-container'>
            <div className='selectable-container'>

                <div className='selectable-first' style={{backgroundColor: (currently=="all" ?  "#25C1CB" : "#fff")}} onClick={Allset} >
                    <h1 className='first-text' style={{color: (currently == "all" ? "#fff" : "#000")}}>
                        Hamısı
                    </h1>
                </div>

                <div className='selectable-second' style={{backgroundColor: (currently=="salon" ?  "#25C1CB" : "#fff")}} onClick={Salonset}>
                    <h1 className='second-text' style={{color: (currently == "salon" ? "#fff" : "#000")}}>
                        Salonlar
                    </h1>
                </div>
            </div>
            
        </div>
    );
}

export default Selectable;
