import React from 'react'
import Contact from './Contact'
import SocialMedia from './SocialMedia'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="footer">
        <section>
          <ul className="contact-info">
            <li><i className='bx bxs-institution'></i>Address: Xuan Phuong, Nam Tu Liem</li>
            <li><i className='bx bx-phone'></i>Phone: 0853536203</li>
            <li><i className='bx bx-envelope' ></i>Email: phuongtt03.it@gmail.com</li>
          </ul>
        </section>
        <section>
          <Contact />
        </section>
      </div>
      <div className="text-foot">

        Designed and made with 💙 by Migu
      </div>
    </footer>
  )
}

export default Footer