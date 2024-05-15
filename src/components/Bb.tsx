import React, { useState, useEffect } from "react";
import MarkDown from "markdown-to-jsx";
// import ReactMarkdown from "react-markdown";


function Bb() {
    const file_name: string = "test.md";
    const [post, setPost] = useState("");

    useEffect(() => {
        import(`./blog/${file_name}`)
            .then(res => {
                console.log("Imported file:", res);
                fetch(res.default)
                    .then(res => res.text())
                    .then(text => {
                        console.log("Fetched Markdown content:", text);
                        setPost(text);
                    })
                    .catch(err => console.error("Error fetching Markdown content:", err));
            })
            .catch(err => console.error("Error importing Markdown file:", err));
    }, []);



    return (
        <div>
            <MarkDown options={{
            }}>{post}</MarkDown>
            {/* <MarkDown
                options={{
                overrides: {
                    h1: {
                    component: Bb,
                    props: {
                        className: 'foo',
                    },
                    },
                },
                }}
            >
                # Hello world!
            </MarkDown> */}
        </div>
    );
}

export default Bb;