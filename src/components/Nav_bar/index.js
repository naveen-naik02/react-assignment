import React from 'react'
import './index.css'
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router';

export const Nav_bar = () => {
    let location = useLocation();

    return (
        <header className='nav-bar'>
            <img src={logo} alt=""  className='nav-logo'/>
            <ul className='nav-list'>
                <li className='nav-item'><Link to="/safes"><div>Safes</div></Link></li>
                <li className='nav-item'><Link to="/vault?data=hello"><div>Vault AppRoles</div></Link></li>
                <li className='nav-item'><Link to="/serviceAccounts"><div>Service Accounts</div></Link></li>
                <li className='nav-item'><Link to="/iam"><div>IAM Service Accounts</div></Link></li>
                <li className='nav-item'><Link to="./azure"><div>Azure Active Directory</div></Link></li>
            </ul>
            <div className="nav-end">
                <div className='nav-end-item'>
                    <i className='fa fa-file-text-o' aria-hidden ='true'></i>
                    Documentation
                </div>
                <div className="nav-end-item">
                    <i className='fa fa-user-o' aria-hidden='true'></i>
                    (Admin) Davis R.
                </div>
            </div>
        </header>
    )
}
