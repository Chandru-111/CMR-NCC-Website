import React from 'react';
import './About.css';


const About = () => {
  const cadetsData = [
    
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>

      {/* Introduction Section */}
      <section className="intro">
        <p>
          Lieutenant Dr. ARUN KUMAR K.H is the present Associate NCC Officer who took over in charge of the NCC Troop at CMR University on May 4, 2022, with the goal of bringing name and fame to the NCC Wing.
        </p>
      </section>

      {/* NCC Events */}
      <section className="events">
        <h2>Notable Events and Activities</h2>

        <div className="event-item">
          <h3>"Ek Tareek Ek Ghanta Swachhata Seva Event" - October 1, 2023</h3>
          <p>
            This remarkable initiative had cadets participating in cleanliness drives and community service activities. It showcased their commitment to social responsibility and a positive impact on the community.
          </p>
        </div>

        <div className="event-item">
          <h3>"Service Activity at Leonard Cheshire Disability Centre" - February 20, 2024</h3>
          <p>
            The cadets' compassion and empathy shone through as they engaged in service activities supporting individuals with disabilities.
          </p>
        </div>

        <div className="event-item">
          <h3>"Week-long Service Mission at CUPA Animal Rescue Centers" - October 13-20, 2023</h3>
          <p>
            This event highlighted the cadets' dedication to animal welfare and community service, demonstrating their passion for the well-being of animals and the environment.
          </p>
        </div>

        <div className="event-item">
          <h3>"Sustenance for Smile" - March 10, 2024</h3>
          <p>
            Cadets served the basic needs of an orphanage, showcasing their care and commitment to the welfare of others.
          </p>
        </div>
      </section>

      {/* Cadets Photos Section */}
      <section className="cadets-photos">
        <h2>Cadet Photos</h2>
        {cadetsData.map((data, index) => (
          <div className="cadet-year" key={index}>
            <h3>Year: {data.year}</h3>
            <div className="photo-gallery">
              {data.photos.length > 0 ? (
                data.photos.map((photo, idx) => (
                  <img
                    key={idx}
                    src={require(`./assets/${photo}`)} // Adjust path as needed
                    alt={`Cadet photo for ${data.year} - ${idx + 1}`}
                    className="cadet-photo"
                  />
                ))
              ) : (
                <p>No photos available for this year.</p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Conclusion Section */}
      <section className="conclusion">
        <p>
          The above multifaceted approach reflects the cadets' holistic development and their unwavering commitment to making a positive impact on society.
        </p>
      </section>
    </div>
  );
};

export default About;
