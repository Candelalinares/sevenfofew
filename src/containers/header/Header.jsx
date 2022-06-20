import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content' >
        <h1 className='gradient__text'>WELCOME TO THE NEW WORLD</h1>
        {/*<p>Are you ready?</p>*/}
        {/*<div className='gpt3__header-content__input'>
          <input type="email" placeholder="Your email" />
          <button type="button">Suscribe</button>
        </div>*/}
        {/*<div className='gpt3__header-content__people' >
          <img src={people} alt="people" />
          <p>Ya somos +1000 en Instagram</p>
          </div>*/}
        </div>
        {/*<div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>*/}
    </div>
  )
}

export default Header