import React, { Component, useState, useEffect }  from 'react';
import './index.css';
import safe_icon from '../../images/safe_icon.png'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { createSafes, editSafes } from '../../store/action';


const Modal = ({show,setshow,element,setdata}) => {
    const [name, setname] = useState("")
    const [owner, setowner] = useState("")
    const [type, settype] = useState("")
    const [desc, setdesc] = useState("")
 

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  
  const state = useSelector((state) => state.safes.safesData);

  const dispatch = useDispatch();


  const  createSafesaction = bindActionCreators(createSafes, dispatch);

  const createsafeData = (e)=>{
      let obj = {name:name,owner:owner,type:type,desc:desc,id:Date.now(),secret:[]}
      createSafesaction(obj);
      setshow(false)
  }
  const  editSafesaction = bindActionCreators(editSafes, dispatch);

  const editsafesData = ()=>{
    let obj = {name:name,owner:owner,type:type,desc:desc,id:element.id,secret:element.secret}
    editSafesaction(obj);
    setshow(false)
    setdata()
  }

  useEffect(()=>{
      if(element){
          setname(element.name)
          setowner(element.owner)
          settype(element.type)
          setdesc(element.desc)
      }
  },[element])


  return (
    <div className="modal display-block">
      <form className="modal-main">
          <p className='form-head'>Create Safe</p>
          <div className="safes-form-info">
              <img src={safe_icon} alt="" className="safes-form-logo" />
              <p className='safes-form-text'>A Safe is a logical unit to store the secrets. All the safes are created within Vault. You can control access only at the safe level. As a vault administrator you can manage safes but cannot view the content of the safe.</p>
          </div>
          <div className="input-wrap">
              <div className="input-group-modal">
                  <label htmlFor="name">Safe Name</label>
                  <input type="text" className='input-name' id='name' placeholder='Enter Safes Name' value={name} onChange={(e)=>setname(e.target.value)}/>
              </div>
              <div className="input-group-modal">
                  <label htmlFor="owner">Owner</label>
                  <input type="text" className='input-name' id='owner' placeholder='Enter Safes Owner Name' value={owner} onChange={(e)=>setowner(e.target.value)}/>
              </div>
              <div className="select-group">
                  <label htmlFor="type">Type</label>
                  <select name="" id="type" className='select' value={type} onChange={(e)=>settype(e.target.value)}>
                      <option value="Personal">Personal</option>
                      <option value="Other">Other</option>
                  </select>
              </div>
              <div className="input-group-modal">
                  <label htmlFor="description">Description</label>
                  <textarea name="" id="description" className='input-name' placeholder='Enter Description' rows="2" value={desc} onChange={(e)=>setdesc(e.target.value)}></textarea>
              </div>
              <div className="input-help">Please add a minimum of 10 characters</div>
              <div className="form-bottom-group">
                 <button type="button" className="cancel" onClick={()=>setshow(false)}>Close</button>
    
                 {!element ? <button className={"create" + ((name==="" || owner==="" || desc.length<=10)?"no-action":"")} type='button' onClick={()=>createsafeData()}>+ Create</button>
                 :<button type='button'  className={"create" + ((name==="" || owner==="" || desc.length<=10)?"no-action":"")} onClick={()=>editsafesData()}>Update</button>}
              </div>                 
          </div>
        
      </form>
    </div>
  );
};

export default Modal;