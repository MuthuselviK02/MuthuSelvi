import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
<>
<h1>Welcome</h1>

<nav className='navbar'>
    <ul>
        <li><Link className='menu' to="/">Home</Link></li>
        <li><Link className='menu'to="/about">About</Link></li>
        <li><Link className='menu' to="/contact">Contact</Link></li>
        <li><Link className='menu' to="*">NotFound</Link></li>
    </ul>
</nav>
<img src="vite.svg" alt="vite" height={150} width={150}/>
</>    
  );  
}       
 