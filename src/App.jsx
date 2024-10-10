import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  // const [count, setCount] = useState(0)

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full h-full absolute'>
      <nav className='bg-red-200 flex justify-between items-center text-back py-6 px-8 md:px-32 drop-shadow-md'>
        <a href="#">Kuma Bear</a>

        <ul className='hidden xl:flex items-center
        gap-8 font-semibold text-base'>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Home</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Projects</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>About Medsds</li>
          <li className='p-3 hover:bg-sky-400 hover:text-white rounded-md transition-all cursor-pointer'>Contact Me</li>
        </ul>

        <i className='bx bx-menu xl:hidden block text-xl cursor-pointer' onClick={() => setIsMenuOpen(!isMenuOpen)}>menu</i>

        <div className={`absolute xl:hidden top-24 left-0 w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        
        style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}>

          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Home</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Projects</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About Me</li>
          <li className='list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Contact Me</li>
        </div>
      </nav>
    </div>
  )
}

export default App
