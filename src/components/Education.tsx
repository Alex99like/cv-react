import React from 'react'
import '../styles/education.scss'
import CourseElement from './common/CourseElement'
import FreeCodeCamp from '../assets/certificate/freecodecump.jpg'
import JavaRush from '../assets/certificate/javarush.jpg'
import HtmlAcademy from '../assets/certificate/htmlacademy.jpg'
import PreSchool from '../assets/certificate/pre-school.png'
import FrontEnd from '../assets/certificate/rss-school-frontend.png'
import RSSReact from '../assets/certificate/rss-react.png'
import EducationIcon from '../assets/icons/education.png'

const Education = () => {
  return (
    <div className={'size-container'}>
      <div className={'education-container'}>
        <h1>Education <img src={EducationIcon} alt='' /></h1>
        <div className={'pre-course'}>
          <div className={'first-line'}>
          <CourseElement 
              className={'java-rush'}
              img={JavaRush}
              name={'JavaRush'}
              date={'Feb 2021 - Aug 2021'}
              progress={'Passed'}
            />
            <CourseElement 
              className={'html-academy'}
              img={HtmlAcademy}
              name={'HTMLAcademy'}
              date={'Dec 2021 - Jan 2022'}
              progress={'Passed'}
            />
            <CourseElement 
              className={'pre-school'}
              img={FrontEnd}
              name={'RSS Front-End'}
              date={'Apr 2022 - Sep 2022'}
              progress={'Passed'}
            />
          </div>
          <div className={'line-middle'}></div>
          <div className={'two-line'}>
            <CourseElement 
              className={'free-code-camp'}
              img={FreeCodeCamp}
              name={'FreeCodeCamp'}
              date={'Jan 2022'}
              progress={'Passed'}
            />
            <CourseElement 
              className={'rss-frontend'}
              img={PreSchool}
              name={'RSS Pre School'}
              date={'Jan 2022 May 2021'}
              progress={'Passed'}
            />
            <CourseElement 
              className={'rss-react'}
              img={RSSReact}
              name={'RSS React'}
              date={'Sep 2022'}
              progress={'In progress'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education