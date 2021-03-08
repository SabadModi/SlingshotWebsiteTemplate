import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.6/css/line.css" />

            <footer class="bg-gray-800 pt-10 sm:mt-10 pt-10">
                <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                    {/* <!-- Col-1 --> */}
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                            Getting Started
            </div>

                        {/* <!-- Links --> */}
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Fellowship
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Immersion
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Bootcamps
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Hackathons
                                </a>
                    </div>

                    {/* <!-- Col-2 --> */}
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                            Topic 2
            </div>

                        {/* <!-- Links --> */}
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Link 1
                        </a>

                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Link 2
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Link 3
            </a>
                    </div>

                    {/* <!-- Col-3 --> */}
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                            Topic 3
            </div>

                        {/* <!-- Links --> */}
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Link 1
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Link 2
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Link 3
            </a>
                    </div>

                    {/* <!-- Col-3 --> */}
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        {/* <!-- Col Title --> */}
                        <div class="text-xs uppercase text-gray-400 font-medium mb-6">
                            Community
            </div>

                        {/* <!-- Links --> */}
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            GitHub
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Discord
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            Twitter
            </a>
                        <a href="#" class="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                            YouTube
            </a>
                    </div>
                </div>

                {/* <!-- Copyright Bar --> */}
                <div class="pt-2">
                    <div class="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
                        <div class="mt-2">
                            © Copyright 2021. All Rights Reserved.
            </div>

                        {/* <!-- Required Unicons (if you want) --> */}
                        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="#" class="w-6 mx-1">
                                <i class="uil uil-facebook-f"></i>
                            </a>
                            <a href="#" class="w-6 mx-1">
                                <i class="uil uil-twitter-alt"></i>
                            </a>
                            <a href="#" class="w-6 mx-1">
                                <i class="uil uil-youtube"></i>
                            </a>
                            <a href="#" class="w-6 mx-1">
                                <i class="uil uil-linkedin"></i>
                            </a>
                            <a href="#" class="w-6 mx-1">
                                <i class="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
