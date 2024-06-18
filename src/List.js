import React, {useState} from 'react'

export default function List(){
    const [employees, setEmployees] = useState([
        {
            name:"arun",
            number:"29",
            gender:"m"
        },
        {
            name:"sanjay",
            number:"34",
            gender:"m",
        },
        {
            name:"meena",
            number:"78",
            gender:"f",
        },
    ])
  return (
    <div>
        {
           employees.map((emp)=>(
            <div>
                <p>Name:{emp.name}</p>
                <p>Number:{emp.number}</p>
                <p>Gender:{emp.gender}</p>
          </div>
           ))
            
        }
      
    </div>
  )
}
