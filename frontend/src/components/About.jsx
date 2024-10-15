// src/About.js
import React from 'react';
import './About.css';

const About = () => {
  const cadetsData = [
    {
      year: "2020",
      photos: [
        "logo1.png",
        "logo2.png",
      
      ],
    },
    {
      year: "2021",
      photos: [
        "/image3.png",
        "/image4.png",
        
      ],
    },
    {
      year: "2022",
      photos: [
      
       
      ],
    },
    
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>

      <p>
        Lieutenant Dr. ARUN KUMAR K.H, is the present Associate NCC Officer who took over in charge of the NCC Troop at CMR University on May 4, 2022, with the goal of bringing name and fame to the NCC Wing.
      </p>

      <p>
        The NCC extension activities and cadet performances are a testament to the dedication and commitment of the cadets. The timeline for each event showcases the diverse range of activities and achievements undertaken by the cadets.
      </p>

      <p>
        "Ek Tareek Ek Ghanta Swachhata Seva Event," held on October 1, 2023, from 9:30 AM to 1:00 PM, was a remarkable initiative where cadets actively participated in cleanliness drives and community service activities. This event demonstrated their commitment to social responsibility and highlighted their dedication to making a positive impact on the community.
      </p>

      <p>
        Another significant event was the "Service Activity at Leonard Cheshire Disability Centre" on February 20, 2024. This event showcased the cadets' compassion and empathy as they engaged in service activities aimed at supporting individuals with disabilities.
      </p>

      <p>
        A "Week-long Service Mission at CUPA Animal Rescue Centers," from October 13-20, 2023, in Kengeri, exemplified the cadets' dedication to animal welfare and community service. Their active participation in this mission underscored their passion for contributing to the well-being of animals and the environment.
      </p>

      <p>
        The "Sustenance for Smile" event on March 10, 2024, was another noteworthy initiative where cadets served the basic needs of an orphanage.
      </p>

      <p>
        The above multifaceted approach reflects the cadets' holistic development and their unwavering commitment to making a positive impact on society.
      </p>

      
    </div>
  );
};

export default About;
