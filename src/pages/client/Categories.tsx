import React, { useState } from 'react'
import { getCategory } from '../../api/categories';
import { ICategory } from '../../interface/categories';
import ListProject from './list-project/listProject'
import Projects from './Projects';

type Props = {
  categories: ICategory[];
};

const Categories = ({categories}: Props) => {
  const [category, setCategory] = useState<ICategory>();
  const onClickHandler = async (id: number | string) => {
    const { data } = await getCategory(id);
    setCategory(data);
  };
  console.log(category)

  // Active categories button
  const [activeCategory, setActiveCategory] = useState(-1);
  return (
    <section className="section" id="section--2">
        <div className="section__title">
        <h2 className="section__description">My Projects</h2>
        <h3 className="section__header1">
        Throughout my career as a developer, I have had the opportunity to work on several exciting projects.
        </h3>
        </div>
        <ul  id="menu-cate">
        {categories.map((category: ICategory, index) => {
          return (
            <li key={category._id}><button data-id="${id}" className="badge badge-sm bg-info text-decoration-none " onClick={() => {
              setActiveCategory(index);
              onClickHandler(category._id);
            }} id="list-cate">{category.name}</button></li>
            );
          })}
        </ul>
        <Projects category={category} />
    </section>
    
  )
}

export default Categories