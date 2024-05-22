interface Post {
    num: number;
    date: string;
    title: string;
    author: string;
    url: string;
}

export const posts: Post[] = [
    {
        num: 1,
        date: "21 May 2024",
        title: "Welcome to my Blog!",
        author: "Andrew Jiang",
        url: "welcome",
    },
];