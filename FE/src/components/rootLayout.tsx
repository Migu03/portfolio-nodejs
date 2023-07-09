import React from 'react'
import Categories from '../pages/client/Categories'
import Feedback from '../pages/client/Feedback'
import Footer from '../pages/client/Footer'
import Header from '../pages/client/Header'
import Infromation from '../pages/client/Infromation'
import Skill from '../pages/client/Skill'
import { ICategory } from '../interface/categories'
import { IProject } from '../interface/projects'
import Contact from '../pages/client/Contact'

type Props = {
  categories: ICategory[];
  projects: IProject[];
}


const RootLayout = ({ projects, categories }: Props) => {
  
  return (
    <div className='layout'>
      <div className="follower"></div>
      <div className="cursor"></div>

      <Header />
      <Infromation />
      <Categories categories={categories} />
      <Skill />
      <Footer />
    </div>
  )
}

export default RootLayout