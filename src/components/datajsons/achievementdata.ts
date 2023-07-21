interface Achievement {
    achievement: string;
    location: string;
    description: string;
}

export const achievements: Achievement[] = [
    {
        achievement: 'Honorable Mention',
        location: 'UNICEF at Princeton Model United Nations Conference 2021',
        description: 'In a Model UN committee with well over fifty delegations, my partner and I were able to secure an honourable mention, which was the third place award',
    },
    {
        achievement: 'Group V Honour Roll',
        location: 'Cayley Math Contest 2022',
        description: 'Through my preparation for the math contest, I was able to get a spot on the honour roll with a decently high score of 128/150.',
    },
    {
        achievement: 'Disctinction',
        location: 'Other math/computing contests',
        description: 'Although no honour roll, I was able to get distinction (i.e. top 25%) on every other contest I\'ve done, and was school champion for most of them. Examples include CSMC, Euclid, COMC, and CCC.',
    },
    {
        achievement: 'Best Overall - Entertainment',
        location: 'Eureka! 2023',
        description: 'My team developed a new take on music guessing with a scrambled lyric song guessing game and won the 1st place award for the entertainment topic. This was my first ever hackathon!',
    }
]