import React from 'react'
import './vechile.css'
export default function Display(Display) {
  return (
    <div className='vechile-parent'>
      {
       Display.vechile.map((vechile)=>(
          <div className='vechicle'>
            <p>Name:{vechile.name}</p>
            <p>Price:{vechile.price}</p>
            <p>Model:{vechile.model}</p>
            <img src={vechile.pic} alt={vechile.name} width="25%"/>
             </div>
        ))
      }
      
    </div>
  )
}
