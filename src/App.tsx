import React, { useState, useRef } from 'react';
import Scroll from './components/common/Scroll';
import Education from './components/Education';
import Experience from './components/Experience';
import Home from './components/Home';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

function App() {

  const main = useRef<null | HTMLDivElement>(null)
  const [scroll, setScroll] = useState(0)

  const handlerClick = (top: number) => {
    main.current?.scrollTo(0, top)
  }

  return (
    <main>
      <Sidebar onClick={handlerClick} scroll={scroll} />
      <Main refMain={main} setScroll={setScroll}>
        <Home />
        <Education />
        <Skills />
        <Experience />
      </Main>
      <Scroll scroll={scroll} />
    </main>
  );
}

export default App;
