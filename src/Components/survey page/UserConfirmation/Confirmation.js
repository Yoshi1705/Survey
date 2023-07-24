import React from 'react'
import './confirm.css';

function Confirmation({yesConfirm , noConfirm}) {
  return (
    <div className='confirm-container'>
      <div className='text-container'>
        <h2>ARE YOU SURE?</h2>
        <br/><br/>
         <p>Do you want to submit the form?</p>
          <br/>
          <div className='confirm-button'> 
         <button onClick={yesConfirm}>YES</button>
         <button onClick = {noConfirm}>No</button>
         </div>
      </div>
         
    </div>
  )
}

export default Confirmation;