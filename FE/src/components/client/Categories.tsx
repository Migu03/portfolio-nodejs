import React from 'react'

type Props = {}

const Categories = (props: Props) => {
  return (
    <section className="section" id="section--2">
        <div className="section__title">
        <h2 className="section__description">My Projects</h2>
        <h3 className="section__header1">
        Throughout my career as a developer, I have had the opportunity to work on several exciting projects.
        </h3>
        <ul  id="menu-cate">
            <li><button data-id="${id}" className="badge badge-sm bg-info text-decoration-none " id="list-cate"></button></li>
        </ul>
        </div>
    </section>
  )
}

export default Categories