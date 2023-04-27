import React from 'react'
import './Header.css';


export default function Header() {
  return (
    <div className='header-container'>
        <button >Display Profiles</button>
        <div className="search-container">
            <input type="text" placeholder='enter country' />
            <button>Search</button>
        </div>


    </div>
  )
}
