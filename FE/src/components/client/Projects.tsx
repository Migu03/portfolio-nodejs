import React from 'react'
import axios from 'axios';

  type Props = {}

  const username = 'Migu03';
  const accessToken = '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';
  const since = '2022-01-01';
  const until = '2023-04-06';
  
  const url = `https://api.github.com/repos/${username}/${username}/stats/commit_activity?access_token=${accessToken}&since=${since}&until=${until}`;
  
  axios.get(url)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  

const Projects = (props: Props) => {
  return (
    <div className="project">
          <a href="">
            <img
              src="" className="features__img lazy-img"
            />
          </a>
            <div className="text-project">
                <div className="features__icon">
                  <svg>
                  </svg>
                </div>
                <h3 className="features__header"></h3>
                <h4></h4>
                <p>Completion time:  days</p>
                <h5>Programmer: </h5>
                <a href="" className="badge badge-sm bg-info text-decoration-none ">View on github</a>
            </div>
        </div>
  )
}

export default Projects