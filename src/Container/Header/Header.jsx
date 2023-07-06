import React from 'react'
import { Images } from '../../assets'
import './Header.css'

const Header = () => {
  return (
    <div className='gpt__header section__padding'>
      <div className='gpt__header_content'>
        <h1 className='gradient__text'>
          Let's Build Something
          amazing with GPT-3
          OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <div className='gpt__header_content-input'>
          <input type="email" placeholder='Your Email'>
          </input>
          <button type='button'>
            Get started
          </button>
        </div>

        <div className='gpt__header-content_people'>
          <img src={Images.people} />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt__header-image'>
        <img src={Images.ai} />
      </div>
    </div>
  )
}

export default Header