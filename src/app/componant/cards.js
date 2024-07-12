"use client"
import React from 'react';

export default function Cards({ name, desc, image }) {
  return (
    <>
      <div className="max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img 
            className="rounded-t-lg object-cover w-full h-48" 
            src={image} 
            alt="" 
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {name}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
}
