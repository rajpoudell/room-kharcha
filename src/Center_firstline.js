import React, { useState } from 'react'

export const Center_firstline= () => {
   
    

  return (
    <div>
        <div className="center--firstline">
            <input type="text" placeholder='Enter kharcha' id='input'/>
            <button id='btn'>Add</button>
            <div className="center--showkharcha">
                <p>Total Kharcha</p>
                <p>900</p>
            </div>
        </div>
    </div>
  )
}
