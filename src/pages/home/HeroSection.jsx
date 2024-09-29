import React from 'react'
import card1 from '../../assets/card1.jpg'
import card2 from '../../assets/card2.jpeg'
import card3 from '../../assets/card3.jpg'

const cards = [
    {
        id: 1,
        image: card1,
        trend: "2024 Trend",
        title: "Gents Formal"
    },
    {
        id: 2,
        image: card2,
        trend: "2024 Trend",
        title: "Gents Dresses"
    },
    {
        id: 1,
        image: card3,
        trend: "2024 Trend",
        title: "Gents Casuals"
    }
]

const HeroSection = () => {
    return (
        <section className='section__container hero__container'>
            {
                cards.map((card) => {
                    return <div key={card.id} className='hero__card'>
                        <img src={card.image} alt="" />
                        <div className='hero__content'>
                            <p>{card.trend}</p>
                            <h4>{card.title}</h4>
                            <a href="#">Discover More</a>
                        </div>
                    </div>
                })
            }
        </section>
    )
}

export default HeroSection