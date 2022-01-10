import React,{useState} from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import {createsecrets} from '../../store/action'

import './index.css'

const Secretscard = ({data,activateSecret,setactivateSecret}) => {
    const dispatch = useDispatch();

    const  createSafessecrets = bindActionCreators(createsecrets, dispatch);

    const [secretval, setsecretval] = useState("")
    var re = /^\w+$/;
   
    const addsecrets = (val)=>{
        const secretesData = {secretname:val,id:Date.now()}
        let secretarr = [...data.secret]
        secretarr.push(secretesData)
        createSafessecrets({...data, secret:secretarr})
        setactivateSecret(false)
    }
    console.log(re.test(secretval))
    return (
        <div className='secrets-modal'>
            <form className="secrets-form">
                <div className='add-folder'>Add Folder</div>
                <div className="input-group">
                    <label htmlFor="">Folder Name</label>
                    <input type="text" id='name' className='input' onChange={(e)=>setsecretval(e.target.value)} />
                    <div className="input-help">
                    Please enter a minimum of 3 characters lowercase alphabets, numbers and underscores only.
                    </div>
                </div>
                <div className="secrets-button">
                    <button type='button' className='cancel-button' onClick={()=>setactivateSecret(false)}>cancel</button>
                    <button type='button' className={"save-button" + ((secretval.length >= 3 && re.test(secretval))?"":"-no-action")} onClick={()=>addsecrets(secretval)} >save</button>
                </div>
            </form>
        </div>
    )
}

export default Secretscard;
