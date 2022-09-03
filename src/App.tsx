import React from 'react'
import { Header } from './components/Header'
import { Slide } from './components/Slide'

function App() {
  
  return(
    <>
      <Header />
      <main className='flex mt-20 w-full  antialiased'>
        <Slide />
      </main>
    </>
  )
}

export default App
