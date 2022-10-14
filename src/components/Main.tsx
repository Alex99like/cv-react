import React from 'react'
import '../styles/main.scss'

interface IMain {
  children: React.ReactNode
  setScroll: React.Dispatch<React.SetStateAction<number>>
  refMain: React.MutableRefObject<HTMLDivElement | null>
}

const Main = ({ children, setScroll, refMain }: IMain) => {

  const scrollObserver = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    // console.log(e.currentTarget.scrollTop)
    setScroll(e.currentTarget.scrollTop)
  }

  // const handler = () => {
  //   const time = setInterval(() => {
  //     if (main.current!.scrollTop >= 580) {
  //       main.current?.scrollTo(0, main.current!.scrollTop - 10)
  //     } else {
  //       clearInterval(time)
  //     }
      
  //   }, 1)
    
  // }

  return (
    <div ref={refMain} onScroll={(e) => scrollObserver(e)} className={'main-container'}>
      {children}
    </div>
  )
}

export default Main