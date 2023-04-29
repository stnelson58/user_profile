import React from 'react'
import './Header.css';
import { userData } from '../../utils/users';


export default function Header({userData,users,setUsers}) {
  
const [country,setCountry]  = React.useState("")
const handleShowAll = () => {
    setUsers(userData)
}

const searchInput = (e) => {
    // console.log(e.target.value)
    setCountry(e.target.value)

}
const handleSearch = () =>{setUsers(userData.filter(item=>item.country.toLowerCase() == country.toLowerCase()))}





  return (

    <div className='header-container'>
        <button onClick={handleShowAll} >Display Profiles</button>
        <div className="search-container">
            <input type="text" onChange={searchInput} placeholder='enter country' />
            <button onClick={handleSearch}>Search</button>
        </div>


    </div>
  )
}
