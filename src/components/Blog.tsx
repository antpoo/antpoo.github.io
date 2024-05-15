import React from "react";
import { PencilIcon } from '@heroicons/react/24/outline';
import { posts } from "./blog/post_data";

function Blog() {
    return (
        <div className="flex flex-col items-center my-20">
            <PencilIcon className="w-8 h-8 text-center text-pink-600" />
            <h1 className="py-6 text-3xl font-bold text-center ">Blog</h1>
            <p className="my-2 text-center">Below you can find my blog posts about whatever I feel like writing about in the moment.</p>
            <hr className="w-64 h-1 mx-auto my-6 bg-pink-600 border-0" />
            <div className="flex flex-col items-start text-xl">
                <table className="table-auto">
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.num}>
                                <td className="py-4 pl-24 pr-48"><a href={post.url} className="text-pink-600 hover:underline">{post.title}</a></td>
                                <td className="px-4 py-2 text-sm">{post.author}</td>
                                <td className="px-4 py-2 text-base text-stone-400">{post.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Blog;
