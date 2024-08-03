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
