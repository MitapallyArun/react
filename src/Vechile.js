import React, { useState } from 'react'
import Display from './Display'

export default function Vechile() {
    const [vechile, setVechile]= useState([
        {
            name:"ktm",
            price:"200000",
            model:"2019",
            pic:"https://stat.overdrive.in/wp-content/odgallery/2021/10/61202_2022_KTM-RC-200_STD_1_468x263.jpg"

        },
        {
            name:"duke",
            price:"1500000",
            model:"2020",
            pic:"https://media.zigcdn.com/media/model/2023/Jun/front-left-view-233690314_600x400.jpg"

        },
        {
            name:"rx100",
            price:"1000000",
            model:"2010",
            pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiyYpGrOiY7E9hKYxiTu07naO1BSqVhDh6xg&s"
        }
    ])
  return (
    <div>
        <Display myvechiles={vechile}/>
      
    </div>
  )
}
