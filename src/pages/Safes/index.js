import React from 'react'
import './index.css'
import search from '../../images/search.png'
import add from '../../images/add.png'
import add_folder from '../../images/add_folder.png'
import secret from '../../images/secret.png'
import { useState, useEffect } from 'react';
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'

import { useDispatch } from "react-redux";
import { deleteSafes,deletesecrets,createSafes } from '../../store/action'
import { bindActionCreators } from 'redux'
import SafesCard from '../../components/safesCard'
import SafesDetails from '../../components/safesDetails'
import Secretscard from '../../components/SecretsCard'
import Secrets from '../../components/Secrets'
import add_folder_active from '../../images/add_folder_active.png'


export const Safes = () => {

    const [show, setshow] = useState(false)
    const state = useSelector((state) => state.safes.safesData);
    const [searchTerm,setsearchTearm] = useState("")
    const [activedata, setactivedata] = useState(null)
    const [activateSecret, setactivateSecret] = useState(false)
    const [nosafes, setnosafes] = useState(false)
  
   
    console.log(state)
    useEffect(() => {if(state && state.length > 0){
        setactivedata(state[0])
    }
    else
        setactivedata(null)
    }, [state])


    const [carddata, setcarddata] = useState(null)
    const handleedit = (element)=>{
        setcarddata(element)
        setshow(true)
    }
  
    const dispatch = useDispatch();
    const  deleteSafesaction = bindActionCreators(deleteSafes, dispatch);
    // const  createSafesaction = bindActionCreators(createSafes, dispatch);
    const handledelete = (id) => {
        // const larr = [...state]
        // let temp = larr.filter(element=>element.id !==id)
        // deleteSafesaction(temp)
        deleteSafesaction(id)
    }



    const setscret = ()=>{
        if(state && state.length>0){
            setactivateSecret(true)
        }
    }
    

  
    return (
        <div className='container'>
            <div className="safes">
                <section className='safes-left'>
                    <div className='header-search-wrap'>
                        <p className='all-safes'>All Safes <span>({state && state.length})</span></p>
                        <div className="search-box">
                            <img src={search} alt="" className='search-icon' />
                            <input type="text" placeholder='Search' className='search-input' onKeyUp={(e)=>{setsearchTearm(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='h1'></div>
                    {state && state.length === 0 ? <div className="left-bottom">
                        <div className="left-background"></div>
                        <div className="left-caption">Create a Safe and get started!</div>
                        <img src={add} alt="" className="add-img" onClick={() => setshow(true)} />
                    </div> : <div className='safes-cards-wrap'>{state && state.filter((val)=>{
                        if (searchTerm ===""){
                            return val
                        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                       
                    }).length!==0 ?state.filter((val)=>{
                        if (searchTerm ===""){
                            return val
                        } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val
                        }
                       
                    }).map((element,i) => { return <SafesCard key={i} element={element} handledelete={(id)=>handledelete(id)} handleeditdata={(element)=>handleedit(element)} setactivedata={(element)=>setactivedata(element)} activeid={activedata&&activedata.id}/> }):<div>nosafesfound</div>}
                    <img src={add} alt="" className="left-add-img" onClick={() => setshow(true)}/></div>}
                    <div className="model model-hidden"></div>
                </section>
                <section className='safes-right'>
                    <SafesDetails data ={activedata}/>
                    
                  {(!activedata || (activedata && activedata.secret.length===0))? <div className="secrets">
                        <div className="secrets-header">
                            <p>Secrets</p>
                            <img src={!activedata?add_folder:add_folder_active} alt="" className="secret-add-folder" onClick={()=>setscret()}/>
                        </div>
                        <div className="h1-1"></div>
                        <div className="secrets-count">{activedata?activedata.secret.length:0} Secrets</div>
                        
                      <div className="secrets_list">
                            <img src={secret} alt="" className="secrets_img" />
                            <div className='secret-captions-wrap'>
                            <div className="secrets-caption">Add a <span className="secrets__caption-highlight">
                                Folder</span> and then you’ll be able to</div>
                            <div className="secrets-caption">add <span className="secrets__caption-highlight">Secrets </span>
                                to view them all here</div></div>
                            <button type='button' className="button">+ Add</button>
                        </div>
                    </div>:<div className="secrets-hidden">
                        <div className="secrets-header">
                            <p>Secrets</p>
                            <img src={!activedata?add_folder:add_folder_active} alt="" className="secret-add-folder" onClick={()=>setscret()}/>
                        </div>
                        <div className="h1-1"></div>
                        <div className="secrets-count">{activedata?activedata.secret.length:0} Secrets</div>
                        <div className="secret-wrap">
                        {activedata && activedata.secret && activedata.secret.map((el)=>{return <Secrets el={el} data={activedata}/>})}
                        </div></div>}
                </section>
            </div>
            {show && <Modal show={show} setshow={(bool) => setshow(bool)} element={carddata} setdata={()=>setcarddata(null)}/>}
            {activateSecret &&<Secretscard data={activedata} activateSecret={activateSecret} setactivateSecret={(bool)=>setactivateSecret(bool)} />}
        </div>
    )
}
