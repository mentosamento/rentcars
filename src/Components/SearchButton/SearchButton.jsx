import React from 'react';
import "./SearchButton.css"
import { useLocation, useNavigate } from 'react-router-dom';

function SearchButton() {
    const navigate = useNavigate();
    
    function ShowResults() {
        navigate("/search")

    }
    return (
        <div className='sbutton' onClick={ShowResults}>
            <h1 className='sbutton-text'>Elanları göstər</h1>
        </div>
    );
}

export default SearchButton;