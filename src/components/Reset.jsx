import React from 'react'

const Reset = ({moveTo}) =>{
 return (
    <button type="button" className='btn-reset' onClick={() => moveTo(0)}>
    Reset
    </button>
 )
}

export default Reset