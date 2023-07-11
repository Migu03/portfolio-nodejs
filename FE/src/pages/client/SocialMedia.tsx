import React from 'react'

type Props = {}

const SocialMedia = (props: Props) => {
  return (
        <ul className="social-media">
            <li><a
            href="https://github.com/migu03"
            className="footer__external-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </li>
        <li><a
            href="https://www.facebook.com/fwng263/"
            className="footer__external-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </li>
        <li><a
            href="mailto:phuongtt03.it@gmail.com"
            className="footer__external-link"
            target="_blank"
          >
            <i className="bx bxl-gmail"></i>
          </a>
        </li>
        </ul>
  )
}

export default SocialMedia 