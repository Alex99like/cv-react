import React from 'react'

interface IDifficult {
  difficult: 'easy' | 'middle' | 'height'
} 

const Difficult = ({ difficult }: IDifficult) => {

  const createDif = (dif: 'easy' | 'middle' | 'height') => {
    if (dif === 'easy') return <><span className={'active'}></span><span></span><span></span></>
    if (dif === 'middle') return <><span className={'active'}></span><span className={'active'}></span><span></span></>
    if (dif === 'height') return <><span className={'active'}></span><span className={'active'}></span><span className={'active'}></span></>
  }

  return (
    <div className={`difficult ${difficult}`}>
      <h3>Difficult: {difficult.toUpperCase()}</h3>
      <div className={'container'}>{createDif(difficult)}</div>
    </div>
  )
}

export default Difficult