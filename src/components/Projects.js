import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

import ReactLoading from 'react-loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointRight } from '@fortawesome/free-regular-svg-icons';
import {
  faAndroid,
  faReact,
  faBattleNet,
} from '@fortawesome/free-brands-svg-icons';

const tags = new Map([
  ['Android', faAndroid],
  ['React', faReact],
  ['Sanity', faBattleNet],
]);

export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  let _isMounted = false;

  useEffect(() => {
    _isMounted = true;

    sanityClient
      .fetch(
        `*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags
    }`
      )
      .then((data) => {
        if (_isMounted) {
          setProjectData(data);
        }
      })
      .catch(console.error);

    return () => {
      _isMounted = false;
    };
  });

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        {projectData.length === 0 && (
          <div className="flex justify-center items-center">
            <ReactLoading type={'bars'} color="black" />
          </div>
        )}
        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projectData &&
            projectData.map((project, index) => (
              <article
                key={index}
                className="transition duration-1000 ease-in-out hover:text-red-700 mx-5 transform hover:scale-110 relative rounded-lg shadow-xl bg-white p-16 transition duration-500 ease-in-out shadow-2xl hover:shadow-inner"
              >
                <h3 className="text-gray-800 text-3xl font-bold mb-2 ">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-sm space-x-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{' '}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Location</strong>:{' '}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">Type</strong>:{' '}
                    {project.projectType.charAt(0).toUpperCase() +
                      project.projectType.slice(1)}
                  </span>
                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener norefferer"
                    className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl"
                  >
                    View The Project{' '}
                    <FontAwesomeIcon
                      role="image"
                      aria-label="right pointer"
                      icon={faHandPointRight}
                    />
                  </a>
                  <div className="flex flex-row pt-3 items-center">
                    {project.tags.map((tag) => {
                      const istag = tags.has(tag);

                      return (
                        <div className="rounded py-1 px-3 mx-2 bg-gray-300 transform transition duration-1000 ease-in-out hover:scale-125">
                          {istag ? (
                            <span className="pr-1">
                              <FontAwesomeIcon
                                role="image"
                                aria-label="right pointer"
                                icon={tags.get(tag)}
                                size="lg"
                              />
                            </span>
                          ) : (
                            ''
                          )}

                          <span className="text-black font-semibold">
                            {tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
