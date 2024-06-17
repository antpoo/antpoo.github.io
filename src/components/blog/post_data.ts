interface Post {
    num: number;
    date: string;
    title: string;
    author: string;
    url: string;
}

export const posts: Post[] = [
    {
        num: 2,
        date: "17 June 2024",
        title: "Reflecting on High School Part I: Grade 9",
        author: "Andrew Jiang",
        url: "grade-9",
    },
    {
        num: 1,
        date: "21 May 2024",
        title: "Welcome to my Blog!",
        author: "Andrew Jiang",
        url: "welcome",
    },
];