import React,{useState} from 'react'
import safe_icon from '../../images/safe_icon.png'
import delete_icon from '../../images/delete_icon.png'
import edit from '../../images/edit.png'
import './index.css'


const SafesCard = ({ element, handledelete, handleeditdata,setactivedata,activeid}) => {

    const toggleclass = (el)=>{
        setactivedata(el)

    }
    
    return (
        <div className={activeid===element.id ?'safes-cards':'select-cards'} onClick={()=>toggleclass(element)}> 
        
            <div className='safes-name-wrap'>
                <img src={safe_icon} alt="" className='cards-safe-icon' />
                <div><div className='safes-name'>{element.name}</div><div className='update-text'>Last Updated: a few seconds ago</div></div>
            </div>
            <div className='edit-delete-wrap'>
                <img src={edit} alt="" className='edit' onClick={() =>handleeditdata(element)} />
                <img src={delete_icon} alt="" className='delete-icon' onClick={() => handledelete(element.id)} />
            </div>
        </div>
        
    )
}

export default SafesCard;
