import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/outline';

function About() {
    return (
        <section id='about'>
            <div className='container px-5 py-10 mx-auto text-center lg:px-40 text-gray-300'>
                <div className='flex flex-col w-full mb-20'>
                    <BookOpenIcon className='mx-auto inline-block w-10 mb-4' />
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        About Me
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>

                        <br />

                        As you may be able to tell based on my first and last name, I am an ABC (American Born Chinese), more specifically Canadian Born Chinese.
                        I was born in Credit Valley Hospital in Mississauga, ON in 2006. I spent the first five years of my life in Mississauga. There, I went to a private 
                        school called ABC Montessori. I don't remember much about it, other than having to play the main character in one of our school plays and 
                        winning the role model award when I was in "Elementary Prepatory" (equivalent to SK), which I believe was the highest award given to any student of the grade. 
                        
                        <br />
                        <br />

                        In July of 2012, my family and I moved to Burlington, ON, where I have lived ever since. 
                        From here, I started attending public school in Grade 1 at Orchard Park Public School, specifically the French Immersion program. It was here that I already 
                        saw myself to be slightly ahead of the curve. I was always able to get my school work complete, and I was so unused to there 
                        sheer amount of homework that WASN'T assigned, a massive contrast from private school. I remember in Grade 1, I was one of few who 
                        were placed into the highest level reading group in the class. As I navigated my way through public school, I became more and more relaxed, 
                        as everything was simply easier than what I was used to before. 

                        <br />
                        <br />

                        On the side, one of my biggest extracurriculars was piano. I started playing in Grade 1. Piano was something that I never 
                        enjoyed, but something that my parents said would benefit me in the long run. Learning piano enabled me to be extremely ahead 
                        of most of my peers when it came to music class, because I had already learnt all of the theory when doing piano.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;