interface Project {
    name: string,
    description: string,
    tech: string[],
    image: string,
    github: string,
}

export const projects: Project[] = [
    {
        name: "The Three Rs (T3R)",
        description: "This was created for MLH's Hack the Classroom, and won the \"Best use of MongoDB Atlas\" award. It is an app that features two main components: the Supermarket Program & the Recycling Program. The Supermarket Program allows supermarkets to list food nearing perish for a reduced price, and the recycling program allows the user to answer a survey and uses A.I. to tell them how they can improve their lifestyle.",
        tech: ["react.png", "tailwindcss.svg", "nodejs.png", "mongodb.svg", "javascript.png"],
        image: "t3r.png",
        github: "https://github.com/qualya/t3r",
    },
    {
        name: "Goock Games",
        description: "This was created for Goose Hacks 2023. Goock Games is a platform with a variety of 1-on-1 classic games (i.e. Tic Tac Toe, Nim, and Pong), but with a twist. Instead of playing the game yourself, you have to code an algorithm to play the game. This algorithm will then be run against other players' algorithms and whoever wins will come on top. Players will have access to public leaderboards, which showcase the top performing algorithm of each game. Furthermore, players have the ability to \"spectate\" games. This means that they are able to watch their algorithms battle each other out, in a more traditional point of view.",
        tech: ["react.png", "tailwindcss.svg", "nodejs.png", "python.svg", "javascript.png"],
        image: "goock_games.png",
        github: "https://github.com/antpoo/goock",
    },
    
    {
        name: "Table Tablet",
        description: "This was created for Hack the North 2023. It is a Python app that uses A.I. recognition to recognize your hand through your computer's webcam and use your table as a trackpad/tablet to control your computer's mouse cursor. Essentially a trackpad emulator.",
        tech: ["python.svg", "mediapipe.png", "opencv.svg"],
        image: "table_tablet.jpg",
        github: "https://github.com/antpoo/webcam-tablet",
    },
    {
        name: "Super Mario Shooter",
        description: "This was created for my ICS4U class. It is a game where you control a character and collect power ups to defeat enemies. Created using JavaFX and used a lot of Object Oriented Programming concepts learned in class. Idea and image credits all go to Nintendo.",
        tech: [],
        image: "super_mario_shooter.png",
        github: "https://github.com/antpoo/super-mario-shooter",
    },
];