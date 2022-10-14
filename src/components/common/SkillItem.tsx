import React from 'react'

interface ISkillItem {
  name: string
  img: string
  progress: number
}

const SkillItem = ({ name, img, progress }: ISkillItem) => {

  const skillColor = (val: number) => {
    if (val < 30) return 'rgba(236, 2, 17, 0.608)'
    if (val > 30 && val < 80) return 'rgba(236, 228, 2, 0.608)' 
    return 'rgba(6, 230, 255, 0.608)' 
  }

  return (
    <div className={'skill-item'}>
      <img src={img} alt='' />
      <h3>{name}</h3>
      <div className={'cont'}>
        <h4>Level</h4>
        <div style={{ boxShadow: `0 0 5px ${skillColor(progress)}` }} className={'level'}>
          <div style={{width: `${progress}%`, backgroundColor: skillColor(progress)}} className={'progress'}></div>
        </div>
      </div>
    </div>
  )
}

export default SkillItem