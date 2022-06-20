import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg'


const Menu = () => (
<>
    <p><a href='#home'>Home</a></p>
    <p><a href='#story'>Story</a></p>
    <p><a href='#home'>Collection</a></p>
    <p><a href='#home'>Roadmap</a></p>
    <p><a href='#team'>Team</a></p>
    <p><a href='#home'>Wallet</a></p>
</>
)
const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);
  
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
      <div className='gpt3__navbar-links_logo'>
<img src={logo} alt="logo" />
      </div>
      <div className='gpt3__navbar-links_container'>
      <Menu />
      </div>
      </div>
      <div className='gpt3__navbar-menu' >
{toggleMenu
? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false) } />
: <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true) } />
}
{ toggleMenu && (
  <div className='gpt3__navbar-menu_container scale-up-center' >
<div>
<Menu />
</div>
  </div>
)}
      </div>
    </div>
  )
}

export default Navbar