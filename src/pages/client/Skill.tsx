import { ITechnology } from '../../interface/technologies'

type Props = {
  skill?: ITechnology[]
}

const Skill = ({ skill }: Props) => {
  console.log("skil day:",skill)
  return (
    <div className="section-skill" id='skill'>
      <h2 className="section__description">My Skill</h2>
      <p>
        These are the tools, languages, and technologies that I use to make my product everyday
      </p>
      <div className="section-skills">
          {skill?.map((item: ITechnology) => {

            return (
              <div className="skills__data" key={item._id}>
                <a target="_blank" href={`${item.name}`}><i className={`bx bxl-${item.tag}`}></i></a>
                
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Skill