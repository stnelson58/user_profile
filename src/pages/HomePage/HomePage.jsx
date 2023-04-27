import React from 'react'
import "./HomePage.css"


function HomePage(props) {
  return (
    <div>
        <h1>User Directory</h1>
        <div className="person-container">

        <h1>{props.username}</h1> 
        {props.country}

        </div>
      
    
    </div>
  )
}

export default HomePage