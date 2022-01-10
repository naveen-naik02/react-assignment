import React from 'react'


const SafesDetails = ({data}) => {
    return (
        <div className="right-banner">
                        <div className="right-captions">
                            {!data ?<div className='no-safes-created'>No Safes Created Yet</div>:<div className='no-safes-created'>{data.name}</div>}
                            {!data ?<div className='right-description'>Create a Safe to see your secrets, folders and permissions here</div>:<div className='right-description'>{data.desc}</div>}
                        </div>
        </div>
    )
}

export default SafesDetails
