import React, { useState } from 'react'
import './NavBar.css'
import { RiMenu3line, RiCloseLine, RiMenu4Fill } from "react-icons/ri"
import { Images } from '../../assets'

const Menu = () =>
(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#whpt'>What is GPT</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#Blog'>Library</a></p>
  </>
)

const NavBar = () => {

  const [toggeleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt__navbar'>
      <div className='gpt__navabr-links'>
        <div className='gpt__navbar-links_logo'>
          <img src={Images.logo} alt='logo' />
        </div>
        <div className='gpt__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt__navbar-sign'>
        <p><a>Sign In</a></p>
        <button type='button'>
          Sign up
        </button>
      </div>
      <div className='gpt__navbar-menu'>
        {toggeleMenu ?
          <RiCloseLine
            color='#fff'
            size={27}
            onClick={() => {
              setToggleMenu(false)
            }}
          /> :
          <RiMenu4Fill
            color='#fff'
            size={27}
            onClick={() => {
              setToggleMenu(true)
            }}
          />}
        {
          toggeleMenu && (
            <div className='gpt__nav-menu_contanier scale-up-center'>
              <div className='gpt__nav-menu_contanier-links'>
                <Menu />
                <div className='gpt__navbar-menu_container-link-sign'>
                  <p><a>Sign In</a></p>
                  <button type='button'>
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default NavBar