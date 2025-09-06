import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { ChevronDoubleLeftIcon, ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

interface BlogPostMeta {
    title: string;
    author: string;
    date: string;
    slug: string;
}

interface MarkdownBlogPostProps {
    slug: string;
}

function MarkdownBlogPost({ slug }: MarkdownBlogPostProps) {
    const [content, setContent] = useState<string>("");
    const [meta, setMeta] = useState<BlogPostMeta | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMarkdown = async () => {
            try {
                const response = await fetch(`/content/blog/${slug}.md`);
                if (!response.ok) {
                    throw new Error(`Failed to load ${slug}.md`);
                }
                const text = await response.text();
                
                // Parse frontmatter
                const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
                const match = text.match(frontmatterRegex);
                
                if (match) {
                    const frontmatter = match[1];
                    const markdownContent = match[2];
                    
                    // Parse frontmatter manually
                    const metaData: any = {};
                    frontmatter.split('\n').forEach(line => {
                        const [key, ...valueParts] = line.split(':');
                        if (key && valueParts.length > 0) {
                            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
                            metaData[key.trim()] = value;
                        }
                    });
                    
                    setMeta(metaData as BlogPostMeta);
                    setContent(markdownContent);
                } else {
                    setContent(text);
                }
            } catch (error) {
                console.error('Error loading markdown file:', error);
                setContent('Error loading blog post content.');
            } finally {
                setLoading(false);
            }
        };

        loadMarkdown();
    }, [slug]);

    if (loading) {
        return <div className="flex flex-col mt-20">Loading...</div>;
    }

    if (!meta) {
        return <div className="flex flex-col mt-20">Error loading blog post metadata.</div>;
    }

    return (
        <div id="top">
            <div className="flex flex-col mt-20">
                <Link to="/blog" className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleLeftIcon className="w-4 mr-3 group-hover:animate-bounce-horizontal" />
                    <span>Back</span>
                </Link>
                {/* title */}
                <h1 className="text-3xl font-bold">{meta.title}</h1>
                <div className="flex mt-2">
                    {/* author */}
                    <h3 className="mr-4 text-sm">by <Link to="/" className="text-pink-600 hover:underline">{meta.author}</Link></h3>
                    {/* date */}
                    <h3 className="text-sm text-stone-400">{meta.date}</h3>
                </div>
            </div>
            <hr className="w-64 h-1 my-8 bg-pink-600 border-0 margin-left" />
            <div>
                <ReactMarkdown
                    components={{
                        // Custom paragraph styling
                        p: ({ children }) => (
                            <p className="my-4">{children}</p>
                        ),
                        // Custom heading styling
                        h2: ({ children }) => (
                            <h2 className="text-xl font-bold">{children}</h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="text-lg font-bold">{children}</h3>
                        ),
                        // Custom list styling
                        ul: ({ children }) => (
                            <ul className="my-4 ml-6 list-disc list-inside">{children}</ul>
                        ),
                        li: ({ children }) => (
                            <li>{children}</li>
                        ),
                        // Custom link styling
                        a: ({ href, children }) => {
                            // Check if it's an internal link
                            if (href?.startsWith('/')) {
                                return (
                                    <Link to={href} className="text-pink-600 hover:underline">
                                        {children}
                                    </Link>
                                );
                            }
                            // External link
                            return (
                                <a href={href} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">
                                    {children}
                                </a>
                            );
                        },
                        // Custom image styling
                        img: ({ src, alt }) => (
                            <img src={src} alt={alt} className="w-auto h-auto my-4" />
                        ),
                        // Custom emphasis styling (for em dashes and special characters)
                        em: ({ children }) => (
                            <em>{children}</em>
                        )
                    }}
                >
                    {content}
                </ReactMarkdown>

                <HashLink smooth to={`/blog/${slug}#top`} className="flex items-center mb-10 text-pink-600 hover:underline group">
                    <ChevronDoubleUpIcon className="w-4 mr-3 group-hover:animate-bounce" />
                    <span>Back to Top</span>
                </HashLink>
            </div>
        </div>
    );
}

export default MarkdownBlogPost;
