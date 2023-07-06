import React from 'react'
import { Images } from '../../assets'
import './Brand.css'

const Brand = () => {
  return (
    <div className='gpt__brand section__padding'>
      <div>
        <img src = {Images.google}/>
      </div>
      <div>
        <img src = {Images.slack}/>
      </div>
      <div>
        <img src = {Images.atlassian}/>
      </div>
      <div>
        <img src = {Images.dropbox}/>
      </div>
      <div>
        <img src = {Images.shopify}/>
      </div>
    </div>
  )
}

export default Brand