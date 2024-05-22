import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline"

function Welcome() {
    return (
        <div>
            <div className="flex flex-col mt-20">
                <a href="/blog" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleLeftIcon className="w-4 mr-3 group-hover:animate-bounce-horizontal" />
                    <span>Back</span>
                </a>
                {/* title */}
                <h1 className="text-3xl font-bold">Welcome to my Blog!</h1>
                <div className="flex mt-2">
                    {/* author */}
                    <h3 className="mr-4 text-sm">by <a className="text-pink-600 hover:underline" href="/">Andrew Jiang</a></h3>
                    {/* date */}
                    <h3 className="text-sm text-stone-400">21 May 2024</h3>
                </div>
            </div>
            <hr className="w-64 h-1 my-8 bg-pink-600 border-0 margin-left" />
            <div>
                <p className="my-4">Hello, and welcome to my first blog post! If you're reading this, you're either someone that I've talked about this blog to, or you're just interested in reading what I've written. Nevertheless, I am thankful that you are here to read my not-so-eloquent writing.</p>

                <h2 className="text-xl font-bold">The Future of this Blog</h2>

                <p className="my-4">Currently, I intend to update this blog every now and then with self-reflections and reflections on experiences that I'll have underwent at the time of writing. My expectation is that I should eventually reach a monthly publishing schedule, however I fully expect to fail to meet this quota. My writing skills are not the strongest, and this may serve to demotivate me when I am attempting to write my next paragraph.</p>

                <p className="my-4">This blog will aim to focus on my professional life, that is school and work, however depending on circumstance, it is possible I may make somewhat personal posts too. There are many times where I feel like I can write about something, but I get too lazy to and completely forget about it. Hopefully this blog changes that. I do not expect many people apart from myself to read each of my posts, if any at all, but that is totally okay. This blog is meant as a place for me to write down my thoughts and experiences somewhere, and even act as a place where I can look back at my life.</p>

                <p className="my-4">With all of that being said, thank you for reading through and I hope to see you in the next blog post! Even more important, hopefully there is even another blog post in the first place!</p>
            </div>
        </div>
    );
}

export default Welcome;