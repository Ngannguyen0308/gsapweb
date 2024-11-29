import React from 'react'
import Hero from './components/Hero'
import About from './components/ABout'

export default function App() {
  return (
    <div className='relative min-h-screen w-screen overflow-x-hidden'>
      <Hero/>
     <About/>
    </div>
  )
}
