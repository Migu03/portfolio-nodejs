import React from 'react'
import Categories from './Categories'
import Feedback from './Feedback'
import Footer from './Footer'
import Header from './Header'
import Infromation from './Infromation'
import Projects from './Projects'
import Skill from './Skill'

type Props = {}

const RootLayout = (props: Props) => {
  return (
    <div>
        <Header/>
        <Infromation/>
        <Categories/>
        <Projects/>
        <Skill/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default RootLayout