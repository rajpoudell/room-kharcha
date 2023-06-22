import React, { useState } from 'react'
import "./index.css"
import { Center_firstline } from './Center_firstline';


const App = () => {
  return (
    <div className='main'>
    <div className="main--innerblock">
        <div className="main--center">
            <Center_firstline />
            <div className="main--appendchild">
                <p>1.</p>
                <p>tomato</p>
                <p>date</p>
                <p>X</p>
            </div>
        </div>
    </div>


</div>
  )
}

export default App;