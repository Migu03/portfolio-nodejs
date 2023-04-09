import React from 'react'
import Contact from './Contact'
import SocialMedia from './SocialMedia'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="art">
        <div className="content">
          <section>
            <header>Menu</header>
            <a href="#header">Home</a>
            <a href="#section--1">Introduce</a>
            <a href="#section--2">Projects</a>
            <a href="#">Blog</a>
            <a href="#contact">Contact</a>
          </section>
          <section>
          <header>Information</header>
            <ul className="contact-info">
                <li><i className='bx bxs-institution'></i>Address: 11c 131/24 st Phuong Canh, Xuan Phuong, Nam Tu Liem</li>
                <li><i className='bx bx-phone'></i>Phone: 0853536203</li>
                <li><i className='bx bx-envelope' ></i>Email: phuongttph20933@fpt.edu</li>
            </ul>
          </section>
          <section>
              <Contact/>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer