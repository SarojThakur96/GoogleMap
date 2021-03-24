import React from 'react'
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import './Header.css';
function Header() {
    return (
        <div className='header'>

        <EditLocationRoundedIcon className='icon'/>
        <ExploreRoundedIcon className='icon'/>

        </div>
    )
}

export default Header
