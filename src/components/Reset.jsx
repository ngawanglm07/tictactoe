import React from 'react'

function Reset({ moveTo, winner }) {
   return (
      <button type="button" className={`btn-reset ${winner ? 'active' : ''}`} onClick={() => moveTo(0)}>
         Reset
      </button>
   )
}

export default Reset