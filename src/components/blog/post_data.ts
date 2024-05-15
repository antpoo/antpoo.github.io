interface Post {
    num: number;
    date: string;
    title: string;
    author: string;
    file: string;
    url: string;
}

export const posts: Post[] = [
    {
        num: 2,
        date: "15 May 2024",
        title: "Test Post 2",
        author: "Andrew Jiang",
        file: "test.md",
        url: "/test",
    },
    {
        num: 1,
        date: "15 May 2024",
        title: "Test Post",
        author: "Andrew Jiang",
        file: "test.md",
        url: "/test",
    },
];