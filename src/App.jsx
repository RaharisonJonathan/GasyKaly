import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/header/Header'
import { Card } from './components/card/Card'
import { Hero } from './components/hero/Hero'

function App() {

  return (
    <>
      <Hero tag={"Plats populaires"}/>
      <Hero tag={"Recommandations"}/>
      <Hero tag={"Nouveaux plats"}/>
    </>
  )
}

export default App
