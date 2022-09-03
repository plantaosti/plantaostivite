import React from 'react'
import { Header } from './components/Header'
import { Slide } from './components/Slide'

function App() {
  
  return(
    <>
      <Header />
      <main className='flex-row mt-20'>
        <Slide />
        <Slide />
      </main>
    </>
  )
}

export default App
