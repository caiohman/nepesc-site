import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {IconContext} from 'react-icons'
import {FaWhatsapp} from 'react-icons/fa'
import './Footer.scss'


export const Footer = () => (
<React.Fragment>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md">
      </div>
      <div class="col-md ">
        <IconContext.Provider value={{ size: "calc(1em + 1.3vw)", className: "global-class-name" }}>
          <a href = "#" target = "_blank">
            <FaLinkedin/>
          </a>
          <a href = "#" target = "_blank">
            <FaInstagram/>
          </a>
          <a href = "#" target = "_blank">
            <FaWhatsapp/>
          </a>
        </IconContext.Provider>
      </div>
      <div class="col-md ">
      </div>
    </div>
  </div>
</React.Fragment>
)
