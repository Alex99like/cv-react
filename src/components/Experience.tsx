import React from 'react'
import '../styles/experience.scss'
import ExperienceImage from '../assets/icons/experience.png'
import CardProject from './common/CardProject'

const Experience = () => {
  return (
    <div className={'size-container'}>
      <div className={'experience-container'}>
        <h1>Experience <img src={ExperienceImage} alt='' /></h1>
        <div className={'first-line'}>
        <CardProject 
          name={'NurSoft practice'}
          title={'UI Library'}
          description={'Development and refinement of UI components under the supervision of a curator'}
          skills={['HTML', 'CSS', 'SCSS', 'JS', 'TS']}
          difficult={'easy'}
          process={'Match 2022 - Jun 2022'}
        />
        <CardProject 
            name={'Study RSS School'}
            title={'RSS LANG'}
            description={'Team development of a copy of the lingualeo application'}
            skills={['HTML', 'SCSS', 'TS']}
            difficult={'middle'}
            process={'Aug 2022 - Sep 2022'}
        />
        <CardProject 
          name={'Freelance'}
          title={'SPA Lending'}
          description={'Development of 2 landing sites for advertising services and goods for Internet services'}
          skills={['HTML', 'CSS', 'SCSS', 'JS', 'TS', 'React', 'Express']}
          difficult={'easy'}
          process={'Jun 2022 - Sep 2022'}
        />
        </div>
        <div className={'middle-line'}></div>
        <div className={'two-line'}>
          <CardProject 
            name={'Freelance'}
            title={'CRM System'}
            description={'Development of a CRM system for product accounting and logistics control for the company "Fresh Berry"'}
            skills={['HTML', 'SCSS', 'TS','Next', 'React Native', 'Nest', 'Mongodb']}
            difficult={'height'}
            process={'In Progress'}
          />
          <CardProject 
            name={'Freelance'}
            title={'Blog'}
            description={'development of a blog for posting articles for private society "No Smoking"'}
            skills={['HTML', 'SCSS', 'TS', 'React Native', 'Nest', 'Mongodb']}
            difficult={'height'}
            process={'In Progress'}
          />
        </div>
        </div>
    </div>
  )
}

export default Experience