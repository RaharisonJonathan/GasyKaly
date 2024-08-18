import React from 'react'
import { Header } from '../../components/header/Header'
import './accueil.css'
import { Hero } from '../../components/hero/Hero'

export const Acceuil = () => {
  return (
    <>
        <FirstView/>

        <div className="hero-container-home">
            <Hero tag={"populaires"} />
            <Hero tag={"Recommandations"} bg={"vert"} />
            <Hero tag={"récents"} />
        </div>


    </>
  )
}


const FirstView = () => {
    return (
        <>
            <div className="big-container">
                <div className="first-view">

                </div>
                <div className='container-banner'>
                    <div className="first-view-container">
                        <div className='banner-text'>
                            Trouver les meilleurs plats malgaches dans toutes les catégories
                        </div>
                        <div className="button-group">
                            <button className="create">Créer</button>
                            <button className="view">Visiter</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
