import React from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Grade9() {
    return (
        <div>
            <div className="flex flex-col mt-20">
                <Link to="/blog" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleLeftIcon className="w-4 mr-3 group-hover:animate-bounce-horizontal" />
                    <span>Back</span>
                </Link>
                {/* title */}
                <h1 className="text-3xl font-bold">Welcome to my Blog!</h1>
                <div className="flex mt-2">
                    {/* author */}
                    <h3 className="mr-4 text-sm">by <Link to="/" className="text-pink-600 hover:underline">Andrew Jiang</Link></h3>
                    {/* date */}
                    <h3 className="text-sm text-stone-400">TBD</h3>
                </div>
            </div>
            <hr className="w-64 h-1 my-8 bg-pink-600 border-0 margin-left" />
            <div>
                
            </div>
        </div>
    );
}

export default Grade9;