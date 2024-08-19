import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import { Acceuil } from './pages/accueil/Acceuil'
import { Layout } from './pages/Layout'
import { Recette } from './pages/recette/Recette'
import { VoirTout } from './pages/VoirTout/VoirTout'
import MyComponent from './pages/recette/RecipeForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Acceuil />} />
            <Route path="/accueil" element={<Acceuil />} />
            <Route path="/recette/:id" element={<Recette />} />
            <Route path="/create" element={<MyComponent />} />
            <Route path='/global/:contenu' element={<VoirTout param={"category"} />} />
            <Route path='/global/type/:contenu' element={<VoirTout param={"subCategory"} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
