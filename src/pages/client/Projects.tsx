import axios from 'axios';
import { ICategory } from '../../interface/categories';
import { IProject } from '../../interface/projects';

type Props = {
  category?: ICategory;
};

const Projects = ({category }: Props) => {
  // const username = 'Migu03';
  // const accessToken = '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';
  // const since = '2022-01-01';
  // const until = '2023-04-06';
  
  // const url = `https://api.github.com/repos/${username}/${username}/stats/commit_activity?access_token=${accessToken}&since=${since}&until=${until}`;
  
  // axios.get(url)
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  if (category) {
    const { projects } = category;
    return (
      <>
        {projects?.map((item: IProject) => {
          return (
        <div className="project" key={item._id}>
          <a target="_blank" href={item.link}>
           <div className="image-container">
            <img
                src={item.thumbnail} className="features__img lazy-img"
              />
              <div className="overlay">
                <p>Demo</p>
            </div>
           </div>
          </a>
            <div className="text-project">
                <div className="features__icon">
                  <svg>
                  </svg>
                </div>
                <h3 className="features__header">{item.name}</h3>
                <h4></h4>
                <h4>{item.description}</h4>
                <a target="_blank" href={item?.linkGithub} className="badge badge-sm bg-info text-decoration-none ">View on github</a>
            </div>
        </div>
      );
    })}
  </>
);
}else return <></>;
}

export default Projects