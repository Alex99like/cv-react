import React from 'react'
import '../styles/skills.scss'
import SkillImage from '../assets/icons/skills.png'
import SkillItem from './common/SkillItem'
import Html from '../assets/skills/html.png'
import CSS from '../assets/skills/css.png'
import SASS from '../assets/skills/sass.png'
import JS from '../assets/skills/javascript.png'
import TS from '../assets/skills/typescript.png'
import REACT from '../assets/skills/atom.png'
import Redux from '../assets/skills/redux.png'
import Express from '../assets/skills/express.png'
import Native from '../assets/skills/native.png'
import Nest from '../assets/skills/nest.png'

const Skills = () => {
  return (
    <div className={'size-container'}>
      <div className={'skills-container'}>
        <h1>Skills <img src={SkillImage} alt='' /></h1>
        <fieldset className={'active-skills'}>
          <legend>Active Skills</legend>
          <SkillItem 
            name='HTML'
            img={Html}
            progress={95}
          />
          <SkillItem 
            name='CSS'
            img={CSS}
            progress={90}
          />
          <SkillItem 
            name='SASS'
            img={SASS}
            progress={90}
          />
          <SkillItem 
            name='JavaScript'
            img={JS}
            progress={85}
          />
          <SkillItem 
            name='TypeScript'
            img={TS}
            progress={80}
          />
          <SkillItem 
            name='REACT'
            img={REACT}
            progress={60}
          />
          <SkillItem 
            name='REDUX'
            img={Redux}
            progress={50}
          />
          <SkillItem 
            name='EXPRESS'
            img={Express}
            progress={70}
          />
        </fieldset>
        <fieldset className='featured-skills'>
          <legend>Featured Skills</legend>
          <SkillItem 
            name='NEST'
            img={Nest}
            progress={25}
          />
          <SkillItem 
            name='Native'
            img={Native}
            progress={20}
          />
        </fieldset>
      </div>
    </div>
  )
}

export default Skills