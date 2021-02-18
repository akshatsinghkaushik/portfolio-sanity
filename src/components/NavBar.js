import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-gray-500 bg-opacity-100 shadow-inner">
      <div className="h-full container mx-auto flex justify-between navigation">
        <nav className="flex justify-between">
          <NavLink
            activeClassName="text-white "
            className="inline-flex items-center my-6 px-1 mr-5 text-blue-100 rounded-xl text-4xl md:text-5xl sm:text-5xl font-bold cursive tracking-widest transition duration-300 ease-in-out border-4 border-transparent rounded-lg transform hover:scale-110 hover:text-gray-300"
            to="/"
            exact
          >
            <span className=" ">Akshat</span>
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-gray-700 bg-opacity-90 shadow-2xl "
            className="bg-gray-400 bg-opacity-25 transition duration-400 ease-in-out inline-flex items-center px-2 my-6 mr-3 rounded-lg text-blue-100 border-4 shadow-xl border-transparent hover:text-gray-300 hover:shadow-inner hover:bg-gray-600 text-xl font-bold navbar transform hover:scale-110"
            to="/post"
          >
            Blog Posts
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-gray-700 bg-opacity-90 shadow-2xl"
            className="bg-gray-400 bg-opacity-25 transition duration-400 ease-in-out inline-flex items-center px-2 my-6 mr-3 rounded-lg text-blue-100 border-4 shadow-xl border-transparent hover:text-gray-300 hover:shadow-inner hover:bg-gray-600 text-xl font-bold navbar transform hover:scale-110"
            to="/project"
          >
            Projects
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-gray-700 bg-opacity-90 shadow-2xl"
            className="bg-gray-400 bg-opacity-25 transition duration-400 ease-in-out inline-flex items-center px-2 my-6 mr-3 rounded-lg text-blue-100 border-4 shadow-xl border-transparent hover:text-gray-300 hover:shadow-inner hover:bg-gray-600 text-xl font-bold navbar transform hover:scale-110"
            to="/about"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex flex-row pt-2 px-3 my-4">
          <SocialIcon
            url="https://github.com/akshatsinghkaushik"
            className="mr-4 transition duration-500 ease-in-out shadow-2xl transform hover:scale-125 border-4 border-white"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50, borderRadius: '50%' }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/a-s-kaushik/"
            className="mr-4 transition duration-500 ease-in-out shadow-2xl transform hover:scale-125 border-4 border-white"
            target="_blank"
            fgColor="#fff"
            style={{ height: 50, width: 50, borderRadius: '50%' }}
          />
          {/* <SocialIcon
            url=""
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          /> */}
        </div>
      </div>
    </header>
  );
}
