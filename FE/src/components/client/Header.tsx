import React from 'react'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className="header" id="header">
            <nav className="nav">
                <div className="nav-left">
                    <img src="/src/assets/images/logo.png" alt="Bankist logo" className="nav__logo" id="logo"
                        data-version-number="3.0" />
                </div>
                <ul className="nav__links">
                    <li className="nav__item" >
                        <a className="nav__link nav__link--btn btn--show-modal" href="./TRANTHIPHUONGCV.pdf" download="CV- Tran Thi Phuong"
                        >My Resume</a
                        >
                    </li>
                    <li><img src="/images/dark.png" alt="" id="icon"/></li>
                </ul>
            </nav>

            <div className="header__title" >
                    <img
                        src="./src/assets/images/bannerr.png"
                        className="header__img"
                        alt="Minimalist bank items"
                    />
                    <div className="text-box">
                        <p>Halo,I am</p>
                        <h1>Phuong</h1>
                        <h5>Frontend Developer. In my portfolio, you'll find the products that I designed and developed.</h5>
                    </div>
                    <a href="#section--1">
                        <span></span>   
                        <span></span>  
                        <span></span> 
                        <span></span> 
                        View my Porfolio
                    </a>

            </div>
            <div className="menu-Navigation">
                <nav>
                    <ul>
                        <a href="#header"><li><i className='bx bxs-home-heart'></i>Home</li></a>
                        <a href="#section--1"><li><i className='bx bxs-graduation'></i>Introduce</li></a>
                        <a href="#section--2"><li><i className='bx bxs-bulb'></i>Projects</li></a>
                        <a href="#"><li><i className='bx bxl-blogger'></i> Blog</li></a>
                        <a href="#contact"><li><i className='bx bxs-chat'></i>Contact</li></a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header