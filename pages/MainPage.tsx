"use client"

import React, { useState } from 'react';
import Slider from './Slider';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';

const MainPage: React.FC = () => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);

    const handleCardClick = (index: number) => {
        setSelectedCard(index === selectedCard ? null : index);
    };

    return (
        <div className={`container ${selectedCard !== null ? 'cards-selected' : ''}`}>
            <Header />
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0">
                    <main>
                        <section className="hero">
                            <h1>HELLO WORLD!</h1>
                            <h2>We are a creative agency.</h2>
                            <h2>We build digital work that you will love!</h2>
                            <button>Explore our portfolio</button>
                        </section>

                        <section className="services">
                            <div className={`service card bg-gray-100  mb-4 p-4`} onClick={() => handleCardClick(0)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mb-2 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.707 5.293a1 1 0 00-1.414 1.414L13.586 10l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4zM4 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <h3 className="font-bold mb-2 text-center">Web Design Project</h3>
                                <p>Sed ut perspiciatis unde omni iste natus error sit voluptatem accusantum doloremque.</p>
                                <a href="#" className="text-orange-500 hover:text-orange-700">Learn More</a>
                            </div>
                            <div className={`service card bg-gray-100 mb-4 p-4`} onClick={() => handleCardClick(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mb-2 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.707 5.293a1 1 0 00-1.414 1.414L13.586 10l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4zM4 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <h3 className="font-bold mb-2 text-center">Website Development</h3>
                                <p>This content will be updated with state.</p>
                            </div>
                            <div className={`service card bg-gray-100 mb-4 p-4`} onClick={() => handleCardClick(2)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mb-2 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M11.707 5.293a1 1 0 00-1.414 1.414L13.586 10l-3.293 3.293a1 1 0 101.414 1.414l4-4a1 1 0 000-1.414l-4-4zM4 10a1 1 0 011-1h9.586l-2.293-2.293a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414L14.586 11H5a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                                <h3 className="font-bold mb-2 text-center">Digital Artwork</h3>
                                <p>This content will be updated with state.</p>
                            </div>
                        </section>
                    </main>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                    <Slider />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;

