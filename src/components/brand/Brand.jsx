import React from 'react';
import './brand.css';

import { google, slack, atlassian, dropbox, shopify } from './importss'


const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
       <img className='img' src={google} alt="google" />
      </div>
      <div>
       <img className='img' src={slack} alt="slack" />
      </div>
      <div>
      <img className='img' src={atlassian} alt="atlassian" />
      </div>
      <div>
       <img className='img' src={dropbox} alt="dropbox" />
      </div>
      <div>
       <img className='img' src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand