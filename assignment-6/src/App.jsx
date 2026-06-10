import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Banner from './Banner'
import Revew from './Revew'
import Toolsnav from './Toolsnav'
import Card from './Card'




  const carddata = async ()=>{
  const res = await fetch('/data.json')
  return res.json(); 
  }

  const  carddatapromis = carddata();
function App() {



  return (
    <>  
    <Navbar></Navbar>
    <Banner></Banner>
    <Revew/>
    <Toolsnav /> 
    <Suspense fallback={
      <span className="loading loading-dots loading-xl"></span>
    }>
           <Card carddatapromis={carddatapromis} />
    </Suspense>
    
    </>
  )
}

export default App
