import React from 'react';
import { Link } from 'react-router-dom';
import cheemaImg from '../../assets/artworks-E7LO8QQpmxN6c7ns-DNa7xQ-t500x500.jpg';
import aujlaImg from '../../assets/aujla1.jpg';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Karan Aujla Section */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between sm:mx-16 mx-2 sm:py-16 py-10">
        <div className="sm:text-left text-center sm:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold sm:text-5xl  text-white ">
            Listen Now
            <span className="block text-3xl sm:text-4xl text-white font-bold">Karan Aujla songs</span>
          </h2>
          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/Aujla1"
          >
            {/* Spotify icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 ...z" />
            </svg>
            &nbsp; <b className='text-white font-bold'>Listen on Spotify</b>
          </Link>
        </div>
        <div className="sm:w-1/2 flex justify-center mb-8 sm:mb-0">
          <img className="w-96 rounded-lg" src={aujlaImg} alt="Aujla" />
        </div>
      </div>

      {/* Cheema Y Section */}
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between sm:mx-16 mx-2 sm:py-16 py-10">
        <div className="sm:text-left text-center sm:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold sm:text-5xl  text-white ">
            Listen Now
            <span className="block text-3xl sm:text-4xl  text-white font-bold">Chemma Y songs</span>
          </h2>
          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
            to="/Cheema1"
          >
            {/* Spotify icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 .5C5.649.5.5 5.649.5 12S5.649 23.5 12 23.5 ...z" />
            </svg>
            &nbsp; <b className="text-white font-bold">Listen on Spotify</b>
          </Link>
        </div>
        <div className="sm:w-1/2 flex justify-center mb-8 sm:mb-0">
          <img className="w-96 rounded-lg" src={cheemaImg} alt="Cheema" />
        </div>
      </div>
    </div> 
  );
}
