import React from 'react'
import Option from './Option'
import TramIcon from '@material-ui/icons/Tram';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import './Route.css'
function Route() {
    return (
        <div className='route'>
            <Option time={19} transport='Tram' rent={165}  icon={<TramIcon  className='route-icon'/>} color='#525659' />
            <Option time={13} transport='Bus'  rent={120} icon={<DirectionsBusIcon className='route-icon'/>} color='f7b27e'/>
            <Option time={5}  transport='Taxi' rent={20}  icon={<LocalTaxiIcon className='route-icon'/>} color='9fcbea'/>
        </div>
    )
}

export default Route
