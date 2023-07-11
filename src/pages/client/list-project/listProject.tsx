import React from 'react'
import { ICategory } from '../../../interface/categories';
import { IProject } from '../../../interface/projects';
import './listProject.css'
import Projects from '../Projects';
type Props = {
    category?: ICategory;
  };
const ListProject = ({category }: Props) => {
    if (category) {
        const { projects } = category;
  return (
    <div>
        <section className="projects">
			<ul>
                {projects?.map((item: IProject) => {
                    
          return (
				<li>
					<a href={item.slug}>
						<h4>{item.name}</h4>
					</a>
                    {/* <Projects slug={item.slug}/> */}
				</li>
                );
            })}
			</ul>
		</section>
    </div>
);
}else return <></>;
}

export default ListProject