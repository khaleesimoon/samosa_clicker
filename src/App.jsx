import { useState } from 'react'
import './App.css'

const App=()=> {
  const [ count, setCount]=useState(0);
  const[multiplier, setMultiplier]=useState(1);
  return (
      <div className='App'>
        <header className='header'>
          <h1>Samosa Selector</h1>
        <img
          className='="samosa"
          src='https://courses.codepath.org/course_images/web102/lab2/step1-lab1.png'
          alt='samosa'
          onClick={updateCount}
        />
        </header>
      </div>
  )
}

export default App
