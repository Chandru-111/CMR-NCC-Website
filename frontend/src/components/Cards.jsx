
import React from 'react';
import './Cards.css';


import image1 from './logo1.png';
import image2 from './logo2.png';
import image3 from './logo1.png';
import image4 from './logo2.png';

const Cards = () => {
    const cardData = [
        { title: 'Card 1', description: 'This is the description for Card 1', buttonText: 'Learn More', image: image1 },
        { title: 'Card 2', description: 'This is the description for Card 2', buttonText: 'Learn More', image: image2 },
        { title: 'Card 3', description: 'This is the description for Card 3', buttonText: 'Learn More', image: image3 },
        { title: 'Card 4', description: 'This is the description for Card 4', buttonText: 'Learn More', image: image4 },
        { title: 'Card 5', description: 'This is the description for Card 5', buttonText: 'Learn More', image: image2 },
        { title: 'Card 6', description: 'This is the description for Card 6', buttonText: 'Learn More', image: image4 },
    ];
      
    return (
        <div className="cards-container">
            {cardData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <button className="card-button">{card.buttonText}</button>
                </div>
            ))}
        </div>
    );
};

export default Cards;
