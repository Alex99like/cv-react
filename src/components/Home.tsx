import React from 'react'
import '../styles/home.scss'

// interface IHome {
//   scroll: number
// }

const Home = () => {
  return (
    <div className='size-container'>
      <div id='home' className={'home-container'}>
        <div className={'description'}>
          <h2 className={'name'}>Hi, my name is <span>Aleksander</span>&#128075;</h2>
          <h2>I am <span>Front-End Developer</span>&#128187;</h2>
        </div>
        <div className={'about'}>
          <fieldset>
            <legend>About Me</legend>
            <p>I am 23 years old, I come from the city of krupki, I lived in 
              Borisov, Volkovysk, Grodno, Minsk. He worked as a waiter, 
              border officer, customs officer, courier, sales manager, 
              bartender, buyer. I love diversity and for this I really 
              love the web, it is huge and there is a lot to learn.</p>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default Home