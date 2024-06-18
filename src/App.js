
// import {useState} from 'react'
// // import Props from './Props'
// // import List from './List'
// // import Input from './Input'
// // import Vechile from './Vechile'
// import USerData from './USerData'

// function App(){
//   const [name,setName]=useState('Reactjs')
//   const [year,setYear]=useState(2013)
//   return(
//     <div>
//       <USerData/>
//       {/* <Input/> */}
//      {/* <List/>   */}
      
//       {/* <p>good af</p>
//       <h1> hello world</h1>
//       <p>Name:{name} Year: {year}</p>
//       <Props studentName="Arun" studentRollmo="1"/>
//       <Props studentName="sanjay" studentRollmo="2"/>
//       <Props studentName="meena" studentRollmo="3"/> */}

//     {/* </div> */}
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navigation from './Navigation'

export default function App() {
  return (
    <BrowserRouter>
    <Navigation/>
    <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    
  )
}
