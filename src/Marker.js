import React from 'react'
import './Marker.css'

function Marker({color, name, id }) {
    return (
        <div>
        <div
          className="pin bounce"
          style={{ backgroundColor: color, cursor: 'pointer' }}
          title={name}
        />
        <div className="pulse" />
      </div>
    )
}

export default Marker
