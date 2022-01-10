import React from 'react'
import './index.css'
import {
    useLocation
} from "react-router-dom"

export const Vault = () => {
    let location = useLocation();
    // let query = new URLSearchParams(location.search)
    // let temp = "";
    // for(let i=0; i<query.entries(); i++){
    //    temp += i[0]+i[1];
    //    console.log(temp)
    // }
    return (
        <div className='container'>
            <div>Vault AppRoles</div>
            <div>{location.search}</div>
        </div>
    )
}
