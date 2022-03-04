import React from 'react'
import './Reaction.css'

function Reaction({ Icon, title,color }) {
  return (
    <div class="reaction">
        <Icon style={{ color: color }} />
        <h4>{title}</h4>
    </div>

  )
}

export default Reaction