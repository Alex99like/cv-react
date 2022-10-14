import React from 'react'
import Difficult from './Difficult'

interface ICardProject {
  title: string
  description: string
  name: string
  skills: string[]
  difficult: 'easy' | 'middle' | 'height'
  process: string
}

const CardProject = ({ title, description, skills, name, difficult, process }: ICardProject) => {
  return (
    <fieldset className={'experience-item'}>
      <legend>{name}</legend>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {skills.map((el) => <div className={`item ${el}`} key={el}>{el}</div>)}
      </ul>
      <Difficult difficult={difficult} />
      <span className={`process ${process}`}>{process}</span>
    </fieldset>
  )
}

export default CardProject