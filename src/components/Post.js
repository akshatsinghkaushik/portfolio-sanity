import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

import ReactLoading from 'react-loading';

export default function Post() {
  const [postData, setPost] = useState([]);
  let _isMounted = false;

  useEffect(() => {
    _isMounted = true;

    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        if (_isMounted) {
          setPost(data);
        }
      })
      .catch(console.error);

    return () => {
      _isMounted = false;
    };
  });

  return (
    <main className="bg-blue-100 bg-opacity-80 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        {postData.length === 0 && (
          <div className="flex justify-center items-center">
            <ReactLoading type={'bars'} color="black" />
          </div>
        )}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article key={index} className="">
                <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                  <span
                    className="transition duration-500 ease-in-out shadow-2xl transform hover:scale-110 hover:shadow-inner block h-64 relative rounded leading-snug bg-white border-l-8 border-blue-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="transition duration-500 ease-in-out text-gray-800 text-lg font-blog px-3 py-2 bg-red-500 text-blue-100 bg-opacity-80 rounded shadow-2xl hover:bg-red-700 hover:bg-opacity-90 hover:shadow-inner">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}
