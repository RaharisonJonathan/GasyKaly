import React from 'react'
import { Card } from '../card/Card'
import "./hero.css"

export const Hero = ({tag}) => {
  return (
    <div className='hero-container'>
        <div className="hero-header">
            <span className="hero-tag">{tag}</span>
            <span className='hero-view-all'>{"voir tout "}</span>
        </div>

        <div className='hero-slider'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
