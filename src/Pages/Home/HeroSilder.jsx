import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Search, Calendar, User, Bed } from 'lucide-react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('Thailand, Asia');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Discover Amazing Destinations',
      subtitle: 'Explore the world with our exclusive deals'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1682830819991-3e100a80aa2e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Luxury Stays at Affordable Prices',
      subtitle: 'We compare prices from 200+ booking sites'
    },
    {
      id: 3, 
      image: 'https://images.unsplash.com/photo-1712166424478-eb9b7103e460?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Your Perfect Vacation Awaits',
      subtitle: 'Find the best hotels for your dream trip'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/flagged/photo-1573152455866-867556534827?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Your Perfect Vacation Awaits',
      subtitle: 'Find the best hotels for your dream trip'
    },
    {
      id: 5,
      image: 'https://www.agoda.com/wp-content/uploads/2024/01/Jaipur-Traditional-Indian-puppets.jpg',
      title: 'Your Perfect Vacation Awaits',
      subtitle: 'Find the best hotels for your dream trip'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchQuery, startDate, endDate, rooms, guests });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider Images */}
      <div className="absolute inset-0 z-0 transition-opacity duration-1000">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
      </div>

      {/* Slider Content */}

                  
      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition duration-300 ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;