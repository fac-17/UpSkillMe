import React from "react";
// import OpportunitiesPage from "../../pages/OpportunitiesPage";
// import { Redirect, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function OpportunitiesButton(){
    return (
        <div>
            <Link to="/opportunities"><button>Opportunities</button></Link>
        </div>
    )
    
}


