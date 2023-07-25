import React from 'react'


type Props = {}

const Header = (props: Props) => {

    return (
        <header className="header" id="header">
            <nav className="nav">
                <div className="nav-left">
                    <img src="https://cdn.fbsbx.com/v/t59.2708-21/361062290_317238933985625_1359352846535238594_n.gif?_nc_cat=100&ccb=1-7&_nc_sid=041f46&_nc_ohc=vIk2cA85Ev8AX9iSSVR&_nc_ht=cdn.fbsbx.com&oh=03_AdQLfBPTMosxbVnisiP0uNbMrzCyIEgUBHROqWFrd--o-A&oe=64B18730" alt="Bankist logo" className="nav__logo" id="logo"
                        data-version-number="3.0" />
                </div>
                <ul className="nav__links">
                    <li className="nav__item" >
                        <a className="nav__link nav__link--btn btn--show-modal" href="../../../TRAN-THI-PHUONG CV.pdf" download="CV- Tran Thi Phuong"
                        >My Resume</a
                        >
                    </li>
                    <li><img src="/images/dark.png" alt="" id="icon"/></li>
                </ul>
            </nav>

            <div className="header__title" >
                    <img
                        src="https://cdn.fbsbx.com/v/t59.2708-21/358347019_136999996092365_747756403245556767_n.gif?_nc_cat=110&ccb=1-7&_nc_sid=041f46&_nc_ohc=Lbiev-CFIPUAX9iqXWS&_nc_ht=cdn.fbsbx.com&oh=03_AdQUiYuo5O57BYnrjRx47Pd8Edm3ZliZpXxiJIY9436mIw&oe=64B1B98F"
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
                        View my Portfolio
                    </a>

            </div>
            <div className="menu-Navigation">
                <nav>
                    <ul>
                        <a href="#header"><li><i className='bx bxs-home-heart'></i>Home</li></a>
                        <a href="#section--1"><li><i className='bx bxs-graduation'></i>Introduce</li></a>
                        <a href="#section--2"><li><i className='bx bxs-bulb'></i>Projects</li></a>
                        <a href="#skill"><li><i className='bx bxs-palette'></i>Skill</li></a>
                        <a href="#contact"><li><i className='bx bxs-chat'></i>Contact</li></a>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header