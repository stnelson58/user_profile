import React, { useState } from 'react'
import "./HomePage.css"
import { userData } from '../../utils/users'
import PersonCard from '../../components/PersonCard/PersonCard';



function HomePage({users}) {

   
   



  return (
    <div>
        <h1>User Directory</h1>
        <div className="person-container">

         {users.map((item,index)=><PersonCard key={index} person={item}/>)}

        </div>
      
    
    </div>
  )
}

export default HomePage