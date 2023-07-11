import Categories from '../pages/client/Categories'
import Footer from '../pages/client/Footer'
import Header from '../pages/client/Header'
import Infromation from '../pages/client/Infromation'
import Skill from '../pages/client/Skill'
import { ICategory } from '../interface/categories'
import { IProject } from '../interface/projects'
import { ITechnology } from '../interface/technologies'

type Props = {
  categories: ICategory[];
  projects: IProject[];
  skill: ITechnology[]
}


const RootLayout = ({ projects,skill, categories }: Props) => {
  
  return (
    <div className='layout'>
      <div className="follower"></div>
      <div className="cursor"></div>

      <Header />
      <Infromation />
      <Categories categories={categories} />
      <Skill skill={skill}/>
      <Footer />
    </div>
  )
}

export default RootLayout