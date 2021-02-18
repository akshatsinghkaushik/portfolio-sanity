import React from 'react';
import image from '../res/images/sunset.jpg';

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Sunset"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-60 px-8">
        <h1 className="text-8xl sm:text-9xl text-blue-700 text-opacity-50 font-bold cursive lg:leading-snug">
          <span className="text-blue-600 text-opacity-30">Greetings</span>{' '}
          <br /> I'm{' '}
          <span className="transition duration-500 ease-in-out text-blue-900 text-opacity-80 rounded-xl transform hover:scale-110 hover:shadow-inner px-3 hover:bg-gray-400 hover:bg-opacity-40">
            Akshat
          </span>
        </h1>
      </section>
    </main>
  );
}
