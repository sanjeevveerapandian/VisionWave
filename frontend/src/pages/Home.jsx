import React from 'react';
import '../index.css'; // Ensure this import is included

const Home = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-4xl font-bold mb-6 text-center text-w" style={{color:'#fff'}}>Welcome to VisionWave</h2>
            <p className="text-xl text-center mb-12 text-w" style={{color:'#fff'}}>Empowering rural education through innovative software solutions.</p>
            
            <div className="card-container">
                {[...Array(12).keys()].map(num => (
                    <div key={num} className="card">
                        <h3 className="card-title">Class {num + 1}</h3>
                        <p className="card-description">
                            Discover educational resources for Class {num + 1} to support learning and development.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
