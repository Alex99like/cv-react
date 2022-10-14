import React from 'react'

interface ICourseElement {
  className: string
  img: string
  name: string
  date: string
  progress: string
}

const CourseElement = ({ className, date, img, name, progress }: ICourseElement) => {
  return (
    <div className={`course-item ${className}`}>
      <img src={img} alt='' />
      <fieldset>
        <legend>{name}</legend>
        {date}
      </fieldset>
      <div className={`progress ${progress}`}>{progress}</div>
      <span className='item-el'></span>
    </div>
  )
}

export default CourseElement