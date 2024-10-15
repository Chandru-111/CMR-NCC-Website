
import React from 'react';
import './Cards.css';


import image1 from './logo1.png';
import image2 from './logo2.png';
import image3 from './logo1.png';
import image4 from './logo2.png';

const Cards1 = () => {
    const cardData = [
        { title: 'Card 1', description: 'This is the description for Card 1', buttonText: 'Learn More', image: image1 },
    
    ];
      
    return (<div ><div className='card-con'>
        <p className='para'>*Below mentioned button colors indicates there own Behaviour*</p>
                            <button className="card-butt card1" style={{borderRadius:'50px' }}>Registration open</button>

       
                            <button className="card-butt card2" style={{borderRadius:'50px' }}>Registration closed</button>
                            </div>
        <div className="cards-container">
            {cardData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.image} alt={card.title} className="card-image" />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <a href="https://your-url-here.com" target="_blank" rel="noopener noreferrer">
  <button className="card-button">{card.buttonText}</button>
</a>

                </div>
            ))}
        </div>
        </div>
    );
};

export default Cards1;
