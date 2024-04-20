// app/Slider.tsx
"use client"
import React, { useState } from 'react';

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
        type: 'image',
        content: (
          <img
            src="https://www.medcode.dev/_next/image?url=https%3A%2F%2Fi.ibb.co%2FXWbz0K4%2Ftwitter-card.png&w=1080&q=75"
            alt="Image"
          />
        ),
      }
      ,
    {
        type: 'video',
        content: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/y9k-U9AuDeM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ),
      }
      ,
      {
        type: 'gif',
        content: (
          <img src="https://media.giphy.com/media/5k5vZwRFZR5aZeniqb/giphy.gif" alt="GIF" />
        ),
      }
      ,
  ];

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      <div className="slide">{slides[currentSlide].content}</div>
      <div className="sliderControls">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={currentSlide === index ? 'active' : ''}
            onClick={() => handleSlideChange(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
