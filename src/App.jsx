import { useState } from 'react'


import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import {userData} from './utils/users.js';

function App() {
  //const [count, setCount] = useState(0)
  const [users,setUsers] = useState([]);

  console.log(userData);

  return (
    
      <div className='App'>
        
        < Header userData={userData} setUsers={setUsers} />
        < HomePage users={users}/>
    
        
    </div>
  )
}

export default App
