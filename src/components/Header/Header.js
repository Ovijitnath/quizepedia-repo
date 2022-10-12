import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

    return (

        <nav class="flex items-end justify-between flex-wrap bg-zinc-300 p-6 hover:shadow-xl">
            <div class="flex items-center flex-shrink-0 text-white mr-6">

                <svg
                    className="w-8 text-deep-purple-accent-400"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                >
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                    Quizepedia
                </span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded  text-Stone-200 border-Slate-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class=" w-full block items-end  lg:flex  lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <Link to='/home' class="block mt-4 lg:inline-block lg:mt-0 text-teal-900 text-xl hover:text-white mr-4">
                        Home
                    </Link>
                    <Link to='/subjects' class="block mt-4 lg:inline-block lg:mt-0 text-teal-900 text-xl hover:text-white mr-4">
                        Subjects
                    </Link>
                    <Link to='/statistics' class="block mt-4 lg:inline-block lg:mt-0 text-teal-900 text-xl hover:text-white mr-4">
                        Statistics
                    </Link>
                    <Link to='/blog' class="block mt-4 lg:inline-block lg:mt-0 text-teal-900 text-xl hover:text-white mr-4">
                        Blog
                    </Link>
                    <Link to='/about' class="block mt-4 lg:inline-block lg:mt-0 text-teal-900 text-xl hover:text-white mr-4">
                        About
                    </Link>

                </div>

            </div>
        </nav>

    );
};

export default Header;