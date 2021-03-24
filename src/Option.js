import React from 'react'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RoomIcon from '@material-ui/icons/Room';
import './Option.css';
function Option({time,transport,rent,icon,color}) {
    return (
        <div className="option">
            <FiberManualRecordIcon className='right-icon'/>
            <div className="option-center">
                  <h3>{time}</h3>
                  <p>min</p>
            </div>
            <div className="option-right">
                <div className="option-right-right">
                   <RoomIcon className='center-icon'/>
                   <div className="transport">
                     <h2>{transport}</h2>
                      <p>{rent}</p>
                   </div>
                    
                </div>
                
                <div className="option-right-left">
                  {icon}
                </div>
            </div>
        </div>
    )
}

export default Option
