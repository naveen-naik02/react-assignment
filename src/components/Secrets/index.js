import React from 'react'
import add_folder from '../../images/add_folder.png'
import './index.css'
import delete_icon from '../../images/delete_icon.png'
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {createsecrets} from '../../store/action'


const Secrets = ({ el,data }) => {
    const dispatch = useDispatch();

    const  createSafessecrets = bindActionCreators(createsecrets, dispatch);
    
const handledeleteSecret = (id)=>{
    let secretarr = [...data.secret]
    const index = secretarr.findIndex(element => element.id === id)
    secretarr.splice(index,1)
    createSafessecrets({...data, secret:secretarr})    
}
    return (
        <div className='secrets-card'>
            <div className='folder-text-wrap'>
                <img src={add_folder} alt="" className="folder" />
                <div text-wrap>
                    <div>{el.secretname}</div>
                    <div className='seconds'>a few seconds ago</div>
                </div>
            </div>
            <img src={delete_icon} alt="" className='delete-secrets' onClick={() => handledeleteSecret(el.id)} />
        </div>
    )
}

export default Secrets;
