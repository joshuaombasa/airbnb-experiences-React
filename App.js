import React from 'react'

import expeiencesData from './data.js'

import  Navbar from './components/Navbar'

import Hero from './components/Hero'

import  Card from './components/Card'

export default function App() {
    
    const cardsJsx = expeiencesData.map((card) => {
            return <Card 
            key={card.id}
            title={card.title}
            image={card.coverImg}
            reviewCount={card.stats.reviewCount}
            rating={card.stats.rating}
            location={card.location}
            price={card.price}
            openSpots={card.openSpots}
            />
    })
    
    return (
        <div> 
            <Navbar />
            <Hero />
            <div className="cards-container">{cardsJsx}</div>
        </div>
    )
}